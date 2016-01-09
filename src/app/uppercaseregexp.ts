import { Pipe, PipeTransform, Injectable, Component, EventEmitter, Input, View} from 'angular2/core';

@Pipe({
  name: 'upperexep'
})
export class UpperCaseRegExp implements PipeTransform {

  transform(value: string, args: any[]) {
    return value.replace(new RegExp(args[0],"g"),
    function(match){
      return match.toUpperCase();
    });
  }
}
