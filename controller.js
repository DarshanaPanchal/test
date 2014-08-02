var myModule = angular.module('app',[]);

myModule.controller('titleCtrl', function($scope)
{
	$scope.title="Hello Friends!";
	$scope.changeIt = function()
	{
		$scope.title = "How are you?";
	};
});
