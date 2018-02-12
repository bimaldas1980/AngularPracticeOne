import { Component, OnInit } from '@angular/core';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent implements OnInit {
  divStyle = "colorBlue";
  constructor() { 
    setTimeout(() => {
      if(this.divStyle == "colorBlue"){
        this.divStyle = "colorRed";
      } else {
        this.divStyle = "colorBlue";
      }
    }, 2000);
  }

  ngOnInit() {
  }

}
