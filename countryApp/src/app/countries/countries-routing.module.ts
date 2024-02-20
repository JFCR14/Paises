
import { Routes } from "@angular/router";

import { ByCountryPageComponent } from "./paginas/by-country-page/by-country-page.component";
import { ByRegionPageComponent } from "./paginas/by-region-page/by-region-page.component";
import { CountryPageComponent } from "./paginas/country-page/country-page.component";
import { ByCapitalPageComponent } from "./paginas/py-capital-page/py-capital-page.component";


export const CountriesRoutingModule: Routes = [
    { path: 'by-capital', component: ByCapitalPageComponent},
    { path: 'by-country', component: ByCountryPageComponent },
    { path: 'by-region', component: ByRegionPageComponent },
    { path: 'country', component: CountryPageComponent },
    { path: 'country/:id', component: CountryPageComponent }
  ];
  
