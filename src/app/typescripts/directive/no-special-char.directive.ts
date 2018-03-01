import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[noSpecialChar]'
})
export class NoSpecialCharDirective {

  @HostListener('keypress', ['$event'])
  onKeyPress(event: any) {
    const pattern = /[0-9A-Za-z ]/; // Only alphanumeric and space allowed
    let inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();  
    }
  }

}
