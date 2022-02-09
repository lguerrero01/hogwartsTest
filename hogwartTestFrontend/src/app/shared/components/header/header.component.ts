import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navMenu: any[] = [
    {
      text: 'Characters',
      route: ''
    },
    {
      text: 'Students',
      route: ''
    },
    {
      text: 'Teachers',
      route: ''
    },
    {
      text: 'Add Student',
      route: ''
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
