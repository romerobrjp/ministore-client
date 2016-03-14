angular.module('ministore').controller('ProductsController', function($scope, ProductService) {

  ProductService.all()
  .success(function(data, status) {
    $scope.products = data;
    $scope.teste = 'kkkkkkkkkkkkkk'
    console.log('all operation: ' + status);
  })
  .error(function(data, status) {
    console.log('all operation: ' + status);
  });
});
