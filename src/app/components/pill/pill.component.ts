import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() isActive: boolean;
  @Input() canBeSelected: boolean;
  @Output() selected = new EventEmitter<{ hasBeenSelected: boolean, label: string }>();

  constructor() {
    this.type = PillType.Info;
    this.label = '';
    this.iconClasses = '';
    this.isActive = false;
    this.canBeSelected = false;
  }

  toggle() {
    this.isActive = !this.isActive;
    this.selected.emit({ hasBeenSelected: this.isActive, label: this.label });
}

}
