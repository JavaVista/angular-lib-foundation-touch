import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss']
})
export class ScrollToTopComponent {

  isShown: boolean = false;

  @HostListener('window:scroll') onWindowScroll() {
    const yCordinate = this.viewportScroller.getScrollPosition()[1];
    this.isShown = yCordinate > 400; 
  }

  constructor(private viewportScroller: ViewportScroller) { }

 

  scrollToTop(): void {
    this.viewportScroller.scrollToPosition([0, 0])
  }

}
