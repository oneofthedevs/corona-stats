import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {
  @Input() newChartData;
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] = ['Active', 'Recovered', 'Deaths'];
  public pieChartType: ChartType = 'pie';
  public pieChartData: number[];
  public pieChartLegend = false;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(3, 169, 244)', 'rgba(0, 230, 118)', 'rgba(239, 83, 80)'],
    },
  ];

  constructor() { }

  ngOnInit() {
    this.pieChartData = [this.newChartData[0], this.newChartData[1], this.newChartData[2]];
  }

}
