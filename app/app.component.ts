import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouteConfig, RouterLink,RouterOutlet} from 'angular2/router';
import {MenyComponent} from './meny.component'
import {ListaAnvandareComponent} from './lista-anvandare.component';
import {SkapaAnvandareComponent} from './skapa-anvandare.component';
import {ListaRollerComponent} from './lista-roller.component';
import {ListaRattigheterComponent} from './lista-rattigheter.component';
import {AnvandareService} from './anvandare.service';
import {RollService} from './roll.service';
import {RattighetService} from './rattighet.service';

@Component({
    selector: 'behorighet',
    template: `
        <meny></meny>
        <router-outlet></router-outlet>
    `,
    //styleUrls: ['node_modules/bootstrap/dist/css/bootstrap.css'],
    directives: [MenyComponent, ListaAnvandareComponent, SkapaAnvandareComponent, ListaRollerComponent, ListaRattigheterComponent, RouterOutlet],
    providers: [HTTP_PROVIDERS, AnvandareService, RollService, RattighetService],
})
@RouteConfig([
  {path:'lista-anvandare', name:'ListaAnvändare', component: ListaAnvandareComponent},
  {path:'skapa-anvandare', name:'SkapaAnvändare', component: SkapaAnvandareComponent},
  {path:'lista-roller', name:'ListaRoller', component: ListaRollerComponent},
  {path:'lista-rattigheter', name:'ListaRattigheter', component: ListaRattigheterComponent}
])
export class AppComponent {}
