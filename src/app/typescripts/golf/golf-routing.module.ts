import { NgModule  } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GolfComponent } from './golf.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component:  GolfComponent },
    ])
  ]
})
export class GolfRoutingModule { }
