import { Component, Input } from '@angular/core';
import { album } from './album';

@Component({
    selector: 'album',
    template: '<div>'+
    '<h2>{{album.nom}}</h2>'+
    '<a href="{{album.link}}" class="image"><img src="{{album.cover}}" alt=""></a>'+
    '</div>'
})


export class AlbumComponent {
    @Input() album: album;
}