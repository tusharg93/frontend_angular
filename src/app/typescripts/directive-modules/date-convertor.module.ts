/**
 * Created by maphishaphanbuh on 15/05/17.
 */
import { NgModule  } from '@angular/core';
import { DateConvertorDirective } from './../directive/date-convertor.directive';

@NgModule({
    imports: [
    ],
    declarations: [
        DateConvertorDirective
    ],
    
    exports:[DateConvertorDirective],
})
export class DateConvertorDirectiveModule{ }

