(function () {

	'use strict';

	angular
	.module('gerenciadorEpisodios')
	.controller('NovoTituloController', NovoTituloController);

	NovoTituloController.$inject = ['omdbService', '$anchorScroll'];
	
	/* @ngInject */	
	function NovoTituloController(omdbService, $anchorScroll) {

		var vm = this;
		vm.paginaAtual = 1;
		vm.paginaTrocada = _paginaTrocada;
		var pesquisaAtual = '';
		vm.procurarTitulos = _procurarTitulos;
		vm.setPage = _setPage;
		vm.tamanhoMaximo = 5;
		vm.titulos = [];
		vm.totalItens = 0;

		function _paginaTrocada() {
			_procurarTitulos(pesquisaAtual, vm.paginaAtual).then(
				$anchorScroll()
			);
		}

		function _procurarTitulos(pesquisa, pagina) {
			if (!pesquisa) return;
			if (pagina === 1) vm.paginaAtual = 1;
			pesquisaAtual = pesquisa;
			return omdbService.getTitulos(pesquisa, pagina)
				.then( function (result) {
					vm.titulos = result.data.Search;
					vm.totalItens = result.data.totalResults;
				});
		}

		function _setPage (numeroPagina) {
			vm.paginaAtual = numeroPagina;
		}

	}

})();