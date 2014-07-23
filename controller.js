var myModule = angular.module('app',[]);

myModule.controller('titleCtrl', function($scope)
{
	$scope.title="Hello Darshana!";
	$scope.changeIt = function()
	{
		$scope.title = "Hi Darshana!";
	};
});
