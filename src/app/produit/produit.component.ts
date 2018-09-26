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

  constructor(private produitService: ProduitMockService, private formBuilder: FormBuilder ) {
    this.produitGroup = this.formBuilder.group({
      reference : ['', Validators.required, Validators.minLength(2)],
      quantitie : ['0', Validators.required],
      prix : ['', Validators.required]
    });
  }

    produits: Produit[];


  ngOnInit() {
    this.produits = this.produitService.getProducts();
  }

  onSubmit() {
    this.submitted = true;

     if (this.produitGroup.invalid) {
        return;
    }

    alert('SUCCESS!! :-)');
}

}
