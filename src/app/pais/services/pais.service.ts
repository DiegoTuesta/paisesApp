import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { PaisInterface } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = "https://restcountries.com/v3.1";

  constructor(private http: HttpClient) { }

  get httpParams (){
    return new  HttpParams()
    .set('fields','name,flags,translations,population,cca2,capital');
  }
  buscarPais(termino:string): Observable<PaisInterface[]>{

    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<PaisInterface[]>(url,{params:this.httpParams});
    

    //podemos retornar un nuevo observable(array)
    /*return this.http.get(url).pipe(
      catchError(err => of([]))
    );*/
  }
  buscarCapital(termino:string): Observable<PaisInterface[]>{

    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<PaisInterface[]>(url, {params:this.httpParams});

    //podemos retornar un nuevo observable(array)
    /*return this.http.get(url).pipe(
      catchError(err => of([]))
    );*/
  }
  buscarxCodigo(termino:string): Observable<PaisInterface>{

    const url = `${this.apiUrl}/alpha/${termino}`;
    return this.http.get<PaisInterface>(url);

    //podemos retornar un nuevo observable(array)
    /*return this.http.get(url).pipe(
      catchError(err => of([]))
    );*/
  }
  buscarxRegion(termino:string): Observable<PaisInterface[]>{

    
    const url = `${this.apiUrl}/region/${termino}`;
    return this.http.get<PaisInterface[]>(url,{
      params: this.httpParams
    });

    //podemos retornar un nuevo observable(array)
    /*return this.http.get(url).pipe(
      catchError(err => of([]))
    );*/
  }



}
