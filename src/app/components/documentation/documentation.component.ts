import { Component } from '@angular/core';
import { AccordionItem } from '../accordion/accordion-item';
import { LoaderType } from '../loader/models/loader-type.enum';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent {
  accordionItems: AccordionItem[] = [
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

  tabs: { title: string, active: boolean }[] = [
    { title: 'First Tab', active: true },
    { title: 'Second Tab', active: false },
    { title: 'Third Tab', active: false }
  ];
  selectedTab: number = 0;

  debounceExample(value: string): void {
    console.log('Component Documentation', value);
  }
}
