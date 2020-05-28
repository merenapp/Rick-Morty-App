import { Component, OnInit, Input } from '@angular/core';

import { Episodio, RespuestaPersonaje, Character } from '../../interfaces/interfaces';

import { FavoritosService } from '../../servicios/favoritos.service';

import { RickymortyapiService } from '../../servicios/rickymortyapi.service';


@Component({
  selector: 'app-episodio',
  templateUrl: './episodio.component.html',
  styleUrls: ['./episodio.component.scss'],
})
export class EpisodioComponent implements OnInit {

  @Input() episodio: Episodio;
  @Input() ifFav;
  @Input() personaje: Character;

  personajes: Character[] = [];

  constructor(private favoritosService: FavoritosService, private rickymortyService: RickymortyapiService) { }

  ngOnInit() {
    this.verPersonajes();
    // cada vez que inicializamos el episodio tambien almacenamos todos los personajes para mostrarlos
    // correctamente
  }



  fav()
  {
    this.favoritosService.addFav(this.episodio);
  }

  borrar()
  {
    this.favoritosService.borrarFav(this.episodio);
  }

  almacenarPersonaje(char: string)
  {

    this.rickymortyService.obtenerPersonajeId(char)
    .subscribe( (data) => {
      this.personajes.push(data);
      // introducimos cada personaje del episodio
  })
}

verPersonajes()
{
  let i;
  for(i=0; i<this.episodio.characters.length; i++)
  {
    this.almacenarPersonaje(this.episodio.characters[i]);
  }
  // pasamos el personaje por parametro a almacenarPersonaje en esta función para ir almacenando
  // uno a uno con el bucle for todos los personajes en el array de los personajes del episodio
}


mostrar()
{

  let botones:any = document.getElementsByClassName("abajo");
  let boton = botones[this.episodio.id -1];
  boton.style.display = "none";


  let mostrar:any = document.getElementsByClassName("personajes");
  let most = mostrar[this.episodio.id -1];
  most.style.display = "block";

  
  let botones2:any = document.getElementsByClassName("arriba");
  let boton2 = botones2[this.episodio.id -1];
  boton2.style.display = "block";

}

ocultar()
{
  let botones2:any = document.getElementsByClassName("arriba");
  let boton2 = botones2[this.episodio.id -1];
  boton2.style.display = "none";

  let mostrar:any = document.getElementsByClassName("personajes");
  let most = mostrar[this.episodio.id -1];
  most.style.display = "none";

  let botones:any = document.getElementsByClassName("abajo");
  let boton = botones[this.episodio.id -1];
  boton.style.display = "block";
}



  

}
