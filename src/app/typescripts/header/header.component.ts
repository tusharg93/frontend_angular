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
        if(val){
          this.environment.random.userInfo = {id:val['id'],token:val['token'],source:val['source']};
          this.environment.random.source = val['source'];
          let d = new Date();
          d.setTime(d.getTime() + (12*30*24*60*60*1000));
          this._storage.storeCookies('id',this.environment.random.userInfo.id,d.toUTCString());
          this._storage.storeCookies('token',this.environment.random.userInfo.token,d.toUTCString());
          this._storage.storeCookies('source',this.environment.random.userInfo.source,d.toUTCString());
        }
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
