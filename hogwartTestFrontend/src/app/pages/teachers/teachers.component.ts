import { TeachersService } from './../../services/teachers.service';
import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/interfaces';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject<any>();
  public dtElement!: DataTableDirective;
  constructor(private teacherService: TeachersService) {}

  public isDtInitialized: boolean = false;
  public teachersData: Teacher[] = [];

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
    this.teacherService.getListTeacher().subscribe((respData: Teacher[]) => {
      this.teachersData = respData;

      if (this.isDtInitialized) {
        // validating rendering
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
          this.dtTrigger.next(this.teachersData);
        });
      } else {
        this.isDtInitialized = true;
        this.dtTrigger.next(this.teachersData);
      }
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
