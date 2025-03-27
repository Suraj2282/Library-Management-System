package com.cts.liveproject.librarymanagementsystem.excpetion;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.cts.liveproject.librarymanagementsystem.entities.ErrorResponse;

@RestControllerAdvice
public class GlobalExceptionHandler {
	
	@ExceptionHandler
	public ResponseEntity<ErrorResponse>handlerUserNotFound(UserNotFoundException ex)
	{
		ErrorResponse errorResponse = ErrorResponse.builder().message(ex.getMessage()).success(true).status(HttpStatus.NOT_FOUND).build();
		
		return new ResponseEntity<ErrorResponse>(errorResponse, HttpStatus.NOT_FOUND);
	}

}
