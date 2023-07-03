import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { FieldDefinition, backendDataResponse, newLayoutResponse } from 'data/mock-response';
import { defaultLayoutDetails, defaultMetricPoints } from 'data/default-mock';
import { CurrencyPipe, DecimalPipe, PercentPipe, DatePipe } from '@angular/common';

const pipesDict = {
  "datetime": (val: string | number) => new DatePipe("en-US").transform(val),
  "currency": (val: string | number) => new CurrencyPipe("en-US").transform(val),
  "percent": (val: string | number) => new PercentPipe("en-US").transform(val),
  "number": (val: string | number, fd: FieldDefinition) => new DecimalPipe("en-US").transform(val, fd.digitsInfo),
}

@Pipe({
  name: 'metricFormatPipe'
})
export class MetricFormatPipe implements PipeTransform{
    transform(val: string | number, fd: FieldDefinition) {
      if (!fd.format || fd.format === "none") return;
      return pipesDict[fd.format](val, fd)
    }
}

@Component({
  selector: 'app-root',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.scss'],
})
export class MetricsComponent implements OnInit {
  layoutDetails = defaultLayoutDetails;
  metricData = defaultMetricPoints;
  tableCols: string[] = [];
  
  ngOnInit() {
    this.layoutDetails = newLayoutResponse;
    this.metricData = backendDataResponse
    this.tableCols = this.layoutDetails.layout
      .filter(_ => _.name === "summary")[0].elements[0].fields
      ?.map(_ => _.name) || [];
  }

  title = 'metrics-page';
}
