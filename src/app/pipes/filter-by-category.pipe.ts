import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByCategory',
  pure: false
})
export class FilterByCategoryPipe implements PipeTransform {

  transform(values: any[], filter: string): any[] {
    //console.log('filter run'); //działa cały czas, lepiej nie używać tego pure: false
    const result = values.filter(value => value.category === filter ? true : false)
    return result;
  }

}
