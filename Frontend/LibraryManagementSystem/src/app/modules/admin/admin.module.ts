import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './admin-components/dashboard/dashboard.component';
import { AddBooksComponent } from './admin-components/add-books/add-books.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {HttpClientModule } from '@angular/common/http';
import { ShowBooksComponent } from './admin-components/show-books/show-books.component';
import { BookComponentComponent } from './admin-components/book-component/book-component.component';
import { UpdateBookComponent } from './admin-components/update-book/update-book.component';



@NgModule({
  declarations: [
    DashboardComponent,
    AddBooksComponent,
    ShowBooksComponent,
    BookComponentComponent,
    UpdateBookComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatButtonModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    FormsModule,
    
  ]
})
export class AdminModule { }
