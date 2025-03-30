package com.cts.liveproject.librarymanagementsystem.services.impl;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.liveproject.librarymanagementsystem.entities.Book;
import com.cts.liveproject.librarymanagementsystem.repositories.BookRepository;
import com.cts.liveproject.librarymanagementsystem.services.BookService;

@Service
public class BookServiceImpl implements BookService {

	@Autowired
	private BookRepository bookRepository;
	
	@Override
	public Book saveBook(Book book) {
		String bookId = UUID.randomUUID().toString();
		book.setBookId(bookId);
		return bookRepository.save(book);
	}

	@Override
	public List<Book> allBooks() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Book findById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Book> findByBookAuthor(String authorName) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Book> findByBookPublisher(String publicationName) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Book> findByBookTitle(String bookTitle) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteBook(Long id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Book updateBook(Book book) {
		// TODO Auto-generated method stub
		return null;
	}

}
