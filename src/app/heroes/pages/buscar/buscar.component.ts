import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { hero, Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [],
})
export class BuscarComponent implements OnInit {
  termino: string = '';
  heroes: Heroe[] = [];
  heroeSeleccionado: Heroe | undefined;
  heroe: hero = {
    id: '',
    nombreHeroe: '',
    nombreComun: '',
    publicista: '',
    primeraAparicion: '',
    personajes: '',
  };

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {}

  buscando() {
    this.heroesService
      .getSugerencias(this.termino.trim())
      .subscribe((heroes) => (this.heroes = heroes));
  }

  //método que captura la opción seleccionada
  opcionSeleccionada(event: MatAutocompleteSelectedEvent) {
    if (!event.option.value) {
      this.heroeSeleccionado = undefined;
      return;
    }
    const heroe: Heroe = event.option.value;
    this.termino = heroe.superhero;

    this.heroesService
      .getHeroePorId(heroe.id!)
      .subscribe(
        (heroe) => (
          (this.heroeSeleccionado = heroe),
          (this.heroe.id = this.heroeSeleccionado.id!),
          (this.heroe.nombreHeroe = this.heroeSeleccionado.superhero),
          (this.heroe.nombreComun = this.heroeSeleccionado.alter_ego),
          (this.heroe.publicista = this.heroeSeleccionado.publisher),
          (this.heroe.primeraAparicion =
            this.heroeSeleccionado.first_appearance),
          (this.heroe.personajes = this.heroeSeleccionado.characters)
        )
      );
  }
}
