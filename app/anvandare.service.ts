import {Injectable} from 'angular2/core';
import { Http } from 'angular2/http';
import {Anvandare} from './types/anvandare';

@Injectable()
export class AnvandareService {

    constructor(public http: Http) {}

    allaAnvandare(){
        return this.http.get('http://localhost:8080/behorighet/anvandare')
            .map(res => res.json())
            .map((allaAnvandare: Array<any>) => {
                let result: Array<Anvandare> = [];
                if(allaAnvandare) {
                    allaAnvandare.forEach((anvandare) => {
                    result.push(new Anvandare(anvandare.id, anvandare.anvandarnamn, anvandare.fornamn, anvandare.efternamn, anvandare.epost, anvandare.links))
                });
            }
            return result;
          });
    }

    taBort(anvandare: Anvandare){
      return this.http.delete(anvandare.lankMedRelation("taBort").uri);
    }

    hamtaRoller(anvandare: Anvandare){
      return this.http.get(anvandare.lankMedRelationOchMetod("roller", "GET").uri).map(res => res.json());
    }

    taBortAllaRoller(anvandare: Anvandare){
      return this.http.delete(anvandare.lankMedRelationOchMetod("roller", "DELETE").uri);
    }

    laggTillRoll(anvandareId: string, rollId: string){
      this.http.put('http://localhost:8080/behorighet/anvandarroll/' + anvandareId + '/' + rollId, "").subscribe(data => console.log(data));
    }
}
