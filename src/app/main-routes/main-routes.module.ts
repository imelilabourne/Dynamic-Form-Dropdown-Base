import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutesRoutingModule } from './main-routes-routing.module';
import { AppComponent } from '../app.component';
import { RouterModule, Routes } from '@angular/router';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';

const routes:  Routes = [
  {path: 'home', component: DynamicFormComponent}
];


@NgModule({
  imports: [
    CommonModule,
    MainRoutesRoutingModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class MainRoutesModule { }
