import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { SidebarComponent } from './shared/component/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'home/', component: HomePageComponent},
  { path: 'contact/', component: ContactPageComponent },
  { path: 'about/', component: AboutPageComponent },
  { path: '', component: HomePageComponent },
  { path: '**', component: HomePageComponent },
  { path: 'countries', loadChildren: () => import('./countries/countries-routing.module').then(m => m.CountriesRoutingModule) }, // Lazy loading
];
@NgModule({
    imports: [RouterModule.forRoot(routes), SidebarComponent, HttpClientModule],
  exports: [RouterModule]
  })
  export class RoutesModule { }