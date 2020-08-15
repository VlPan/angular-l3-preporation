import { AppInterceptor } from './../components/interseptors/app-interseptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { TsPlayComponent } from 'src/components/ts-play/ts-play.component';
import { UpdateStrategyPlayComponent } from 'src/components/update-strategy-play/update-strategy-play.component';
import { ChildComponent } from 'src/components/child/child.component';
import { RootService } from 'src/services/root.service';
import { FormsPlayComponent } from 'src/components/forms-play/forms-play.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MyStrDirContext, MyCustomStrDirective } from 'src/components/directive-play/myCustomStructuralDirective';
import { MyCustomDirective } from 'src/components/directive-play/myCustomDirective';
import { DirectivePlayComponent } from 'src/components/directive-play/directive-play.component';
import { Ex1Component } from 'src/components/exercise-1/exercise-one.component';
import { IteractionPlayComponent } from 'src/components/iteraction-play/iteraction-play.component';
import { ParentComponent } from 'src/components/parent/parent.component';
import { MyClickedDirective } from 'src/components/directive-play/directive-behavior';
import { PipesPlayComponent } from 'src/components/pipes-play/pipes-play.component';
import { ExponentialStrength } from 'src/components/pipes-play/my-pipe';
import { RxjsPlayComponent } from 'src/components/rxjs-play/rxjs-play.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TsPlayComponent,
    UpdateStrategyPlayComponent,
    ChildComponent,
    // ChildQueryPlayComponent,
    FormsPlayComponent,
    MyCustomStrDirective,
    MyCustomDirective,
    DirectivePlayComponent,
    Ex1Component,
    IteractionPlayComponent,
    ParentComponent,
    MyClickedDirective,
    PipesPlayComponent,
    ExponentialStrength,
    RxjsPlayComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    RootService,
    { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
