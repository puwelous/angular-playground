import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-weather-list-item',
  templateUrl: './weather-list-item.component.html',
})

export class WeatherListItemComponent {

  @Input() measurementDate:string;

  @Input() measurementTime:string;

  @Input() temperature:number;

  @Input() humidity:number;

  constructor() {
  }

}
