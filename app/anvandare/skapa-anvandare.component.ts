import {Component} from 'angular2/core';
import {Location, Router} from 'angular2/router';
import {Anvandare} from '../types/anvandare';
import {AnvandareService} from '../services/anvandare.service';


@Component({
  selector: 'skapa-anvandare',
  templateUrl: 'app/skapa-anvandare.html'
})
export class SkapaAnvandareComponent {
  anvandarnamn: string;
  fornamn: string;
  efternamn: string;
  epost: string;

  constructor(public _anvandareService: AnvandareService, public _location: Location, public _router: Router) {}

  avbryt(){
    this._router.navigate(['ListaAnvändare'])
  }

  skapa(){
    var anvandare = new Anvandare(undefined, this.anvandarnamn, this.fornamn, this.efternamn, this.epost, undefined);
    this._anvandareService.skapa(anvandare).subscribe(res => this._router.navigate(['ListaAnvändare']));
  }
}
