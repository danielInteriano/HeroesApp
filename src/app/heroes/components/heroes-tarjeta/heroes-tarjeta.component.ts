import { Component, Input } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroes-tarjeta',
  templateUrl: './heroes-tarjeta.component.html',
  styles: [
    `
      mat-card {
        margin-top: 15px;
      }
    `,
  ],
})
export class HeroesTarjetaComponent {
  @Input() heroe!: Heroe;
}
