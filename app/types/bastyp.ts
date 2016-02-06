import {Link} from './link';

export class BasTyp {

  protected links: Link[];

  constructor(links: Link[]) {
    this.links = links;
  }

  public harLankMedRelation(relation: string){
    for(var link of this.links){
      if(link.relation == relation) {
        return true;
      }
    }
    return false;
  }

  public harLankMedRelationOchMetod(relation: string, httpmetod: string){
    for(var link of this.links){
      if(link.relation == relation && link.httpMethod == httpmetod) {
        return true;
      }
    }
    return false;
  }

  public lankMedRelation(relation: string){
    return this.lankar(relation)[0];
  }

  public lankMedRelationOchMetod(relation: string, httpmetod: string){
    for(var link of this.links){
      if(link.relation == relation && link.httpMethod == httpmetod){
        return link;
      }
    }
    return undefined;
  }

  public lankar(relation: string){
    var linksWithRelation = new Array<Link>();

    for(var link of this.links){
        if(link.relation == relation){
          linksWithRelation.push(link);
        }
    }
    return linksWithRelation;
  }
}
