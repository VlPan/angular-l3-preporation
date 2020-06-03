import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-ts-play',
  templateUrl: './ts-play.component.html',
  styleUrls: ['./ts-play.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TsPlayComponent {


  x: X;
  xArr: Array<Partial<X>>;
  // A simple componet to play with TS language
  constructor() {
    this.x = { a: '1', b: 1, c: null };
    this.xArr = [
      { a: '1', b: 2 },
      { a: '2', b: 3 },
    ];
    this.updateProp(this.x, 'b', 12);
    console.log(this.pluck(this.xArr, 'b'));

    // Tuple
    let x: [string, number];
    // enum
    enum Actions {
      Read = 'Read',
      Update = 'Update',
    }

    let c1: Actions = Actions.Read; // work
    // let c2: Actions = 'Read'; // err

    enum Color {
      Red = 1,
      Green,
      Blue,
    }
    let colorName: string = Color[2]; // Green

    let prettySure: Object = {};
    // prettySure.a = 12; // err
    // prettySure.toFixed(); // Err

    let unusable: void = undefined;
    unusable = null; // OK if `--strictNullChecks` is not given|

    // let a: never;
    // let b: any = 2;
    // a = b; // err

    var a: keyof Color;

    let aF: (a: number, b: string) => string = (a2, b2) => `123`;

    let suits = ['hearts', 'spades', 'clubs', 'diamonds'];

    function pickCard(x: { suit: string; card: number }[]): number;
    function pickCard(x: number): { suit: string; card: number };
    function pickCard(x: any): any {
      // Check to see if we're working with an object/array
      // if so, they gave us the deck and we'll pick the card
      if (typeof x == 'object') {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
      }
      // Otherwise just let them pick the card
      else if (typeof x == 'number') {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
      }
    }

    let myDeck = [
      { suit: 'diamonds', card: 2 },
      { suit: 'spades', card: 10 },
      { suit: 'hearts', card: 4 },
    ];
    let pickedCard1 = myDeck[pickCard(myDeck)];
    alert('card: ' + pickedCard1.card + ' of ' + pickedCard1.suit);

    let pickedCard2 = pickCard(15);
    alert('card: ' + pickedCard2.card + ' of ' + pickedCard2.suit);
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
}
