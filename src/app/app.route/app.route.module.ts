import { DashboardComponent } from './../dashboard/dashboard.component';
import { ProduitComponent } from './../produit/produit.component';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


export const appRoutes: Routes = [
  {path: 'produits' , component: ProduitComponent},
  {path: 'dashboard' , component: DashboardComponent},
  {path: '' ,  redirectTo : '/produits' , pathMatch: 'full'}
];

@NgModule({
  imports: [
     RouterModule.forRoot(
       appRoutes,
       {enableTracing: true}
     )
  ],
  exports: [RouterModule]
})
export class AppRouteModule {





 }
