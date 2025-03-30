package com.cts.liveproject.librarymanagementsystem.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.liveproject.librarymanagementsystem.dto.BookDto;
import com.cts.liveproject.librarymanagementsystem.entities.Book;
import com.cts.liveproject.librarymanagementsystem.services.BookService;

@RestController
@RequestMapping("/api/book")
public class BookController {

	@Autowired
	private BookService bookService;
	
	@PreAuthorize("hasRole('ADMIN')")
	@PostMapping("/addbook")
	public ResponseEntity<?> saveBook(@RequestBody BookDto bookDto)
	{
		BookDto addedBook = bookService.saveBook(bookDto);
		if(addedBook == null)
		{
			return new ResponseEntity<>("Something went wrong, please try again", HttpStatus.BAD_REQUEST);
		}

		return ResponseEntity.status(HttpStatus.CREATED).body(addedBook);		
	}
}
