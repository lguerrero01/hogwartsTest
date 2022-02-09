import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {

  private urlAPI = `${environment.urlAPI}/characters/house`;

  constructor(private http: HttpClient) {}

  public getList(houseName: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.urlAPI}/${houseName}`).pipe(
      map((v: any[]) => {
        return v.map((character) => ({
          name: character.name,
          patronus: character.patronus,
          age: character.age,
          image: character.image,
        }));
      })
    );
  }

}
