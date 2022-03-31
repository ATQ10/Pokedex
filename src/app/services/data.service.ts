import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NumberFormatStyle } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) {  }

  //Obtener Pokemones
  getPokemons(limit: number, offset: number){
    return this.http.get("https://pokeapi.co/api/v2/pokemon?limit="+limit+"&&offset="+offset);
  }

  //Obtener información de un pokemon en específico
  getFullDataPokemon(url: string){
    return this.http.get(url);
  }

  //Obtener información de un pokemon en específico por ID
  getPokemonById(id: string){
    return this.http.get("https://pokeapi.co/api/v2/pokemon/"+id+"/");
  }
}
