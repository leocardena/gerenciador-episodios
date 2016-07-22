package com.gerenciador.handler;

import javax.servlet.http.HttpServletRequest;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.gerenciador.business.exception.TituloNotFoundException;
import com.gerenciador.entity.ErrorDetails;

@ControllerAdvice
public class RestExceptionHandler {
	
	@ExceptionHandler(TituloNotFoundException.class)
	public ResponseEntity<ErrorDetails> handleTituloNotFoundException(TituloNotFoundException e,
			HttpServletRequest request) {
		ErrorDetails error = new ErrorDetails();
		error.setStatus(404L);
		error.setTitulo("O título não pode ser encontrado");
		error.setMensagem("Sem mensagem");
		error.setTimestamp(System.currentTimeMillis());

		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
	}

	@ExceptionHandler(DataIntegrityViolationException.class)
	public ResponseEntity<ErrorDetails> handleDataIntegrityViolationException(DataIntegrityViolationException e,
			HttpServletRequest request) {

		ErrorDetails erro = new ErrorDetails();
		erro.setStatus(400l);
		erro.setTitulo("Requisição inválida");
		erro.setMensagem("Sem mensagem");
		erro.setTimestamp(System.currentTimeMillis());

		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(erro);
	}

}
