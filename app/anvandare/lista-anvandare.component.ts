import {Component, OnInit} from 'angular2/core';
import {Anvandare} from '../types/anvandare';
import {Roll} from '../types/roll';
import {AnvandareService} from '../services/anvandare.service';

@Component({
  selector: 'lista-anvandare',
  templateUrl: 'app/lista-anvandare.html',
  providers: [AnvandareService]
})
export class ListaAnvandareComponent implements OnInit {

    private anvandarna : Anvandare[];
    private anvandareRoller = new Map<string, Roll[]>();

    constructor(private _anvandareService: AnvandareService) {}

    ngOnInit(){
        this.hamtaAllaAnvandare();
    }

    hamtaAllaAnvandare(){
      this._anvandareService.allaAnvandare().subscribe(anvandare => this.anvandarna = anvandare);
    }

    public visaRoller(anvandare: Anvandare){
      this._anvandareService.hamtaRoller(anvandare).subscribe(anvandarroller => this.anvandareRoller.set(anvandare.id, anvandarroller));
    }

    public visasRoller(anvandare: Anvandare){
      return this.anvandareRoller.has(anvandare.id);
    }

    public roller(id: string){
      return this.anvandareRoller.get(id);
    }

    public doljRoller(id: string){
      this.anvandareRoller.delete(id);
    }

    public taBortAnvandare(anvandare: Anvandare){
      this._anvandareService.taBort(anvandare).subscribe(data => this.hamtaAllaAnvandare());
    }

    public taBortAllaRoller(anvandare: Anvandare){
      this._anvandareService.taBortAllaRoller(anvandare).subscribe(data => this.hamtaAllaAnvandare());
      this.anvandareRoller.delete(anvandare.id);
    }
}
