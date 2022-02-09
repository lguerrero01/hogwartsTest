import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CharactersService } from 'src/app/services/characters.service';
import { Character, House } from 'src/app/interfaces';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit, OnDestroy {
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject<any>();
  public dtElement!: DataTableDirective;

  public isDtInitialized: boolean = false;

  data: Character[] = [];

  public characterHouses = [
    { value: 'Slytherin' },
    { value: 'Gryffindor' },
    { value: 'Ravenclaw' },
    { value: 'Hufflepuff' },
  ];

  public houses: House[] = [...this.characterHouses];

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
  }

  public handleChange(house: any): void {
    this.charactersService
      .getList(house.value)
      .subscribe((respData: Character[]) => {
        console.log(respData);
        this.data = respData;

        if (this.isDtInitialized) {
          // validating rendering
          this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.destroy();
          });
        } else {
          this.isDtInitialized = true;
        }
        this.dtTrigger.next(this.data);
      });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
