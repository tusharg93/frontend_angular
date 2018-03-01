/**
 * Created by maphishaphanbuh on 15/05/17.
 */
import { NgModule  } from '@angular/core';
import { NumberPipe } from './../pipe/number.pipe';

@NgModule({
    imports: [
    ],
    declarations: [
        NumberPipe
    ],
    
    exports:[NumberPipe],
})
export class NumberPipeModule{ }

