angular.module('ministore').service('productsService', function($http) {
  this.list = function(callback) {
    $http({method: 'GET', url: '/products'})
    .success(function(data, status) {
      controller.products = data;
      console.log('all operation: ' + status);
    })
    .error(function(data, status) {
      console.log('all operation: ' + status);
    });
  }
});
