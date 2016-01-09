import { Injectable, Component, EventEmitter, Input, View} from 'angular2/core';
import {Counter} from './countclicks';

@Component({
  selector: 'todo'
})

@View({
  template: `
    {{index}} : {{item}}
  `
})

export class Todo {
  @Input() item: string;
  @Input() index: number;

}
