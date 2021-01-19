import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/internal/operators';

@Component({
  selector: 'app-debounce-search',
  templateUrl: './debounce-search.component.html',
  styleUrls: ['./debounce-search.component.scss']
})
export class DebounceSearchComponent {
  @Input() searchTerm = '';
  @Input() placeHolder = 'Search';
  @Output() searchUpdate = new EventEmitter<string>();
  private _searchUpdate$ = new Subject<string>();

  constructor() {
    this._searchUpdate$.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(value => {
      this.searchUpdate.emit(value);
    })
  }

  updateSearchTerm(term: string): void {
    this._searchUpdate$.next(term)
  }
}
