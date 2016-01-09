/*
 * Angular 2 decorators and services
 */
import { Inject, Component, EventEmitter, Input, View} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http} from 'angular2/http';
import {FORM_PROVIDERS} from 'angular2/common';
import {TodoService} from './todoservice';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app',
    providers : [TodoService]
  })
@View({
    template: `
    <div>
        <button class="btn btn-block btn-success" (click)="loadTodo()">load Todo</button>
        <ul>
           <li *ngFor="#todo of todoService.todos">
             {{ todo }}
           </li>
        </ul>
    </div>
    `,
    directives: [NgFor]
})

export class App {

  constructor(@Inject(TodoService) private todoService: TodoService) {

  }

  loadTodo() {
    this.todoService.loadTodo();
  }

}
