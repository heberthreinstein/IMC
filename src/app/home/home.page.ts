import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  imc;
  peso;
  altura;

  constructor() {}

  calculaIMC() {
    this.imc = this.peso / (this.altura * this.altura);
    this.imc = this.imc.toFixed(2);
  }

}
