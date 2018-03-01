import { NgModule  } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SectionFiveComponent } from './section-five.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component:  SectionFiveComponent },
    ])
  ]
})
export class SectionFiveRoutingModule { }
