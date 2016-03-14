angular.module('ministore').factory(function ProductService($http) {
  return {
    all: function() {
      return $http({method: 'GET', url: '/products'});
    },
    find: function(id) {
      return $http({method: 'GET', url: '/products' + id});
    }
  }
});
