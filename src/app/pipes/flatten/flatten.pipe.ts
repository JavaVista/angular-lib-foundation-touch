import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flatten',
  pure: false
})
export class FlattenPipe implements PipeTransform {

  transform(value: any[]): any[] {
    return this.flattenArray(value);
  }

  private flattenArray(arr: any[]): any[]{
    const result = [];
    arr.forEach(value => {
      if (Array.isArray(value)) {
        result.push(...this.flattenArray(value));
      } else {
        result.push(value);
      }
    })
    return result;
  }

}
