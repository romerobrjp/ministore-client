angular.module('ministore').factory('ProductService', function ProductServiceFactory($resource, $http) {
  //without resource
  return {
    all: function() {
      return $http({method: 'GET', url: 'http://localhost:3000/api/v1/products'});
    },
    find: function(id) {
      return $http({method: 'GET', url: 'http://localhost:3000/api/v1/products/' + id});
    }
  }
});
