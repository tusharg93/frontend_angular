
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Pipe({ name: 'parser' })
export class ParserPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(html):any {
    html = html?html:'';
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}