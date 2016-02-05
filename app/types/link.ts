export class Link {
    relation: string;
    uri: string;
    httpMethod: string;
    mediaTypes: string;

    constructor(relation: string, uri: string, httpMethod: string, mediaTypes: string){
      this.relation = relation;
      this.uri = uri;
      this.httpMethod = httpMethod;
      this.mediaTypes = mediaTypes;
    }

    getRelation() {
      return this.relation;
    }
}
