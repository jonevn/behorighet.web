import {Injectable} from 'angular2/core';
import { Http } from 'angular2/http';
import { Roll } from '../types/roll';

@Injectable()
export class RollService {

    constructor(public http: Http) {}

    allaRoller(){
        return this.http.get('http://localhost:8080/behorighet/roll').map(res => res.json());
    }
}
