import {Link} from './link';

export class Anvandare {
    id: string;
    namn: string;
    links: Link[];

    constructor(id: string, namn: string, links: Link[]) {
        this.id = id;
        this.namn = namn;
        this.links = links;
    }

    harTaBortLank(){
      for(var link of this.links){
          if(link.relation == "taBort"){
            return true;
          }
      }
      return false;
    }

    taBortLank(){
      for(var link of this.links){
          if(link.relation == "taBort"){
            return link;
          }
      }
    }
}
