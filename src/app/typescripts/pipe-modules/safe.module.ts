/**
 * Created by maphishaphanbuh on 15/05/17.
 */
import { NgModule  } from '@angular/core';
import { SafePipe,CheckboxPipe } from './../pipe/safe.pipe';

@NgModule({
    imports: [
    ],
    declarations: [
        SafePipe,CheckboxPipe
    ],
    
    exports:[SafePipe,CheckboxPipe],
})
export class SafePipeModule{ }

