(function () {

	'use strict';

	angular
	.module('gerenciadorEpisodios')
	.controller('EditarTituloController', EditarTituloController);

	EditarTituloController.$inject = ['tituloEditPrepService', 'tituloService', '$state'];

	/* @ngInject */
	function EditarTituloController(tituloEditPrepService, tituloService, $state){

		var vm = this;
		vm.titulo = tituloEditPrepService;
		vm.editarTitulo = _editarTitulo;

		function _editarTitulo(titulo, id) {

			if (vm.formTitulo.$invalid) {
				vm.invalido = true;
				return;
			}

			return tituloService.putTitulo(titulo, id)
				.then(function () {
					$state.go('^', null, { reload: true });
				});
		}


	}



})();