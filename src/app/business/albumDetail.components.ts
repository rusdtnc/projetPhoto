import { Component, OnInit, Input, HostBinding } from '@angular/core';

import { photo } from './photo';
import { PhotoComponent } from './photo.components';

import { Router, RouteSegment } from '@angular/router';
import { GalleryService } from './gallery.service';

declare var MaterialPhotoGallery: any;

@Component({
    selector: 'album-detail',
    directives : [PhotoComponent],
    template:
    '<div class="m-p-g">' +
    '<div class="m-p-g__thumbs" data-google-image-layout data-max-height="300">'+
    '<img *ngFor="let photo of photos" src="{{photo.thumbnail}}" attr.data-full="{{photo.link}}" class="m-p-g__thumbs-img"/>' +
    '</div>'+
    '<div class="m-p-g__fullscreen"></div>'+
    '</div>'
})


export class AlbumDetailComponent implements  OnInit{
    idAlbum : string;
    errorMessage : string;
    photos : photo[];

    @Input() photo: photo;

    constructor (private router: Router, private curr: RouteSegment, private galleryService : GalleryService) {
        this.idAlbum = curr.getParam('id');
    }

    ngOnInit() {
        this.getPhotos();
    }

    onComplete(){
        setTimeout(()=>{
            var elem = document.querySelector('.m-p-g');
            var gallery = new MaterialPhotoGallery(elem);
        },0);
    }

    getPhotos() {
        this.galleryService.getPhotos(this.idAlbum) .subscribe(
            photos => this.photos = photos,
            error =>  this.errorMessage = <any>error,
            () => this.onComplete());
    }
}

