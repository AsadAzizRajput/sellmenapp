angular.module('starter')

.controller("orderController",function($scope,$http,$state,$firebaseArray)
{
  //constant("FirebaseURL", "https://sellmenapp.firebaseio.com/");

  $scope.orders={};
  var a = "http://localhost:9000";
  var ref =new Firebase("https://sellmenapp.firebaseio.com/").child("/order")
  var syncedArr = $firebaseArray(ref);
  console.log($scope.orders);
  $scope.placeOrders=function()
  {
    console.log("In Ordes Function");
    $scope.orders.SellmanId = localStorage.getItem("token");
    //$scope.orders.SellmanId = localStorage.getItem("AdminId");
    $scope.orders.Email = localStorage.getItem("email");
    console.log($scope.orders);

    syncedArr.$add($scope.orders);
    $http.post(a+"/mobileApi/placeorder",{data :$scope.orders})
      .success(function(response){
        console.log(response);
        $state.go("login");
      })
      .error(function(err){
        console.log(err);
      });

  };






  })

  //---------------------------------------------------//

