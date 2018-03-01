import { NgModule  } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SectionTwoComponent } from './section-two.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component:  SectionTwoComponent },
    ])
  ]
})
export class SectionTwoRoutingModule { }
