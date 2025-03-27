import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from '../../../../auth/services/storage-service/storage.service';


const BASE_URL = 'http://localhost:9090/';
@Injectable({
  providedIn: 'root'
})
export class AdminServicesService {

  private userId;

  constructor(
    private http:HttpClient
  ) { }
 
}
