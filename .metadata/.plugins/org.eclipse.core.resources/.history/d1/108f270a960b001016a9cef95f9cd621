package com.cts.liveproject.librarymanagementsystem.entities;

import java.sql.Date;

import com.cts.liveproject.librarymanagementsystem.enums.BookAvailability;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "book_table")
public class Book {
	
	@Id
	private String bookId;
	private String bookTitle;
	private String bookIsbn;
	private String bookGenre;
	private Date bookPublication;
	private String bookPublisher;
	private String bookLanguage;
	private int bookPages;
	private String bookEdition;
	private String bookSummary;
	private double bookPrice;
	private BookAvailability bookAvailabaility;
	private double bookRating;
	
	@ManyToOne
	@JoinColumn(name = "author_id")
	private Author bookAuthor;
	
	

}
