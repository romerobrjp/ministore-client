angular.module('ministore')
.controller('ProductController',
  ['$scope', '$routeParams', 'ProductResource',
  function($scope, $routeParams, ProductResource) {

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
    $scope.product.active = "true";
    ProductResource.save({product: $scope.product}, function() {
      window.location.href = '';
    });
  }

  //prepareEdit
  $scope.prepareEdit = function() {
    $scope.product = ProductResource.get({id: $routeParams.id});
  }

  //update
  $scope.update = function() {
    $scope.product.active = "true";
    var productWrapper = {};
    productWrapper.product = $scope.product;
    $scope.product.$update(productWrapper, function() {
      window.location.href = '#/products/' + $scope.product.id;
    });
  }

  //delete
  $scope.delete = function(product) {
    ProductResource.delete({id: product.id}, function() {
      window.location.href = '';
    });
  }
}]);
