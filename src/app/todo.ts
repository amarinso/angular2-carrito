import { Injectable, Component, EventEmitter, Input, View} from 'angular2/core';

@Component({
  selector: 'todo'
})

@View({
  template: `
    <div [class.done]="done" (click)="onClick($event)">{{item}}</div>
  `,
  styles : [`
    .done {
      text-decoration: line-through;
    }

  `]
})

export class Todo {
  @Input() item: string;
  done: boolean = false;

  onClick(event) {
    this.done = !this.done;

  }
}
