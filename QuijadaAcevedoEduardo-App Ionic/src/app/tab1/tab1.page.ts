import { Component, OnInit } from '@angular/core';

import { RickymortyapiService } from '../servicios/rickymortyapi.service';

import { RespuestaPersonaje, Character } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  personajes: Character[] = [];
  constructor(private rickymortyService: RickymortyapiService) 
  {}

  ngOnInit()
  {
    this.cargarPersonajes();
  }

  cargarPersonajes( event? )
  {
    // esta funcionalidad puede recibir un evento de manera opcional
    this.rickymortyService.obtenerPersonajes()
    .subscribe( (data) => {
    if(data.results.length === 0)
    {
      // aqui deshabilitamos el scroll infinito
      event.target.disabled = true;
      event.target.complete;
      return
    }
    this.personajes.push(...data.results);

      if(event)
      {
        // aqui cuando no haya mas personajes que cargar
        // finalizaremos el scroll infinito y quedamos a la espera de un nuevo scroll
        event.target.complete();
      }

    });
  }

  loadData(event)
  {
    // definimos la funcion loadData que es la que nos va a servir para cargar mas datos de los personajes
    // para el scroll infinito
    this.cargarPersonajes(event);
  }

}
