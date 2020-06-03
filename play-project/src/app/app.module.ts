import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { TsPlayComponent } from 'src/components/ts-play/ts-play.component';
import { UpdateStrategyPlayComponent } from 'src/components/update-strategy-play/update-strategy-play.component';
import { ChildComponent } from 'src/components/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    TsPlayComponent,
    UpdateStrategyPlayComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
