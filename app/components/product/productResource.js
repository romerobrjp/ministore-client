angular.module('ministore').factory('ProductResource', function ProductResourceFactory($resource) {
  // using ngResource
  return $resource('http://localhost:3000/api/v1/products/:id', {}, {
    update: {
      method: 'PUT'
    },
    delete: {
      method: 'DELETE'
    }
  });
});
