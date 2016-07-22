package com.gerenciador.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gerenciador.entity.Titulo;

public interface TituloRepository  extends JpaRepository<Titulo, String> {
	
}
