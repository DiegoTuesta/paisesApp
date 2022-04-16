import { Component, Input, OnInit } from '@angular/core';
import { PaisInterface } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.css']
})
export class PaisTablaComponent implements OnInit {

  @Input() paisesTabla: PaisInterface[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
