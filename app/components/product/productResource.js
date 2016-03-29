angular.module('ministore').factory('ProductResource', function ProductResourceFactory($resource) {
  return $resource('http://ministore-rails-api.herokuapp.com/api/v1/products/:id', {}, {
    update: {
      method: 'PUT'
    },
    delete: {
      method: 'DELETE'
    }
  });
});
