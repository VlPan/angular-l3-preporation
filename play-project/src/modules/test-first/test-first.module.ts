import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestFirstComponent } from './test-first.component';
import { TestFirstRoutingModule } from './test-first-routing/test-first-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TestFirstRoutingModule
  ],
  declarations: [TestFirstComponent]
})
export class TestFirstModule { }
