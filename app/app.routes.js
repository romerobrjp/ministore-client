angular.module('ministore').config(function($routeProvider) {
  console.log('routes loaded');
  $routeProvider
    .when('/', {
      redirectTo: '/products'
    })
    .when('/products', {
      templateUrl: 'app/components/product/templates/index.html',
      controller: 'ProductController',
      controllerAs: 'productCtrl'
    })
    .when('/products/:id', {
      templateUrl: 'app/components/product/templates/show.html',
      controller: 'ProductController',
      controllerAs: 'productCtrl'
    })
    .otherwise({ redirectTo: '/'});
});
