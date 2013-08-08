describe("Playlist View Controller", function() {
    var $scope;
    var controller;
    var testTrack;
    var testBreak;
    var testPlaylist;
    var testBreakOptions;

    beforeEach(function() {
        $scope = {};

        controller = $controller('PlaylistCtrl', { $scope: $scope });

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
    });

    it("is created with the correct state", function() {
       spyOn('getState');
    });
});