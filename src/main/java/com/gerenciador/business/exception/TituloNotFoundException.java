package com.gerenciador.business.exception;

public class TituloNotFoundException extends RuntimeException {

	private static final long serialVersionUID = -4425071748059658268L;

	public TituloNotFoundException(String message, Throwable cause) {
		super(message, cause);
	}

	public TituloNotFoundException(String message) {
		super(message);
	}

}
