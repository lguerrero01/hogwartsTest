import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/interfaces';
import { AddStudentService } from 'src/app/services/add-student.service';

@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.css'],
})
export class AddStudentsComponent implements OnInit {
  public fg: FormGroup = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    patronus: new FormControl(''),
    image: new FormControl(''),
  });
  public imageURL: string = '';
  public chargingImage = false;
  public invalidButton = true; 

  constructor(
    private fb: FormBuilder,
    private newStudentsServices: AddStudentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.newStudentsServices.newStudents$.subscribe((students: Student[]) => {
      console.log(students);
    });
    this.fg = this.fb.group({
      name: ['', Validators.required],
      age: [0, Validators.required],
      patronus: ['', Validators.required],
      image: ['', Validators.required],
    });
  }

  public showPreview(event: Event) {
    if (event && event.target) {
      const file = (event.target as any).files[0];
      this.chargingImage = true;
      const reader = new FileReader();
      reader.onload = () => {
        this.imageURL = reader.result as string;
        this.fg.get('image')!.setValue(this.imageURL);
        this.chargingImage = false;
      };
      reader.readAsDataURL(file);
    }
  }
  public validFields(field: string){
    return this.fg.controls[field].errors && this.fg.controls[field].touched 
  }
  public addStudent() {
    if (this.chargingImage || this.fg.invalid) return;

    this.newStudentsServices.addStudent({
      ...this.fg.value,
    });
    this.router.navigateByUrl('/new-students/listNewStudents');
  }
}
