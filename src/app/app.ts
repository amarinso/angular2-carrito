/*
 * Angular 2 decorators and services
 */
import { Component, EventEmitter, Input, View} from 'angular2/core';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app'
})
@View({
    template: `
    <div>
      <input (input)="onChange($event)">
      <div>{{myvalue}}</div>
    </div>
    `
})

export class App {
  myvalue = 'Initial value';

  onChange(ev) {
    this.myvalue=ev.target.value;
  }
}
