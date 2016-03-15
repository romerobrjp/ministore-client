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
      window.location.href = '';
    });
  }

  //prepareEdit
  $scope.prepareEdit = function() {
    $scope.product = ProductResource.get({id: $routeParams.id});
  }

  //update
  $scope.update = function() {
    $scope.product.$update({id: $scope.product.id}, function() {
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
