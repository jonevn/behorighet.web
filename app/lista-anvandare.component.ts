import {Component, OnInit} from 'angular2/core';
import {Anvandare} from './types/anvandare';
import {AnvandareService} from './anvandare.service';

@Component({
  selector: 'lista-anvandare',
  template: `
    <ul>
      <li *ngFor="#anvandare of anvandarna">
        <span>{{anvandare.id}}</span> {{anvandare.namn}} <a href="#" (click)="taBortAnvandare(anvandare)" *ngIf="anvandare.harTaBortLank()">ta bort</a>
      </li>
    </ul>
  `,
  providers: [AnvandareService]
})
export class ListaAnvandareComponent implements OnInit {

    private anvandarna : Anvandare[];

    constructor(private _anvandareService: AnvandareService) {}

    ngOnInit(){
        this.hamtaAllaAnvandare();
    }

    hamtaAllaAnvandare(){
      this._anvandareService.getAllaAnvandare().subscribe(anvandare => this.anvandarna = anvandare);
    }

    taBortAnvandare(anvandare: Anvandare){
      this._anvandareService.taBort(anvandare);
    }

}
