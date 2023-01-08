import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BruteForceAlgorithmComponent } from './brute-force-algorithm/brute-force-algorithm.component';
import { FunctionMergeTwoArraysComponent } from './function-merge-two-arrays/function-merge-two-arrays.component';
import { RecursiveFuncCountDiscardSubseqComponent } from './recursive-func-count-discard-subseq/recursive-func-count-discard-subseq.component';
import { CoinChangeBFSapproachComponent } from './coin-change-bfsapproach/coin-change-bfsapproach.component';


@NgModule({
  declarations: [
    AppComponent,
    BruteForceAlgorithmComponent,
    FunctionMergeTwoArraysComponent,
    RecursiveFuncCountDiscardSubseqComponent,
    CoinChangeBFSapproachComponent
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
