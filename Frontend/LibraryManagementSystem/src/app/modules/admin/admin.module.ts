import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './admin-components/dashboard/dashboard.component';
import { AddBooksComponent } from './admin-components/add-books/add-books.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AddBooksComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
