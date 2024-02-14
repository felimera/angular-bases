import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor', 'Capitan America'];
  public deletedHero?: string;
  
  removeLastHero(): void {
    const deleteHero = this.heroNames.pop();
    this.deletedHero = deleteHero;
  }
}
