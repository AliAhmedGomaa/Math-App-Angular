import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { PlusComponent } from './plus/plus.component';
import { MinusComponent } from './minus/minus.component';
import { MultiplyComponent } from './multiply/multiply.component';
import { DivisionComponent } from './division/division.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'plus', component: PlusComponent },
  { path: 'minus', component: MinusComponent },
  { path: 'multiply', component: MultiplyComponent },
  { path: 'divide', component: DivisionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
