import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import { ISearchResultItem } from './search.service';

export interface IWeatherDataItem {
  Datum: string;
  Zeit: string;
  'Temp. A.': number;
  'Temp. 3': number;
  'Feuchte A.': number;
  Luftdruck: number;
  Regen: number;
  Wind: number;
  Richtung: number;
  Helligkeit: number;
}

@Injectable()
export class WeatherService {

  private static readonly pathToWeatherData = '/assets/data/weatherdata.json';

  constructor(private http: Http) { }

  /**
   * Used in dev to save SO API calls.
   * Mocks StackOverflow responses for "Weather" search.
   */
  getSOWeatherData(): Observable<ISearchResultItem> {
    return this.http.get('/assets/data/weather_search.json')
      .map((res: Response) => {
        return res.json().items as ISearchResultItem[];
      })
      .catch((err: Response) => Observable.of(err.json()));
  }

  getWeatherDataFromLocalFile(): Observable<IWeatherDataItem> {
    return this.http.get(WeatherService.pathToWeatherData)
      .map((res: Response) => {
        return res.json() as IWeatherDataItem[];
      })
      .catch((err: Response) => Observable.of(err.json()));
  }

}
