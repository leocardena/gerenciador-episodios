package com.gerenciador.rest;

import java.net.URI;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import com.gerenciador.business.TituloBusiness;
import com.gerenciador.entity.Titulo;


@RestController
@RequestMapping(value = "/titulo")
public class TituloRest {

	@Autowired
	private TituloBusiness business;
	
	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<List<Titulo>> get() {
		return ResponseEntity.status(HttpStatus.OK).body(business.pesquisarTodos());
	}

	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<?> post(@RequestBody Titulo titulo) {
		Titulo tituloSalvo = business.salvar(titulo);
		
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(tituloSalvo.getId())
				.toUri();

		return ResponseEntity.created(uri).body(tituloSalvo);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<?> get(@PathVariable("id") String id) {
		Titulo tituloBuscado = business.pesquisarPorId(id);
		return ResponseEntity.status(HttpStatus.OK).body(tituloBuscado);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<?> put(@RequestBody Titulo titulo, @PathVariable("id") String id) {
		titulo.setId(id);
		return ResponseEntity.status(HttpStatus.OK).body(business.atualizar(titulo));
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> delete(@PathVariable("id") String id) {
		business.deletar(id);
		return ResponseEntity.noContent().build();
	}
	@RequestMapping(value = "/init")
	public ResponseEntity<Void> init () {
		business.init();
		return ResponseEntity.noContent().build();
	} 

}
