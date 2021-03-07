import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Input() counter: number = 0;
  @Input() min: number = 0;
  @Input() max: number = Number.MAX_SAFE_INTEGER; // Highest number in safe in JS

  constructor() { }

  ngOnInit(): void {
  }

  decrement(): void {
    if (this.min < this.counter) {
      this.counter--;
    }
  }

  increment(): void {
    if (this.max > this.counter) {
      this.counter++;
    }
  }
}
