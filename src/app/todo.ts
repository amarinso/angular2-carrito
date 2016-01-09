import { Injectable, Component, EventEmitter, Input, View} from 'angular2/core';
import {TodoService} from './todoservice';

@Component({
  selector: 'todo'
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
    this.todoService.loadTodo();
  }
}
