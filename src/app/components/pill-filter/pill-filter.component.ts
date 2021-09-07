import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-pill-filter',
  templateUrl: './pill-filter.component.html',
  styleUrls: ['./pill-filter.component.scss']
})
export class PillFilterComponent {
  private pillLabels: string[];
  unselectedPills: string[];
  selectedPills: string[];

  @Input() set pills(value: string[]) {
    this.pillLabels = value;
    this.unselectedPills = value;
  }

  selected = new EventEmitter<string[]>();

  constructor() {
    this.unselectedPills = [];
    this.selectedPills = []
   }

  addFilter(pillDetails: { hasBeenSelected: boolean, label: string }): void {
    if (pillDetails.hasBeenSelected) {
      const selectedPillIndex = this.unselectedPills.indexOf(pillDetails.label);
      const [selectedPill] = this.unselectedPills.splice(selectedPillIndex, 1);
      this.selectedPills.push(selectedPill);
      this.selected.emit(this.selectedPills);
    }
  }
  
  removeFilter(pillDetails: {hasBeenSelected: boolean, label: string}): void {
    if (!pillDetails.hasBeenSelected) {
      const selectedPillIndex = this.selectedPills.indexOf(pillDetails.label);
      const [selectedPill] = this.selectedPills.splice(selectedPillIndex, 1);
      this.unselectedPills.push(selectedPill);
    }
   }

}
