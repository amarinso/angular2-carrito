import { Injectable, Component, EventEmitter, Input, View} from 'angular2/core';
import {TodoService} from './todoservice';

@Component({
  selector: 'todo',
  providers : [TodoService]
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
    console.log('onclick works')
    this.todoService.loadTodo();
    console.log('Tasks not loaded because this isntance is not bount to Todos component!!')
  }
}
