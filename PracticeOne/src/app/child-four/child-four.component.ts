import { Component, OnInit } from '@angular/core';
import { Event } from '_debugger';

@Component({
  selector: 'app-child-four',
  templateUrl: './child-four.component.html',
  styleUrls: ['./child-four.component.css']
})
export class ChildFourComponent implements OnInit {
  typedInInput = "";
  constructor() { }

  ngOnInit() {
  }

  OnTypeSomething(event: Event) {
    this.typedInInput = (<HTMLInputElement>event.target).value;
  }
}
