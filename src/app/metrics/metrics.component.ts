import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { FieldDefinition, backendDataResponse, newLayoutResponse } from 'data/mock-response';
import { defaultLayoutDetails, defaultMetricPoints } from 'data/default-mock';
import { CurrencyPipe, DecimalPipe, PercentPipe, DatePipe } from '@angular/common';
import { guardNum, sumArr } from '../lib/number';

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
      if (!fd.format || fd.format === "none" || val === "-") return val;
      return pipesDict[fd.format](val, fd)
    }
}

@Component({
  selector: 'app-root',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.scss'],
})
export class MetricsComponent implements OnInit {
  title = 'metrics-page';

  layoutDetails = defaultLayoutDetails;
  metricData = defaultMetricPoints;
  
  tableCols: string[] = [];
  wToPerc = (w: number) => w / 12 * 100;

  ngOnInit() {
    this.layoutDetails = newLayoutResponse;
    this.metricData = backendDataResponse
    this.tableCols = this.layoutDetails.layout
      .filter(_ => _.name === "summary")[0].elements[0].fields
      ?.map(_ => _.name) || [];
  }
  
  private aggDict = {
    "sum": sumArr,
    "average": (vals: number[]) => sumArr(vals) / vals.length
  }
  handleTableFooter(k: string) {
    
    const fieldDef = this.layoutDetails.fieldDefinitions[k];
    if(k === "channel") return "Total";
    if (fieldDef.aggFn === "none") return "-";

    const d = this.metricData.dataSets[0].data.map(_ => {
      const v = _[k]
      if (guardNum(v)) return v;
      return 0;
    });

    return this.aggDict[fieldDef.aggFn](d);
  };

}
