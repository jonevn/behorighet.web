import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouteConfig, RouterLink,RouterOutlet} from 'angular2/router';
import {MenyComponent} from './meny.component'
import {ListaAnvandareComponent} from './lista-anvandare.component';
import {AnvandareService} from './anvandare.service';

@Component({
    selector: 'behorighet',
    template: `
        <meny></meny>
        <router-outlet></router-outlet>
    `,
    //styleUrls: ['node_modules/bootstrap/dist/css/bootstrap.css'],
    directives: [MenyComponent, ListaAnvandareComponent, RouterOutlet],
    providers: [HTTP_PROVIDERS, AnvandareService],
})
@RouteConfig([
  {path:'lista-anvandare', name:'ListaAnvändare', component: ListaAnvandareComponent}
])
export class AppComponent {}
