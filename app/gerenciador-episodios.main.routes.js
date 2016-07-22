(function () { 
	
	'use strict';
	
	angular
	.module('gerenciadorEpisodios')
	.config(config);

	config.$inject = ['$stateProvider', '$urlRouterProvider']

	/*@ngInject*/
	function config ($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');

		$stateProvider.state('home', {
			url: '/',
			views: {
				'header': {
					templateUrl: 'template/navbar.html'
				},
				'content': {
					templateUrl: 'home/home.html',
					controller: 'HomeController',
					controllerAs: 'vm'
				},
				'footer': {
					templateUrl: 'template/footer.html'
				}
			}		
		});

		$stateProvider.state('about', {
			url: '/about',
			views : {
				'header': {
					templateUrl: 'template/navbar.html'
				},
				'content': {
					template: '<h4>Created by: Leonardo Cardena</h4>'
				},
				'footer': {
					templateUrl: 'template/footer.html'
				}
			}
		});

	};

})();