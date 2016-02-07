import {BasTyp} from './bastyp';
import {Link} from './link';

export class Rattighet extends BasTyp {
    id: string;
    namn: string;
    beskrivning: string;
    links: Link[];

    constructor(id: string, namn: string, beskrivning: string, links: Link[]){
      this.id = id;
      this.namn = namn;
      this.beskrivning = beskrivning;
      super(links);
    }
}
