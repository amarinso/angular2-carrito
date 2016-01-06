/*
 * Angular 2 decorators and services
 */
import { Inject, Component, EventEmitter, Input, View} from 'angular2/core';
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
        <button class="btn btn-block btn-success" (click)="loadTodo()">load Todo</button>
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

    //inject the http service as instance variable
    constructor(private http: Http) {
    }

    loadTodo() {
      // get the file, extract the json, and "consume" it with subscribe
      this.http.get('todos.json')
        .map( res => res.json())
        .subscribe(todos => this.todos=todos );
    }

}

//bootstrap( App );
