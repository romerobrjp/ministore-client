angular.module('ministore').controller('ProductsController', function($http) {
  var controller = this;

  $http({method: 'GET', url: 'http://localhost:3000/api/v1/products'})
  .success(function(data, status) {
    controller.products = data;
    console.log('all operation: ' + status);
  })
  .error(function(data, status) {
    console.log('all operation: ' + status);
  });

});
