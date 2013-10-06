angular.module('plunker', ['ui.bootstrap']);
function TypeaheadCtrl($scope, $http, limitToFilter) {

    //http://www.geobytes.com/free-ajax-cities-jsonp-api.htm

    $scope.request = function(requestString) {
        $http.defaults.headers.post['Content-Type'] = 'application/json;';

        data = {'request' : requestString};

        return $http.post("./dbquery-post.php?", data).then(function(response){
            return limitToFilter(response.data, 15);
        });
    };

}