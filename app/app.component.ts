import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { AlbumsComponent } from './albums/albums.component';
import { AlbumComponent } from './album/album.component';
import { ContactComponent } from './contact/contact.component';

@Component({
    selector: 'my-app',
    templateUrl: `app/app.template.html`,
    directives: [ROUTER_DIRECTIVES, AlbumsComponent, AlbumComponent, ContactComponent],
})
@RouteConfig([
    { path: '/album', name: 'Albums', component: AlbumsComponent, useAsDefault: true },
    { path: '/album/:id', name: 'Album', component: AlbumComponent },
    { path: '/contact', name: 'Contact', component: ContactComponent },
    { path: '/*other', name: 'Other', redirectTo: ['Albums'] }
])
export class AppComponent {
}
