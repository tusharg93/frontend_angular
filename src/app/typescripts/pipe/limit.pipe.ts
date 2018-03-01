
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Pipe({ name: 'limit' })
export class LimitPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(value, wordwise, max, tail):any {
    if (!value) return '';
    max = parseInt(max, 10);
    if (!max) return value;
   
    if (value.length <= max) return value;

    value = value.substr(0, max);
    if (wordwise) {
      var lastspace = value.lastIndexOf(' ');
      if (lastspace !== -1) {
        //Also remove . and , so its gives a cleaner result.
        if (value.charAt(lastspace-1) === '.' || value.charAt(lastspace-1) === ',') {
          lastspace = lastspace - 1;
        }

        value = value.substr(0, lastspace);
      }
    }
    return this.sanitizer.bypassSecurityTrustHtml(value + (tail || ' …'));
  }
}