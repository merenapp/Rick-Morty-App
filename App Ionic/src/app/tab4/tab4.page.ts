import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { RespuestaPersonaje, Character } from '../interfaces/interfaces';
import { RickymortyapiService } from '../servicios/rickymortyapi.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  @ViewChild(IonSegment, {static: true}) segment: IonSegment;

  especies =['Human', 'Humanoid', 'Alien', 'unknown', 'Poopybutthole', 'Mytholog', 'Animal', 'Vampire', 'Robot', 'Cronenberg', 'Disease', 'Parasite'];

  personajes: Character[] = [];

  constructor(private rickymortyService: RickymortyapiService) { }

  ngOnInit() {
    this.segment.value = this.especies[0];
    this.cargarPersonajes(this.especies[0]);
  }

  cambioEspecie( event ){
    this.personajes = [];
    this.cargarPersonajes( event.detail.value );
  }

  cargarPersonajes( especie: string, event? )
  {
    this.rickymortyService.obtenerPersonajesEspecies( especie )
        .subscribe( (resp) => {
          this.personajes.push( ...resp.results);
          if ( event ) {
            event.target.complete;
          }
        })
  }


}
