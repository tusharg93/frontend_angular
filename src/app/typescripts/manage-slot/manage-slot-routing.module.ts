import { NgModule  } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ManageSlotComponent } from './manage-slot.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component:  ManageSlotComponent },
    ])
  ]
})
export class ManageSlotRoutingModule { }
