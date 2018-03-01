/**
 * Created by maphishaphanbuh on 15/05/17.
 */
import { NgModule  } from '@angular/core';
import { KeysPipe,ForKeyPipe,FilterPipe } from './../pipe/key.pipe';

@NgModule({
    imports: [
    ],
    declarations: [
        KeysPipe,ForKeyPipe,FilterPipe
    ],
    
    exports:[KeysPipe,ForKeyPipe,FilterPipe],
})
export class KeysPipeModule{ }

