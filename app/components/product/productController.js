angular.module('ministore')
.controller('ProductController',
  ['$scope', '$routeParams', '$routeParams', 'ProductService',
  function($scope, $routeParams, $routeParams, ProductService) {

  //list all
  $scope.list = function() {
    ProductService.all()
    .success(function(data, status) {
      $scope.products = data;
      console.log(' >>> all operation: ' + status);
    })
    .error(function(data, status) {
      console.log(' >>> all operation: ' + status);
    });
  }

  //find one
  $scope.show = function() {
    ProductService.find($routeParams.id)
    .success(function(data, status) {
      $scope.product = data;
    })
    .error(function(data, status) {
      console.log(' >>> show operation: ' + status);
    });
  }

  //new
  $scope.save = function() {
    // ProductService.create(product)
    // .catch(function(product) {
    //   $scope.errors = [product.data.error];
    // })
    // .error(function(data, status) {
    //   $scope.updating = false;
    // });
  }

  //prepareEdit
  $scope.prepareEdit = function() {

  }

  //update
  $scope.update = function() {

  }

  //delete
  $scope.delete = function(product) {
  }  
}]);
