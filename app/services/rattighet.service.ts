import {Injectable} from 'angular2/core';
import {BackendService} from './backend.service';
import { Rattighet } from '../types/rattighet';

@Injectable()
export class RattighetService {

    constructor(public backend: BackendService) {}

    allaRattigheter(){
        return this.backend.hämta(this.backend.basUrl + '/rattighet');
    }
}
