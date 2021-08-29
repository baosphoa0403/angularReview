import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortCut',
})
export class ShortCutPipe implements PipeTransform {
  transform(value: string): string {
    return value.length > 20 ? value.substring(0, 30) + '...' : value;
  }
}
