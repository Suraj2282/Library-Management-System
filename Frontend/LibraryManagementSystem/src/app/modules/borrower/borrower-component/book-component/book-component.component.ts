import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { BorrowerServiceService } from '../../services/borrower-service.service';

@Component({
  selector: 'app-book-component',
  standalone: false,
  templateUrl: './book-component.component.html',
  styleUrl: './book-component.component.scss'
})
export class BookComponentComponent {

  bookId:number;
  book;

  constructor(
    private router: ActivatedRoute,
    private service:BorrowerServiceService,
  )
  {
    this.bookId = this.router.snapshot.params['bookid'];
  }
  
  ngOnInit()
  {
    console.log(this.bookId);
    this.getBook();
  }

  getBook()
  {
    this.service.getSingleBook(this.bookId).subscribe((res)=>
    {
      console.log(res),
      this.book = res
    }
    
    );
  }



}
