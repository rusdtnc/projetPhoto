import { AlbumComponent } from './business/album.components';
import { GalleryComponent } from './business/gallery.components';
import { AlbumDetailComponent } from './business/albumDetail.components';

export const routes = [
    {path: '/', name: 'Gallery' , component: GalleryComponent},
    {path: '/album', name: 'Album' , component: AlbumComponent},
    {path: '/albumDetail/:id', name: 'AlbumDetail' , component: AlbumDetailComponent},
    {path: '/gallery', name: 'Gallery', component: GalleryComponent}
];