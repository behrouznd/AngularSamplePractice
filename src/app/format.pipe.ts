import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'format' })
export class Formatpipe implements PipeTransform {
  transform(value: number, args?: any): string {
    return value.toString().replace('.', '/');
  }
}
