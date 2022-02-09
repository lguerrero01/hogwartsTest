import { AddStudentsComponent } from './add-students.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListNewStudentsComponent } from './list-new-students/list-new-students.component';

const routes: Routes = [
  {
    path: '',
    component: AddStudentsComponent,
  },
  {
    path: 'listNewStudents',
    component: ListNewStudentsComponent,
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddStudentsRoutingModule { }
