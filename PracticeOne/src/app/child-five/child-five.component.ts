import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-five',
  templateUrl: './child-five.component.html',
  styleUrls: ['./child-five.component.css']
})
export class ChildFiveComponent implements OnInit {
  changeText = "";
  constructor() { }
 
  ngOnInit() {
  }

}
