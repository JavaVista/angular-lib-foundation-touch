import { Component, Input, OnInit } from '@angular/core';
import { AccordionItem } from './accordion-item';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {
  @Input() accordionItems: AccordionItem[] = [];

  constructor() { }


  toggle(item: AccordionItem): void {
    item.isExpanded = !item.isExpanded;
  }

}
