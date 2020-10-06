import { Component } from '@angular/core';
import { AccordionItem } from '../accordion/accordion-item';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent  {
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
