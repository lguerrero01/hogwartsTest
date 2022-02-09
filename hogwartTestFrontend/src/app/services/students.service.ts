import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Student } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  private urlAPI = `${environment.urlAPI}/characters/students`;
  constructor(private http: HttpClient) {}

  GetListStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.urlAPI).pipe(
      map((v: Student[]) => {
        return v.map((character) => ({
          name: character.name,
          patronus: character.patronus,
          age: character.age,
          image: character.image,
          dateOfBirth: character.dateOfBirth,
        }));
      })
    );
  }
}
