describe("Playlist View Controller", function() {
    var $scope;
    var playlist_service;
    var controller;
    var testTrack;
    var testBreak;
    var testPlaylist;
    var testBreakOptions;

    beforeEach(inject(function($controller, playlist, $rootScope) {
        $scope = $rootScope.$new();

        module('dj-dash.controllers');
        module('dj-dash.services');

        playlist_service = playlist;
        controller = $controller('PlaylistCtrl', {$scope: $scope});

        spyOn(playlist, 'getState');

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

        testBreakOptions = {
            id: null,
            event: null,
            grant: null,
            weather: null,
            gsb: null,
            psa: null,
            notes: null
        };
    }));

    it("is created with the correct state", function() {
        expect(playlist_service.getState).toHaveBeenCalledWith();
        expect($scope.track_list).toEqual([]);
        expect($scope.submission_state).toBe(false);
        expect($scope.break_dialog_display_options).toBe(
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
        beforeEach(function () {
            spyOn(controller, 'cancelPreviousEdits');
            spyOn(playlist_service, 'addEntry');
        });

        it("cancels any on-going track edits", function() {
            expect(controller.cancelPreviousEdits()).toHaveBeenCalled();
        })
    });

    describe("RemoveTrack Function", function() {

    });

    describe("ClearTrackInEdit Function", function() {

    });

    describe("AddBreak Function", function() {

    });

    describe("OpenAddBreakDialog Function", function() {

    });

    describe("SubmitList Function", function() {

    });

    describe("GetNextTrackNumber Function", function() {

    });

    describe("CancelPreviousEdits Function", function() {

    });
});