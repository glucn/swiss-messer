import { Component, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_worldLow from '@amcharts/amcharts4-geodata/worldLow';
import { AirportService } from '../airport/airport.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  templateUrl: './json-pretty-print.component.html',
  styleUrls: ['./json-pretty-print.component.scss']
})
export class JsonPrettyPrintComponent implements OnInit {

  constructor(private airportService: AirportService) {}


  ngOnInit(): void {
    const mapChart = am4core.create('chartdiv', am4maps.MapChart);
    mapChart.geodata = am4geodata_worldLow;
    mapChart.projection = new am4maps.projections.Miller();

    const polygonSeries = new am4maps.MapPolygonSeries();
    polygonSeries.useGeodata = true;
    polygonSeries.exclude = ['AQ'];
    mapChart.series.push(polygonSeries);

    const polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.fill = am4core.color('#74B266');

    this.getData().subscribe(
      data => {
        const lineSeries = new am4maps.MapLineSeries();
        lineSeries.data = [{
          multiGeoLine: [data]
        }];
        mapChart.series.push(lineSeries);
      }
    );
  }

  getData(): Observable<any> {
    const points = [
      {iataCode: 'PEK'},
      {iataCode: 'CDG'},
      {iataCode: 'YXE'},
    ];

    return this.airportService.airports$.pipe(
      map(airports => {
        return points.map(
          p => {
            const airport = airports.find(a => a.iataCode === p.iataCode);
            return {
              latitude: airport.latitude,
              longitude: airport.Longitude,
            };
          }
        );
      })
    );
  }
}
