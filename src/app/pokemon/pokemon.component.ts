import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
    pokemon: any = [];
    id: any;
    //Atributos
    name: string = "";
    //Atributos mayormente redundantes
    imagenes: any[] = [];
    imgPrincipal: string = "";
    //Extras
    juegos: number = 0;
    movimientos: number = 0;
  constructor(
    private router: Router,
    private dataService: DataService,
    private activedRoute: ActivatedRoute) {
      this.id = this.activedRoute.snapshot.params['id'];
      
  }

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(): any{
    this.dataService.getPokemonById(this.id).subscribe(
      (response: any) => {
        //Recuperando toda la informacion del pokemon
        this.pokemon = response;
        //Recuperando información solicitada
        this.name = response.name; //Nombre
        this.imgPrincipal = response.sprites.front_default;
        //Extra
        this.movimientos = response.moves.length;
        this.juegos = response.game_indices.length;
        //console.log(this.pokemon);
        console.log(this.getImagenes());
    });
  }

  getName():string{
    return this.name;
  }

  getImagenes(): any{
    if(this.pokemon.sprites.back_default)
      this.imagenes.push({'perfil':'Back Default', 'url':this.pokemon.sprites.back_default});
    if(this.pokemon.sprites.back_female)
      this.imagenes.push({'perfil':'Back Female', 'url':this.pokemon.sprites.back_female});
    if(this.pokemon.sprites.back_shiny)
      this.imagenes.push({'perfil':'Back Shiny', 'url':this.pokemon.sprites.back_shiny});
    if(this.pokemon.sprites.back_shiny_female)
      this.imagenes.push({'perfil':'Back Shiny Female', 'url':this.pokemon.sprites.back_shiny_female});
    if(this.pokemon.sprites.front_default)
      this.imagenes.push({'perfil':'Front Default', 'url':this.pokemon.sprites.front_default});
    if(this.pokemon.sprites.front_female)
      this.imagenes.push({'perfil':'Front Female', 'url':this.pokemon.sprites.front_female});
    if(this.pokemon.sprites.front_shiny)
      this.imagenes.push({'perfil':'Front Shiny', 'url':this.pokemon.sprites.front_shiny});
    if(this.pokemon.sprites.front_shiny_female)
      this.imagenes.push({'perfil':'Front Shiny Female', 'url':this.pokemon.sprites.front_shiny_female});
    return this.imagenes;
  }

  regresar() {
    this.router.navigate([""]);
  }

}
