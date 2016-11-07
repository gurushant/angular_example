var module=angular.module('cart',[]);

module.controller('cart',function($scope,$location,$window)
	{
		var queryParam=$window.location.search;
		console.log("Received query param="+queryParam);
		var tempStr = queryParam.split('=')[1];
		var prodArray=tempStr.split(',');
		console.log("array="+prodArray);
		$scope.prodList=prodArray;
		$scope.placeOrder=function()
		{
			$window.location.href='thanks.html';

		}

	}
);