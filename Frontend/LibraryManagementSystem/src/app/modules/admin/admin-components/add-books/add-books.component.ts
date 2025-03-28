import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminServicesService } from '../../services/admin-services/admin-services.service';

@Component({
  selector: 'app-add-books',
  standalone: false,
  templateUrl: './add-books.component.html',
  styleUrl: './add-books.component.scss'
})
export class AddBooksComponent {

  addBookForm:FormGroup | undefined;

  constructor(
    private snackbar:MatSnackBar,
    private fb:FormBuilder,
    private router:Router,
    private service:AdminServicesService
  )
  {

  }

  ngOnInit()
  {
    this.addBookForm = this.fb.group({
      bookTitle:['',Validators.required],
      bookGenre:['', Validators.required],
      bookIsbn:['', Validators.required],
      bookPublication:['', Validators.required],
      bookPublisher:['', Validators.required],
      bookLanguage:['', Validators.required],
      bookPages:['', Validators.required],
      bookEdition:['', Validators.required],
      bookSummary:['', Validators.required],
      bookPrice:['', Validators.required],
      bookAvailability:['', Validators.required],
      bookAuthor:['', Validators.required],
      bookRating:['', Validators.required]
    
    })
  }
  addBook(){

    console.log(this.addBookForm.value);
    this.service.addBook(this.addBookForm.value).subscribe((response)=>{
      console.log(response);

      
    })
  }

  

}
