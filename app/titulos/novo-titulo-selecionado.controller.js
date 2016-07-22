/**
 * Created by Cardena on 09/07/2016.
 */
(function () {

    'use strict';

    angular
        .module('gerenciador-episodios.titulos')
        .controller('NovoTituloSelecionadoController', NovoTituloSelecionadoController);

    NovoTituloSelecionadoController.$inject = ['tituloSelecionadoPrepService', '$uibModal', 'tituloService', '$state'];

    /*@ngInject*/
    function NovoTituloSelecionadoController(tituloSelecionadoPrepService, $uibModal, tituloService, $state) {

        var vm = this;
        vm.fecharOutros = true;
        vm.titulo = tituloSelecionadoPrepService.data;
        vm.status = {};
        vm.status.infoGeraisAberta = true;
        vm.status.infoGeraisFechada =  false;
        vm.status.elencoAberto = false;
        vm.adicionarTitulo = _adicionarTitulo;
        vm.tituloSelecionado = {};

        vm.abrirModal = function () {
            var modal = $uibModal.open({
                animation: true,
                templateUrl: 'titulos/novo-titulo-selecionado-modal.html',
                size: 'sm',
                controller: 'NovoTituloSelecionadoModalController',
                controllerAs: 'vm'
            });

            modal.result.then(function (titulo) {
                vm.tituloSelecionado = titulo;
                vm.tituloSelecionado.nome = vm.titulo.Title;
                return tituloService.postTitulo(vm.tituloSelecionado)
                    .then(function () {
                        $state.go("^");
                    });
            })
        }

        function _adicionarTitulo(titulo) {
            vm.tituloSelecionado = titulo;
            vm.tituloSelecionado.nome = vm.titulo.Title;
            return tituloService.postTitulo(tituloSelecionado)
                .then(function () {
                    $state.go($state.$current, null, {reload: true});
                });
        }

    }

})();
