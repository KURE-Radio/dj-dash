angular.module('dj-dash', ['ui.bootstrap', 'dj-dash.services'])
    .config(['$routeProvider', function ($routeProvider) {
        "use strict";
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

angular.module('bod-dash', ['ui.bootstrap'])
    .config(['$routeProvider', function($routeProvider) {
        "use strict";
        $routeProvider
            .when('/programming-schedule', {
                templateUrl: 'programming-schedule.html',
                controller: ProgrammingScheduleCtrl
            })
            .when('/edit-dj-profiles', {
                templateUrl: 'edit-dj-profiles.html',
                controller: EditProfilesCtrl
            })
            .when('/spins-analytics', {
                templateUrl: 'spins-analytics.html',
                controller: SpinsAnalyticsCtrl
            })
            .when('/edit-music-library', {
                templateUrl: 'edit-music-library.html',
                controller: EditMusicLibraryCtrl
            })
            .when('/edit-psa', {
                templateUrl: 'edit-psa.html',
                controller: EditPSACtrl
            })
            .when('/edit-events', {
                templateUrl: 'edit-events.html',
                controller: EditEventCtrl
            })
            .when('/edit-grants', {
                templateUrl: 'edit-grants.html',
                controller: EditGrantsCtrl
            })
            .when('/transmitter-log', {
                templateUrl: 'transmitter-log.html',
                controller: TransmitterLogCtrl
            })
            .when('/eas-log', {
                templateUrl: 'eas-log.html',
                controller: EASLogCtrl
            });
    }]);
