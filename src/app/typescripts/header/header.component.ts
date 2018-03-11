import { Component, OnInit, ViewChild, Renderer , ViewEncapsulation } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ApiService } from './../common/services/api.service';
import { StorageService } from './../common/services/storage.service';
import { Router,ActivatedRoute, Params } from '@angular/router';

import { isBrowser, isNode } from 'angular2-universal';

declare var $:any;
@Component({
  encapsulation:ViewEncapsulation.None,
  selector: 'tee-header',
  templateUrl: './header.html',
  providers: [ApiService]
})
export class HeaderComponent implements OnInit {
  environment:any;
  constructor(private ApiService:ApiService,  private router: Router,private _storage:StorageService) {
    this.environment = environment;

  }

  ngOnInit() {
    this._storage.userChecker(false).then((val)=>{

    })

  }

  dashboard(){
    // $('#page-wrapper').addClass('loggedIn');
    if(this.environment.random.userInfo.activated){
      this.ApiService.userDetail('golf-course/dashboard');
    }else{
      this.ApiService.userDetail(false);
    }


  }

  vdahboard(){
    // $('#page-wrapper').addClass('loggedIn');
    this.ApiService.userDetailVendor('vendor/dashboard');
  }


  logout(){
    let date1 = 'Thu, 01 Jan 1970 00:00:01 GMT;';
    this._storage.storeCookies('id',false,date1);
    this._storage.storeCookies('token',false,date1);
    this._storage.storeCookies('source',false,date1);
    this.environment.random.userDetail = new Array();
    this.environment.random.userInfo = new Array();
    var _self = this;
    setTimeout(function(){
      // $('#page-wrapper').removeClass('loggedIn');
      _self.router.navigateByUrl('/');
    },500)

  }
    
   

}
