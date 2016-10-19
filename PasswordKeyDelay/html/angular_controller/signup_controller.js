 signUpDiv = angular.module('signup', []);
 var ch = null,
  prevChar = null;
 var startTime = 0,
  endTime = 0;
 var delayArr = new Array();
 var passwordData = new Map();
 var attribute = null;

 signUpDiv.controller("signup_controller", function($scope, $attrs,$http) {
  $scope.keyPress = function(event) {
   code = event.keyCode;
   ch = String.fromCharCode(code);
   attribute = $attrs.id;
   console.log("Attribute=" + attribute);
   if (code == 13) {
    ch = null;
   }

   if (ch != null) {
    {
     if (prevChar != null) {
      endTime = new Date().getTime();
      diff = endTime - startTime;
      token = prevChar + "," + ch + "=>" + diff
      console.log(token);
      delayArr.push(token);
      console.log(delayArr);
      prevChar = ch;
     }
    }
   }

  }

  $scope.keyUp = function(event) {
   if (ch != null) {
    startTime = new Date().getTime();
    if (prevChar == null) {
     prevChar = ch;
    }
   }
  }

  $scope.initVar = function() {
   console.log("Initilizing variables...");
   if (delayArr.length > 0) {
    passwordData[attribute] = delayArr;
    console.log("d==" + passwordData);
    ch = null;
    prevChar = null;
    startTime = 0;
    endTime = 0;
    delayArr = new Array();
    attribute = null;
   }
  }

  $scope.showData = function() {
   passwordData[attribute] = delayArr;
   console.log("Showing data...");
  }


  $scope.changePassword=function()
  {
    var config = {headers:  {
        'Accept': 'application/json',
        'Content-Type':'application/json',
    }
    };

     if (delayArr.length > 0) {
    passwordData[attribute] = delayArr;
    console.log("d==" + passwordData);
    ch = null;
    prevChar = null;
    startTime = 0;
    endTime = 0;
    delayArr = new Array();
    attribute = null;
   }

    $http.post("http://54.201.86.119:9090/rest/changePassword",JSON.stringify(passwordData, null, 4),config).success(function(data)
    {
      console.log("json=="+JSON.stringify(passwordData, null, 4));
      console.log("response from sign up "+data);
    }).
    error(function(status)
    {
      
    }); 
  }

 });