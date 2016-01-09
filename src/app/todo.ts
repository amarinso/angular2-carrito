import { Injectable, Component, EventEmitter, Input, View} from 'angular2/core';

@Component({
  selector: 'todo'
})

@View({
  template: `
    {{item}}
  `,
})

export class Todo {
  @Input() item: string;

}
