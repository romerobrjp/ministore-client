angular.module('ministore')
.controller('ProductController',
  ['$scope', '$routeParams', 'ProductResource', '$routeParams', 'ProductService',
  function($scope, $routeParams, ProductResource, $routeParams, ProductService) {
  // --- using ngResource ---

  //list all
  // $scope.products = ProductResource.get();

  //find one
  // $scope.product = ProductResource.get({id: $routeParams.id}, function() {
  //   console.log(' >>> ' + typeof $scope)
  // });

  //delete
  $scope.delete = function(product) {
    ProductResource.delete({id: product.id}, function() {
      console.log(' >>> deletando: ' + product.id );
    });
    window.location.href = ''; //redirect to home
  };

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
  ProductService.all()
  .success(function(data, status) {
    console.log(' >>> controller.all');
    $scope.products = data;
    console.log(' >>> all operation: ' + status);
  })
  .error(function(data, status) {
    console.log('all operation: ' + status);
  });

  $scope.show = function() {
    ProductService.find($routeParams.id)
    .success(function(data, status) {
      console.log(' >>> controller.find');
      $scope.product = data;
      console.log(' >>> all operation: ' + status);
    })
    .error(function(data, status) {
      console.log('all operation: ' + status);
    });
  }

  // $scope.delete = function() {
  //   todoService.delete($scope.todoList[index], function(response, status) {
  //       if (status === 200) {
  //           $scope.listTodo();
  //       } else {
  //           console.log("Erro ao deletar todo");
  //       }
  //   });
  // }

  // ProductService.create(product)
  // .catch(function(product) {
  //   $scope.errors = [product.data.error];
  // })
  // .error(function(data, status) {
  //   $scope.updating = false;
  // });
}]);
