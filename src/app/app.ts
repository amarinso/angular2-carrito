/*
 * Angular 2 decorators and services
 */
import { Component, EventEmitter, Input, View} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http} from 'angular2/http';
import {FORM_PROVIDERS} from 'angular2/common';


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
       <input placeholder="Todo" #todotext><br>
        <button class="btn btn-block btn-success" (click)="addTodo(todotext)">Add Todo</button>
        <ul>
           <li *ngFor="#todo of todos">
             {{ todo }}
           </li>
        </ul>
    </div>
    `,
    directives: [NgFor]
})

export class App {
    todos: string[] = ['First Todo', 'Second Todo'];

    constructor() { }

    addTodo( todo ) {
        this.todos.push( todo.value );
        todo.value = '';
    }
}

//bootstrap( App );
