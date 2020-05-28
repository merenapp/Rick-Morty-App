import { Component } from '@angular/core';

import { RickymortyapiService } from '../servicios/rickymortyapi.service';

import { RespuestaEpisodio, Character, Episodio } from '../interfaces/interfaces';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  episodios: Episodio[] = [];
  constructor(private rickymortyService: RickymortyapiService) 
  {
    this.rickymortyService.obtenerEpisodios()
    .subscribe( (data) => {
     this.episodios = data.results;
  });

}
}

