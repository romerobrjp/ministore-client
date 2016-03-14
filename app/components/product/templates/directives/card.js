angular.module('ministore').directive('msCard', function() {
  return {
    restrict: "E",
    templateUrl: 'components/product/templates/directives/card.html'
    controller: 'ProductController',
    controllerAs: "productCtrl"
  }
});
