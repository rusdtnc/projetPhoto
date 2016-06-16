import { Component, Input, OnInit } from '@angular/core';
import { photo } from './photo';

import { Router } from '@angular/router';

@Component({
    selector: 'photo',
    template: '<div class="m-p-g__thumbs" data-google-image-layout data-max-height="350">'+
    '<img src="http://unsplash.it/600/400?image=198" data-full="http://unsplash.it/1200/800?image=198" class="m-p-g__thumbs-img" />'+
    '</div>'+
    '<div class="m-p-g__fullscreen"></div>'
})


export class PhotoComponent implements  OnInit{
    @Input() photo: photo;


    constructor (private router: Router) {

    }

    ngOnInit() {
    }

}