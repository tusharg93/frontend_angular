import { NgModule  } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ManageGolfCourseComponent } from './manage-golf-course.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component:  ManageGolfCourseComponent },
    ])
  ]
})
export class ManageGolfCourseRoutingModule { }
