import { Component, OnInit, NgZone, ChangeDetectorRef, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() title: string;
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    // setTimeout(() => {
    //   this.cd.detach();
    // }, 0)

  }

  ngOnChanges(chg) {
    console.log('CHILD - changes');
  }

  ngDoCheck(): void {
    console.log('CHILD - docheck');
  }

}
