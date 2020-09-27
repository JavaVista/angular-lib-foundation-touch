import { Component } from '@angular/core';
import { AccordionItem } from './components/accordion/accordion-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  acccordionItems: AccordionItem[] = [
    {
      title: 'Example Uno',
      content: 'Example Content Uno',
      isExpanded: false
    },
    {
      title: 'Example Dos',
      content: 'Example Content Dos',
      isExpanded: false
    }

  ]

  progressValue: number = 25;

}
