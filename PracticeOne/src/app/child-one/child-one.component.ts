import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {
  welcomeMessage = "Welcome to practice one!!!!!";
  constructor() { }

  ngOnInit() {
  }

}
