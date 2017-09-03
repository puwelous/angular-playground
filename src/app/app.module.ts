import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {SearchService} from "./core/services/search.service";
import {WeatherService} from "./core/services/weather.service";
import {AppRoutingModule} from "./app.routing.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import {LayoutModule} from "./core/layout/layout.module";
import { SearchComponent } from './search/search.component';

import { SoQuestionsCardComponent } from './dashboard/cards/so-questions-card.component';
import { MixedCardComponent } from './dashboard/cards/mixed-card.component';
import { SoListItemComponent } from './dashboard/cards/items/so-list-item.component';
import { WeatherListItemComponent } from './dashboard/cards/items/weather-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchComponent,

    SoQuestionsCardComponent,
    MixedCardComponent,
    SoListItemComponent,
    WeatherListItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    LayoutModule,
    AppRoutingModule
  ],
  providers: [SearchService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
