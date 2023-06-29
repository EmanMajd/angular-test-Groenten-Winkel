import { Winkels } from "./winkels";
import { Groenten } from "./groenten";

export class Bestelling {
   
    constructor(
        public winkel: string,
        public groente: string,
        public aantal: number
    ) {  }
  
  }