var myApp = angular.module('demoWebservice',[]);
myApp.controller('webserviceController', webserviceController);
webserviceController.$inject = ['$scope', '$http'];
function webserviceController($scope, $http) {
    $http.get('/session14/Students.asmx/GetStudents').then(function(respone) {
    $scope.employees = respone.data;
    });
}