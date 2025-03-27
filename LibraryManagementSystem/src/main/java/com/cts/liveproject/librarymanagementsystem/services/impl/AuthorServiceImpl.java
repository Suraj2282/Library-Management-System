package com.cts.liveproject.librarymanagementsystem.services.impl;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;

import com.cts.liveproject.librarymanagementsystem.entities.Author;
import com.cts.liveproject.librarymanagementsystem.repositories.AuthorRepository;
import com.cts.liveproject.librarymanagementsystem.services.AuthorService;

public class AuthorServiceImpl implements AuthorService {

	@Autowired
	private AuthorRepository authorRepository;
	
	@Override
	public Author saveAuthor(Author author) {
		String authorId = UUID.randomUUID().toString();
		
		author.setAuthorId(authorId);
		
		return authorRepository.save(author);
		
		
	}

}
