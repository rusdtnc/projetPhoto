import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { album } from './album';
import { AlbumComponent } from './album.components';

import { GalleryService } from './gallery.service';

@Component({
    selector: 'gallery',
    directives : [AlbumComponent],
    template:   '<section id="main">' +
    '<section class="thumbnails">'+
    '  <album *ngFor="let album of albums" [album]="album" class="item thumb"></album>'+
    '</section>'+
    '</section>'
})


export class GalleryComponent {

    errorMessage: string;
    albums: album[];

    constructor (private galleryService : GalleryService, private router: Router) {}

    ngOnInit() {
        this.getAlbums();
    }

    getAlbums() {
        this.galleryService.getAlbums()
            .subscribe(
                albums => this.albums = albums,
                error =>  this.errorMessage = <any>error);
    }
}