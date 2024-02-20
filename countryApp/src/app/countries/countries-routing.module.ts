import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { ByCountryPageComponent } from "./paginas/by-country-page/by-country-page.component";
import { ByRegionPageComponent } from "./paginas/by-region-page/by-region-page.component";
import { CountryPageComponent } from "./paginas/country-page/country-page.component";
import { ByCapitalPageComponent } from "./paginas/py-capital-page/py-capital-page.component";


const routes: Routes = [
    { path: 'by-capital', component: ByCapitalPageComponent},
    { path: 'by-country', component: ByCountryPageComponent },
    { path: 'by-region', component: ByRegionPageComponent },
    { path: 'country', component: CountryPageComponent },
    { path: 'country/:code', component: CountryPageComponent }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes), CommonModule, FormsModule],
    exports: [RouterModule]
  })
  export class CountriesRoutingModule { }