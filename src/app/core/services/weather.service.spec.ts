import { TestBed, inject } from '@angular/core/testing';

import { WeatherService } from './weather.service';
import {HttpModule} from "@angular/http";
import {APP_BASE_HREF} from "@angular/common";

describe('WeatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        WeatherService
      ]
    });
  });

  it('should ...', inject([WeatherService], (service: WeatherService) => {
    expect(service).toBeTruthy();
  }));
});
