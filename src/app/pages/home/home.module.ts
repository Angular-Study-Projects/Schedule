import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzTableModule } from 'ng-zorro-antd/table';



import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { TableComponent } from 'src/app/components/table/table.component';



@NgModule({
  declarations: [
    HomeComponent,
    TableComponent
  ],
  imports: [
    NzTableModule,
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
