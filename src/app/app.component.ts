import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <h2 style="color: orange;">Numeri pari:</h2>
    <div *ngFor = "let num of numeriPari">
      {{ num }}
    </div>
  </div>
  <div>
    <h2 style="color: blue;">Numeri dispari:</h2>
    <div *ngFor = "let num of numeriDispari">
      {{ num }}
    </div>
  </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'WebApplication';
  mainText: string = "Testo primario";
  secondText: string = "Testo secondario";
  counter: (number | string)[] = [10, "23", "quarantaquattro", 57, "uno", "2"];
  
  get numeriPari(): (number | string)[] {
    return this.counter.filter((num) => typeof num === 'number' && num % 2 === 0);
  }

  get numeriDispari(): (number | string)[] {
    return this.counter.filter((num) => typeof num === 'number' && num % 2 !== 0);
  }
}