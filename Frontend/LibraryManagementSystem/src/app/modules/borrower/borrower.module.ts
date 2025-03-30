import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BorrowerRoutingModule } from './borrower-routing.module';
import { DashboardComponent } from './borrower-component/dashboard/dashboard.component';
import { ShowBooksComponent } from './borrower-component/show-books/show-books.component';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';


@NgModule({
  declarations: [
    DashboardComponent,
    ShowBooksComponent
  ],
  imports: [
    CommonModule,
    BorrowerRoutingModule,
    MatCardModule,
    MatChipsModule
  ]
})
export class BorrowerModule { }
