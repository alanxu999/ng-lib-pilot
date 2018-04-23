import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { TickTockModule, TestModule } from '../../lib';
import { TiltCommonModule } from '../../lib'

import { RouterModule } from "@angular/router";

import { appRoutes } from './app.routes'

@NgModule({
  imports: [ 
    BrowserModule, 
    TickTockModule, 
    TiltCommonModule,
    //TestModule,
    RouterModule.forRoot(appRoutes) 
  ],
  declarations: [
     AppComponent,
     DashboardComponent
  ],
  exports: [
    
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
