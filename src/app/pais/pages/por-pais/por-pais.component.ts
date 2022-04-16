import { Component, OnInit } from '@angular/core';
import { PaisInterface } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  termino: string = "";
  hayError: boolean = false;
  haySugerencia: boolean = false;
  paises: PaisInterface[] = [];
  paisesSugeridos: PaisInterface[] = [];
  constructor(private paisService: PaisService ) { }

  Buscar(termino:string){
    this.haySugerencia = false;
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais(this.termino)
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
    if (termino==="") {
      this.haySugerencia = false;
      return;
    }
    this.haySugerencia = true;
    this.paisService.buscarPais(termino)
    .subscribe(paises => this.paisesSugeridos = paises.slice(0,4),
    err =>{
      this.paisesSugeridos = [];
    })
    
  }

  ngOnInit(): void {
  }

}
