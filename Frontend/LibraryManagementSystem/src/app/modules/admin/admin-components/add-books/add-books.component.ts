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
      title:['',Validators.required],
      genre:['', Validators.required],
      isbn:['', Validators.required],
      publication:['', Validators.required],
      publicationDate:['', Validators.required],
      language:['', Validators.required],
      pages:['', Validators.required],
      edition:['', Validators.required],
      summary:['', Validators.required],
      price:['', Validators.required],
      stock:['', Validators.required],
      authorName:['', Validators.required],
      rating:['', Validators.required]
    
    })
  }
  addBook(){

    console.log(this.addBookForm.value);
    this.service.addBook(this.addBookForm.value).subscribe((response)=>{
      console.log(response);
      if(response.status == 400)
      {
        this.snackbar.open("Book With ISBN is Already Exists", "Close", {duration:5000});
      }
      else if(response.status === 200){
          this.snackbar.open("Book is added", "Close", {duration:5000});
             }

      
    })
  }

  

}
