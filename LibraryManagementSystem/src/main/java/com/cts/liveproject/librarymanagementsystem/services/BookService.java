package com.cts.liveproject.librarymanagementsystem.services;

import java.util.List;

import com.cts.liveproject.librarymanagementsystem.entities.Book;

public interface BookService {
	
	public Book saveBook(Book book);
	
	public List<Book> allBooks();
	
	public Book findById(Long id);
	
	public List<Book> findByBookAuthor(String authorName);
	
	public List<Book> findByBookPublisher(String publicationName);
	
	public List<Book> findByBookTitle(String bookTitle);
	
	public void deleteBook(Long id);
	
	public Book updateBook(Book book);

}
