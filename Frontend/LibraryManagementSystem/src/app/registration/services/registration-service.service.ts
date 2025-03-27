import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

const BASIC_URL = 'http://localhost:9090/';

@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {

  constructor(
    private http:HttpClient
  ) { }

  register(register:any):Observable<any>
  {
    return this.http.post(BASIC_URL+'lms/register', register);
  }
}
