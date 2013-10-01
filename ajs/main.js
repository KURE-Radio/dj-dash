angular.module('plunker', ['ui.bootstrap']);
function TypeaheadCtrl($scope, $http, limitToFilter) {

    //http://www.geobytes.com/free-ajax-cities-jsonp-api.htm

    $scope.cities = function(cityName) {
        return $http.post("./dbquery.php?entry="+cityName).then(function(response){
            return limitToFilter(response.data, 15);
        });
    };

}