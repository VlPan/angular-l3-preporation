import { RootService } from './../../services/root.service';
import {
  Component,
  OnInit,
  NgZone,
  ChangeDetectorRef,
  Input,
  DoCheck,
  OnChanges,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
} from '@angular/core';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit, DoCheck, OnChanges, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit {
  @Input() title: string;
  @Input() input: number;
  constructor(private cd: ChangeDetectorRef, private root: RootService) {
    console.log('CHILD CONSTRUCTOR', this.input);
  }

  ngOnInit() {
    console.log('CHILD ON INIT', this.input);
  }

  ngOnChanges(chg) {
    console.log('CHILD - changes', this.input);
  }

  ngDoCheck(): void {
    
    console.log('CHILD - docheck', this.input);
  }

  ngAfterContentChecked(): void {
    console.log('CHILD - ngAfterContentChecked', this.input);
  }

  ngAfterContentInit(): void {
    console.log('CHILD - ngAfterContentInit', this.input);
  }

  ngAfterViewChecked(): void {
    console.log('CHILD - ngAfterViewChecked', this.input);
  }

  ngAfterViewInit(): void {
    console.log('CHILD - ngAfterViewInit', this.input);
  }
}
