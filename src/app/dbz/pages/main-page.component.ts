import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent implements OnInit {

  public characters: Character[] = [
    { name: 'Krillin', power: 1000 },
    { name: 'Goku', power: 9500 },
    { name: 'Vegeta', power: 7500 },
    { name: 'Trunks', power: 8750 },
    { name: 'Gohan', power: 1580 },
  ];

  constructor() { }

  ngOnInit() { }
}

