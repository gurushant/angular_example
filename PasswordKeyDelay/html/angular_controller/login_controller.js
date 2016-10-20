	var loginDiv=angular.module('login',[])
	loginDiv.controller('login_controller',function ($scope,$http){
		$scope.ButtonClick=function(){
		isValid=verifyInput();
		if(isValid==true)
		{
		$http.get("http://54.244.60.204:3030").success(function(data)
		{
			console.log(data)
		}).
		error(function(status)
		{
			
		});
	}
 }	

function verifyInput()
  {
	userId=document.getElementById('user_id').value;
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

