import { Component, OnInit } from '@angular/core';
import { from, interval, forkJoin, combineLatest, concat, of, Subject, fromEvent } from 'rxjs';
import { map, take, combineAll, concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-play',
  templateUrl: './rxjs-play.component.html',
  styleUrls: ['./rxjs-play.component.css']
})
export class RxjsPlayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
