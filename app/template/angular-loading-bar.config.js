/**
 * Created by Cardena on 12/07/2016.
 */
(function (){
    'use strict';

    angular.module('gerenciadorEpisodios.core')
        .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
            cfpLoadingBarProvider.includeSpinner = false;
        }]);

})();