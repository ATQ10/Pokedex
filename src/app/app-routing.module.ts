import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonCollectionComponent } from './pokemon-collection/pokemon-collection.component';
import { PokemonComponent } from './pokemon/pokemon.component';

const routes: Routes = [
  { path: '', component: PokemonCollectionComponent},
  { path: 'pokemon/:id', component: PokemonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
