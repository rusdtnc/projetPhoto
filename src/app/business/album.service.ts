import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable }     from 'rxjs/Rx';
import { album }     from './album';

@Injectable()
export class AlbumService {
    constructor (private http: Http) {}
}