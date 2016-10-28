var loginDiv=angular.module('login',[]);

 var ch = null,
 prevChar = null;
 var startTime = 0,
 endTime = 0;
 var delayArr = new Array();
 var attribute = null;
 var SERVER_IP="54.213.94.53";
 var PORT="9090";
 var serverAddr=SERVER_IP+":"+PORT;
loginDiv.controller('login_controller',function ($scope,$attrs,$http,$window){
				$scope.login=function(){

  				console.log($scope.password);
  				console.log($scope.user_id);
  				var isValid=verifyInput();
  				if(isValid==true)
  				{
					$http.post("http://"+serverAddr+"/rest/login").success(function(data)
					{
						$window.location.href = data;		
					}).
					error(function(status)
					{
						console.log("Error occured "+status);
					});
				}
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

