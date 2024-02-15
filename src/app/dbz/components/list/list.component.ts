import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [];
  @Output()
  public onDeleteIndex: EventEmitter<number> = new EventEmitter();
  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(index: number): void {
    this.onDeleteIndex.emit(index);
  }

  deleteCharacterById(id: string | undefined): void {
    if (!id) return;
    this.onDeleteId.emit(id);
  }
}
