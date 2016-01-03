import {Component, View, EventEmitter, ElementRef, Output} from 'angular2/core';
import {Search} from './search';
import {SearchResults} from './results';
import {Products} from '../providers/products';
import {FilterStrategy} from './filterStrategy';
import {Product} from '../providers/product';
import {StrategyResults} from './strategyResults';

@Component({
  selector: 'product-search',
  providers: [Products, FilterStrategy],
  template: `
    <search (search)="onSearch($event)" (up)="onUp(searchResults)" (down)="onDown(searchResults)"></search>
    <search-results [results]="results" #searchResults></search-results>
  `,
  directives: [  Search, SearchResults ],
})
export class ProductSearch {
  results: StrategyResults;

  constructor(ref: ElementRef, private products: Products, private strategy: FilterStrategy) {
    this.results={products:products.getAll(), quantity:0};
  }

  onSearch(value) {
    var res = this.strategy.filter(this.products.getAll(), value);
    console.log('onSearchEvent', res);
    this.results = res;
  }

  onDown(searchResults) {
    searchResults.down();
  }
  onUp(searchResults) {
    searchResults.up();
  }

  onEnter(searchResults){
    console.log("on Enter!");
  }

}
