//import { Directive, Input } from '@angular/core';
//
//@Directive({
//  selector: '[ngInit]'
//})
//export class NgInitDirective {
//
//  @Input() ngInit;
//    ngOnInit() {
//        if (this.ngInit) {
//            this.ngInit();
//        }
//  }
//
//}

import { Directive, Output, EventEmitter} from '@angular/core';
//console.assert(SimpleChange, "Uhoh, Something was not defined, likely part of a circular reference loop");
@Directive({
  selector: '[ngInit]'
})
export class NgInitDirective {

  @Output() ngInit: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}
  ngOnInit() {   
     this.ngInit.emit('dummy');
     //setTimeout(() => this.ngInit.emit('dummy'), 0);
  } 

}
