export interface Heroe {
  id?: string;
  superhero: string;
  publisher: Publisher;
  alter_ego: string;
  first_appearance: string;
  characters: string;
  alt_img?: string;
}

export enum Publisher {
  DCComics = 'DC Comics',
  MarvelComics = 'Marvel Comics',
}

export interface hero {
  id: string;
  nombreHeroe: string;
  nombreComun: string;
  publicista: string;
  primeraAparicion: string;
  personajes: string;
}
