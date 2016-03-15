angular.module('ministore')
.controller('ProductController',
  ['$scope', '$routeParams', 'ProductService', 'ProductResource',
  function($scope, $routeParams, ProductService, ProductResource) {

    $scope.initProduct = function() {
      $scope.product = {};
    }

  //list all
  $scope.list = function() {
    $scope.products = ProductResource.query();
  }

  //find one
  $scope.show = function() {
    $scope.product = ProductResource.get({id: $routeParams.id});
  }

  //new
  $scope.save = function() {
    ProductResource.save($scope.product, function() {
      window.href.location = '';
    });
  }

  //delete
  $scope.delete = function(product) {
    ProductResource.delete({id: product.id}, function() {
      window.href.location = '';
    });
  }
}]);
