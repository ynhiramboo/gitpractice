var myApp = angular.module('demoFilter',[]);
myApp.controller('filterController',filterController);
function filterController($scope){
	var employees = [
		{Name:'Nhi',BirthDate:new Date('12/3/1990'),Gender:'Male',Salary:10000000},
		{Name:'Nhân',BirthDate:new Date('10/3/1994'),Gender:'Male',Salary:10000000},
		{Name:'Một',BirthDate:new Date('12/3/1994'),Gender:'Male',Salary:10000000},
		{Name:'Nam',BirthDate:new Date('9/3/1994'),Gender:'Male',Salary:10000000},
		{Name:'Kiều',BirthDate:new Date('12/3/1994'),Gender:'FeMale',Salary:10000000},
		{Name:'Quyên',BirthDate:new Date('5/3/1994'),Gender:'FeMale',Salary:10000000}
	];
	$scope.employees = employees;
}