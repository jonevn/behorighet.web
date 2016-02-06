import {BasTyp} from './bastyp';
import {Link} from './link';


export class Roll extends BasTyp {
    id: string;
    namn; string;
    links: Link[];

    constructor(id: string, namn: string, links: Link[]){
      this.id = id;
      this.namn = namn;
      super(links);
    }
}
