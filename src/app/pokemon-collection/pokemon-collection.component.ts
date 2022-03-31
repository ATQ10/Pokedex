import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-pokemon-collection',
  templateUrl: './pokemon-collection.component.html',
  styleUrls: ['./pokemon-collection.component.css']
})
export class PokemonCollectionComponent implements OnInit {
  pokemons: any[] = [];
  page = 1;
  totalPokemons: number = 0;
  
  constructor(
    private router: Router,
    private dataService: DataService
    ) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): any{
    this.dataService.getPokemons( 12, 12*(this.page-1) ).subscribe(
      (response: any) => {
        this.totalPokemons = response.count;
        response.results.forEach((element: any) => {
          //Accediendo a información por URL
          this.dataService.getFullDataPokemon(element.url).subscribe(
            (newResponse: any) => {
              this.pokemons.push(newResponse);
            });
        });
    });
    console.log(this.getPokemonsSort());
  }
  
  getPokemonsSort(): any{
    //Ordenamos pokemosn por ID
    return this.pokemons.sort((pok1, pok2)=> {return parseInt(pok1.id,10) - parseInt(pok2.id,10)});
  }

  verPokemon(id: number): any{
    console.log(id);
    this.router.navigate(["pokemon",id]);
  }
}
