(function () {

	'use strict';

	angular
	.module('gerenciador-episodios.titulos.service')
	.factory('tituloService', tituloService);

	tituloService.$inject = ['$http', 'UrlBase'];

	/* @ngInject */
	function tituloService ($http, UrlBase) {
		
		var service =  {
			getTitulos : _getTitulos,
			postTitulo : _postTitulo,
			getTitulo : _getTitulo,
			deleteTitulo : _deleteTitulo,
			putTitulo : _putTitulo
		};

		return service;

		function _getTitulos () {
			return $http.get(UrlBase.gerenciadorBaseUrl + '/titulo')
				.then(getTitulosComplete)
				.catch(getTitulosFailed);
			
			function getTitulosComplete (response) {
				return response.data;
			}

			function getTitulosFailed (error) {
			
			}
			
		}

		function _getTitulo (id) {
			return $http.get(UrlBase.gerenciadorBaseUrl + '/titulo/' + id)
				.then(getTituloComplete)
				.catch(getTituloFailed);
			
			function getTituloComplete (response) {
				return response.data;
			}

			function getTituloFailed (error) {
			
			}
			
		}

		function _postTitulo (titulo) {
			return $http.post(UrlBase.gerenciadorBaseUrl + '/titulo', titulo)
				.then(postTituloComplete)
				.catch(postTituloFailed);
			
			function postTituloComplete (response) {
				return response.data;
			}

			function postTituloFailed (error) {
			
			}
			
		}

		function _deleteTitulo (id) {
			return $http.delete(UrlBase.gerenciadorBaseUrl + '/titulo/' + id)
				.then(deleteTituloComplete)
				.catch(deleteTituloFailed);

			function deleteTituloComplete (response) {
				return response.data;
			}

			function deleteTituloFailed(error) {

			}
		}

		function _putTitulo (titulo, id) {
			return $http.put(UrlBase.gerenciadorBaseUrl + '/titulo/' + id, titulo)
				.then(putTituloComplete)
				.catch(putTituloFailed);

				function putTituloComplete (response) {
					return response.data;
				}

				function putTituloFailed (error) {

				}
		}

	}

})();