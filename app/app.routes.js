angular.module('ministore').config(['$routeProvider', function($routeProvider) {
  console.log(' >>> routes loaded');
  $routeProvider
    .when('/', {
      redirectTo: '/products'
    })
    .when('/products', {
      templateUrl: 'app/components/product/templates/index.html',
      controller: 'ProductController'
    })
    .when('/products/:id', {
      templateUrl: 'app/components/product/templates/show.html',
      controller: 'ProductController'
    })
    .when('/product/new', {
      templateUrl: 'app/components/product/templates/new.html',
      controller: 'ProductController'
    })
    .when('/product/edit/:id', {
      templateUrl: 'app/components/product/templates/edit.html',
      controller: 'ProductController'
    })
    .otherwise({ redirectTo: '/'});
}]);
