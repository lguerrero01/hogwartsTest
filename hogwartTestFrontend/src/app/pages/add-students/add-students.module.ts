import { AgePipe } from './../../shared/pipes/age.pipe';
import { AddStudentsComponent } from './add-students.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddStudentsRoutingModule } from './add-students-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListNewStudentsComponent } from './list-new-students/list-new-students.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [AddStudentsComponent, ListNewStudentsComponent],
  imports: [
    CommonModule,
    AddStudentsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    DataTablesModule
  ],
  exports: [
  ]
})
export class AddStudentsModule { }
