/**
 * Created by maphishaphanbuh on 15/05/17.
 */
import { NgModule  } from '@angular/core';
import { NoSpecialCharDirective } from './../directive/no-special-char.directive';

@NgModule({
    imports: [
    ],
    declarations: [
        NoSpecialCharDirective
    ],
    
    exports:[NoSpecialCharDirective],
})
export class NoSpecialCharDirectiveModule{ }

