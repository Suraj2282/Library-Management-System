package com.cts.liveproject.librarymanagementsystem.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.liveproject.librarymanagementsystem.entities.Book;
import com.cts.liveproject.librarymanagementsystem.services.BookService;

@RestController
@RequestMapping("/book")
public class BookController {

	@Autowired
	private BookService bookService;
	
	@PostMapping("/addbook")
	public ResponseEntity<Book> saveBook(@RequestBody Book book)
	{
		return new ResponseEntity<Book>(bookService.saveBook(book), HttpStatus.OK);
	}
}
