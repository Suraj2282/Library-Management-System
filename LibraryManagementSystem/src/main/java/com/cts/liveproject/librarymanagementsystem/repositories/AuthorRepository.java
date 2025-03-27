package com.cts.liveproject.librarymanagementsystem.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cts.liveproject.librarymanagementsystem.entities.Author;

@Repository
public interface AuthorRepository extends JpaRepository<Author, String>{

}
