	var loginDiv=angular.module('login',[])
	loginDiv.controller('login_controller',function ($scope,$http){
		$scope.ButtonClick=function(){
		$http.get("http://54.244.60.204:3030").success(function(data)
		{
			console.log(data)
		}).
		error(function(status)
		{
			
		});
	}	
	});
