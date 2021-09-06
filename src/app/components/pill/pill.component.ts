import { Component, Input, OnInit } from '@angular/core';
import { PillType } from './enum/pill-type.enum';

@Component({
  selector: 'app-pill',
  templateUrl: './pill.component.html',
  styleUrls: ['./pill.component.scss']
})
export class PillComponent {
  @Input() type: PillType;
  @Input() label: string;
  @Input() iconClasses: string;

  constructor() {
    this.type = PillType.Info;
    this.label = '';
    this.iconClasses = '';
  }



}
