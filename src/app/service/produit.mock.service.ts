import { Injectable } from '@angular/core';
import { Produit } from '../shared/produit';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class ProduitMockService {


  PRODUITS: Produit[] = [];
  static URL: string = "localhost:4200";


  constructor(private http: HttpClient) {
    let p1: Produit = new Produit(1,"Livre", 50, 40);
    let p2: Produit = new Produit(2,"PC", 5, 400);
    let p3: Produit = new Produit(3,"Smart Phone", 20, 700);
    let p4: Produit = new Produit(4,"Cigarette", 500, 2);
    let p5: Produit = new Produit(5,"PS4", 15, 7);

    this.PRODUITS.push(p1, p2, p3, p4, p5);
  }

  public getProducts() {
    return this.PRODUITS;
  }


  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }


  public getProductsoverHttp(): Observable<Produit[]> {
    return this.http
      .get(URL + '/produits')
      .map(response => {
        const produits = response.json();
        return produits.map((produit) => new Produit(produit));
      })
      .catch(this.handleError);
  }

  AjouterUnProduit(produit) {
    return this.http
      .post(URL + '/produits', produit)
      .map(response => {
        return new Produit(response.json());
      })
      .catch(this.handleError);
  }

  public produitParId(produitID: number): Observable<Produit> {
    return this.http
      .get(URL + '/todos/' + produitID)
      .map(response => {
        return new Produit(response.json());
      })
      .catch(this.handleError);
  }

  public majProduit(produit: Produit): Observable<Produit> {
    return this.http
      .put(URL + '/produits/' + produit.id, produit)
      .map(response => {
        return new Produit(response.json());
      })
      .catch(this.handleError);
  }

  public suppProduitparId(produitId: number): Observable<null> {
    return this.http
      .delete(URL + '/produits/' + produitId)
      .map(response => null)
      .catch(this.handleError);
  }


}
