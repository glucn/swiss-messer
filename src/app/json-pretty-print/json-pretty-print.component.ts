import { Component, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_worldLow from '@amcharts/amcharts4-geodata/worldLow';

@Component({
  templateUrl: './json-pretty-print.component.html',
  styleUrls: ['./json-pretty-print.component.scss']
})
export class JsonPrettyPrintComponent implements OnInit {


  ngOnInit(): void {
    const map = am4core.create('chartdiv', am4maps.MapChart);
    map.geodata = am4geodata_worldLow;
    map.projection = new am4maps.projections.Miller();

    const polygonSeries = new am4maps.MapPolygonSeries();
    polygonSeries.useGeodata = true;
    polygonSeries.exclude = ['AQ'];
    map.series.push(polygonSeries);

    const polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.fill = am4core.color('#74B266');

    const lineSeries = map.series.push(new am4maps.MapLineSeries());
    lineSeries.data = [{
      'multiGeoLine': [
        [
          { 'latitude': 48.856614, 'longitude': 2.352222 },
          { 'latitude': 40.712775, 'longitude': -74.005973 },
          { 'latitude': 49.282729, 'longitude': -123.120738 }
        ]
      ]
    }];


  }
}
