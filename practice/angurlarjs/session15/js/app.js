var myApp = angular.module('demoWebservice',[]);
myApp.controller('webserviceController', webserviceController);
webserviceController.$inject = ['$scope', '$http', '$log'];
function webserviceController($scope, $http, $log) {
    $http.get('/session15/Students.asmx/GetStudents').
    then(
        function(respone) {
            $scope.employees = respone.data;
        },
        function(respone) {
            $log.error(respone.data);
        }
    );
}