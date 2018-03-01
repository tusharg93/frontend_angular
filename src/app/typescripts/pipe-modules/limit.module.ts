/**
 * Created by maphishaphanbuh on 15/05/17.
 */
import { NgModule  } from '@angular/core';
import { LimitPipe } from './../pipe/limit.pipe';

@NgModule({
    imports: [
    ],
    declarations: [
        LimitPipe
    ],
    
    exports:[LimitPipe],
})
export class LimitPipeModule{ }

