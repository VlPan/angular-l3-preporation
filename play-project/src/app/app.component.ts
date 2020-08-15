import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'play-project';
  numbers = [1,2,3,4,5]

  arr = [1,2];

  testOutput(arg: any) {
    console.log(arg);
    console.log(this);
  }
}
