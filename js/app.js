(function () {
    var app = angular.module('store', []);
    
    var gems = [
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: 'some dodecahedron',
            canPurchase: true,
            soldOut: false
        },
        {
            name: 'Pentagonal Gem',
            price: 5,
            description: 'some Pentagonal gem',
            canPurchase: true,
            soldOut: false
        }
    ];
    
    app.controller('StoreController', function () {
        this.products = gems;
    });
})();