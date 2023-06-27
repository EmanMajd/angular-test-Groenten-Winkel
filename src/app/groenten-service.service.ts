import { Injectable } from '@angular/core';
import { Groenten } from './groenten';
import { AlleGroenten } from './mock-groenten';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroentenServiceService {

  constructor() { }

  getGroenten(): Observable<Groenten[]> {
    const groenten = of(AlleGroenten);
    return groenten;
  }
}
