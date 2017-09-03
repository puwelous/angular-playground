import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/zip';

import { SearchService, ISearchResultItem } from '../../core/services/search.service';
import { WeatherService, IWeatherDataItem } from '../../core/services/weather.service';
import { QueryDefinition } from '../../query-definition';

// type guard to distinguish the item type
// function isSOQuestion(item: ISearchResultItem | Object): item is ISearchResultItem {
//   return (<ISearchResultItem>item).answer_count !== undefined;
// }

@Component({
  selector: 'app-mixed-card',
  templateUrl: './mixed-card.component.html',
  styleUrls: ['./mixed-card.component.scss']
})
export class MixedCardComponent implements OnInit {
  list: (ISearchResultItem | IWeatherDataItem)[];

  @Input() queryDefinition: QueryDefinition;

  constructor(private searchService: SearchService, private weatherService: WeatherService) {
    // this.soquestions = [any];
  }

  ngOnInit() {

    // used while developing to save some calls:
    // const weatherSoSearch = this.weatherService.getSOWeatherData();
    const weatherSoSearch = this.searchService.search(this.queryDefinition.term, this.queryDefinition.count);
    const weatherLocalSearch = this.weatherService.getWeatherDataFromLocalFile();

    Observable
      .zip(
      weatherSoSearch,
      weatherLocalSearch,
      (weatherSoSearchData: [ISearchResultItem], weatherLocalSearchData: [IWeatherDataItem]) => {

        const mergedData = [];
        const weatherLocalSearchDataLength = weatherLocalSearchData.length;

        for (let index = 0; index < 5; index += 1) {

          const indexOfNextItem = this.getRandomInt(weatherLocalSearchDataLength);

          const weatherSoSearchItem = weatherSoSearchData[index];
          const weatherLocalSearchItem = weatherLocalSearchData[indexOfNextItem];

          // we do not need to use type guards, we know the types already
          weatherSoSearchItem['kind'] = 'stackoverflow';
          weatherLocalSearchItem['kind'] = 'local';

          mergedData.push(weatherSoSearchItem);
          mergedData.push(weatherLocalSearchItem);

        }

        return mergedData;
      })
      .subscribe(result => this.list = result);

  }

  getRandomInt(ceil: number): number {
    return Math.floor((Math.random() * ceil));
  }

}
