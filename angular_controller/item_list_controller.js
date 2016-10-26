	module=angular.module('item_list', []);
	module.controller('items',function($scope,$http,$window)
	{
		$scope.cart_button=false;
		$scope.images=["product_images/1.jpg","product_images/2.jpg","product_images/3.jpg"];
		var prodAr={};
		var prodList=null;
		var i=1;

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