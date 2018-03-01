/**
 * Created by maphishaphanbuh on 15/05/17.
 */
import { NgModule  } from '@angular/core';
import { MetaComponent } from '../components/meta.component';

@NgModule({
    imports: [
    ],
    declarations: [
        MetaComponent
    ],
    
    exports:[MetaComponent],
})
export class MetaModule{ }

