import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'
// para que sea capaz de interpretar correctamente las etiquetas de ionic

import { PersonajesComponent } from './personajes/personajes.component';
import { PersonajeComponent } from './personaje/personaje.component';

import { EpisodiosComponent } from './episodios/episodios.component';
import { EpisodioComponent } from './episodio/episodio.component';


@NgModule({
  declarations: [
    PersonajesComponent,
    PersonajeComponent,
    EpisodiosComponent,
    EpisodioComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    PersonajesComponent,
    EpisodiosComponent
  ]
  // los exports los hacemos manualmente
})
export class ComponentsModule { }
