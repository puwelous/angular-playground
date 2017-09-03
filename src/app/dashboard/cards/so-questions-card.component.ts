import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { SearchService, ISearchResultItem } from '../../core/services/search.service';
import { QueryDefinition } from '../../query-definition';

import 'rxjs/add/observable/of';

@Component({
  selector: 'app-so-questions-card',
  templateUrl: './so-questions-card.component.html',
  styleUrls: ['./so-questions-card.component.scss'],
})
export class SoQuestionsCardComponent implements OnInit {

  @Input() queryDefinition: QueryDefinition;

  items: Observable<ISearchResultItem[]>;

  constructor(private searchService: SearchService) {
  }

  ngOnInit(): void {

    this.items = this.searchService.search(this.queryDefinition.term, this.queryDefinition.count)
      .catch(error => {
        console.error(error);
        return Observable.of<ISearchResultItem[]>([]);
      });

  }

}
