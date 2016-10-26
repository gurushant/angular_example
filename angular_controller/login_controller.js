var loginDiv=angular.module('login',[]);

 var ch = null,
 prevChar = null;
 var startTime = 0,
 endTime = 0;
 var delayArr = new Array();
 var attribute = null;

loginDiv.controller('login_controller',function ($scope,$attrs,$http,$window){
				$scope.login=function(){
					// var config = {headers:  {
    	//     					'Accept': 'application/json',
     //    						'Content-Type':'application/json',
    	// 									}
  			// 					 };

  				console.log($scope.password);
  				console.log($scope.user_id);
  				$window.location.href = 'item_list.html';
  				
					// $http.post("http://54.201.193.216:9090/rest/login",config).success(function(data)
					// {
					// 	console.log(data)
					// }).
					// error(function(status)
					// {
						
					// });
				 	// 			if($scope.user_id=='admin' &&  $scope.password=='admin')
  				// {
  				// 	$window.location.href='item_list.html';
  				// }
  				// else
  				// {
  				// 	alert("Invalid user id or password");
  				// }
				// isValid=verifyInput();
				// if(isValid==true)
				// {
				// 	$http.post("http://54.218.148.213:9090/rest/login",JSON.stringify(delayArr, null, 4),config).success(function(data)
				// 	{
				// 		console.log(data)
				// 	}).
				// 	error(function(status)
				// 	{
						
				// 	});
			//}
		 }	

		function verifyInput()
		  {
			userId=document.getElementById('user_id').value;
			var retVal=true;
		    if(userId!=null && userId.length==0)
		    {
		      document.getElementById("user_id").style["border"] = "2px solid red";      
		      retVal=false;
		    }
			password=document.getElementById('password').value;

		    if(password!=null && password.length==0)
		    {
		      document.getElementById("password").style["border"] = "2px solid red";      
		      retVal=false;
		    }
		    return retVal;  	
		  }

});

