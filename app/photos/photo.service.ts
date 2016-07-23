import {Observable} from 'rxjs/Observable';
import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';

@Injectable()
export class PhotoService {
    constructor(private _http: Http) {
    }

    private _url = 'http://lorempixel.com/100/100/people?';

    getPhotos(id): Observable<Image> {
        return Observable.fromArray([
            {
                contactId: '1',
                thumbnailUrl: this._url + 1
            },
            {
                contactId: '2',
                thumbnailUrl: this._url + 2
            },
            {
                contactId: '3',
                thumbnailUrl: this._url + 3,
            }
        ]).filter(res => res.contactId == id);
    }
}
interface Image {
    contactId;
    thumbnailUrl: string;
}
