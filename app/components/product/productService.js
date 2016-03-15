angular.module('ministore').factory('ProductService', function ProductServiceFactory($http) {
  return {
    all: function(callback) {
      return $http({method: 'GET', url: 'http://localhost:3000/api/v1/products'});
    },
    find: function(id) {
      return $http({method: 'GET', url: 'http://localhost:3000/api/v1/products/' + id});
    }
  }
});
