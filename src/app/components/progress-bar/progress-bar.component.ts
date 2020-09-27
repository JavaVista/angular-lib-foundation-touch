import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {
  @Input() progressValue: number = 0;
  @Input() max: number = 100;

  constructor() { }

  ngOnInit(): void {
  }

}
