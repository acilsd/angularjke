import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], filter: string, propName: string): any {
    if (!filter) {
      return value;
    }
    if (!value.length) {
      return value;
    }
    return value.filter(item => {
      if (!item || !item[propName]) {
        return null;
      }
      return item[propName] === filter;
    });
  }
}
