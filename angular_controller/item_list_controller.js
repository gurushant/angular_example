	module=angular.module('item_list', []);
	module.controller('items',function($scope,$http,$window)
	{
		$scope.cart_button=false;
				var prodAr={};
		var prodList=null;
		var i=1;

		$http.get("http://54.201.193.216:9090/rest/fetchProducts").success(function(data)
					{
						$scope.images=data;
						$scope.length=data.length;
						console.log("length="+data.length);
					}).
					error(function(status)
					{
						console.log("Error occured");
					});

		$scope.range = function(min, max, step) {
					    step = step || 1;
					    var input = [];
					    for (var i = min; i <= max; i += step) {
					        input.push(i);
					    }
					    return input;
					};

		$scope.addToCart=function(item)
		{
			console.log("in add to cart");

			if($scope.cart_button==false)
			{
				$scope.cart_button=true;
			}
			if(prodList==null)
			{
				prodList=item;
			}
			else
			{
				prodList=prodList+','+item;
			}
			$scope.count="Cart Product count is "+i;
			i++;
			console.log(prodList);
			console.log(item);
		}
		$scope.goToCart=function()
		{
			console.log(prodAr.toString());
			$window.location.href='cart.html?cart='+prodList;
		}

		
	});