import { HostListener, Directive } from 'angular2/core';

@Directive({
  selector: '[counter]',
  properties: [
    'index: index'
  ]
})
export class Counter {
  numberOfClicks = 0;
  index: number;

  @HostListener('click', ['$event.target'])
  onClick(btn) {
    console.log('todo'+this.index, 'number of clicks:', this.numberOfClicks++);
  }
}
