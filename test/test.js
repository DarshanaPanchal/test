describe('titleCtrl', function()
{
	var $controller = null;
	var $scope = null;
	
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
		expect($scope.title).toBe("Hello Friends!");
	});
	it('Clicking the button changes the title', function()
	{
		$scope.changeIt();
		expect($scope.title).toBe("How are you?");
	});
});
