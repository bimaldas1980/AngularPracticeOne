import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-three',
  templateUrl: './child-three.component.html',
  styleUrls: ['./child-three.component.css']
})
export class ChildThreeComponent implements OnInit {
  displayThroughEvents = "";
  constructor() { }

  ngOnInit() {
  }

  OnDisplayMessage() {
    this.displayThroughEvents  =  "Display button clicked...!!!";
  }

}
