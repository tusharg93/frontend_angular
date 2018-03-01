
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url):any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Pipe({ name: 'checkbox' })
export class CheckboxPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(val):any {
    val = val==1?true:false;
    return this.sanitizer.bypassSecurityTrustResourceUrl(val);
  }
}