import {Injectable} from '@angular/core';
import {WinkelKarContent} from './winkelkarContent';
import {Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WinkelkarService {
  Bestellingen: WinkelKarContent[] = [];

  constructor() {
  }

  add(bestelling: WinkelKarContent) {
    if (this.Bestellingen.length === 0) {
      this.Bestellingen.push(bestelling);

    } else
      this.validatelist(bestelling);
  }

  validatelist(bestelling: WinkelKarContent) {

    let dubbel = false;
    for (let bestel of this.Bestellingen) {

      if (bestelling.winkel === bestel.winkel && bestelling.groente === bestel.groente) {
        dubbel = true;
        bestel.aantal = Number(bestel.aantal) + Number(bestelling.aantal);
        bestel.totaalPrijs = (Number(bestel.aantal) * Number(bestelling.prijs));
        bestel.totaalPrijs = Number(bestel.totaalPrijs.toFixed(2));
      }
    }
    if (!dubbel) {
      this.Bestellingen.push(bestelling);
    }

  }

  getBestellingen(): Observable<WinkelKarContent[]> {
    const bestellingen = of(this.Bestellingen);

    return bestellingen;
  }


  clear() {
    this.Bestellingen = [];
  }
}
