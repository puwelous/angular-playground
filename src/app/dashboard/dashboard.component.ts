import { Component } from '@angular/core';

import { QueryDefinition } from '../query-definition';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  queryTermTypescript: string = 'TypeScript';

  queryTermAngular: string = 'AngularJS';

  queryTermWeather: string = 'Weather';

  queryDefinitionTypeScript: QueryDefinition;

  queryDefinitionAngular: QueryDefinition;

  queryDefinitionWeather: QueryDefinition;

  constructor() {
    this.queryDefinitionTypeScript = new QueryDefinition(10, this.queryTermTypescript);
    this.queryDefinitionAngular = new QueryDefinition(10, this.queryTermAngular);
    this.queryDefinitionWeather = new QueryDefinition(10, this.queryTermWeather);
  }

}
