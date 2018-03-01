import { NgModule  } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SectionAddOnComponent } from './section-add-on.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component:  SectionAddOnComponent },
    ])
  ]
})
export class SectionAddOnRoutingModule { }
