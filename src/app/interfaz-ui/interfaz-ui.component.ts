import { Component, OnInit } from '@angular/core';
import { FormulaComponent } from '../Funcionalidad/formula.component';


@Component({
  selector: 'app-interfaz-ui',
  templateUrl: './interfaz-ui.component.html',
  styleUrls: ['./interfaz-ui.component.css']
})
export class InterfazUiComponent implements OnInit {

  constructor() {
   }

  componente = new FormulaComponent();

  resultado = 0;
  y = 0;
  m = 0;
  x = 0;
  b = 0;

  ngOnInit(): void {
  }

  getResultado(){
    let myresult = 0;
    myresult = this.componente.recta(this.m, this.x, this.b);
    this.resultado = myresult;
  }

}
