(function() {
  var app = angular.module('ministore', []);

  app.controller('StoreController', function() {
    this.products = gems;
  });

  app.controller('PanelController', function() {
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };

    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });

  app.controller("ReviewController", function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);
      this.review = {};
    }
  });  

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2.95,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      canPurchase: true,
      soldOut: false,
      images: [
        {
          full: 'http://previews.123rf.com/images/alvarocabrera/alvarocabrera1003/alvarocabrera100300063/6583543-Polyhedron-geometric-illustration-3D-Stock-Vector-polyhedron.jpg',
          thumb: ''
        }
      ],
      reviews: [
        {
          stars: 5, 
          body: "I love this product!",
          author: "joe@thomas.com"
        }
      ]
    },
    {
      name: 'Pentagonal Gem',
      price: 1.5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      canPurchase: true,
      soldOut: false,
      images: [
        {
          full: 'http://www.silhcdn.com/3/i/shapes/lg/5/0/d42605.jpg',
          thumb: ''
        }
      ],
      reviews: [
        {
          stars: 4, 
          body: "It's good!",
          author: "mary@jane.com"
        }
      ]
    }
  ];
})();
