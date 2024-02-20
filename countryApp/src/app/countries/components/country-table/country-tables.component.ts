import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-country-table',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './country-tables.component.html',
  styleUrl: './country-tables.component.css'
})
export class CountryTableComponent {

  @Input() countries: Country[] = [];

  constructor() { }

}