angular.module('ministore').controller('ProductController', function($scope, $routeParams, Product) {
  // --- using ngResource ---

  //list all
  $scope.products = Product.query();

  //find one
  $scope.product = Product.get({id: $routeParams.id});

  //create
  // $scope.product = new Product();
  // $scope.saveProduct = function(product) {
  //   $scope.errors = null;
  //   $scope.updating = true;
  //   product.$save(product)
  //   .catch(function(product) {
  //     $scope.errors = [product.data.error];
  //   })
  //   .error(function(data, status) {
  //     $scope.updating = false;
  //   });
  // }

  //delete
  // $scope.deleteProduct = function(product) {
  //   Product.$delete(product);
  // }

  // --- without ngResource ---
  // ProductService.all()
  // .success(function(data, status) {
  //   $scope.products = data;
  //   console.log('all operation: ' + status);
  // })
  // .error(function(data, status) {
  //   console.log('all operation: ' + status);
  // });

  // ProductService.create(product)
  // .catch(function(product) {
  //   $scope.errors = [product.data.error];
  // })
  // .error(function(data, status) {
  //   $scope.updating = false;
  // });
});
