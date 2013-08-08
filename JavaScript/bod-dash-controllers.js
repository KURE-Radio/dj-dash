var dashControllers = angular.module('bod-dash.controllers', []);

dashControllers.controller('BODNavbarCtrl', ['$scope', function($scope) {
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
}]);

dashControllers.controller('ProgrammingScheduleCtrl', ['$scope', function($scope) {
    $scope.message = "The Programming Schedule feature is currently under construction."
}]);

dashControllers.controller('EditProfilesCtrl', ['$scope', function($scope) {
    $scope.message = "The Edit Profiles feature is currently under construction."
}]);

dashControllers.controller('SpinsAnalyticsCtrl', ['$scope', function($scope) {
    $scope.message = "The Spins Analytics feature is currently under construction."
}]);

dashControllers.controller('EditMusicLibraryCtrl', ['$scope', function($scope) {
    "use strict";
    $scope.message = "The Edit Music Library feature is currently under construction."
}]);

dashControllers.controller('EditPSACtrl', ['$scope', function($scope) {
    $scope.message = "The Edit Public Service Announcements feature is currently under construction."
}]);

dashControllers.controller('EditEventCtrl', ['$scope', function($scope) {
    $scope.message = "The Edit Events feature is currently under construction."
}]);

dashControllers.controller('EditGrantsCtrl', ['$scope', function($scope) {
    $scope.message = "The Edit Grants feature is currently under construction."
}]);

dashControllers.controller('TransmitterLogCtrl', ['$scope', function($scope) {
    $scope.message = "The Transmitter Log feature is currently under construction."
}]);

dashControllers.controller('EASLogCtrl', ['$scope', function($scope) {
    $scope.message = "The EAS Log feature is currently under construction."
}]);
