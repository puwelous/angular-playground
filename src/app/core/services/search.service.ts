import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export interface ISearchResultItem {
  answer_count: number;
  closed_date: number;
  closed_reason: string;
  creation_date: number;
  is_answered: boolean;
  last_activity_date: number;
  link: string;
  score: number;
  tags: Array<string>;
  title: string;
  view_count: number;
}

@Injectable()
export class SearchService {

  // private static readonly apiUrl =
  // "https://api.stackexchange.com/2.2/search?pagesize=20&order=desc&sort=activity&site=stackoverflow&intitle=";
  private static readonly apiUrl =
  'https://api.stackexchange.com/2.2/search?pagesize=${{pageSize}}&order=desc&sort=activity&site=stackoverflow&intitle=';

  constructor(private http: Http) { }

  search(keyword: string, pageSize: number): Observable<ISearchResultItem[]> {

    const url = SearchService.apiUrl.concat(keyword).replace('${{pageSize}}', pageSize.toString());

    return this.http
      .get(url)
      .map((res: Response) => {

        const data = res.json();

        // console.debug causes TSLint problems ;)
        console.log('API USAGE: ' + data.quota_remaining + ' of ' + data.quota_max + ' requests available');

        return data.items as ISearchResultItem[];
      })
      .catch((err: Response) => Observable.of(err.json()));
  }

}
