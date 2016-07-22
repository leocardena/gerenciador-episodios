package com.gerenciador.business;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import com.gerenciador.business.exception.TituloNotFoundException;
import com.gerenciador.entity.Titulo;
import com.gerenciador.repository.TituloRepository;

@Service("TituloBusiness")
public class TituloBusiness {

	@Autowired
	private TituloRepository repository;
	
	public List<Titulo> pesquisarTodos() {
		return repository.findAll();
	}

	public Titulo pesquisarPorId(String id) {
		Titulo titulo = repository.findOne(id);
		
		if (titulo == null)
			throw new TituloNotFoundException("O título não pode ser encontrado");
		
		return titulo;
	}

	public Titulo salvar(Titulo titulo) {
		titulo.setId(null);
		return repository.save(titulo);
	}

	public Titulo atualizar(Titulo titulo) {
		pesquisarPorId(titulo.getId());
		return repository.save(titulo);
	}

	public void deletar(String id) {
		try {
			repository.delete(id);
		} catch (EmptyResultDataAccessException e) {
			throw new TituloNotFoundException("O título não pode ser encontrado");
		}
	}
	
	public void init(){
		Titulo t1 = new Titulo( "Magi: The Labyrinth of Magic", 1, 0, 0);
		Titulo t2 = new Titulo( "Fate/Zero", 17, 0, 0);
		Titulo t3 = new Titulo( "Black sails", 0, 0, 0);
		Titulo t4 = new Titulo( "Pokémon - Indigo", 15, 0, 0);
		Titulo t5 = new Titulo( "Yu-Gi-Oh! ARC", 86, 0, 0);
		Titulo t6 = new Titulo( "Yu-Gi-Oh! GX", 47, 0, 0);
		Titulo t7 = new Titulo( "Yu-Gi-Oh! Zexal", 19, 146, 1);
		java.util.List<Titulo> list = new java.util.ArrayList<>();
		list.addAll(java.util.Arrays.asList(t1,t2,t3, t4, t5, t6, t7));
		for (Titulo titulo : list) {
			repository.saveAndFlush(titulo);
		}
	}

}
