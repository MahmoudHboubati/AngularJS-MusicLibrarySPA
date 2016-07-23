import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {PhotoService} from '../photos/photo.service';

@Component({
    templateUrl: './app/albums/albums.component.html',
    providers: [PhotoService, HTTP_PROVIDERS],
    directives: [ROUTER_DIRECTIVES]
})
export class AlbumsComponent {
    albums: [{}];
    isLoading = true;
}
