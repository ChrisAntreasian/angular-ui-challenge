import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MetricsComponent } from './metrics.component';
import { MatGridListModule } from '@angular/material/grid-list';

import { MatToolbarModule } from '@angular/material/toolbar';
// @TODO downgrade angular to 13
@NgModule({
  declarations: [
    MetricsComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [MetricsComponent]
})
export class MetricsModule { }
