import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import {Injectable} from '@angular/core';
import { StorageService } from '../../services/storage-service/storage.service';

@Injectable({
  providedIn:"root"
})


export class noAuth implements CanActivate{
  
  constructor(
    private router:Router
  )
  {

  }

  canActivate(
    next:ActivatedRouteSnapshot,
    state:RouterStateSnapshot
  ):boolean
  {
    if(StorageService.hasToken()&& StorageService.isBorrowerLoggedIn())
    {
      this.router.navigateByUrl("/borrower/dashboard");
      return false;
    }
    else if(StorageService.hasToken() && StorageService.isAdminLoggedIn())
    {
      this.router.navigateByUrl("/admin/dashboard");
      return false;
    }
    return true;
  }
};
