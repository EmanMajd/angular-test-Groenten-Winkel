import { Component ,  Input  } from '@angular/core';
import { WinkelkarService } from '../winkelkar.service';
import { WinkelKarContent } from '../winkelkarContent';
import { Groenten } from '../groenten';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-winkelkar',
  templateUrl: './winkelkar.component.html',
  styleUrls: ['./winkelkar.component.css']
})
export class WinkelkarComponent {
  @Input() winkelmandje!:  Groenten;
  
  Bestellingen: WinkelKarContent[] = [];

  
  constructor(private winkelkarService : WinkelkarService) {}

  ngOnInit(): void {
    this.getBestellingen();
    
  }

  getBestellingen(): void {
    this.winkelkarService.getBestellingen()
        .subscribe(bestellingen => this.Bestellingen = bestellingen);
  }

  

}
