import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AppService } from '../app.service';
import { Grade } from '../models/view_models/entry.viewmodel';
import { InspectionsSearchResultViewModel } from '../models/view_models/inspections-search-result.viewmodel';

@Component({
  selector: 'result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css'],
})
export class ResultListComponent implements OnInit {
  result: InspectionsSearchResultViewModel;
  Grade = Grade;
  filters = {};
  query: string = '';

  constructor(
    private appService: AppService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.search();
  }

  search(filterName?: string, queryString?: string) {
    this.filters[filterName] = queryString;
    if (this.filters[filterName] == null) delete this.filters[filterName];

    if (filterName != 'page') {
      this.filters['page'] = 1;
    }

    this.setQueryParamsToUrl(filterName, queryString);

    this.appService
      .getResults(this.filters)
      .subscribe((result: InspectionsSearchResultViewModel) => {
        this.result = result;
      });
  }

  setQueryParamsToUrl(filterName?: string, queryString?: string) {
    let queryParam = {};
    queryParam[filterName] = queryString;

    this.router.navigate([], {
      queryParams: queryParam,
      queryParamsHandling: 'merge',
    });
  }
}
