describe("Application Playlist Service", function() {
    var playlist_service;
    var testTrack;
    var testBreak;
    var testPlaylist;

    beforeEach(module('dj-dash.services'));

    beforeEach(inject(function(playlist) {
        playlist_service = playlist;

        testTrack =
        [
            {
                track_number: 42,
                is_track: true,
                in_edit: null,
                title: "Test Track Title",
                artist: "Test Artist Name",
                album: "Test Album Name"
            }
        ];

        testBreak =
        [
            {
                is_track: false,
                title: "Test Break"
            }
        ];

        testPlaylist =
        [
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

    it("is created with an empty list", function() {
        expect(playlist_service.playlist).toEqual([]);
    });

    it("is created with information regarding submission state", function() {
        expect(playlist_service.is_submitted).toBe(false);
    });

    describe("AddEntry Function", function() {
        it("correctly adds tracks to an empty list", function() {
            playlist_service.playlist = [];
            playlist_service.addEntry(testTrack);

            expect(playlist_service.playlist).toEqual(testTrack);
        });

        it("appends to a non-empty list", function() {
            var expected_list =
                [
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
                    },
                    {
                        track_number: 42,
                        is_track: true,
                        in_edit: null,
                        title: "Test Track Title",
                        artist: "Test Artist Name",
                        album: "Test Album Name"
                    }
                ];

            playlist_service.playlist = testPlaylist;
            var returned_list = playlist_service.addEntry(testTrack);

            expect(playlist_service.playlist).toEqual(expected_list);
            expect(returned_list).toEqual(expected_list);
        });
    });

    describe("RemoveEntry Function", function() {
        var removeTrack;
        var expected_list;

        beforeEach(function() {
            playlist_service.playlist = testPlaylist;
        });

        it("correctly removes and renumbers entries from the front of the list", function() {
            removeTrack = {
                track_number: 1,
                is_track: true,
                in_edit: null,
                title: "Ends Of The Earth",
                artist: "Lord Huron",
                album: "Lonesome Dreams"
            };

            expected_list =
            [
                {
                    track_number: 1,
                    is_track: true,
                    in_edit: null,
                    title: "Bubblegum Trash",
                    artist: "Crocodiles",
                    album: "Endless Flowers"
                },
                {
                    track_number: 2,
                    is_track: true,
                    in_edit: null,
                    title: "Shades Of Blue",
                    artist: "Gregory Alan Isakov",
                    album: "Live from KURE"
                }
            ];

            var returned_list = playlist_service.removeEntry(removeTrack);

            expect(playlist_service.playlist).toEqual(expected_list);
            expect(returned_list).toEqual(expected_list);
        });

        it("correctly removes and renumbers entries from the center of the list", function() {
            removeTrack = {
                track_number: 2,
                is_track: true,
                in_edit: null,
                title: "Bubblegum Trash",
                artist: "Crocodiles",
                album: "Endless Flowers"
            };

            expected_list =
            [
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
                    title: "Shades Of Blue",
                    artist: "Gregory Alan Isakov",
                    album: "Live from KURE"
                }
            ];

            var returned_list = playlist_service.removeEntry(removeTrack);

            expect(playlist_service.playlist).toEqual(expected_list);
            expect(returned_list).toEqual(expected_list);
        });

        it("correctly removes and renumbers entries from the end of the list", function() {
            removeTrack = {
                track_number: 3,
                is_track: true,
                in_edit: null,
                title: "Shades Of Blue",
                artist: "Gregory Alan Isakov",
                album: "Live from KURE"
            };

            expected_list =
            [
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
                }
            ];

            var returned_list = playlist_service.removeEntry(removeTrack);

            expect(playlist_service.playlist).toEqual(expected_list);
            expect(returned_list).toEqual(expected_list);
        });
    });

    describe("SaveState Function", function() {
        it("should replace the stored playlist with the given copy", function() {
            playlist_service.playlist = testTrack;

            var returned_list = playlist_service.saveState(testPlaylist);

            expect(playlist_service.playlist).toEqual(testPlaylist);
            expect(returned_list).toEqual(testPlaylist);
        });
    });

    describe("GetState Function", function() {
        it("should retrieve a copy of the current state of the playlist", function() {
            playlist_service.playlist = testPlaylist;

            var returned_list = playlist_service.getState();

            expect(playlist_service.playlist).toEqual(testPlaylist);
            expect(returned_list).toEqual(testPlaylist);
        });
    });

    describe("SubmitState Function", function() {
        it("should indicate that the list is in a 'submitted' state", function() {
            var submit_success = playlist_service.submitState();

            expect(playlist_service.is_submitted).toBe(true);
            expect(submit_success).toBe(true);
            expect(playlist_service.is_submitted).toEqual(submit_success);
        });
    });

    describe("ReopenState Function", function () {
        it("should indicate that the list is not in a 'submitted' state", function () {
            var submit_success = playlist_service.reopenState();

            expect(playlist_service.is_submitted).toBe(false);
            expect(submit_success).toBe(false);
            expect(playlist_service.is_submitted).toEqual(submit_success);
        });
    });

    describe("FlushState Function", function() {
        it("should clear the playlist", function() {
            playlist_service.playlist = testPlaylist;

            var returned_list = playlist_service.flushState();

            expect(playlist_service.playlist).toEqual([]);
            expect(returned_list).toEqual([]);
            expect(playlist_service.playlist).toEqual(returned_list);
        });
    });
});
