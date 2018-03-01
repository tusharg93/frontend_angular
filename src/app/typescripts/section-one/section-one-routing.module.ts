import { NgModule  } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SectionOneComponent } from './section-one.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component:  SectionOneComponent },
    ])
  ]
})
export class SectionOneRoutingModule { }
