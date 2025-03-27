package com.cts.liveproject.librarymanagementsystem.entities;

import org.springframework.http.HttpStatus;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ErrorResponse {
	
	private String message;
	private HttpStatus status;
	private boolean success;
	

}
