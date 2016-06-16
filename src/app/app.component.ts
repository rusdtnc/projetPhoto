import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

import { Routes , Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { routes } from './app.route';
import {GalleryService} from "./business/gallery.service";
import {AlbumService} from "./business/album.service";

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    template:
    '<header id="header">'+
    '<a class="avatar" href="#" (click)="goHome()"><img src="https://lh3.googleusercontent.com/-9pM4PjphU0U/Vy1wCA5ZriE/AAAAAAAALwk/oMiQNppj_mAty_OrPXYtIfHFiszZOtRywCHM/6281800235154517537" alt="" /></a>'+
   '<h1><strong>Rico et Rio en Calédo</strong>, les photos en attendant plus de contenu sur le site</h1>'+
    '</header>' +
    '<router-outlet></router-outlet>',
    providers: [AppService, GalleryService, AlbumService, ROUTER_PROVIDERS]
})

@Routes(routes)
export class AppComponent implements  OnInit{

    constructor (private router : Router) {}

    ngOnInit() {
    }

    goHome() {
        this.router.navigate(['/gallery']);
    }
}