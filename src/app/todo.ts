import { Injectable, Component, EventEmitter, Input, View} from 'angular2/core';
import {UpperCaseRegExp} from './uppercaseregexp';

@Component({
  selector: 'todo'
})

@View({
  template: `
    {{item | upperexep : '[aeiou]'}}
  `,
  pipes: [ UpperCaseRegExp ]
})

export class Todo {
  @Input() item: string;

}
