import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  nombreAlumno : string = "José Francisco Carrión Ramos";
  marca : string = "DWEC";
  actualYear: number = new Date().getFullYear();

}