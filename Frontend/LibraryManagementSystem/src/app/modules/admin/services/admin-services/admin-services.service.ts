import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from '../../../../auth/services/storage-service/storage.service';
import { Observable } from 'rxjs';


const BASE_URL = 'http://localhost:9090/';
@Injectable({
  providedIn: 'root'
})
export class AdminServicesService {



  constructor(
    private http:HttpClient
  ) { }
  

  addBook(book:any):Observable<any>
  {
      return this.http.post<[]>(BASE_URL+'book/addbook', book,{
        headers:this.createAuthorizationHeader()
      });
  }

  createAuthorizationHeader():HttpHeaders{
    let authHeaders:HttpHeaders = new HttpHeaders();
    return authHeaders.set('Authorization', 'Bearer ' + StorageService.getToken());
  }

 
}
