/**
 * Created by maphishaphanbuh on 15/05/17.
 */
import { NgModule  } from '@angular/core';
import { DateConvertorDirectiveModule } from './date-convertor.module';
import { NgInitDirectiveModule } from './ng-init.module';
import {KeysPipeModule} from './../pipe-modules/key.module';
import { NoSpecialCharDirectiveModule } from './spl-char.module';

@NgModule({
    imports: [
        DateConvertorDirectiveModule,NgInitDirectiveModule,NoSpecialCharDirectiveModule,KeysPipeModule
    ],
    declarations: [
        
    ],
    
    exports:[DateConvertorDirectiveModule,NgInitDirectiveModule,NoSpecialCharDirectiveModule,KeysPipeModule],
})
export class ServerCombineDirectiveModule{ }

