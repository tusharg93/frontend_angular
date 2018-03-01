/**
 * Created by maphishaphanbuh on 02/05/17.
 */
/**
 * This file and `main.browser.ts` are identical, at the moment(!)
 * By splitting these, you're able to create logic, imports, etc that are "Platform" specific.
 * If you want your code to be completely Universal and don't need that
 * You can also just have 1 file, that is imported into both
 * client.ts and server.ts
 */

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UniversalModule } from 'angular2-universal';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './index';
import { HomeComponent } from './typescripts/home/home.component';
import { CookieService } from 'angular2-cookie/core';
import { HeaderComponent } from './typescripts/header/header.component';
import { GolfComponent} from './typescripts/golf/golf.component';

import { StorageService } from './typescripts/common/services/storage.service';



import { ApiService } from './typescripts/common/services/api.service';


import { ServerRoutingModule } from './server-routing.module';


@NgModule({
    bootstrap: [ AppComponent],
    imports: [
        UniversalModule,   
        FormsModule,
        ServerRoutingModule
    ],
    declarations: [
        AppComponent, HomeComponent,HeaderComponent,GolfComponent

    ],
    providers: [StorageService, ApiService, CookieService],
    schemas:      [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {

}