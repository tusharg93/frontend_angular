
import { HomeComponent } from './typescripts/home/home.component';
import { GolfComponent } from './typescripts/golf/golf.component';

import { ModuleWithProviders } from "@angular/core";

import { Routes, RouterModule } from '@angular/router';

const routes:Routes = [
    //home
    { path: '', component:HomeComponent, data: { name:'Home', type:'Page' },pathMatch: 'full'},
    { path: 'verify-email/:token', component:HomeComponent, data: { name:'Email', type:'Verification' },pathMatch: 'full'},
    { path: 'golf-course', component:GolfComponent, data: { name:'Golf', type:'' },pathMatch: 'full'},

];


export const ServerRoutingModule :ModuleWithProviders= RouterModule.forRoot(routes);
