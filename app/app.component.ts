import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouteConfig, RouterLink,RouterOutlet} from 'angular2/router';

// Meny
import {MenyComponent} from './meny.component'

// Meddelanden
import {MessageComponent} from './message.component';

// Components
import {ListaAnvandareComponent} from './anvandare/lista-anvandare.component';
import {SkapaAnvandareComponent} from './anvandare/skapa-anvandare.component';
import {ListaRollerComponent} from './roll/lista-roller.component';
import {ListaRattigheterComponent} from './rattighet/lista-rattigheter.component';

// Backendservice
import {BackendService} from './services/backend.service';

// MessageService
import {MessageService} from './message.service';

//Services
import {AnvandareService} from './services/anvandare.service';
import {RollService} from './services/roll.service';
import {RattighetService} from './services/rattighet.service';

@Component({
    selector: 'behorighet',
    template: `
        <meny></meny>
        <router-outlet></router-outlet>
        <message></message>
    `,
    directives: [MenyComponent, MessageComponent, ListaAnvandareComponent, SkapaAnvandareComponent, ListaRollerComponent, ListaRattigheterComponent, RouterOutlet],
    providers: [HTTP_PROVIDERS, BackendService, MessageService, AnvandareService, RollService, RattighetService],
})
@RouteConfig([
  {path:'lista-anvandare', name:'ListaAnvändare', component: ListaAnvandareComponent},
  {path:'skapa-anvandare', name:'SkapaAnvändare', component: SkapaAnvandareComponent},
  {path:'lista-roller', name:'ListaRoller', component: ListaRollerComponent},
  {path:'lista-rattigheter', name:'ListaRattigheter', component: ListaRattigheterComponent}
])
export class AppComponent {}
