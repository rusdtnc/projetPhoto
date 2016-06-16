import { Injectable }     from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AppService {
    constructor (private http: Http) {}
}