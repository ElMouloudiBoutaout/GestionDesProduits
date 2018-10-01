 import { Produit } from '../shared/produit';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ProduitMockService {


  PRODUITS: Produit[] = [];
   urlProduits: string = "http://localhost:3000/produits/";


  constructor(private http: HttpClient) {

  }

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  public getProducts() {
    return this.PRODUITS;
  }


  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }


    public getProductsoverHttp(): Observable<Produit[]> {
    return this.http
      .get<Produit[]>('http://localhost:3000/produits').pipe(
        tap());
   }

   AjouterProduit (produit): Observable<any> {
    console.log(produit);
    return this.http.post<any>(this.urlProduits + 'produits', JSON.stringify(produit), this.httpOptions).pipe(
      tap((p) => console.log(`added product w/ id=${p.id}`)));
  }

  majProduit (id, product): Observable<any> {
    return this.http.put(this.urlProduits + 'produits/' + id, JSON.stringify(product), this.httpOptions).pipe(
      tap(_ => console.log(`updated product id=${id}`))
     );
  }

  supprimerProduit (id): Observable<any> {
    return this.http.delete<any>(this.urlProduits + '/' + id, this.httpOptions).pipe(
      tap(_ => console.log(`deleted product id=${id}`))
    );
  }


}
