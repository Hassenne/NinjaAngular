import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ponyracer-app',
  templateUrl: './pony.component.html',
  styleUrls: ['./pony.component.css']
})
export class PonyComponent implements OnInit {

  numberOfUsers = 146;
  user: any = { name: 'Cédric'};
  constructor() { }

  ngOnInit() {
  }
  onNewRaces() {

  }
  onButtonClick(event) {
    event.preventDefault();
    event.stopPropagation();
  }

}
