import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss']
})
export class PagingComponent {
  @Input() totalItems: number = 1;
  @Input() pageSize: number = 25;
  @Input() currentPage: number = 1;
  @Input() step: number = 3;
  @Output() pageChange: EventEmitter<number> = new EventEmitter();


  public get totalPages(): number {
    return Math.ceil((this.totalItems || 1) / (this.pageSize || 1));
  }


  public get isFirstPage(): boolean {
    return this.currentPage === 1;
  }


  public get isLastPage(): boolean {
    return this.currentPage === this.totalPages;
  }

  public get isPreviousDisabled(): boolean {
    return this.currentPage - this.step < 1;
  }
  public get isNextDisabled(): boolean {
    return this.currentPage + this.step > this.totalPages;
  }

  public get pages(): number[] {
    const pagesResults = [];
    // previous page
    if (this.currentPage > 1) {
      pagesResults.push(this.currentPage - 1);
    }
    // current page
    pagesResults.push(this.currentPage);

    // next page
    if (this.currentPage < this.totalPages) {
      pagesResults.push(this.currentPage + 1);
    }

    // how many pages we want
    if (this.currentPage + 1 < this.totalPages) {
      pagesResults.push(this.currentPage + 2);
    }
    // hack to fix rendering issue
    if (this.currentPage + 1 < this.totalPages && this.currentPage === 1) {
      pagesResults.push(this.currentPage + 3);
    }
    return pagesResults;
  }

  setPage(page: number) {
    this.currentPage = page;
    this.pageChange.emit(page);
  }


}
