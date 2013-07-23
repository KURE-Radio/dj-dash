angular.module('dj-dash', ['ui.bootstrap'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/transmitter-log', {
                templateUrl: 'transmitter-log.html',
                controller: TransmitterLogCtrl
            })
            .when('/roadmap', {
                templateUrl: 'roadmap.html',
                controller: RoadmapCtrl
            })
            .when('/playlist', {
                templateUrl: 'playlist.html',
                controller: PlaylistCtrl
            })
            .when('/grants-and-readers', {
                templateUrl: 'grants-and-readers.html',
                controller: GrantsAndReadersCtrl
            })
            .when('/library', {
                templateUrl: 'music-library.html',
                controller: MusicLibraryCtrl
            });
    }]);

function DJNavbarCtrl($scope) {
    "use strict";
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
            nav_link: "#"
        },
        {
            title: "Show Road-Map",
            icon: "icon-road",
            tooltip: {
                text: "Plan your playlist by inserting tracks and readers",
                show: toolbar_show_default,
                hide: toolbar_hide_default
            },
            nav_link: "#"
        },
        {
            title: "Playlist",
            icon: "icon-music",
            tooltip: {
                text: "Input and Edit your playlist for this week's show",
                show: toolbar_show_default,
                hide: toolbar_hide_default
            },
            nav_link: "#"
        },
        {
            title: "Grants and Readers",
            icon: "icon-bullhorn",
            tooltip: {
                text: "Browse available PSAs, Grants, and Event readers",
                show: toolbar_show_default,
                hide: toolbar_hide_default
            },
            nav_link: "#"
        },
        {
            title: "Music Library",
            icon: "icon-book",
            tooltip: {
                text: "See the heavy rotation list and this week's popular tracks",
                show: toolbar_show_default,
                hide: toolbar_hide_default
            },
            nav_link: "#"
        }
    ];
}

function TransmitterLogCtrl($scope) {
    "use strict";
}

function RoadmapCtrl($scope) {
    "use strict";
}

function PlaylistCtrl($scope) {
    "use strict";
}

function GrantsAndReadersCtrl($scope) {
    "use strict";
}

function MusicLibraryCtrl($scope) {
    "use strict";
}