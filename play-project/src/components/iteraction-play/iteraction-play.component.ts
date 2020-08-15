import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-iteraction-play',
  templateUrl: './iteraction-play.component.html',
  styleUrls: ['./iteraction-play.component.css']
})
export class IteractionPlayComponent implements OnInit {
  @Output() myOut: EventEmitter<any> = new EventEmitter();
  @Output() myIntChange: EventEmitter<any> = new EventEmitter();
  @Input() myInt: any;

  onClick(event: any) {
    console.log('event child', event);
    this.myOut.emit({event, test: 123});

    setTimeout(() => {
      this.myInt = 12;
    });
  }

  // ngDoCheck() {
  //   this.myIntChange.next(this.myInt);
  // }

  onInput($event) {
    this.myIntChange.next($event.target.value);
  }



  constructor() { }

  ngOnInit() {
  }

}
