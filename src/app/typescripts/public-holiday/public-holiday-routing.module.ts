import { NgModule  } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PublicHolidayComponent } from './public-holiday.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component:  PublicHolidayComponent },
    ])
  ]
})
export class PublicHolidayRoutingModule { }
