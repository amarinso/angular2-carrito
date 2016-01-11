import { provide, Injectable, Component, EventEmitter, Input, View} from 'angular2/core';
import {TodoService} from './todoservice';
import {Http} from 'angular2/http';

@Component({
  selector: 'todo',
  providers : [ provide(TodoService, {
    useFactory: (http: Http) => {
      console.log('factory method');
      if (TodoService.counter<2) {
        console.log('create new!'+TodoService.counter)
        return new TodoService( http);
      }else{
        return TodoService.instances[0];

      }
    },
    deps:[Http]
  })]
})

@View({
  template: `
    <div (click)="onClick()">{{item}}</div>
  `,
})

export class Todo {
  @Input() item: string;

  constructor(private todoService: TodoService) {
  }

  onClick() {
    console.log('todoService instance:'+this.todoService.id);
  }
}
