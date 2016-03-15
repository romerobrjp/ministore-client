angular.module('ministore')
.controller('ProductController',
  ['$scope', '$routeParams', 'ProductResource', '$location', 'notificationFactory',
  function($scope, $routeParams, ProductResource, $location, notificationFactory) {

  $scope.initProduct = function() {
    $scope.product = {};
  }

  //list all
  $scope.list = function() {
    $scope.products = ProductResource.query();
    notificationFactory.showSuccess("Listing products", function(){});
  }

  //find one
  $scope.show = function() {
    $scope.product = ProductResource.get({id: $routeParams.id});
    notificationFactory.showSuccess("Showing product " + $routeParams.id, function(){});
  }

  //new
  $scope.save = function() {
    $scope.product.active = "true";
    ProductResource.save({product: $scope.product}, function() {
      notificationFactory.showSuccess("Product saved successfully", function(){});
      $location.path('');
    });
  }

  //prepareEdit
  $scope.prepareEdit = function() {
    $scope.product = ProductResource.get({id: $routeParams.id});
  }

  //update
  $scope.update = function() {
    $scope.product.active = "true";
    $scope.product.$update({id: $scope.product.id}, function() {
      notificationFactory.showSuccess("Product updated successfully", function(){});
      $location.path('#/products/' + $scope.product.id);
    });
  }

  //delete
  $scope.delete = function(product) {
    ProductResource.delete({id: product.id}, function() {
      notificationFactory.showSuccess("Product removed successfully", function(){});
      $location.path('');
    });
  }
}]);
