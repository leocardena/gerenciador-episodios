/**
 * Created by Cardena on 17/07/2016.
 */
(function () {
    'use strict';

    angular
        .module('gerenciador-episodios.titulos')
        .controller('NovoTituloSelecionadoModalController', NovoTituloSelecionadoModalController);

    NovoTituloSelecionadoModalController.$inject = ['$uibModalInstance'];

    /*@ngInject*/
    function NovoTituloSelecionadoModalController($uibModalInstance) {

        var vm = this;
        vm.adicionar = _adicionar;

        function _adicionar(tituloSelecionado) {
            if (vm.formModal.$invalid) {
                vm.invalido = true;
                return;
            }

            $uibModalInstance.close(tituloSelecionado);
        };

    }
})();
