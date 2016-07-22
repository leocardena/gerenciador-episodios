/**
 * Created by Cardena on 05/07/2016.
 */
(function () {
    'use strict';

    angular
        .module('omdb.service')
        .factory('omdbService', omdbService );

    omdbService.$inject = ['$http', 'OMDBUrlBase'];

    /* @ngInject */
    function omdbService ($http, OMDBUrlBase) {
        //http://www.omdbapi.com/?i=tt4618398&plot=full&r=json
        var service =  {
            getTitulos : _getTitulos,
            getTituloImdb : _getTituloImdb
        };

        return service;

        function _getTitulos (nome, pagina){
            return $http.get(OMDBUrlBase.url, {
                params: {
                    s : nome,
                    page : pagina,
                    r: 'json'
                }
            });
        }

        function _getTituloImdb (imdb) {
            return $http.get(OMDBUrlBase.url, {
                params: {
                    i : imdb,
                    plot : 'full',
                    r : 'json'
                }
            });
        }

    }

})();