/*
 * Angular 2 decorators and services
 */
import { Component, EventEmitter, Input, View} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {RouterLink, RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http} from 'angular2/http';
import {FORM_PROVIDERS} from 'angular2/common';
import {Page1} from './page1';
import {Page2} from './page2';


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
      <a [routerLink]="['./Page1']">page1</a>
      <a [routerLink]="['./Page2']">page2</a>
      <div class="pages">
        <router-outlet></router-outlet>
      </div>
    </div>
    `,
    styles:[`
      .pages {
        border: 1px solid #ccc;
        padding: 10px;
        margin: 10px;
      }

    `]
    directives: [NgFor, RouterLink, ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path:'/page1', component: Page1, name:'Page1'},
  {path:'/page2', component: Page2, name:'Page2'}
])
export class App {
    todos: string[] = ['First Todo', 'Second Todo'];

    constructor() { }

    addTodo( todo ) {
        this.todos.push( todo.value );
        todo.value = '';
    }
}

//bootstrap( App );
