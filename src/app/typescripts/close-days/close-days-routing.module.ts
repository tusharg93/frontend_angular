import { NgModule  } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CloseDaysComponent } from './close-days.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component:  CloseDaysComponent },
    ])
  ]
})
export class CloseDaysRoutingModule { }
