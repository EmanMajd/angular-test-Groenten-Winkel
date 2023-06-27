import { Component } from '@angular/core';
import { Groenten } from '../groenten';
import { AlleGroenten } from '../mock-groenten';
import { Winkels } from '../winkels';
import { Bestelling } from '../bestelling';
import { WinkelServiceService } from '../winkel-service.service';
import { GroentenServiceService } from '../groenten-service.service';

@Component({
  selector: 'app-groenten-formulier',
  templateUrl: './groenten-formulier.component.html',
  styleUrls: ['./groenten-formulier.component.css']
})


export class GroentenFormulierComponent {

  allegroenten : Groenten[] = [];
  alleWinkels :  Winkels[] = [];

  constructor(private winkelService: WinkelServiceService, private groenteService: GroentenServiceService) {}


  getWinkels(): void {
    this.winkelService.getWinkels()
        .subscribe(winkels => this.alleWinkels = winkels);
  }

  getGroenten(): void {
    this.groenteService.getGroenten()
        .subscribe(groenten => this.allegroenten = groenten);
  }
  ngOnInit(): void {
    this.getWinkels();
    this.getGroenten();
  }


  model = new Bestelling("De fruitmand", "aardappelen ( 0.95 / kg )", 0);

  submitBestelling() {
    this.model = new Bestelling("", "", 0);
  }

  submitted = false;

  onSubmit() { this.submitted = true; }
}
