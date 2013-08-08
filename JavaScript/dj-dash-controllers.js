var dashControllers = angular.module('dj-dash.controllers', []);

dashControllers.controller('DJNavbarCtrl', ['$scope', function($scope) {
    var toolbar_show_default = "500";
    var toolbar_hide_default = "10";

    $scope.navbar_buttons = [
        {
            title: "Transmitter Log",
            icon:  "icon-list-alt",
            tooltip:
                {
                    text: "View and sign the transmitter log",
                    show: toolbar_show_default,
                    hide: toolbar_hide_default
                },
            nav_link: "#/transmitter-log"
        },
        {
            title: "Show Road-Map",
            icon: "icon-road",
            tooltip: {
                text: "Plan your playlist by inserting tracks and readers",
                show: toolbar_show_default,
                hide: toolbar_hide_default
            },
            nav_link: "#/roadmap"
        },
        {
            title: "Playlist",
            icon: "icon-music",
            tooltip: {
                text: "Input and Edit your playlist for this week's show",
                show: toolbar_show_default,
                hide: toolbar_hide_default
            },
            nav_link: "#/playlist"
        },
        {
            title: "Grants and Readers",
            icon: "icon-bullhorn",
            tooltip: {
                text: "Browse available PSAs, Grants, and Event readers",
                show: toolbar_show_default,
                hide: toolbar_hide_default
            },
            nav_link: "#/grants-and-readers"
        },
        {
            title: "Music Library",
            icon: "icon-book",
            tooltip: {
                text: "See the heavy rotation list and this week's popular tracks",
                show: toolbar_show_default,
                hide: toolbar_hide_default
            },
            nav_link: "#/library"
        }
    ];
}]);

dashControllers.controller('TransmitterLogCtrl', ['$scope', function($scope) {
    $scope.message = "The Transmitter Log feature is currently under construction.";
}]);

dashControllers.controller('RoadmapCtrl', ['$scope', function($scope) {
    $scope.message = "The Road-Map feature is currently under construction.";
}]);

dashControllers.controller('PlaylistCtrl', ['$scope', '$playlist', '$dialog', function($scope, $playlist, $dialog) {
    $scope.track_list = $playlist.getState();
    $scope.submission_state = false;

    $scope.break_dialog_display_options = {
        backdrop: true,
        backdropFade: true,
        dialogFade: true,
        templateUrl: "break_dialog.html",
        controller: "AddBreakDialogCtrl"
    };

    $scope.showEditButton = function (track) {
        return(track.is_track && (!track.in_edit));
    };

    $scope.showConfirmButton = function (track) {
        return(track.is_track && track.in_edit);
    };

    $scope.showTrackTitle = function (track) {
        return(track.is_track && (!track.in_edit));
    };

    $scope.addTrack = function () {
        cancelPreviousEdits();

        $scope.track_list = $playlist.addEntry([
            {
                track_number: getNextTrackNumber(),
                is_track: true,
                in_edit: true
            }
        ]);
    };

    $scope.removeTrack = function (track) {
        $scope.track_list = $playlist.removeEntry(track);
    };

    $scope.clearTrackInEdit = function (track) {
        if (track.in_edit) {
            track.title = "";
            track.artist = "";
            track.album = "";
        }
    };

    $scope.addBreak = function (selected_break_options) {
        var break_message = "";

        if (selected_break_options.id)
            break_message += "Station ID, ";
        if (selected_break_options.event)
            break_message += "Event Reader, ";
        if (selected_break_options.grant)
            break_message += "Grant Reader, ";
        if (selected_break_options.weather)
            break_message += "Weather Report, ";
        if (selected_break_options.gsb)
            break_message += "GSB Reader, ";
        if (selected_break_options.psa)
            break_message += "PSA Reader, ";

        break_message = break_message.replace(/\s$/, '').replace(/,$/, '');

        if (selected_break_options.notes)
            break_message += " (" + selected_break_options.notes + ")";

        $scope.track_list = $playlist.addEntry([
            {
                is_track: false,
                title: break_message
            }
        ]);
    };

    $scope.openAddBreakDialog = function () {
        var d = $dialog.dialog($scope.break_dialog_display_options);
        d.open().then(function (selected_dialog_options) {
            if (selected_dialog_options) {
                $scope.addBreak(selected_dialog_options);
            }
        });
    };

    $scope.editListOrder = function () {

    };

    $scope.submitList = function () {
        $scope.submission_state = $playlist.submitState();
    };

    function getNextTrackNumber() {
        var next_track_number = 0;

        for (var index = $scope.track_list.length - 1; index >= 0; index--) {
            if ($scope.track_list[index].track_number) {
                next_track_number = $scope.track_list[index].track_number;
                break;
            }
        }

        return next_track_number + 1;
    }

    function cancelPreviousEdits() {
        for (var index = 0; index < $scope.track_list.length; index++) {
            if ($scope.track_list[index].is_track)
                $scope.track_list[index].in_edit = false;
        }
    }
}]);

dashControllers.controller('GrantsAndReadersCtrl', ['$scope', function($scope) {
    $scope.message = "The Grants and Readers feature is currently under construction.";
}]);

dashControllers.controller('MusicLibraryCtrl', ['$scope', function($scope) {
    $scope.message = "The Music Library feature is currently under construction.";
}]);

dashControllers.controller('AddBreakDialogCtrl', ['$scope', 'dialog', function($scope, dialog) {
    $scope.confirmBreakDialog = function (selected_dialog_options) {
        dialog.close(selected_dialog_options);
    };

    $scope.cancelBreakDialog = function () {
        dialog.close();
    }
}]);