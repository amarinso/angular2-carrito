import {Component, View, Input} from 'angular2/core';
import {Product} from '../providers/product';
import {ROUTER_DIRECTIVES, Router, RouteParams, RouterLink, Location} from 'angular2/router';


@Component({
  selector: 'search-result',
  directives: [ROUTER_DIRECTIVES],

  template: `
      <a [routerLink]="['/Cart', {code:item.__code, quantity:quantity}]">{{item.__name}}</a>
      <div>{{item.__brand}}</div>
      <div>{{item.__format}}</div>
      <div>{{item.__price}}</div>
  `
})
export class SearchResult {
  @Input() item: Product;
  @Input() quantity: number;

  constructor() {
    console.log('SearchResult constructor', this.item);
  }

  ngOnInit() {
    console.log('SearchResult ngInit', this.item);
  }

}
