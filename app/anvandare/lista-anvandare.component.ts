import {Component, OnInit} from 'angular2/core';
import {Anvandare} from '../types/anvandare';
import {Anvandarroll} from '../types/anvandarroll';
import {Roll} from '../types/roll';
import {AnvandareService} from '../services/anvandare.service';
import {Meddelande, MeddelandeTyp} from '../types/meddelande';
import {MessageService} from '../message.service';

@Component({
  selector: 'lista-anvandare',
  templateUrl: 'app/anvandare/lista-anvandare.html',
  providers: [AnvandareService]
})
export class ListaAnvandareComponent implements OnInit {

    private anvandarna : Anvandare[];
    private anvandareRoller = new Map<string, Roll[]>();
    private tillgangligaRoller = new Map<string, Roll[]>();

    constructor(private _anvandareService: AnvandareService, private _messageService: MessageService) {}

    ngOnInit(){
        this.hamtaAllaAnvandare();
    }

    hamtaAllaAnvandare(){
      this._anvandareService.allaAnvandare().subscribe(anvandare => this.anvandarna = anvandare);
      this._messageService.publish(new Meddelande('Hämtat användare', MeddelandeTyp.OK));
    }

    public visaRoller(anvandare: Anvandare){
      this._anvandareService.hamtaRoller(anvandare).subscribe(anvandarroller => this.anvandareRoller.set(anvandare.id, anvandarroller));
      this._anvandareService.hämtaTillgängligaRoller(anvandare).subscribe(anvanddarroller => this.tillgangligaRoller.set(anvandare.id, anvanddarroller));
    }

    public visasRoller(anvandare: Anvandare){
      return this.anvandareRoller.has(anvandare.id);
    }

    public roller(id: string){
      return this.anvandareRoller.get(id);
    }

    public tillRoller(id: string){
      return this.tillgangligaRoller.get(id);
    }

    public väljRoll(användarroll: Anvandarroll){
      return this._anvandareService.laggTillRoll(användarroll);
    }

    public doljRoller(id: string){
      this.anvandareRoller.delete(id);
      this.tillgangligaRoller.delete(id);
    }

    public taBortAnvandare(anvandare: Anvandare){
      this._anvandareService.taBort(anvandare).subscribe(data => this.hamtaAllaAnvandare());
    }

    public taBortAllaRoller(anvandare: Anvandare){
      this._anvandareService.taBortAllaRoller(anvandare).subscribe(data => this.hamtaAllaAnvandare());
      this.anvandareRoller.delete(anvandare.id);
    }
}
