(function () {

	'use strict';
	
	angular
	.module('gerenciadorEpisodios')
	.controller('MeusTitulosController', MeusTitulosController);

	MeusTitulosController.$inject = ['titulosPrepService', 'tituloService', '$state'];
	
	/* @ngInject */
	function MeusTitulosController(titulosPrepService, tituloService, $state) {
		
		var vm = this;
		vm.titulos = titulosPrepService;
		vm.removerTitulo = _removerTitulo;

		function _removerTitulo(id) {
			tituloService.deleteTitulo(id)
				.then(function () {
					$state.go($state.$current, null, { reload: true });
				});
		}		

	}

})();