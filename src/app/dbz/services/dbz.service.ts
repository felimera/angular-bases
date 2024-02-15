import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interfaces';

@Injectable({ providedIn: 'root' })
export class DbzService {

  public characters: Character[] = [
    { id: uuid(), name: 'Krillin', power: 1000 },
    { id: uuid(), name: 'Goku', power: 9500 },
    { id: uuid(), name: 'Vegeta', power: 7500 },
    { id: uuid(), name: 'Trunks', power: 8750 },
    { id: uuid(), name: 'Gohan', power: 1580 },
  ];

  onNewCharacter(character: Character): void {
    const newCharacter: Character = { id: uuid(), ...character };
    this.characters.push(newCharacter);
  }

  onDeleteIndex(index: number): void {
    this.characters.splice(index, 1);
  }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(data => data.id !== id);
  }
}

