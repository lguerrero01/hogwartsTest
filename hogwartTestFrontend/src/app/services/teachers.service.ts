import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Teacher } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {
  private urlAPI = `${environment.urlAPI}/characters/staff`;
  constructor(private http: HttpClient) {}

  getListTeacher(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.urlAPI).pipe(
      map((v: Teacher[]) => {
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
