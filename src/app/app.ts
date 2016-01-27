/*
 * Angular 2 decorators and services
 */
import { ElementRef, Component, EventEmitter, Input, View, DynamicComponentLoader} from 'angular2/core';
import { Child } from './child';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  providers : [Child]
})
@View({
    template: `
    <div>
      <div>{{greeting}}</div>
      <button (click)="onClick()">dynamic</button>
    </div>
    `
})

export class App {
  greeting = 'hello world'

  constructor(private dcl: DynamicComponentLoader, private elementRef: ElementRef){

  }
  onClick() {
    this.dcl.loadNextToLocation(Child, this.elementRef);
  }
}
