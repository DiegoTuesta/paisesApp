import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PaisInterface } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css'],
})
export class VerPaisComponent implements OnInit {
  
  pais!: PaisInterface[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    /* Con suscribe
    this.activatedRoute.params.subscribe(
      ({id}) => {
        
        this.paisService.buscarxCodigo(id)
        .subscribe(pais=>{
          console.log(pais);
        });  
      },
    );*/

    //RxJs
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.paisService.buscarxCodigo(id)),
      tap(console.log)
      )
      .subscribe( pais => {
        //console.log(resp);
       
        this.pais = pais;
      });
  }
}
