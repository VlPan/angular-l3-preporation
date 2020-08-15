import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestFirstComponent } from '../test-first.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: TestFirstComponent,
      },
    ]),
  ],
})
export class TestFirstRoutingModule {}
