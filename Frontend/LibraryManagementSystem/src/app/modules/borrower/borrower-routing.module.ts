import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './borrower-component/dashboard/dashboard.component';
import { borrowerGuard } from '../../auth/guards/borrower-guards/borrower.guard';

const routes: Routes = [
  {
    path:"dashboard",
    component:DashboardComponent,
    canActivate:[borrowerGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BorrowerRoutingModule { }
