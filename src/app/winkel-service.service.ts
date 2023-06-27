import { Injectable } from '@angular/core';
import { Winkels } from './winkels';
import { AlleWinkels } from './mock-winkels';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class WinkelServiceService {

  constructor() { }


  getWinkels(): Observable<Winkels[]> {
    const winkels = of(AlleWinkels);
    return winkels;
  }
}
