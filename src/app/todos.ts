
import { Inject, Component, EventEmitter, Input, View} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {Todo} from './todo';

@Component({
  selector: 'todos',
  template: `
    <ul>
       <li *ngFor="#todo of items">
        <todo [item]="todo"></todo>
       </li>
    </ul>
  `,
  directives: [NgFor, Todo]
})
export class Todos {

  @Input() items: string[];

}
