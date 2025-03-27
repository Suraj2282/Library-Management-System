import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BorrowerRoutingModule } from './borrower-routing.module';
import { DashboardComponent } from './borrower-component/dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    BorrowerRoutingModule
  ]
})
export class BorrowerModule { }
