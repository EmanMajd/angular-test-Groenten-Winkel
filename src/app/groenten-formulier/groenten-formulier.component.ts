import { Component , Input} from '@angular/core';
import { Groenten } from '../groenten';
import { AlleGroenten } from '../mock-groenten';
import { Winkels } from '../winkels';
import { Bestelling } from '../bestelling';
import { WinkelServiceService } from '../winkel-service.service';
import { GroentenServiceService } from '../groenten-service.service';
import { WinkelkarService } from '../winkelkar.service';
import { WinkelKarContent } from '../winkelkarContent';
import { WinkelkarComponent } from '../winkelkar/winkelkar.component';

@Component({
  selector: 'app-groenten-formulier',
  templateUrl: './groenten-formulier.component.html',
  styleUrls: ['./groenten-formulier.component.css']
})


export class GroentenFormulierComponent {

  allegroenten : Groenten[] = [];
  alleWinkels :  Winkels[] = [];
  winkelkarbestelling? : WinkelKarContent;
  price : number = 0;
  currency: string = 'USD';


  @Input() winkelmandje!: Groenten;


  constructor(private winkelService: WinkelServiceService, private groenteService: GroentenServiceService, private winkelkarService : WinkelkarService) {}


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
    this.findGroente();
  }
 
  findGroente(){
   for(let groente of this.allegroenten){
    if(this.model.groente === groente.name)    
       this.price = groente.prijs;
   }
    return this.price;
  }
  toggleCurrency(): string {
    this.currency = this.currency === 'EUR' ? 'USD' : 'EUR';
    return this.currency;
  }
  getCurrency(): string {
    return this.currency;
  }
 
  model = new Bestelling( "" , "" , 0);
 // winkelkarAddBestelling = this.winkelkarbestelling;

  submitBestelling() {
        
    this.winkelkarbestelling = { winkel: this.model.winkel, groente: this.model.groente,aantal: this.model.aantal,prijs: this.findGroente() , currency: this.getCurrency(),totaalPrijs: this.findGroente()* this.model.aantal};
    this.winkelkarService.add(this.winkelkarbestelling);
    
  }
 

  submitted = false;

  onSubmit() { this.submitted = true; }
 

}
