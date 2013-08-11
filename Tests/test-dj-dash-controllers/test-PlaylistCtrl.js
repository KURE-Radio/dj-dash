describe("Playlist View Controller", function() {
    var $scope;
    var playlist_service_getState;
    var playlist_service_addEntry;
    var playlist_service_removeEntry;
    var playlist_service_submitState;
    var playlist_controller;
    var testTrack;
    var testBreak;
    var testPlaylist;

    beforeEach(module('dj-dash.controllers'));
    beforeEach(module('dj-dash.services'));
    beforeEach(module('ui.bootstrap'));

    beforeEach(inject(function ($rootScope) {
        $scope = $rootScope.$new();
    }));

    beforeEach(inject(function($controller, playlist, $dialog) {
        playlist_service_getState = spyOn(playlist, 'getState');
        playlist_service_addEntry = spyOn(playlist, 'addEntry');
        playlist_service_removeEntry = spyOn(playlist, 'removeEntry');
        playlist_service_submitState = spyOn(playlist, 'submitState');
        playlist_controller = $controller('PlaylistCtrl', {$scope: $scope, playlist: playlist, $dialog: $dialog});

        testTrack = {
            track_number: 42,
            is_track: true,
            in_edit: null,
            title: "Test Track Title",
            artist: "Test Artist Name",
            album: "Test Album Name"
        };

        testBreak = {
            is_track: false,
            title: "Test Break"
        };

        testPlaylist = [
            {
                track_number: 1,
                is_track: true,
                in_edit: null,
                title: "Ends Of The Earth",
                artist: "Lord Huron",
                album: "Lonesome Dreams"
            },
            {
                track_number: 2,
                is_track: true,
                in_edit: null,
                title: "Bubblegum Trash",
                artist: "Crocodiles",
                album: "Endless Flowers"
            },
            {
                track_number: 3,
                is_track: true,
                in_edit: null,
                title: "Shades Of Blue",
                artist: "Gregory Alan Isakov",
                album: "Live from KURE"
            }
        ];
    }));

    it("is created with the correct state", function() {
        expect(playlist_service_getState).toHaveBeenCalledWith();
        expect($scope.track_list).toEqual(playlist_service_getState.returnValue);
        expect($scope.submission_state).toBe(false);
        expect($scope.break_dialog_display_options).toEqual(
            {
                backdrop: true,
                backdropFade: true,
                dialogFade: true,
                templateUrl: "break_dialog.html",
                controller: "AddBreakDialogCtrl"
            }
        );
    });

    describe("ShowEditButton Function", function() {
        var track;

        beforeEach(function () {
            track = {
                is_track: null,
                in_edit: null
            }
        });

        it("should not show on a break when not in edit", function() {
            track.is_track = false;
            track.in_edit = false;

            expect($scope.showEditButton(track)).toBe(false);
        });

        it("should not show on a break when in edit", function() {
            track.is_track = false;
            track.in_edit = true;

            expect($scope.showEditButton(track)).toBe(false);
        });

        it("should show on a track when not in edit", function() {
            track.is_track = true;
            track.in_edit = false;

            expect($scope.showEditButton(track)).toBe(true);
        });

        it("should not show on a track when in edit", function() {
            track.is_track = true;
            track.in_edit = true;

            expect($scope.showEditButton(track)).toBe(false);
        });
    });

    describe("ShowConfirmButton Function", function() {
        var track;

        beforeEach(function() {
            track = {
                is_track: null,
                in_edit: null
            }
        });

        it("should not show on a break when not in edit", function() {
            track.is_track = false;
            track.in_edit = false;

            expect($scope.showConfirmButton(track)).toBe(false);
        });

        it("should not show on a break when in edit", function() {
            track.is_track = false;
            track.in_edit = true;

            expect($scope.showConfirmButton(track)).toBe(false);
        });

        it("should not show on a track when not in edit", function() {
            track.is_track = true;
            track.in_edit = false;

            expect($scope.showConfirmButton(track)).toBe(false);
        });

        it("should show on a track when in edit", function() {
            track.is_track = true;
            track.in_edit = true;

            expect($scope.showConfirmButton(track)).toBe(true);
        });
    });

    describe("ShowTrackTitle Function", function() {
        var track;

        beforeEach(function () {
            track = {
                is_track: null,
                in_edit: null
            }
        });

        it("should not show on a break when not in edit", function () {
            track.is_track = false;
            track.in_edit = false;

            expect($scope.showTrackTitle(track)).toBe(false);
        });

        it("should not show on a break when in edit", function () {
            track.is_track = false;
            track.in_edit = true;

            expect($scope.showTrackTitle(track)).toBe(false);
        });

        it("should show on a track when not in edit", function () {
            track.is_track = true;
            track.in_edit = false;

            expect($scope.showTrackTitle(track)).toBe(true);
        });

        it("should not show on a track when in edit", function () {
            track.is_track = true;
            track.in_edit = true;

            expect($scope.showTrackTitle(track)).toBe(false);
        });
    });

    describe("AddTrack Function", function() {
        var playlist_controller_cancelPreviousEdits;
        var playlist_controller_getNextTrackNumber;

        beforeEach(function () {
            playlist_controller_cancelPreviousEdits = spyOn($scope, 'cancelPreviousEdits');
            playlist_controller_getNextTrackNumber = spyOn($scope, 'getNextTrackNumber');
        });

        it("cancels any on-going track edits", function() {
            $scope.addTrack();

            expect(playlist_controller_cancelPreviousEdits).toHaveBeenCalled();
        });

        it("determines an appropriate track number when creating a new track", function() {
            $scope.addTrack();

            expect(playlist_controller_getNextTrackNumber).toHaveBeenCalled();
        });

        it("adds an entry through the Playlist service", function() {
            $scope.track_list = testPlaylist;
            $scope.addTrack();

            expect(playlist_service_addEntry).toHaveBeenCalledWith(
                [
                    {
                        track_number: playlist_controller_getNextTrackNumber.returnValue,
                        is_track: true,
                        in_edit: true
                    }
                ]
            );
        });
    });

    describe("RemoveTrack Function", function() {
        it("should remove the track through the Playlist service", function() {
            $scope.removeTrack(testTrack);

            expect(playlist_service_removeEntry).toHaveBeenCalledWith(testTrack);
        });
    });

    describe("ClearTrackInEdit Function", function() {
        it("should clear title, artist, and album information if the track is in edit mode", function() {
            testTrack.in_edit = true;
            $scope.clearTrackInEdit(testTrack);

            expect(testTrack).toEqual(
                {
                    track_number: 42,
                    is_track: true,
                    in_edit: true,
                    title: "",
                    artist: "",
                    album: ""
                }
            );
        });

        it("should not clear title, artist, and album information if the track is not in edit mode", function() {
            testTrack.in_edit = false;
            $scope.clearTrackInEdit(testTrack);

            expect(testTrack).toEqual(
                {
                    track_number: 42,
                    is_track: true,
                    in_edit: false,
                    title: "Test Track Title",
                    artist: "Test Artist Name",
                    album: "Test Album Name"
                }
            );
        });

        it("should not clear title, artist, and album information if the track has null information for edit mode", function() {
            $scope.clearTrackInEdit(testTrack);

            expect(testTrack).toEqual(
                {
                    track_number: 42,
                    is_track: true,
                    in_edit: null,
                    title: "Test Track Title",
                    artist: "Test Artist Name",
                    album: "Test Album Name"
                }
            );

        })
    });

    describe("AddBreak Function", function() {
        var breakOptions;

        beforeEach(function() {
            breakOptions = {
                id: undefined,
                event: undefined,
                grant: undefined,
                weather: undefined,
                gsb: undefined,
                psa: undefined,
                notes: undefined
            }
        });

        it("should set correct information for Station ID breaks", function() {
            breakOptions.id = true;

            $scope.addBreak(breakOptions);

            expect(playlist_service_addEntry).toHaveBeenCalledWith(
                [
                    {
                        is_track: false,
                        title: "Station ID"
                    }
                ]
            );
        });

        it("should set correct information for Event Reader breaks", function() {
            breakOptions.event = true;

            $scope.addBreak(breakOptions);

            expect(playlist_service_addEntry).toHaveBeenCalledWith(
                [
                    {
                        is_track: false,
                        title: "Event Reader"
                    }
                ]
            );
        });

        it("should set correct information for Grant Reader breaks", function () {
            breakOptions.grant = true;

            $scope.addBreak(breakOptions);

            expect(playlist_service_addEntry).toHaveBeenCalledWith(
                [
                    {
                        is_track: false,
                        title: "Grant Reader"
                    }
                ]
            );
        });

        it("should set correct information for Weather Report breaks", function () {
            breakOptions.weather = true;

            $scope.addBreak(breakOptions);

            expect(playlist_service_addEntry).toHaveBeenCalledWith(
                [
                    {
                        is_track: false,
                        title: "Weather Report"
                    }
                ]
            );
        });

        it("should set correct information for GSB Reader breaks", function () {
            breakOptions.gsb = true;

            $scope.addBreak(breakOptions);

            expect(playlist_service_addEntry).toHaveBeenCalledWith(
                [
                    {
                        is_track: false,
                        title: "GSB Reader"
                    }
                ]
            );
        });

        it("should set correct information for PSA Reader breaks", function () {
            breakOptions.psa = true;

            $scope.addBreak(breakOptions);

            expect(playlist_service_addEntry).toHaveBeenCalledWith(
                [
                    {
                        is_track: false,
                        title: "PSA Reader"
                    }
                ]
            );
        });

        it("should set correct information when notes are included", function() {
            breakOptions.notes = "Test Notes";

            $scope.addBreak(breakOptions);

            expect(playlist_service_addEntry).toHaveBeenCalledWith(
                [
                    {
                        is_track: false,
                        title: " (Test Notes)"
                    }
                ]
            );
        });

        it("should set correct information when more than one option is specified" , function() {
            breakOptions.id = true;
            breakOptions.event = true;
            breakOptions.grant = true;
            breakOptions.weather = true;
            breakOptions.gsb = true;
            breakOptions.psa = true;
            breakOptions.notes = "Test Notes";

            $scope.addBreak(breakOptions);

            expect(playlist_service_addEntry).toHaveBeenCalledWith(
                [
                    {
                        is_track: false,
                        title: "Station ID, Event Reader, Grant Reader, Weather Report, GSB Reader, PSA Reader (Test Notes)"
                    }
                ]
            );
        });
    });

    describe("OpenAddBreakDialog Function", function() {

    });

    describe("SubmitList Function", function() {
        it("should trigger a submit through the Playlist service", function() {
            $scope.submitList();

            expect(playlist_service_submitState).toHaveBeenCalledWith();
        });
    });

    describe("GetNextTrackNumber Function", function() {
        it("gives the correct number when adding to a list without breaks", function() {
            $scope.track_list = testPlaylist;
            var nextEntryNumber = $scope.getNextTrackNumber();

            expect(nextEntryNumber).toBe(4);
        });

        it("gives the correct number when adding to a list with a break", function() {
            testPlaylist.concat(
                [
                    {
                        is_track: false,
                        title: "Test Break"
                    }
                ]
            );

            $scope.track_list = testPlaylist;
            var nextEntryNumber = $scope.getNextTrackNumber();

            expect(nextEntryNumber).toBe(4);
        });
    });

    describe("CancelPreviousEdits Function", function() {
        it("sets edit mode to false on all tracks", function() {
            testPlaylist[0].in_edit = true;
            testPlaylist[2].in_edit = true;
            $scope.track_list = testPlaylist;

            $scope.cancelPreviousEdits();

            expect($scope.track_list).toEqual(
                [
                    {
                        track_number: 1,
                        is_track: true,
                        in_edit: false,
                        title: "Ends Of The Earth",
                        artist: "Lord Huron",
                        album: "Lonesome Dreams"
                    },
                    {
                        track_number: 2,
                        is_track: true,
                        in_edit: false,
                        title: "Bubblegum Trash",
                        artist: "Crocodiles",
                        album: "Endless Flowers"
                    },
                    {
                        track_number: 3,
                        is_track: true,
                        in_edit: false,
                        title: "Shades Of Blue",
                        artist: "Gregory Alan Isakov",
                        album: "Live from KURE"
                    }
                ]
            );
        });

        it("does not set edit information for breaks", function() {
            testPlaylist[0].in_edit = true;
            testPlaylist[2].in_edit = true;
            testPlaylist = testPlaylist.concat([testBreak]);
            $scope.track_list = testPlaylist;

            $scope.cancelPreviousEdits();

            expect($scope.track_list).toEqual(
                [
                    {
                        track_number: 1,
                        is_track: true,
                        in_edit: false,
                        title: "Ends Of The Earth",
                        artist: "Lord Huron",
                        album: "Lonesome Dreams"
                    },
                    {
                        track_number: 2,
                        is_track: true,
                        in_edit: false,
                        title: "Bubblegum Trash",
                        artist: "Crocodiles",
                        album: "Endless Flowers"
                    },
                    {
                        track_number: 3,
                        is_track: true,
                        in_edit: false,
                        title: "Shades Of Blue",
                        artist: "Gregory Alan Isakov",
                        album: "Live from KURE"
                    },
                    {
                        is_track: false,
                        title: "Test Break"
                    }
                ]
            );
        });
    });
});
