import {Injectable} from 'angular2/core';
import { BackendService } from './backend.service';
import { Roll } from '../types/roll';

@Injectable()
export class RollService {

    constructor(public backend: BackendService) {}

    allaRoller(){
        return this.backend.hämta(this.backend.basUrl + '/roll');
    }
}
