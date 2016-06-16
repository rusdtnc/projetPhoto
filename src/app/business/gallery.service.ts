import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable }     from 'rxjs/Rx';
import { album }     from './album';
import { photo }     from './photo';

@Injectable()
export class GalleryService {
    PICASA_ALBUMS_URL : string;
    PICASA_ALBUM_PARAM : string;
    PICASA_VERSION_PARAM : string;
    PICASA_PHOTOS_URL : string;
    PICASA_PHOTO_PARAM : string;


    //https://picasaweb.google.com/data/feed/api/user/userID/album/albumName?imgmax=912

    constructor (private http: Http) {
        this.PICASA_ALBUMS_URL = 'https://picasaweb.google.com/data/feed/api/user/111994550191039689693';
        this.PICASA_PHOTOS_URL = 'https://picasaweb.google.com/data/feed/api/user/111994550191039689693/albumid/';
        this.PICASA_VERSION_PARAM = '?alt=json&v=2.0';
        this.PICASA_ALBUM_PARAM =  '&fields=entry(title,link,gphoto:id,gphoto:numphotos,media:group(media:content))';
        this.PICASA_PHOTO_PARAM =  '&imgmax=d&fields=entry(title,media:group(media:content,media:thumbnail))&thumbsize=300&max-results=1000';
    }

    getAlbums (): Observable<album[]> {
        return this.http.get(this.PICASA_ALBUMS_URL.concat(this.PICASA_VERSION_PARAM).concat(this.PICASA_ALBUM_PARAM))
            .map(this.extractAlbums)
            .catch(this.handleError);
    }
    
    getPhotos(idalbum : string) : Observable<photo[]> {
        return this.http.get(this.PICASA_PHOTOS_URL.concat(idalbum).concat(this.PICASA_VERSION_PARAM).concat(this.PICASA_PHOTO_PARAM))
            .map(this.extractPhotos)
            .catch(this.handleError);

    }
    
    private extractAlbums(res: Response){
        let body = res.json();
        let response : album[];
        response = body.feed.entry.map(entry => new album(entry.title.$t,entry.gphoto$numphotos.$t,entry.link[0].href,entry.media$group.media$content[0].url,entry.gphoto$id.$t));
        return response || { };
    }

    private extractPhotos(res: Response){
        let body = res.json();
        console.log(body);
        let response : photo[];
        response = body.feed.entry.map(entry => new photo(entry.title.$t,entry.media$group.media$content[0].url,entry.media$group.media$thumbnail[0].url));
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