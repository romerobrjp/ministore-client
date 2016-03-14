angular.module('ministore').controller('ProductsController', function($http, $scope) {
  $http({method: 'GET', url: 'http://localhost:3000/api/v1/products'})
  .success(function(data, status) {
    $scope.products = data;
    console.log('all operation: ' + status);
  })
  .error(function(data, status) {
    console.log('all operation: ' + status);
  });

});
