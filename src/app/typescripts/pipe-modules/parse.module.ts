/**
 * Created by maphishaphanbuh on 15/05/17.
 */
import { NgModule  } from '@angular/core';
import { ParserPipe } from './../pipe/parser.pipe';

@NgModule({
    imports: [
    ],
    declarations: [
        ParserPipe
    ],
    
    exports:[ParserPipe],
})
export class ParserPipeModule{ }

