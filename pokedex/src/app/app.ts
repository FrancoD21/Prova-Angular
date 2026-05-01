import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pokemon } from './models/pokemon.model';
import { PokemonDetail } from './pokemon-detail/pokemon-detail';

@Component({
  selector: 'app-root',
  imports: [PokemonDetail],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pokedex');

  selectedPokemon?: Pokemon;

  myPokemons: Pokemon[] = [
    {id: 1, name: 'Bulbasaur', type: 'Erba', imageURL: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png', description:'Dopo la nascita, per un periodo di tempo cresce assorbendo i nutrienti stipati nel bulbo sul dorso.', hp:44},
    {id: 4, name: 'Charmander', type: 'Fuoco', imageURL:'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png', description:'La fiamma che ha sulla coda indica lo stato della sua forza vitale: quando è fiacco, la fiamma è fioca', hp:44},
    {
      id: 7, 
      name: 'Squirtle', 
      type: 'Acqua', 
      hp: 44,
      imageURL: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png', 
      description: 'Dopo la nascita il suo dorso si indurisce diventando una conchiglia. Spruzza schiuma dalla bocca.'
    },
    {
      id: 25, 
      name: 'Pikachu', 
      type: 'Elettro', 
      hp: 35,
      imageURL: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png', 
      description: 'Quando scova qualcosa di nuovo, lo investe con una scarica elettrica. Se vedete una bacca annerita, è segno che questo Pokémon ha preso lucciole per lanterne.'
    },
    {
      id: 39, 
      name: 'Jigglypuff', 
      type: 'Folletto', 
      hp: 115,
      imageURL: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/039.png', 
      description: 'Se i suoi occhi si illuminano, inizia a cantare una ninna nanna dalla melodia rassicurante che addormenta chiunque la ascolti.'
    },
    {
      id: 94, 
      name: 'Gengar', 
      type: 'Spettro', 
      hp: 60,
      imageURL: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/094.png', 
      description: 'Si dice che emerga dal buio per rubare la vita a chi si è perso in montagna.'
    },
    {
      id: 133, 
      name: 'Eevee', 
      type: 'Normale', 
      hp: 55,
      imageURL: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/133.png', 
      description: 'Grazie alla sua struttura genetica irregolare, può mutare forma in base all’ambiente circostante.'
    },
    {
  id: 6, 
  name: 'Charizard', 
  type: 'Fuoco', 
  hp: 78,
  imageURL: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/006.png', 
  description: 'Sputa fiamme così calde da fondere le rocce. Causa talvolta incendi boschivi senza volerlo.'
},
{
  id: 150, 
  name: 'Mewtwo', 
  type: 'Psico', 
  hp: 106,
  imageURL: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/150.png', 
  description: 'Un Pokémon creato combinando i geni di Mew. Si dice che sia il più feroce tra i Pokémon.'
},
{
  id: 143, 
  name: 'Snorlax', 
  type: 'Normale', 
  hp: 150,
  imageURL: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/143.png', 
  description: 'Il suo stomaco può digerire qualsiasi cosa, anche cibo ammuffito o andato a male.'
},
{
  id: 131, 
  name: 'Lapras', 
  type: 'Acqua', 
  hp: 130,
  imageURL: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/131.png', 
  description: 'Un Pokémon intelligente che ama trasportare le persone sul dorso attraverso il mare.'
}
  ]

  selectPokemon(p:Pokemon){
    this.selectedPokemon = p;

  }
}
