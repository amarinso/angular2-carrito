
import { Inject, Component, EventEmitter, Input, View} from 'angular2/core';
import {NgFor} from 'angular2/common';

@Component({
  selector: 'todos',
  template: `
    <ul>
       <li *ngFor="#todo of items">
         {{ todo }}
       </li>
    </ul>
  `,
  directives: [NgFor]
})
export class Todos {

  @Input() items: string[];

}
