import { Component, OnInit, OnChanges, Input, DoCheck, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-update-strategy-play',
  templateUrl: './update-strategy-play.component.html',
  styleUrls: ['./update-strategy-play.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpdateStrategyPlayComponent implements OnChanges, DoCheck {

  constructor(private cd: ChangeDetectorRef) {}

  @Input() arr: any[];
  @Input() title: string;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    setTimeout(() => {
      this.cd.detach();

    })
  }


  ngOnChanges(chg) {
    console.log('changes', chg, this.arr);
  }

  ngDoCheck(): void {
    console.log('docheck', this.arr);
  }

}
