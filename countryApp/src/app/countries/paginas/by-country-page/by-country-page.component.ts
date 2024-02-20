import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../servicios/country.service';
import { SearchBoxComponent } from '../../../shared/component/search-box/search-box.component';
import { CommonModule } from '@angular/common';
import { CountryTableComponent } from '../../components/country-table/country-tables.component';

@Component({
  selector: 'app-by-country-page',
  standalone: true,
  imports: [SearchBoxComponent, CommonModule, CountryTableComponent],
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {
  countries: Country[] = []
  searchValue: string = '';
  exception : boolean = false;
  placeholder : string = 'Busca  país...';

  constructor(private countryService: CountryService) { }

  onSearch(searchTerm: string) {
    this.exception = false;
    this.searchValue  = searchTerm;

    this.countryService.getCountriesByName( this.searchValue )
      .subscribe( (countries) => {
        this.countries = countries;
      }, (err) => {
        this.exception = true;
        this.countries = [];
      });

  }
}
