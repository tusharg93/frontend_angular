/**
 * Created by maphishaphanbuh on 15/05/17.
 */
import { NgModule  } from '@angular/core';
import { NgInitDirective } from './../directive/ng-init.directive';

@NgModule({
    imports: [
    ],
    declarations: [
        NgInitDirective
    ],
    
    exports:[NgInitDirective],
})
export class NgInitDirectiveModule{ }

