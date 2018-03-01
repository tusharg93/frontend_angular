import { NgModule  } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ManageVendorsComponent } from './manage-vendors.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component:  ManageVendorsComponent },
    ])
  ]
})
export class ManageVendorsRoutingModule { }
