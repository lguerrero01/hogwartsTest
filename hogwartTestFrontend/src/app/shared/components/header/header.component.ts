import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public currentLocation: string = '';

 public navMenu: any[] = [
    {
      text: 'Characters',
      route: '/characters'
    },
    {
      text: 'Students',
      route: '/students'
    },
    {
      text: 'Teachers',
      route: '/teachers'
    },
    {
      text: 'Add Student',
      route: '/new-students'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
