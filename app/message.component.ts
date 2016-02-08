import {Component, OnDestroy} from 'angular2/core';
import {MessageService} from './message.service';
import {Meddelande, MeddelandeTyp} from './types/meddelande';

@Component({
    selector: 'message',
    templateUrl: 'app/message.html'
})
export class MessageComponent implements OnDestroy {

    meddelande: Meddelande;

    timeout: number = 2000;

    constructor(public _messageService: MessageService) {
        this._messageService.meddelande$.subscribe(meddelande => this.setMessage(meddelande));
    }

    setMessage(meddelande: Meddelande) {
        this.meddelande = meddelande;
        setTimeout(() => {
            this.meddelande = undefined;
            this.cancelTimeout();
        }, this.timeout);
    }

    cancelTimeout() {
        clearTimeout(this.timeout);
    }

    ngOnDestroy() {
        this.cancelTimeout();
    }

    meddelandeFinns() {
        return this.meddelande != undefined;
    }

    close() {
        this.meddelande = undefined;
    }

    messageType() {
        switch (this.meddelande.meddelandeTyp) {
            case MeddelandeTyp.WARNING:
                return 'alert-warning';
            case MeddelandeTyp.INFO:
                return 'alert-info';
            case MeddelandeTyp.ERROR:
                return 'alert-danger';
            case MeddelandeTyp.OK:
                return 'alert-success';
        }
    }
}
