import { Component } from '@angular/core';
import { AccordionItem } from '../accordion/accordion-item';
import { LoaderType } from '../loader/models/loader-type.enum';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent {
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
  loaderType: LoaderType = LoaderType.Loading;
  toggleValue: boolean = false;

  debounceExample(value: string): void {
    console.log('Component Documentation', value);
  }
}
