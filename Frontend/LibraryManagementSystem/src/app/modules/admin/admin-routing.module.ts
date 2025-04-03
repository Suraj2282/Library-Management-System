import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin-components/dashboard/dashboard.component';
import { adminGuard } from '../../auth/guards/admin-guards/admin.guard';
import { AddBooksComponent } from './admin-components/add-books/add-books.component';
import { ShowBooksComponent } from './admin-components/show-books/show-books.component';
import { BookComponentComponent } from './admin-components/book-component/book-component.component';

const routes: Routes = [
  {path:"dashboard", component:DashboardComponent, canActivate:[adminGuard]},
  {path:"addbooks", component:AddBooksComponent, canActivate:[adminGuard]},
  {path:"books", component:ShowBooksComponent, canActivate:[adminGuard]},
  {path:"viewbook/:bookid", component:BookComponentComponent, canActivate:[adminGuard]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
