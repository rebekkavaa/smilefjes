import { Entry } from "./entry.models";

export interface InspectionsSearchResult {
    entries: Entry[];
    page:    number;
    pages:   number;
    posts:   number;
}