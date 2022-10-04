import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dadoIzquierda = '../assets/img/dice1.png';
  dadoDerecha = '../assets/img/dice2.png';

  numero1: number = 1;
  numero2: number = 2;

  tirarDados(): void {

    //generar numero random
    this.numero1 = Math.round(Math.random() * 5 + 1);
    this.numero2 = Math.round(Math.random() * 5 + 1);

    //cambia la img de los dados
    this.dadoIzquierda = `../assets/img/dice${this.numero1}.png`;
    this.dadoDerecha = `../assets/img/dice${this.numero2}.png`;

  }
}
