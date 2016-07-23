import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {PhotoService} from '../photos/photo.service';
import {RouteParams} from 'angular2/router';
@Component({
    templateUrl: './app/album/album.component.html',
    providers: [HTTP_PROVIDERS, PhotoService]
})
export class AlbumComponent implements OnInit {
    isLoading = true;
    photos;

    constructor(private _photoService: PhotoService,
        private _routeParams: RouteParams) {
    }

    ngOnInit() {
        this._photoService.getPhotos(this._routeParams.get('id'))
            .subscribe(photos => {
                this.isLoading = false;
                this.photos = photos;
            });
    }
}
