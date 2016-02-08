import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {Meddelande} from './types/meddelande';

@Injectable()
export class MessageService {

  meddelande$: Observable<Meddelande>;
  private _meddelandeObserver: any;

  constructor(){
    this.meddelande$ = new Observable(observer => this._meddelandeObserver = observer);
  }

  publish(meddelande: Meddelande) {
    this._meddelandeObserver.next(meddelande);
  }
}
