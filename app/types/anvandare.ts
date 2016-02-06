import {BasTyp} from './bastyp';
import {Link} from './link';

export class Anvandare extends BasTyp {
    id: string;
    anvandarnamn: string;
    fornamn: string;
    efternamn: string;
    epost: string;

    constructor(id: string, anvandarnamn: string, fornamn: string, efternamn: string, epost: string, links: Link[]) {
        this.id = id;
        this.anvandarnamn = anvandarnamn;
        this.fornamn = fornamn;
        this.efternamn = efternamn;
        this.epost = epost;
        super(links);
    }

    harTaBortLank(){
      return super.harLankMedRelation("taBort");
    }

    harTaBortAllaRollerLank(){
      return super.harLankMedRelationOchMetod("roller", "DELETE");
    }

    taBortLank(){
      return super.lankMedRelation("taBort");
    }

    taBortAllaRollerLank(){
      return super.lankMedRelationOchMetod("roller", "DELETE");
    }

    harRoller(){
      return super.harLankMedRelationOchMetod("roller", "GET");
    }
}
