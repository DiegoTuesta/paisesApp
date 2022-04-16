import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-search',
  templateUrl: './pais-search.component.html',
  styleUrls: ['./pais-search.component.css']
})
export class PaisSearchComponent implements OnInit {

  
  @Output() onEnter: EventEmitter<string> = new EventEmitter(); 
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string ="";

  debounce: Subject<string> = new Subject();

  terminoSearch: string ="";

  Buscar(){
    this.onEnter.emit(this.terminoSearch);
  }

  constructor() { }

  teclaPresionada(){
    this.debounce.next(this.terminoSearch);
  }

  ngOnInit(): void {
    this.debounce.pipe(
      debounceTime(300))
    .subscribe((valor:string) =>{
      this.onDebounce.emit(valor);
    })
  }

}
