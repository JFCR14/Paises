import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';


export const routes: Routes = [
    { path: 'home', component: HomePageComponent},
  { path: 'contact', component: ContactPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: '', component: HomePageComponent },
  
  {
    path: 'capital',
    loadChildren: () => import('./countries/countries-routing.module').then((m) => m.CountriesRoutingModule),
},
{
    path: 'countries',
    loadChildren: () => import('./countries/countries-routing.module').then((m) => m.CountriesRoutingModule),
},

{
    path: 'by-country-Page',
    loadChildren: () => import('./countries/countries-routing.module').then((m) => m.CountriesRoutingModule),
},
{
    path: 'region',
    loadChildren: () => import('./countries/countries-routing.module').then((m) => m.CountriesRoutingModule),
},
];

