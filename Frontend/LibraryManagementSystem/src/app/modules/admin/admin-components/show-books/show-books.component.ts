import { Component } from '@angular/core';
import { AdminServicesService } from '../../services/admin-services/admin-services.service';

@Component({
  selector: 'app-show-books',
  standalone: false,
  templateUrl: './show-books.component.html',
  styleUrl: './show-books.component.scss'
})
export class ShowBooksComponent {

  books:any;

  constructor(private service:AdminServicesService){}
  ngOnInit()
  {
    this.getBooks();
  }

  getBooks()
  {
    this.service.getBooks().subscribe((res)=>
    {
      this.books = res;
    })
  }
}
