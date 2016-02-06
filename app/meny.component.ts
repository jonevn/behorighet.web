import {Component} from 'angular2/core';
import {RouterLink, Location} from 'angular2/router';

@Component({
    selector: 'meny',
    templateUrl: 'app/meny.html',
    //styleUrls: ['node_modules/bootstrap/dist/css/bootstrap.css'],
    directives: [RouterLink]
})
export class MenyComponent {

  constructor(public location: Location) {

  }

  isActive(alias: string){
    return this.location.path() == alias;
  }
}
