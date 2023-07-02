import { Component, OnInit } from '@angular/core';
import { backendDataResponse, newLayoutResponse } from 'data/mock-response';
import { defaultLayoutDetails, defaultMetricPoints } from 'data/default-mock';

@Component({
  selector: 'app-root',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.scss'],
})
export class MetricsComponent implements OnInit {
  layoutDetails = defaultLayoutDetails;
  data = defaultMetricPoints;
  ngOnInit() {
    this.data = backendDataResponse
    this.layoutDetails = newLayoutResponse
  }

  title = 'metrics-page';
}
