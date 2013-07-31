var dashServices = angular.module('dj-dash.services', []);

dashServices.factory('$playlist', function() {
    var instance = {};

    instance.playlist = [];
    instance.is_submitted = false;

    instance.addEntry = function(track) {
        instance.playlist = instance.playlist.concat(track);
        return instance.playlist;
    };

    instance.removeEntry = function(track) {
        var track_index = instance.playlist.indexOf(track);
        instance.playlist.splice(track_index, 1);
        return instance.playlist;
    };

    instance.saveState = function(new_list) {
        angular.copy(new_list, instance.playlist);
        return instance.playlist;
    };

    instance.getState = function() {
        return instance.playlist;
    };

    instance.submitState = function() {
        // Package instance.playlist in JSON and send to the server.
        instance.is_submitted = true;
        return instance.is_submitted;
    };

    instance.reopenState = function() {
        instance.is_submitted = false;
        return instance.is_submitted;
    };

    instance.flushState = function() {
        instance.playlist = [];
        return instance.playlist;
    };

    return instance;
});
