import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
  transform(val: string, to?: number) {
    return val.length > to ? val.substr(0, to) + ' ...' : val;
  }
}
