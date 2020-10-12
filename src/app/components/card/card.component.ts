import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() public title = '';
  @Input() public subTitle = '';
  @Input() public iconClasses = '';

  constructor() { }



}
