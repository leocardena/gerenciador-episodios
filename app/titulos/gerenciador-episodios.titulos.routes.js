/**
 * Created by Cardena on 04/07/2016.
 */
(function () {

    'use strict';

    angular
        .module('gerenciador-episodios.titulos')
        .config(config);

    config.$inject = ['$stateProvider'];

    /*@ngInject*/
    function config ($stateProvider) {

            $stateProvider.state('titulos', {
                url: '/titulos',
                views: {
                    'header': {
                        templateUrl: 'template/navbar.html'
                    },
                    'content': {
                        templateUrl: 'titulos/meus_titulos.html',
                        controller: 'MeusTitulosController',
                        controllerAs: 'vm'
                    },
                    'footer': {
                        templateUrl: 'template/footer.html'
                    }
                },
                resolve: {
                    titulosPrepService : titulosPrepService
                },
                title : 'Meus Títulos'
            });

            $stateProvider.state('titulo-novo', {
                url: '/titulos/novo',
                views: {
                    'header': {
                        templateUrl: 'template/navbar.html'
                    },
                    'content': {
                        templateUrl: 'titulos/novo_titulo.html',
                        controller : 'NovoTituloController',
                        controllerAs: 'vm'
                    },
                    'footer': {
                        templateUrl: 'template/footer.html'
                    }
                }
            });

            $stateProvider.state('titulo-novo.selecionado', {
                url: '/:imdb',
                views: {
                    'content@': {
                        templateUrl: 'titulos/novo-titulo-selecionado.html',
                        controller : 'NovoTituloSelecionadoController',
                        controllerAs: 'vm'
                    }
                },
                resolve: {
                    tituloSelecionadoPrepService : tituloSelecionadoPrepService
                }
            });

            $stateProvider.state('titulos.editar', {
                url: '/editar/:id',
                views: {
                    'content@': {
                        templateUrl: 'titulos/editar_titulo.html',
                        controller : 'EditarTituloController',
                        controllerAs : 'vm'
                    }
                },
                resolve: {
                    tituloEditPrepService : tituloEditPrepService
                }
            });

            $stateProvider.state('titulos.detalhes', {
                url:'/detalhes/:id' ,
                views: {
                    'content@': {
                        template: '<div>detalhes</div>'
                    }
                }
            });

            titulosPrepService.$inject = ['tituloService'];

            /* @ngInject */
            function titulosPrepService (tituloService) {
                return tituloService.getTitulos();
            }

            tituloEditPrepService.$inject =  ['tituloService', '$stateParams'];

            /* @ngInject */
            function tituloEditPrepService(tituloService, $stateParams) {
                return tituloService.getTitulo($stateParams.id);
            }

            tituloSelecionadoPrepService.$injecy = ['omdbService', '$stateParams'];

            /*@ngInject*/
            function tituloSelecionadoPrepService(omdbService, $stateParams) {
                return omdbService.getTituloImdb($stateParams.imdb);
            }

        };
    
})();
