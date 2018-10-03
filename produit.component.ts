import { Produit } from './../shared/produit';
import { ProduitMockService } from './../service/produit.mock.service';
import { Component, OnInit, Inject } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data-service.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {


  
  produitRech = "";
  produitGroup: FormGroup;
  submitted = false;
  produit: Produit = {id: 0 ,  ref: '', quantitie: 0, prix: 0 };

  modification = false;

  constructor(private produitService: ProduitMockService, private formBuilder: FormBuilder , private dataService : DataService) {
    this.produitGroup = this.formBuilder.group({
      ref : ['', Validators.required],
      quantitie : ['0', Validators.required],
      prix : ['0', Validators.required]
    });
  }

    produits: Produit[];


  ngOnInit() {
   this.getProduits();
   //this.dataService.currentMessage.subscribe((produitRech)=>this.produitRech=produitRech);
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
    this.produit={id: 0 ,  ref: '', quantitie: 0, prix: 0 };
  }

  AjouterProduit() {
    this.produitService.AjouterProduit(this.produit).subscribe(
      res => {
        this.getProduits(); }
    );
  }

  produitParId(id){
    this.modification=true;
    this.produitService.produitParId(id).subscribe(
      res=>{
        this.produit=res
      }
    );
  }

  majProduit(id){
    this.produitService.majProduit(id,this.produit).subscribe(
      res=>{
        this.getProduits();
      }
    );
  }

  onSubmit() {
    if (this.produitGroup.invalid) {
        return;
    }
    if(!this.modification){
    this.produit.id= new Date().getUTCMilliseconds();
    this.AjouterProduit();
    this.produit={id: 0 ,  ref: '', quantitie: 0, prix: 0 };}
    else{
      this.majProduit(this.produit.id);
      this.modification=false;
      this.produit={id: 0 ,  ref: '', quantitie: 0, prix: 0 };
    }
}

}
