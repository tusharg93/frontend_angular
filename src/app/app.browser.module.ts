/**
 * This file and `main.node.ts` are identical, at the moment(!)
 * By splitting these, you're able to create logic, imports, etc that are "Platform" specific.
 * If you want your code to be completely Universal and don't need that
 * You can also just have 1 file, that is imported into both
 * client.ts and server.ts
 */
import { NgInitDirectiveModule } from './typescripts/directive-modules/ng-init.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { UniversalModule } from 'angular2-universal';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './index';


import { StorageService } from './typescripts/common/services/storage.service';
import { ApiService } from './typescripts/common/services/api.service';

import { CookieService} from 'angular2-cookie/core';
// import { HomeComponent } from './typescripts/home/home.component';
import { HeaderComponent } from './typescripts/header/header.component';
import { ServerRoutingModule } from './server-routing.module';
import { BrowserRoutingModule } from './browser-routing.module';
// import { GolfComponent} from './typescripts/golf/golf.component';

import { Meta } from './typescripts/common/services/meta.service';

@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    UniversalModule,
    FormsModule,
    BrowserRoutingModule,
    NgInitDirectiveModule
       ],
  declarations: [
    AppComponent,
    // HomeComponent,
    HeaderComponent,
    // GolfComponent
  ],
  providers: [StorageService, ApiService, Meta,CookieService],
  schemas:      [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {

}