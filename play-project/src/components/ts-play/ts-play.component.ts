import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ts-play',
  templateUrl: './ts-play.component.html',
  styleUrls: ['./ts-play.component.scss'],
})
export class TsPlayComponent {
  x: X;
  xArr: Array<Partial<X>>;
  // A simple componet to play with TS language
  constructor() {
    this.x = { a: '1', b: 1, c: null };
    this.xArr = [{a: '1', b: 2}, {a: '2', b: 3}];
    this.updateProp(this.x, 'b', 12);
    console.log(this.pluck(this.xArr, 'b'));
  }

  updateProp<O, K extends keyof O>(obj: O, k: K, prop: O[K]) {
    obj[k] = prop;
  }

  pluck<O, K extends keyof O>(objs: O[], prop: K): O[K][] {
    return objs.reduce((acc: O[K][], curr: O) => {
      return [...acc, curr[prop]];
    }, []);
  }
}

export interface X {
  a: string;
  b: number;
  c: X;
};
