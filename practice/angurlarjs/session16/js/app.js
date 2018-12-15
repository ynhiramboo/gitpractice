var myApp = angular.module('app', []);
myApp.controller('processingstringcontroller', processingstringcontroller);
processingstringcontroller.$inject = ['$scope', 'stringService'];
function processingstringcontroller($scope, stringService) {
    $scope.transformString = function(input) {
        $scope.output = stringService.transformString(input);
    }
    $scope.toLower = function(input) {
        $scope.output = stringService.toLower(input);
    }
}