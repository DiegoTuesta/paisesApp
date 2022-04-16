import { Component } from '@angular/core';
import { PaisInterface } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {

  termino: string = "";
  hayError: boolean = false;
  paises: PaisInterface[] = [];
  paisesSugeridos: PaisInterface[]= [];

  constructor( private paisService: PaisService) { }
  Buscar(termino:string){
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarCapital(this.termino)
   .subscribe(paises =>{
    this.paises = paises;
   }, err =>{
     this.hayError = true;
     this.paises = [];
   });
   //this.termino ="";
  }

  sugerencias(termino: string){
    this.hayError = false;
    //TODO: Crear sugerencias
    
  }

}
