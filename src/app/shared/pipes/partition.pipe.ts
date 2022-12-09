import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'partition'
})
export class PartitionPipe implements PipeTransform {

  transform(value: string): string {
    if ( value.includes('/dev/sd') ) {
      return value.replaceAll('p', '');
    } else {
      return value;
    }
  }
}
