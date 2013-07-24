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
                    nav_link: "#/programming-schedule"
                },
                {
                    title: "Edit DJ Profiles",
                    icon: "icon-user",
                    nav_link: "#/edit-dj-profiles"
                }
            ]
        },
        {
            title: "Music",
            submenu_items: [
                {
                    title: "Spins Analytics",
                    icon: "icon-refresh",
                    nav_link: "#/spins-analytics"
                },
                {
                    title: "Edit Music Library",
                    icon: "icon-music",
                    nav_link: "#/edit-music-library"
                }
            ]
        },
        {
            title: "Events and Underwriting",
            submenu_items: [
                {
                    title: "Public Service Announcements",
                    icon: "icon-bullhorn",
                    nav_link: "#/edit-psa"
                },
                {
                    title: "Events",
                    icon: "icon-flag",
                    nav_link: "#/edit-events"
                },
                {
                    title: "Grants",
                    icon: "icon-gift",
                    nav_link: "#/edit-grants"
                }
            ]
        },
        {
            title: "Operations",
            submenu_items: [
                {
                    title: "Transmitter Log",
                    icon: "icon-list-alt",
                    nav_link: "#/transmitter-log"
                },
                {
                    title: "EAS Log",
                    icon: "icon-tasks",
                    nav_link: "#/eas-log"
                }
            ]
        }
    ];
}

function ProgrammingScheduleCtrl($scope) {
    "use strict";
    $scope.message = "The Programming Schedule feature is currently under construction."
}

function EditProfilesCtrl($scope) {
    "use strict";
    $scope.message = "The Edit Profiles feature is currently under construction."
}

function SpinsAnalyticsCtrl($scope) {
    "use strict";
    $scope.message = "The Spins Analytics feature is currently under construction."
}

function EditMusicLibraryCtrl($scope) {
    "use strict";
    $scope.message = "The Edit Music Library feature is currently under construction."
}

function EditPSACtrl($scope) {
    "use strict";
    $scope.message = "The Edit Public Service Announcements feature is currently under construction."
}

function EditEventCtrl($scope) {
    "use strict";
    $scope.message = "The Edit Events feature is currently under construction."
}

function EditGrantsCtrl($scope) {
    "use strict";
    $scope.message = "The Edit Grants feature is currently under construction."
}

function TransmitterLogCtrl($scope) {
    "use strict";
    $scope.message = "The Transmitter Log feature is currently under construction."
}

function EASLogCtrl($scope) {
    "use strict";
    $scope.message = "The EAS Log feature is currently under construction."
}
