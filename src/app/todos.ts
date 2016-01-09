
import { Inject, Component, EventEmitter, Input, View} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {Todo} from './todo';
import {Counter} from './counter';

@Component({
  selector: 'todos',
  template: `
    <ul>
       <li *ngFor="#todo of items;#index=index">
        <todo counter [item]="todo" [index]="index"></todo>
       </li>
    </ul>
  `,
  directives: [NgFor, Todo, Counter]
})
export class Todos {

  @Input() items: string[];

}
