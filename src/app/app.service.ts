import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable }     from 'rxjs/Rx';
import { album }     from './business/album';

@Injectable()
export class AppService {
    constructor (private http: Http) {}
    private picasaUrl = 'https://picasaweb.google.com/data/feed/api/user/111994550191039689693?alt=json&kind=album&v=2.0&fields=entry(title,link,gphoto:numphotos,media:group(media:content))';  // URL to web API
    getAlbums (): Observable<album[]> {
        return this.http.get(this.picasaUrl)
            .map(this.extractAlbums)
            .catch(this.handleError);
    }
    private extractAlbums(res: Response){
        let body = res.json();
        let response : album[];
        response = body.feed.entry.map(entry => new album(entry.title.$t,entry.gphoto$numphotos.$t,entry.link[0].href,entry.media$group.media$content[0].url));
        return response || { };
    }
    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructurel
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}