import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Heroe, Publisher } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
    `
      img {
        width: 100%;
        border-radius: 5px;
      }
    `,
  ],
})
export class AgregarComponent implements OnInit {
  publishers = [
    {
      id: 'DC Comics',
      descripcion: 'DC - Comics',
    },
    {
      id: 'Marvel Comics',
      descripcion: 'Marvel - Comics',
    },
  ];

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    publisher: Publisher.DCComics,
    first_appearance: '',
    characters: '',
    alt_img: '',
  };

  constructor(
    private heroesService: HeroesService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.router.url.includes('editar')) {
      return;
    }

    this.activatedRouter.params
      .pipe(switchMap(({ id }) => this.heroesService.getHeroePorId(id)))
      .subscribe((heroe) => (this.heroe = heroe));
  }

  //limpiar los campos para insertar un nuevo heroe
  limpiarHeroe() {
    this.heroe.superhero = '';
    this.heroe.alter_ego = '';
    this.heroe.first_appearance = '';
    this.heroe.characters = '';
    this.heroe.alt_img = '';
  }

  //método para guardar un heroe
  guardar() {
    if (this.heroe.superhero.trim().length === 0) {
      return;
    }

    if (!this.heroe.id) {
      this.heroesService.guardarHeroe(this.heroe).subscribe((heroe) => {
        this.router.navigate(['/heroes/editar', heroe.id]);
      });
      this.limpiarHeroe();
    }
  }

  //método paraactualizar un heroe
  actualizar() {
    if (this.heroe.superhero.trim().length === 0) {
      return;
    }

    if (this.heroe.id) {
      this.heroesService
        .actualizarHeroe(this.heroe)
        .subscribe((heroe) => console.log('Actualizando', heroe));
    }
  }
}
