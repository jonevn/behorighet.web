import {Injectable} from 'angular2/core';
import { Http } from 'angular2/http';
import {Anvandare} from './types/anvandare';

@Injectable()
export class AnvandareService {

    constructor(public http: Http) {}

    getAllaAnvandare(){
        return this.http.get('http://localhost:8080/behorighet/anvandare')
            .map(res => res.json())
            .map((allaAnvandare: Array<any>) => {
                let result: Array<Anvandare> = [];
                if(allaAnvandare) {
                    allaAnvandare.forEach((anvandare) => {
                    result.push(new Anvandare(anvandare.id, anvandare.namn, anvandare.links))
                });
            }
            return result;
          });
    }

    taBort(anvandare: Anvandare){
      this.http.delete(anvandare.taBortLank().uri);
    }
}
