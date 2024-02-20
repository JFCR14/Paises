import { Component, OnInit } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/component/search-box/search-box.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CountryService } from '../../servicios/country.service';

@Component({
  selector: 'app-country-page',
  standalone: true,
  imports: [SearchBoxComponent, CommonModule, RouterLink],
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit{

  country: any;

  constructor(private rutaActiva: ActivatedRoute, private countryService: CountryService) { }

  ngOnInit(): void {
    this.countryService.searchCountryByAlphaCode(this.rutaActiva.snapshot.params['id']).subscribe(
      (data) => {
        if (data) {
          this.country = data;
        } else {
          console.error('No se encontraron datos del país');
        }
      },
      (error) => {
        console.error('Error al obtener los datos del país:', error);
      }
    );
  }
}
