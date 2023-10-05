import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-hero-section',
  template: `
    <div>
      <h2>testo primario: {{ mainText }}</h2>
      <h2>Testo secondario: {{ secondText }}</h2>
    </div>
  `,
  styles: [
  ]
})
export class HeroSectionComponent {
@Input() mainText: string = '';
@Input() secondText: string = '';
}