import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  @Input() tabs: { title: string, active: boolean }[] = [];
  @Output() selectedTabIndex = new EventEmitter<number>();

  selectTab(selectedTab: { title: string, active: boolean }, index: number): void{
    this.tabs.forEach(tab => {
      tab.active = (selectedTab === tab);
    });
    this.selectedTabIndex.emit(index);
  }

}
