import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../interfaces/interfaces';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss'],
})
export class PersonajesComponent implements OnInit {

  @Input() personajes: Character[] = [];

  constructor() { }

  ngOnInit() {}

}
