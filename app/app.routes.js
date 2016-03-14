angular.module('ministore').config(function($routeProvider) {
  console.log('routes loaded');
  $routeProvider
    .when('/', {
      redirectTo: '/products'
    })
    .when('/products', {
      templateUrl: 'app/components/products/templates/index.html',
      controller: 'ProductsController',
      controllerAs: 'productsCtrl'
    })
    .when('/products/:id', {
      templateUrl: 'app/components/products/templates/show.html',
      controller: 'ProductsController',
      controllerAs: 'productsCtrl'
    })
    .otherwise({ redirectTo: '/'});
});
