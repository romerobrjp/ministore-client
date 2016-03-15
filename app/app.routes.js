angular.module('ministore').config(['$routeProvider', function($routeProvider) {
  console.log('routes loaded');
  $routeProvider
    .when('/', {
      redirectTo: '/products'
    })
    .when('/products', {
      templateUrl: 'app/components/product/templates/index.html'
    })
    .when('/products/:id', {
      templateUrl: 'app/components/product/templates/show.html'
    })
    .otherwise({ redirectTo: '/'});
}]);
