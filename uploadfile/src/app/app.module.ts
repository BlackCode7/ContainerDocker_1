import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BruteForceAlgorithmComponent } from './brute-force-algorithm/brute-force-algorithm.component';
import { FunctionMergeTwoArraysComponent } from './function-merge-two-arrays/function-merge-two-arrays.component';


@NgModule({
  declarations: [
    AppComponent,
    BruteForceAlgorithmComponent,
    FunctionMergeTwoArraysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
