import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

import { album } from './business/album';
import { AlbumComponent } from './business/album.components';

@Component({
    selector: 'my-app',
    directives: [AlbumComponent],
    template: '<h1>Mon appli media</h1>' +
    '  <li *ngFor="let album of albums">' +
    '   <album [album]="album"></album>'+
    '</li>',
    providers: [AppService]
})


export class AppComponent implements  OnInit{

    errorMessage: string;
    albums: album[];

    constructor (private appService: AppService) {}


    ngOnInit() {
        this.getAlbums();
    }

    getAlbums() {
        this.appService.getAlbums()
            .subscribe(
                albums => this.albums = albums,
                error =>  this.errorMessage = <any>error);
    }
}