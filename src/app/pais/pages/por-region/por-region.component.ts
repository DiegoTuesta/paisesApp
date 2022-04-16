import { Component, OnInit } from '@angular/core';
import { PaisInterface } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {

  region: string[] =['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionactiva:string ="";
  paises: PaisInterface[] = [];

  getClassCss(region: string){
    return (region === this.regionactiva)? 'btn btn-primary' : 'btn btn-outline-primary';
  }
  constructor(private paisService: PaisService) { }

  activarRegion(region:string){
    if (region===this.regionactiva) { return; }
      this.paises = [];
      this.regionactiva = region;
      this.paisService.buscarxRegion(this.regionactiva)
      .subscribe(paises =>{
        this.paises = paises;
      }, err => {
      this.paises = [];
      });
    
  }
  ngOnInit(): void {
  }

}
