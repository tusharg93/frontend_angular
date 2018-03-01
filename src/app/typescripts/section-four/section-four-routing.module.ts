import { NgModule  } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SectionFourComponent } from './section-four.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component:  SectionFourComponent },
    ])
  ]
})
export class SectionFourRoutingModule { }
