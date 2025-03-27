import { Injectable } from '@angular/core';

const USER = "c_user";
const TOKEN = "c_token";
@Injectable({
  providedIn: 'root'
})
export class StorageService {
  
 



  constructor() { }

  public saveUser(user:any)
  {
    window.localStorage.removeItem(USER);
    window.localStorage.setItem(USER,JSON.stringify(user));

  }

  public saveToken(token:any)
  {
    window.localStorage.removeItem(TOKEN);
    window.localStorage.setItem(TOKEN,JSON.stringify(token));
  }

  static getUser():any
  {
    return JSON.parse(localStorage.getItem(USER));
  }
  
  static getUserRole():string
  {
    const user = this.getUser();
    if(user==null)
    {
      return '';
    }
    return user.role;
  }
  
  static getToken():string
  {
    return window.localStorage.getItem(TOKEN);
  }

  static hasToken() {
    if(this.getToken()===null)
    {
      return false;
    }
    return true;
  }

  static isAdminLoggedIn():boolean
  {
      if(this.getToken()==null)
      {
        return false;
      }
      const role:string = this.getUserRole();
      return role=="ADMIN";
  }
  
  static isBorrowerLoggedIn():boolean
  {
      if(this.getToken()==null)
      {
        return false;
      }
      const role:string = this.getUserRole();

      return role == "BORROWER";
  }

  static logout() {
    window.localStorage.removeItem(USER);
    window.localStorage.removeItem(TOKEN);
  }
}


