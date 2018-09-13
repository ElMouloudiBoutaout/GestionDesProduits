import { Injectable } from '@angular/core';
import { Produit } from '../shared/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitMockService {


   PRODUITS: Produit[]=[];

  constructor(){

    let p1:Produit =new Produit("Livre",50,40);
    let p2:Produit =new Produit("PC",5,400);
    let p3:Produit =new Produit("Smart Phone",20,700);
    let p4:Produit =new Produit("Cigarette",500,2);
    this.PRODUITS.push(p1,p2,p3,p4);
  }

  public getProducts():Produit[]{
    return this.PRODUITS;
  }

}
