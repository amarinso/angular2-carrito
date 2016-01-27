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
      <div>{{greeting}}</div>
    </div>
    `
})

export class App {
  greeting = 'hello world'
}
