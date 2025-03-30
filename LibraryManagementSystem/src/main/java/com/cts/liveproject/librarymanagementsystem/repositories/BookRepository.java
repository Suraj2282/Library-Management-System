package com.cts.liveproject.librarymanagementsystem.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cts.liveproject.librarymanagementsystem.entities.Book;

@Repository
public interface BookRepository extends JpaRepository<Book, String>{

	Optional<Book> findByBookIsbn(String bookIsbn);

	
}
