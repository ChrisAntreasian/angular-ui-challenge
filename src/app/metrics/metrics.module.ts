import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MetricFormatPipe, MetricsComponent } from './metrics.component';
import {MatTableModule} from '@angular/material/table'
import { MatToolbarModule } from '@angular/material/toolbar';
import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
// @TODO downgrade angular to 13
// @TODO clean up component structure
// @TODO update favicon
// @TODO update readme
// @TODO ask questions
@NgModule({
  declarations: [
    MetricsComponent,
    MetricFormatPipe
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatTableModule
  ],
  providers: [
    CurrencyPipe,
    PercentPipe,
    DecimalPipe
  ],
  bootstrap: [
    MetricsComponent
  ]
})
export class MetricsModule { }
