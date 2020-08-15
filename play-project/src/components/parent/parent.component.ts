import {
  Component,
  OnInit,
  DoCheck,
  OnChanges,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent
  implements
    OnInit,
    DoCheck,
    OnChanges,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit {
  title = 'parent TItle';
  input = 10;
  prevInput;
  val;

  onInput($event) {
   
    this.input = $event.target.value;
    if(this.input < 0) {
      this.input = this.prevInput;
      this.cd.detectChanges();
    } else {
      this.prevInput = this.input;
    }
  }
  constructor(private cd: ChangeDetectorRef, private route: ActivatedRoute, private router: Router) {
    console.log('PARENT CONSTRUCTOR', this.input);
    this.route.data.pipe(map(data => data.cres)).subscribe((r) => console.log(r));

  }

  ngOnInit() {

    console.log('PARENT ON INIT', this.input);
  }

  ngOnChanges(chg) {
    console.log('PARENT - changes', this.input);
  }

  ngDoCheck(): void {
    console.log('PARENT - docheck', this.input);
  }

  ngAfterContentChecked(): void {
    console.log('PARENT - ngAfterContentChecked', this.input);
  }

  ngAfterContentInit(): void {
    console.log('PARENT - ngAfterContentInit', this.input);
  }

  ngAfterViewChecked(): void {
    console.log('PARENT - ngAfterViewChecked', this.input);
  }

  ngAfterViewInit(): void {
    console.log('PARENT - ngAfterViewInit', this.input);
  }

  goToOrders() {
    this.router.navigate(['orders'], { relativeTo: this.route });
  }
}
