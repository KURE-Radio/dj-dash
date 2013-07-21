angular.module('dj-dash', ['ui.bootstrap']);

function DJNavbarCtrl($scope) {
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
