
function DJNavbarCtrl($scope) {
    "use strict";
    var toolbar_show_default = "500";
    var toolbar_hide_default = "10";

    $scope.navbar_buttons = [
        {
            title: "Transmitter Log",
            icon: "icon-th-list",
            tooltip: {
                text: "Sign in to the KURE transmitter log as broad-operator",
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
            title: "Past Playlists",
            icon: "icon-share-alt",
            tooltip: {
                text: "View your playlists from previous weeks",
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
}

function TransmitterLogCtrl($scope) {
    "use strict";
    $scope.message = "The Transmitter Log feature is currently under construction."
}

function RoadmapCtrl($scope) {
    "use strict";
    $scope.message = "The Road-Map feature is currently under construction."
}

function PlaylistCtrl($scope) {
    "use strict";
    $scope.message = "The Playlist feature is currently under construction."
}

function GrantsAndReadersCtrl($scope) {
    "use strict";
    $scope.message = "The Grants and Readers feature is currently under construction."
}

function MusicLibraryCtrl($scope) {
    "use strict";
    $scope.message = "The Music Library feature is currently under construction."
}