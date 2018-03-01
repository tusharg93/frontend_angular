import { NgModule  } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SectionThreeComponent } from './section-three.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component:  SectionThreeComponent },
    ])
  ]
})
export class SectionThreeRoutingModule { }
