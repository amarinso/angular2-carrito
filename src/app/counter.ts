import { HostBinding, HostListener, Directive, Input } from 'angular2/core';

@Directive({
  selector: '[counter]'
})
export class Counter {
  numberOfClicks = 0;

  @Input() index: number;

  @HostListener('click', ['$event.target'])
  onClick(btn) {
    console.log('todo'+this.index, 'number of clicks:', this.numberOfClicks++);
  }
}
