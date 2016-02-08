import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouteConfig, RouterLink,RouterOutlet} from 'angular2/router';

// Meny
import {MenyComponent} from './meny.component'

// Components
import {ListaAnvandareComponent} from './anvandare/lista-anvandare.component';
import {SkapaAnvandareComponent} from './anvandare/skapa-anvandare.component';
import {ListaRollerComponent} from './roll/lista-roller.component';
import {ListaRattigheterComponent} from './rattighet/lista-rattigheter.component';

//Services
import {AnvandareService} from './services/anvandare.service';
import {RollService} from './services/roll.service';
import {RattighetService} from './services/rattighet.service';

@Component({
    selector: 'behorighet',
    template: `
        <meny></meny>
        <router-outlet></router-outlet>
    `,
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
