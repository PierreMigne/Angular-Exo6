import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  users: Array<any>;

  constructor() {
    this.users = [
      {
        id: 0,
        username: 'Jean',
        mail: 'jean@test.fr'
      },
      {
        id: 1,
        username: 'Pierre',
        mail: 'pierre@test.fr'
      },
      {
        id: 2,
        username: 'Maxime',
        mail: 'maxime@test.fr'
      },
      {
        id: 3,
        username: 'Robert',
        mail: 'robert@test.fr'
      },
    ]
  }

  ngOnInit(): void {
  }

  getColor(id: number) {
    if (id % 2 === 0) {
      return 'blue';
    } else {
      return 'green';
    }
  }

}
