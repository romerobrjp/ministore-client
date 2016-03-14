angular.module('ministore').directive('msCard', function() {
  return {
    restrict: "E",
    templateUrl: 'templates/directives/card.html',
    controller: 'ProductsController',
    controllerAs: "productsCtrl"
  }
});
