
import { LoginComponent } from './login.component';

import { LoginRoutingModule } from './login-routing.module';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { MetaModule } from '../common/modules/meta.module';
import { CommonModule } from '@angular/common';

import {ParserPipeModule} from '../pipe-modules/parse.module';

import {KeysPipeModule} from '../pipe-modules/key.module';
import {NumberPipeModule} from '../pipe-modules/number.module';
import {SafePipeModule} from '../pipe-modules/safe.module';

import { DateConvertorDirectiveModule } from '../directive-modules/date-convertor.module';

import { NgInitDirectiveModule } from '../directive-modules/ng-init.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [

    RouterModule,
    LoginRoutingModule,

    FormsModule,
    MetaModule,
    CommonModule,

    ParserPipeModule,

    KeysPipeModule,

    NumberPipeModule,

    SafePipeModule,

    DateConvertorDirectiveModule,

    NgInitDirectiveModule,

  ],
  declarations: [
    LoginComponent
    
  ],
  providers:[]
})
export class LoginModule{ }
