
import { UpdateProfileComponent } from './update-profile.component';

import { UpdateProfileRoutingModule } from './update-profile-routing.module';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { MetaModule } from '../common/modules/meta.module';
import { CommonModule } from '@angular/common';

import {ParserPipeModule} from '../pipe-modules/parse.module';

import {LimitPipeModule} from '../pipe-modules/limit.module';
import {NumberPipeModule} from '../pipe-modules/number.module';
import {SafePipeModule} from '../pipe-modules/safe.module';

import { DateConvertorDirectiveModule } from '../directive-modules/date-convertor.module';

import { NgInitDirectiveModule } from '../directive-modules/ng-init.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [

    RouterModule,
    UpdateProfileRoutingModule,

    FormsModule,
    MetaModule,
    CommonModule,

    ParserPipeModule,

    LimitPipeModule,

    NumberPipeModule,

    SafePipeModule,

    DateConvertorDirectiveModule,

    NgInitDirectiveModule,

  ],
  declarations: [
    UpdateProfileComponent
    
  ],
  providers:[]
})
export class UpdateProfileModule{ }
