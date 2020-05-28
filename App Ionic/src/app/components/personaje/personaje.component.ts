import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../interfaces/interfaces';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.scss'],
})
export class PersonajeComponent implements OnInit {

  @Input() character: Character;

  constructor() { }

  ngOnInit() {}

}
