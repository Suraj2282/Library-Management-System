import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../../../auth/services/storage-service/storage.service';

const BASE_URL = 'http://localhost:9090/';

@Injectable({
  providedIn: 'root'
})
export class BorrowerServiceService {

  constructor(
    private http:HttpClient
  ) { }

  getAllBooks():Observable<any>{

    return this.http.get<[]>(BASE_URL+'public/book/',{
      headers:this.createAuthorizationHeader()
    });


  }

  getSingleBook(bookId:number):Observable<any>
  {
    return this.http.get<[]>(BASE_URL+'public/book/find/'+bookId,{
      headers:this.createAuthorizationHeader()
    });
  }

  createAuthorizationHeader():HttpHeaders{
    let authHeaders:HttpHeaders = new HttpHeaders();
    console.log(StorageService.getToken().trim());
    return authHeaders.set('Authorization', "Bearer " + StorageService.getToken().replace(/^"|"$/g, ''));
  }

}
