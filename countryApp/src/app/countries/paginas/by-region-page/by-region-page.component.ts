import { Component } from '@angular/core';
import { CountryService } from '../../servicios/country.service';
import { Country } from '../../interfaces/country';
import { SearchBoxComponent } from '../../../shared/component/search-box/search-box.component';
import { CommonModule } from '@angular/common';
import { CountryTableComponent } from '../../components/country-table/country-tables.component';

@Component({
  selector: 'app-by-region-page',
  standalone: true,
  imports: [SearchBoxComponent, CommonModule, CountryTableComponent],
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  countries: Country[] = []
  searchValue: string = '';
  exception : boolean = false;
  placeholder : string = 'Busca la region de algún país...';

  constructor(private countryService: CountryService) { }

  onSearch(searchTerm: string) {
    this.exception = false;
    this.searchValue  = searchTerm;

    this.countryService.getCountriesByRegion( this.searchValue )
      .subscribe( (countries) => {
        this.countries = countries;
      }, (err) => {
        this.exception = true;
        this.countries = [];
      });

  }
}
