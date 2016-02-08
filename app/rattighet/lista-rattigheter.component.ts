import {Component, OnInit} from 'angular2/core';
import {Rattighet} from '../types/rattighet';
import {RattighetService} from '../services/rattighet.service';

@Component({
  selector: 'lista-rattigheter',
  templateUrl: 'app/rattighet/lista-rattigheter.html',
  providers: [RattighetService]
})
export class ListaRattigheterComponent implements OnInit {

  private rattigheter: Rattighet[];

  constructor(public _rattighetService: RattighetService) {}

  ngOnInit(){
    this.hamtaAllaRattigheter();
  }

  hamtaAllaRattigheter(){
    this._rattighetService.allaRattigheter().subscribe(rattigheter => this.rattigheter = rattigheter);
  }

}
