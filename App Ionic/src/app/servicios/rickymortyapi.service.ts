import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { RespuestaPersonaje, Character } from '../interfaces/interfaces';
import { RespuestaEpisodio } from '../interfaces/interfaces';


// en nuestra api no necesitamos un apiKey
const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class RickymortyapiService {

  pag = 0;
  idEpisodioActual = 0;

  constructor(private http: HttpClient) 
  {}

  

  obtenerPersonajeId(char: string)
  {
    return this.http.get<Character>(`${char}`);
    // aqui obtenemos los personajes del episodio a raiz del array de characters que hay por episodio
    // como esta puesto dentro de cada episodio el link completo se lo pasamos entero por parametro
  }

  obtenerPersonajes(){
    // esto no se usa porque es de la tab1
    this.pag++;
    return this.http.get<RespuestaPersonaje>(apiUrl + `/character/?page=${this.pag}`);
  }

  obtenerEpisodios(){
    return this.http.get<RespuestaEpisodio>(apiUrl + '/episode');
  }

  obtenerPersonajesEspecies( especie: string ){
    return this.http.get<RespuestaPersonaje>(apiUrl + `/character/?species=${ especie }`);

  }

}
