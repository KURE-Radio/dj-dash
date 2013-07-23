angular.module('bod-dash', ['ui.bootstrap']);

function BODNavbarCtrl($scope) {
    var tooltip_show_default = 500;
    var tooltip_hide_default = 10;

    $scope.navbar_buttons = [
        {
            title: "Programming",
            submenu_items: [
                {
                    title: "Programming Schedule",
                    icon: "icon-calendar",
                    nav_link: "#"
                },
                {
                    title: "Edit DJ Profiles",
                    icon: "icon-user",
                    nav_link: "#"
                }
            ]
        },
        {
            title: "Music",
            submenu_items: [
                {
                    title: "Spins Analytics",
                    icon: "icon-refresh",
                    nav_link: "#"
                },
                {
                    title: "Edit Music Library",
                    icon: "icon-music",
                    nav_link: "#"
                }
            ]
        },
        {
            title: "Events and Underwriting",
            submenu_items: [
                {
                    title: "Public Service Announcements",
                    icon: "icon-bullhorn",
                    nav_link: "#"
                },
                {
                    title: "Events",
                    icon: "icon-flag",
                    nav_link: "#"
                },
                {
                    title: "Grants",
                    icon: "icon-gift",
                    nav_link: "#"
                }
            ]
        },
        {
            title: "Operations",
            submenu_items: [
                {
                    title: "Transmitter Log",
                    icon: "icon-list-alt",
                    nav_link: "#"
                },
                {
                    title: "EAS Log",
                    icon: "icon-tasks",
                    nav_link: "#"
                }
            ]
        }
    ];
}
