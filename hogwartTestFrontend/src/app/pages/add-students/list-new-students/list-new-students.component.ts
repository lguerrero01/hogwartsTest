import { Component, OnInit } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { Student } from 'src/app/interfaces';
import { AddStudentService } from 'src/app/services/add-student.service';

@Component({
  selector: 'app-list-new-students',
  templateUrl: './list-new-students.component.html',
  styleUrls: ['./list-new-students.component.css']
})
export class ListNewStudentsComponent implements OnInit {

  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject<any>();
  public dtElement!: DataTableDirective;

  constructor( private newStudentService: AddStudentService) {}

  public isDtInitialized: boolean = false;
  public studentsData: Student[] = [];

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
    this.newStudentService.newStudents$.subscribe((respData: Student[]) => {
      this.studentsData = respData;

      if (this.isDtInitialized) {
        // validating rendering
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
        });
      } else {
        this.isDtInitialized = true;
      }
      this.dtTrigger.next(this.studentsData);
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
