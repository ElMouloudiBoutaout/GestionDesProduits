import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  @Input()
  afficherProduit: boolean = true;

  @Output()
  afficherProduitchangementEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit() {
  }

  AfficherLesProduits(): void {
    this.afficherProduit = !this.afficherProduit;
    this.afficherProduitchangementEvent.emit(this.afficherProduit);
  }

}
