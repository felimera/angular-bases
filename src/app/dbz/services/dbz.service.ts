
import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';

@Injectable({ providedIn: 'root' })
export class DbzService {

  public characters: Character[] = [
    { name: 'Krillin', power: 1000 },
    { name: 'Goku', power: 9500 },
    { name: 'Vegeta', power: 7500 },
    { name: 'Trunks', power: 8750 },
    { name: 'Gohan', power: 1580 },
  ];

  onNewCharacter(character: Character): void {
    this.characters.push({ name: character.name, power: character.power });
  }

  onDeleteIndex(index: number): void {
    this.characters.splice(index, 1);
  }
}

