import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { StorageService } from '../../services/storage-service/storage.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn:"root"
})


export class borrowerGuard implements CanActivate{
  
  constructor(
    private router:Router,
    private snackbar:MatSnackBar
  )
  {

  }

  canActivate(
    next:ActivatedRouteSnapshot,
    state:RouterStateSnapshot
  ):boolean
  {
    if(StorageService.isAdminLoggedIn())
    {
      this.router.navigateByUrl("/admin/dashboard");
      this.snackbar.open("You don't have access to this resources", "Close", {duration:5000});
      return false;
    }
    else if(!StorageService.hasToken())
    {
      StorageService.logout();
      this.router.navigateByUrl("/login");
      this.snackbar.open("You are not LoggedIn","Close",{duration:5000});
      return false;
    }
    return true;
  }
};
