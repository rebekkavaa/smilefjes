import { InspectionsSearchResult } from "../api/inspections-search-result.model";
import { EntryViewModel } from "./entry.viewmodel";

export class InspectionsSearchResultViewModel{
    private _entries: EntryViewModel[];
    private _page:    number;
    private _pages:   number;
    private _posts:   number;
    private _currentResults: number; 

    constructor(result: InspectionsSearchResult) {
        this._page = result.page;
        this._pages = result.pages; 
        this._posts = result.posts; 
        this._entries = result.entries.map(x => new EntryViewModel(x));
        this._currentResults = result.entries.length; 
    }

    get entries(): EntryViewModel[] { return this._entries; }
    get page(): number { return this._page; }
    get pages(): number { return this._pages; }
    get posts(): number { return this._posts; }
    get currentResults(): number { return this._currentResults; }
  }