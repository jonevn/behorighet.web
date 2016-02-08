export class Meddelande {
  meddelande: string;
  meddelandeTyp: MeddelandeTyp;

  constructor(meddelande: string,meddelandeTyp: MeddelandeTyp) {
    this.meddelande = meddelande;
    this.meddelandeTyp = meddelandeTyp;
  }
}

export enum MeddelandeTyp {
    WARNING = 0,
    INFO = 1,
    ERROR = 2,
    OK = 3
}
