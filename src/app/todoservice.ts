
import { Injectable, Component, EventEmitter, Input, View} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http} from 'angular2/http';
import {FORM_PROVIDERS} from 'angular2/common';

@Injectable()
export class TodoService {

    public todos: string[] = ['First Todo', 'Second Todo'];

    constructor(private http: Http) {
    }

    loadTodo() {
      // get the file, extract the json, and "consume" it with subscribe
      this.http.get('todos.json')
        .map( res => res.json())
        .subscribe(todos => this.todos=todos );
    }
}
