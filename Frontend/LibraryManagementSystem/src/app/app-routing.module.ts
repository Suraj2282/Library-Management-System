import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { noAuth } from './auth/guards/no-auth-guards/no-auth.guard';
import { RegistrationComponent } from './registration/registration/registration.component';

const routes: Routes = [
  {path:"login", component:LoginComponent, canActivate:[noAuth]},
  {path:"register", component:RegistrationComponent, canActivate:[noAuth]},
  {path:"admin", loadChildren: () => import("./modules/admin/admin.module").then(m => m.AdminModule)},
  {
    path:"borrower",
    loadChildren:()=>
      import("./modules/borrower/borrower.module")
    .then(m=>m.BorrowerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
