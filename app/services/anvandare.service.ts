import {Injectable} from 'angular2/core';
import {Anvandare} from '../types/anvandare';
import {Anvandarroll} from '../types/anvandarroll';
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

    hämtaTillgängligaRoller(användare: Anvandare){
      return this.backend.hämta(this.backend.basUrl + '/anvandarroll/' + användare.id + '/tillgangliga');
    }

    taBortAllaRoller(anvandare: Anvandare){
      return this.backend.taBort(anvandare.lankMedRelationOchMetod("roller", "DELETE").uri);
    }

    laggTillRoll(användarroll: Anvandarroll){
      this.backend.uppdatera(användarroll.lankMedRelationOchMetod("läggtill", "PUT").uri, undefined);
    }

    skapa(anvandare: Anvandare){
      return this.backend.skapa(this.backend.basUrl + '/anvandare', anvandare);
    }
  }
