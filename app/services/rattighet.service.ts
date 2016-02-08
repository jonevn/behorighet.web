import {Injectable} from 'angular2/core';
import { Http } from 'angular2/http';
import { Rattighet } from '../types/rattighet';

@Injectable()
export class RattighetService {

    constructor(public http: Http) {}

    allaRattigheter(){
        return this.http.get('http://localhost:8080/behorighet/rattighet').map(res => res.json());
    }
}
