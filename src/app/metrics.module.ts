import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MetricFormatPipe, MetricsComponent } from './metrics.component';
import {MatTableModule} from '@angular/material/table'
import { MatToolbarModule } from '@angular/material/toolbar';
import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';

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
