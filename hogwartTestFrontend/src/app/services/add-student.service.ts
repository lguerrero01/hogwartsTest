import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Student } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class AddStudentService {
  newStudents$: BehaviorSubject<Student[]> = new BehaviorSubject<Student[]>([]);
  constructor() {}

  addStudent(student: Student): void {
    this.newStudents$.next([
      ...this.newStudents$.getValue(),
      { ...student},
    ]);
  }
}
