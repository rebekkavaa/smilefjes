import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { InspectionsSearchResult } from './models/api/inspections-search-result.model';
import { InspectionsSearchResultViewModel } from './models/view_models/inspections-search-result.viewmodel';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    constructor(private readonly _httpClient: HttpClient) {}

    getResults(filters?: Object): Observable<InspectionsSearchResultViewModel> {
        let requestUrl = `https://hotell.difi.no/api/json/mattilsynet/smilefjes/tilsyn`
        requestUrl = this.getRequestUrl(filters, requestUrl)

        const result = new Subject<InspectionsSearchResultViewModel>();

        this._httpClient.get<InspectionsSearchResult>(`${requestUrl}`).subscribe((res) => {
            result.next(new InspectionsSearchResultViewModel(res))
            result.complete();
        }) 

        return result; 
    }

    getRequestUrl(filters: Object, requestUrl: string): string {
        let seperator = '?';
    
        for (let filterName in filters) {
            let filterValue = encodeURI(filters[filterName]);
            requestUrl += `${seperator}${filterName}=${filterValue}`;
            if (seperator == '?') seperator = '&';
        }
        return requestUrl;
      }
}