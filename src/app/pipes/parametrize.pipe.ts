import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parametrize'
})
export class ParametrizePipe implements PipeTransform {

  transform(value: string, times: number = 1, word: string = '') {
    let result = '';
    for(let i = 1; i <= times; i++) {
      result += value + ' ';
    }

    return result + ' ' + word;
  }

}
