/**
 * Created by maphishaphanbuh on 15/05/17.
 */
import { NgModule  } from '@angular/core';
import { DateConvertorDirectiveModule } from './date-convertor.module';
import { NgInitDirectiveModule } from './ng-init.module';

import { NoSpecialCharDirectiveModule } from './spl-char.module';

@NgModule({
    imports: [
        DateConvertorDirectiveModule,NgInitDirectiveModule,NoSpecialCharDirectiveModule
    ],
    declarations: [
        
    ],
    
    exports:[DateConvertorDirectiveModule,NgInitDirectiveModule,NoSpecialCharDirectiveModule],
})
export class ServerCombineDirectiveModule{ }

