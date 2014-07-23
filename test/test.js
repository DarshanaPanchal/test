describe('titleCtrl', function()
{
	var $controller = null;
	var $scope = null;
	//var assert = require(['assert']);
	
	beforeEach(function()
	{
		module('app');
	});
	beforeEach(inject(function($controller,$rootScope)
	{
		$scope = $rootScope.$new();
		controller = $controller('titleCtrl',
		{
			$scope: $scope
		});
	}));
	it('Intially has a title', function()
	{
		expect($scope.title).toBe("Hello Darshana!");
		//assert.equal($scope.title,"Hello Darshana!");
	});
	it('Clicking the button changes the title', function()
	{
		$scope.changeIt();
		//assert.equal($scope.title,"Hi Darshana!");
		expect($scope.title).toBe("Hi Darshana!");
	});
});