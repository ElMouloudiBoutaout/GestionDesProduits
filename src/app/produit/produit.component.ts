import { Produit } from './../shared/produit';
import { ProduitMockService } from './../service/produit.mock.service';
import { Component, OnInit, Inject } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {


  produitGroup: FormGroup;
  submitted = false;
  produit: Produit = {id: 0 ,  ref: 'xxx', quantitie: 0, prix: 0 };

  constructor(private produitService: ProduitMockService, private formBuilder: FormBuilder ) {
    this.produitGroup = this.formBuilder.group({
      reference : ['', Validators.required, Validators.minLength(2)],
      quantitie : ['0', Validators.required],
      prix : ['', Validators.required]
    });
  }

    produits: Produit[];


  ngOnInit() {
   this.getProduits();
  }

  getProduits() {
    this.produitService.getProductsoverHttp().subscribe(produits => {
      this.produits = produits;
    });
  }

  supprimerProduit (id) {
    this.produitService.supprimerProduit(id).subscribe(
      res => {
        this.getProduits(); }
    );
  }

  AjouterProduit() {
    this.produitService.AjouterProduit(this.produit).subscribe(
      res => {
        this.getProduits(); }
    );
  }

  onSubmit() {
      if (this.produitGroup.invalid) {
        return;
    }
    console.log(this.produit);
    // this.AjouterProduit();
}

}
