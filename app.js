// closure
(function() {

	var app = angular.module('store', []);
	//Controller
	app.controller('StoreController',function(){
		this.products = gems;
	});

	app.controller("PanelController",function(){
		this.tab = 1;
		this.selectTab = function(setTab){
			this.tab = setTab;
			console.log(this.tab);
		};
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		}
	});

	//Data
	var gems = [
		{
			name: 'Nombre',
			price: 2.95,
			description: 'Descripcion de la gema. Aquí puede ir un texto largo',
			canPurchase: true,
			soldOut: false,
		},
		{
			name: 'Nombre 2',
			price: 12.95,
			description: 'Descripcion de la gema. Aquí puede ir un texto largo',
			canPurchase: true,
			soldOut: false,
		}
	];

	app.directive('productTitle', function(){
		return{
			retrict: 'E',
			templateUrl: 'product-title.html'
		};
	});



})();