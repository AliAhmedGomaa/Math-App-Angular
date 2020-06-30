import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaresoulComponent } from './caresoul/caresoul.component';
import { DivisionComponent } from './division/division.component';
import { MainComponent } from './main/main.component';
import { MinusComponent } from './minus/minus.component';
import { MultiplyComponent } from './multiply/multiply.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PlusComponent } from './plus/plus.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CaresoulComponent,
    DivisionComponent,
    MainComponent,
    MinusComponent,
    MultiplyComponent,
    NavBarComponent,
    PlusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
