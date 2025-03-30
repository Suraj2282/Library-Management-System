import { Component } from '@angular/core';
import { BorrowerServiceService } from '../../services/borrower-service.service';


@Component({
  selector: 'app-show-books',
  standalone: false,
  templateUrl: './show-books.component.html',
  styleUrl: './show-books.component.scss'
})
export class ShowBooksComponent {

  books:any;
  constructor(
    private service:BorrowerServiceService,
  ){}

  ngOnInit(){
    this.getAllBooks();
    

  }
  getAllBooks()
  {
    this.service.getAllBooks().subscribe((res)=>{
      console.log(res);
      this.books = res;
      console.log(this.books);

    })
  }
  
}
