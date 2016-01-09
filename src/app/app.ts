/*
 * Angular 2 decorators and services
 */
import { Inject, Component, EventEmitter, Input, View} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http} from 'angular2/http';
import {FORM_PROVIDERS} from 'angular2/common';
import {TodoService} from './todoservice';
import {Todos} from './todos';

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
        <todos [items]="todoService.todos"></todos>
    </div>
    <div class="done">This is an element with class 'done'</div>
    `,
    directives: [Todos],
    styles: [`
      .done {
        color: red;
      }
    `]
})

export class App {

  constructor(@Inject(TodoService) private todoService: TodoService) {

  }

  loadTodo() {
    this.todoService.loadTodo();
  }

}
