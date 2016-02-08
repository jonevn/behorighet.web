import {Component, OnInit} from 'angular2/core';
import {Roll} from '../types/roll';
import {RollService} from '../services/roll.service';

@Component({
  selector: 'lista-roller',
  templateUrl: 'app/lista-roller.html',
  providers: [RollService]
})
export class ListaRollerComponent implements OnInit {

  private roller: Roll[];

  constructor(public _rollService: RollService) {}

  ngOnInit(){
    this.hamtaAllaRoller();
  }

  hamtaAllaRoller(){
    this._rollService.allaRoller().subscribe(roller => this.roller = roller);
  }

}
