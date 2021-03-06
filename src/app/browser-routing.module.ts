
import { Routes, RouterModule } from '@angular/router';

import { ModuleWithProviders } from "@angular/core";


const routes:Routes = [
    //home
     { path: '', loadChildren: './typescripts/home/home.module#HomeModule', data: { name:'Home', type:'Page' },pathMatch: 'full'},

     { path: 'login/:type', loadChildren: './typescripts/login/login.module#LoginModule', data: { name:'LoginModule', type:'Page' },pathMatch: 'full'},

     { path: 'register/:type', loadChildren: './typescripts/login/login.module#LoginModule', data: { name:'LoginModule', type:'Page' },pathMatch: 'full'},

     { path: 'verify/:token', loadChildren: './typescripts/home/home.module#HomeModule', data: { name:'Email', type:'Verification' },pathMatch: 'full'},

     { path: 'golf-course/section-one', loadChildren: './typescripts/section-one/section-one.module#SectionOneModule', data: { name:'Golf', type:'One' },pathMatch: 'full'},

     { path: 'golf-course/section-two', loadChildren: './typescripts/section-two/section-two.module#SectionTwoModule', data: { name:'Golf', type:'Two' },pathMatch: 'full'},

     { path: 'golf-course/section-three', loadChildren: './typescripts/section-three/section-three.module#SectionThreeModule', data: { name:'Golf', type:'Three' },pathMatch: 'full'},

     { path: 'golf-course/section-four', loadChildren: './typescripts/section-four/section-four.module#SectionFourModule', data: { name:'Golf', type:'Four' },pathMatch: 'full'},
    
     { path: 'golf-course/section-add-on', loadChildren: './typescripts/section-add-on/section-add-on.module#SectionAddOnModule', data: { name:'Golf', type:'AddOn' },pathMatch: 'full'},

     { path: 'golf-course/price', loadChildren: './typescripts/section-add-on/section-add-on.module#SectionAddOnModule', data: { name:'Golf', type:'Price' },pathMatch: 'full'},

     { path: 'golf-course/dashboard', loadChildren: './typescripts/dashboard/dashboard.module#DashboardModule', data: { name:'Golf', type:'AddOn' },pathMatch: 'full'},

     { path: 'golf-course/update-profile', loadChildren: './typescripts/update-profile/update-profile.module#UpdateProfileModule', data: { name:'Golf', type:'Update' },pathMatch: 'full'},

     { path: 'golf-course/public-holiday', loadChildren: './typescripts/public-holiday/public-holiday.module#PublicHolidayModule', data: { name:'Golf', type:'Update' },pathMatch: 'full'},

     { path: 'golf-course/close-days', loadChildren: './typescripts/close-days/close-days.module#CloseDaysModule', data: { name:'Golf', type:'Update' },pathMatch: 'full'},

     { path: 'golf-course/manage-slot', loadChildren: './typescripts/manage-slot/manage-slot.module#ManageSlotModule', data: { name:'Golf', type:'Update' },pathMatch: 'full'},

     { path: 'golf-course/manage-vendors', loadChildren: './typescripts/manage-vendors/manage-vendors.module#ManageVendorsModule', data: { name:'Golf', type:'Update' },pathMatch: 'full'},

     { path: 'vendor/dashboard', loadChildren: './typescripts/dashboard-v/dashboard.module#DashboardModule', data: { name:'Golf', type:'dashboard' },pathMatch: 'full'},

     { path: 'vendor/update-profile', loadChildren: './typescripts/update-profile-v/update-profile.module#UpdateProfileModule', data: { name:'Golf', type:'dashboard' },pathMatch: 'full'},

     { path: 'vendor/manage-golf-course', loadChildren: './typescripts/manage-golf-course/manage-golf-course.module#ManageGolfCourseModule', data: { name:'Golf', type:'dashboard' },pathMatch: 'full'},

];


export const BrowserRoutingModule :ModuleWithProviders= RouterModule.forRoot(routes);
