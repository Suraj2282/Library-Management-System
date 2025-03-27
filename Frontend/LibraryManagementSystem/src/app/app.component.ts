import { Component } from '@angular/core';
import { StorageService } from './auth/services/storage-service/storage.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'LibraryManagementSystem';

  
  isAdminLoggedIn:boolean;
  isBorrowerLoggedIn:boolean;
  constructor(
    private router:Router,

  )
  {

  }

  ngOnInit()
  {
    this.updateUserLoggedStatus();
    this.router.events.subscribe(
      event=>{
        if(event instanceof NavigationEnd)
        {
          this.updateUserLoggedStatus();
        }
      }
    )

  }

  private updateUserLoggedStatus():void{
    this.isAdminLoggedIn = StorageService.isAdminLoggedIn();
    this.isBorrowerLoggedIn = StorageService.isBorrowerLoggedIn();
  }

  logout()
  {
    StorageService.logout();
    this.router.navigateByUrl("login");
  }
}

