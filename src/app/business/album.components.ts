import { Component, Input, OnInit } from '@angular/core';
import { album } from './album';

import { Router } from '@angular/router';

@Component({
    selector: 'album',
    template: '<div><a (click)="gotoDetail()">'+
                '<img src="{{album.cover}}" alt="" />'+
                '<h3>{{album.nom}}</h3>' +
              '</a></div>'
})

export class AlbumComponent implements  OnInit{
    @Input() album: album;

    constructor (private router: Router) {}

    ngOnInit() {
    }

    gotoDetail() {
        this.router.navigate(['/albumDetail/', this.album.id]);
    }
}