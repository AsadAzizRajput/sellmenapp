angular.module('starter')
.controller("loginController",function($scope,$http,$state){
$scope.user = {};
var a = "http://localhost:9000";
$scope.attemptLogin=function()
{
  console.log($scope.user);



  $http.post(a + "/mobileApi/mobilLogin",{data :$scope.user})

      .success(function(response){
        console.log(response);
        if(response.token){
          localStorage.setItem('token',response.token);
          localStorage.setItem('AdminId',response.AdminId);
          localStorage.setItem('email',response.Email);

          //$state.go("dashboard");
        }
        $state.go("order");
      })
      .error(function(err){
        console.log(err);
      });
}
});

