import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-play',
  templateUrl: './directive-play.component.html',
  styleUrls: ['./directive-play.component.css']
})
export class DirectivePlayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


// task 1: create structural directive that will delay on component craetion and add context to component
// task 2: create attribute directive that will just react on click. This directive should also react on button click with the same logic
// task 3: brainstorm about their difference
