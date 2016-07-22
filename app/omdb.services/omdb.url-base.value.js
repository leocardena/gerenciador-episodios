/**
 * Created by Cardena on 05/07/2016.
 */
(function () {
    'use strict';

    angular
        .module('omdb.service')
        .value('OMDBUrlBase', {
            url : 'http://www.omdbapi.com/'
        });
})();