import { Component, OnInit, Input } from '@angular/core';

import { Episodio } from '../../interfaces/interfaces';

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.scss'],
})
export class EpisodiosComponent implements OnInit {

  @Input() episodios: Episodio[] = [];
  @Input() ifFav = false;

  constructor() { }

  ngOnInit() {}

}
