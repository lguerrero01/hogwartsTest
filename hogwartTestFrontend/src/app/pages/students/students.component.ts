import { StudentsService } from './../../services/students.service';
import { Student } from './../../interfaces/index';
import { Component, OnInit } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject<any>();
  public dtElement!: DataTableDirective;

  
  public isDtInitialized: boolean = false;
  public studentsData: Student[] = [];
  
  constructor(private studentsService: StudentsService) {}
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
    this.studentsService.GetListStudents().subscribe((respData: Student[]) => {
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
