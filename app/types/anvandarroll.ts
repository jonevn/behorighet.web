import {BasTyp} from './bastyp';
import {Link} from './link';

export class Anvandarroll extends BasTyp{
  anvandarId: string;
  rollId: string;
  rollNamn: string;

  constructor(anvandarId: string, rollId: string, rollNamn: string, links: Link[]){
    this.anvandarId = anvandarId;
    this.rollId = rollId;
    this.rollNamn = rollNamn;
    super(links);
  }
}
