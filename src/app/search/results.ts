import {Component, View, Input} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {SearchResult} from './result';
import {StrategyResults} from './strategyResults';

@Component({
  selector: 'search-results'
})
@View({
  directives: [SearchResult, NgFor],
  template: `
  <div class="search-results">
  results
    <div class="search-results__row" *ngFor="#result of results.products; #idx = index">
      <search-result
        [class.selected]="idx==selectedIdx"
        [item]="result"
        [quantity]="results.quantity"
      ></search-result>
    </div>
  </div>
  `,
  styles: [`
    .selected {
      background-color: black;
      color: white;
    }

    search-result {
      border-bottom: 1px solid #ccc;
      padding: 3px;
    }

  `]
})
export class SearchResults {
  @Input() results: StrategyResults;

  selectedIdx: number = -1;
  constructor() {
    console.log("searchResults")
  }

  down() {
    if (this.selectedIdx < this.results.products.length - 1) this.selectedIdx++;
  }
  up() {
    if (this.selectedIdx > 0) this.selectedIdx--;
  }

}
