/*
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { OrganizerComponent } from './components/organizer/organizer.component';
import { TaskofdayComponent } from './components/taskofday/taskofday.component';
import { TaskofmonthComponent } from './components/taskofmonth/taskofmonth.component';


@NgModule({
  declarations: [
    AppComponent,
    OrganizerComponent,
    TaskofdayComponent,
    TaskofmonthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
*/
// /var/www/html
// ng build --prod -e prod

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import {Routes, RouterModule} from '@angular/router';
import {TaskofmonthComponent} from "./components/taskofmonth/taskofmonth.component";
import {TaskofdayComponent} from "./components/taskofday/taskofday.component";

export const routes: Routes = [
  { path: '', redirectTo: 'incident', pathMatch: 'full' },
  { path: 'taskofday', component: TaskofdayComponent },
  { path: 'taskofmonth', component: TaskofmonthComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TaskofmonthComponent,
    TaskofdayComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true}),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
