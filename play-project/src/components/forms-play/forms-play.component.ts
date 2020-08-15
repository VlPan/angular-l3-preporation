import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { fieldsNotTheSame, forbiddenNameValidator, rangeValidator } from './validators';

@Component({
  selector: 'app-forms-play',
  templateUrl: './forms-play.component.html',
  styleUrls: ['./forms-play.component.css']
})
export class FormsPlayComponent implements OnInit {

  reactiveProfileForm = this.fb.group({
    firstName: ['', [Validators.required, forbiddenNameValidator(/bob/)]],
    lastName: ['', [Validators.required]],
    range: this.fb.group({
      min: ['', Validators.required],
      max: ['', Validators.required],
    }, {validators: [rangeValidator]})
  }, {validators: [fieldsNotTheSame]});

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.reactiveProfileForm.valueChanges.subscribe(v => console.log(v));
    this.reactiveProfileForm.controls.firstName.setValue('123');
  }

  onSubmit() {
    console.warn(this.reactiveProfileForm.value);
  }

  logForm(value: any) {
    console.log(value);
  }

}


import { Directive } from '@angular/core';

@Directive({
  selector: '[validateEmail][ngModel]'
})
export class EmailValidator {}