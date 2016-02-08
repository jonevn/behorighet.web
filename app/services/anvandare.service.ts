import {Injectable} from 'angular2/core';
import {Anvandare} from '../types/anvandare';
import {BackendService} from './backend.service';

@Injectable()
export class AnvandareService {

    constructor(public backend: BackendService) {}

    allaAnvandare(){
        return this.backend.hämta(this.backend.basUrl + '/anvandare')
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
      return this.backend.taBort(anvandare.lankMedRelation("taBort").uri);
    }

    hamtaRoller(anvandare: Anvandare){
      return this.backend.hämta(anvandare.lankMedRelationOchMetod("roller", "GET").uri);
    }

    taBortAllaRoller(anvandare: Anvandare){
      return this.backend.taBort(anvandare.lankMedRelationOchMetod("roller", "DELETE").uri);
    }

    laggTillRoll(anvandareId: string, rollId: string){
      this.backend.uppdatera(this.backend.basUrl + '/anvandarroll/' + anvandareId + '/' + rollId, "");
    }

    skapa(anvandare: Anvandare){
      return this.backend.skapa(this.backend.basUrl + '/anvandare', anvandare);
    }
  }
