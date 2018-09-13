import { Produit } from './../shared/produit';
import { ProduitMockService } from './../service/produit.mock.service';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  constructor(private produitService : ProduitMockService ) { }

   produits: Produit[];


  ngOnInit() {
    this.produits = this.produitService.getProducts();
  }

}
