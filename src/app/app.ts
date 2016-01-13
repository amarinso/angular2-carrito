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
      <input [value]="time" style="width:300px">
      <!--<div [innerHtml]="time"></div>-->
    </div>
    `
})

export class App {
  time = new Date();

  constructor() {
    setInterval(()=>{
      this.time = new Date();
    }, 1000);
  }

}
