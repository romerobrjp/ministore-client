angular.module('ministore').factory('ProductResource', function ProductResourceFactory($resource) {
  // using ngResource
  return $resource('/products/:id', {},  {});

});
