package com.gerenciador.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import org.hibernate.annotations.GenericGenerator;


@Entity
@Table(name = "titulo")
public class Titulo {

	private String id;
	private String nome;
	private int episodioAtual;
	private int episodiosTotais;
	private int temporada;

	public Titulo(String id, String nome, int episodioAtual, int episodiosTotais, int temporada) {
		super();
		this.id = id;
		this.nome = nome;
		this.episodioAtual = episodioAtual;
		this.episodiosTotais = episodiosTotais;
		this.temporada = temporada;
	}
	
	public Titulo(String nome, int episodioAtual, int episodiosTotais, int temporada) {
		super();
		this.nome = nome;
		this.episodioAtual = episodioAtual;
		this.episodiosTotais = episodiosTotais;
		this.temporada = temporada;
	}
	
	public Titulo () {}

	@Id
	@GeneratedValue(generator = "uuid2")
	@GenericGenerator(name = "uuid2", strategy = "uuid2")
	@Column(name = "id", unique = true)
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	@Column(name = "nome")
	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	@Column(name = "episodioAtual")
	public int getEpisodioAtual() {
		return episodioAtual;
	}

	public void setEpisodioAtual(int episodioAtual) {
		this.episodioAtual = episodioAtual;
	}

	@Column(name = "episodiosTotais")
	public int getEpisodiosTotais() {
		return episodiosTotais;
	}

	public void setEpisodiosTotais(int episodiosTotais) {
		this.episodiosTotais = episodiosTotais;
	}

	@Column(name = "temporada")
	public int getTemporada() {
		return temporada;
	}

	public void setTemporada(int temporada) {
		this.temporada = temporada;
	}

}
