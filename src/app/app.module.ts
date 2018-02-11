import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartModule } from 'angular2-highcharts';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChartModule.forRoot(require('highcharts')

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
