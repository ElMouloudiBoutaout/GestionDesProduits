import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  afficherLesProduits: boolean = true;

  afficherLesProduitsRecevoir($event)
  {
    this.afficherLesProduits = $event;
  }


}
