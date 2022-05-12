import { Component, OnInit } from '@angular/core';
import { EChartsOption, registerMap } from 'echarts';

@Component({
  selector: 'app-custom-map',
  templateUrl: './custom-map.component.html',
  styleUrls: ['./custom-map.component.css'],
})
export class CustomMapComponent implements OnInit {
  map;
  chartOption: EChartsOption;

  constructor() {}

  ngOnInit() {
    fetch('./assets/nuts3.json')
      .then((res) => res.json())
      .then((jsonData) => {
        this.map = jsonData;
        this.setOptions();
      });
  }

  public setOptions(): void {
    registerMap('Europe', this.map, {});

    this.chartOption = {
      title: {
        text: 'Custom geojson',
        subtext: 'Test',
        sublink: '',
        left: 'right',
      },
      tooltip: {
        trigger: 'item',
        showDelay: 0,
        transitionDuration: 0.2,
      },
      visualMap: {
        left: 'right',
        min: 500000,
        max: 38000000,
        inRange: {
          color: [
            '#313695',
            '#4575b4',
            '#74add1',
            '#abd9e9',
            '#e0f3f8',
            '#ffffbf',
            '#fee090',
            '#fdae61',
            '#f46d43',
            '#d73027',
            '#a50026',
          ],
        },
        text: ['High', 'Low'],
        calculable: true,
      },
      toolbox: {
        show: true,
        //orient: 'vertical',
        left: 'left',
        top: 'top',
        feature: {
          dataView: { readOnly: false },
          restore: {},
          saveAsImage: {},
        },
      },
      series: [
        {
          name: 'USA PopEstimates',
          type: 'map',
          roam: true,
          map: 'Europe',
          emphasis: {
            label: {
              show: true,
            },
          },
          data: [
            { name: 'France', value: 4822023 },
            { name: 'Spain', value: 1855525 },
            { name: 'Portugal', value: 2758931 },
          ],
        },
      ],
    };
  }
}
