import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Ho } from './ho';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const hos = [
      { id: 12, name: 'Macho Max' },
      { id: 13, name: 'Slick Rick' },
      { id: 14, name: 'Sexy Sadie' },
      { id: 15, name: 'Sultry Susan' },
      { id: 16, name: 'Tranny Tina' },
      { id: 17, name: 'Hector the Well Endowed' },
      { id: 18, name: 'Sapiosexual Sam' },
      { id: 19, name: 'Thicc Judge Judy' },
      { id: 20, name: 'Roast Beef Rita' }
    ];
    return { hos };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(hos: Ho[]): number {
    return hos.length > 0 ? Math.max(...hos.map(ho => ho.id)) + 1 : 11;
  }
}