angular.module('ministore').factory('ProductResource', function ProductResourceFactory($resource) {
  return $resource('http://localhost:3000/api/v1/products/:id', {}, {});
});
