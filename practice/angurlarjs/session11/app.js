var myApp = angular.module('demoFilter',[]);
myApp.controller('filterController',filterController);
function filterController($scope){
	var employees = [
		{Name:'Nhi',BirthDate:new Date('12/3/1990'),Gender:'Male',Salary:10000000},
		{Name:'Nhân',BirthDate:new Date('10/3/1994'),Gender:'Male',Salary:11000000},
		{Name:'Một',BirthDate:new Date('12/3/1994'),Gender:'Male',Salary:12000000},
		{Name:'Nam',BirthDate:new Date('9/3/1994'),Gender:'Male',Salary:13000000},
		{Name:'Kiều',BirthDate:new Date('12/3/1994'),Gender:'FeMale',Salary:14000000},
		{Name:'Quyên',BirthDate:new Date('5/3/1994'),Gender:'FeMale',Salary:15000000}
	];
	$scope.employees = employees;
	$scope.sortColumn='Name';
	$scope.reverse = false;
	$scope.searchText = '';
	$scope.sortedData = function(column) {
		if($scope.sortColumn == column){
			$scope.reverse = !$scope.reverse;
		}else{
			$scope.reverse = false;
		}
		$scope.sortColumn=column;
	}
	$scope.getSortedClass = function(column){
		if($scope.sortColumn == column){
			return $scope.reverse?'arrow-up':'arrow-down';
		}else{
			return '';
		}
	}
}