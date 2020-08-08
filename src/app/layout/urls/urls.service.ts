
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UrlsService {

    constructor() { }

    getUrls() {
        return [{ label: 'url11', id: 1},
        { label: 'url22', id: 2},
        { label: 'url33', id: 3 }];
    }

    getExpressions() {
        return [{ label: 'expression 1', id: 1},
        { label: 'expression 2', id: 2},
        { label: 'expression 3', id: 3 }];
    }


}
