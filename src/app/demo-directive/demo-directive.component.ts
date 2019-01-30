import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-directive',
  templateUrl: './demo-directive.component.html',
  styleUrls: ['./demo-directive.component.css']
})
export class DemoDirectiveComponent implements OnInit {

  oddNumbers = [1, 3, 5, 7, 9];
  evenNumbers = [2, 4, 6, 8 ];
  onlyOdd : boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
