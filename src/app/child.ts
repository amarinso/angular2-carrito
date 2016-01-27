import { provide, Injectable, Component, EventEmitter, Input, View} from 'angular2/core';

@Component({
  selector : 'child',
  template:`
  <div>this is a child</div>`
})
export class Child {
  
}
