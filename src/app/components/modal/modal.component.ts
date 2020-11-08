import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() title: string = '';
  isHidden: boolean = true;

  constructor() { }

  closed() {
    this.isHidden = true;
  }

  open() {
    this.isHidden = false;
  }
}
