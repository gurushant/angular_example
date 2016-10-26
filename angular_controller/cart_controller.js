var module=angular.module('cart',[]);
module.controller('cart',function($scope,$location,$window)
	{
		var queryParam=$window.location.search;
		console.log("Received query param="+queryParam);
		var tempStr = queryParam.split('=')[1];
		var prodArray=tempStr.split(',');
		console.log(prodArray);
		for(var k=0;k<prodArray.length;k++)
		{
			var prodImg=document.createElement("img");
			prodImg.setAttribute("height", "140");
			prodImg.setAttribute("width", "100");
			prodImg.setAttribute("border","1");
			prodImg.setAttribute("src",prodArray[k]);
			console.log(prodImg);
			console.log(document.getElementById("prodImg"));
			document.getElementById("cart").appendChild(prodImg);
		}


		$scope.placeOrder=function()
		{
			$window.location.href='thanks.html';

		}

	}
);