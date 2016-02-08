import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';


@Injectable()
export class BackendService {

  basUrl: string = 'http://localhost:8080/behorighet';
  headers: Headers = new Headers();

  constructor(public http : Http) {
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  hämta(uri: string) {
    return this.http.get(uri, { headers: this.headers}).map(res => res.json());
  }

  uppdatera(uri: string, obj: any) {
    return this.http.put(uri, JSON.stringify(obj), {headers: this.headers}).map(res => res.json());
  }

  skapa(uri: string, obj: any) {
    return this.http.post(uri, JSON.stringify(obj), {headers: this.headers}).map(res => res.json());
  }

  taBort(uri: string) {
    return this.http.delete(uri, {headers: this.headers}).map(res => res.json());
  }
}
