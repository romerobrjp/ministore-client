angular.module('ministore')
.controller('ProductController',
  ['$scope', '$routeParams', 'ProductService', 'ProductResource',
  function($scope, $routeParams, ProductService, ProductResource) {

  //list all
  $scope.list = function() {
    $scope.products = ProductResource.query();
  }

  //find one
  $scope.show = function() {
    $scope.product = ProductResource.get({id: $routeParams.id});
  }

  //delete
  $scope.delete = function(product) {
    ProductResource.remove({id: product.id}, function() {
      window.href.location = '';
    });
  }
}]);
