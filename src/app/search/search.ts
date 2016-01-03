import {Component, View, EventEmitter, ElementRef, Output} from 'angular2/core';
import {FilterStrategy} from './filterStrategy';

@Component({
  selector: 'search',
  template: `
  <div>
    name: <input type="text" #name (input)="onInput(name, brand, format)" (keyup)="onKeyup($event)" />
    brand: <input type="text" #brand (input)="onInput(name, brand, format)" (keyup)="onKeyup($event)" />
    format: <input type="text" #format (input)="onInput(name, brand, format)" (keyup)="onKeyup($event)" />
    filter: [{{filter}}]
  </div>`
})
export class Search {
  name: string;
  filter: string;

  @Output() search: EventEmitter<any> = new EventEmitter();
  @Output() up: EventEmitter<any> = new EventEmitter();
  @Output() down: EventEmitter<any> = new EventEmitter();

  constructor(ref: ElementRef) {

  }
  NgOnInit() {
  }

  onInput(name, brand, format) {
    name = name.value;
    brand = brand.value.length>0? brand.value.replace(/^| \b/g," "+FilterStrategy.QUERY_PREFIX.BRAND):'';
    format = format.value.length>0? format.value.replace(/^| \b/g," "+FilterStrategy.QUERY_PREFIX.FORMAT):'';
    var filter =  `${name} ${brand} ${format}`;
    this.filter=filter;
    this.search.next(filter);
  }

  onKeyup(ev) {
    if (ev.keyCode==40) this.down.next(this);
    if (ev.keyCode==38) this.up.next(this);
  }

}
