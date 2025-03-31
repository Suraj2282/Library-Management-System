import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminServicesService } from '../../services/admin-services/admin-services.service';

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
    private router:ActivatedRoute,
    private service:AdminServicesService
  )
  {

    this.bookId = this.router.snapshot.params['bookid']
  }

  ngOnInit()
  {
    this.getSingleBook();
  }

  getSingleBook()
  {
    this.service.getSingleBook(this.bookId).subscribe((res)=>
    {
      // console.log(res);
      this.book = res;
    })
  }
}
