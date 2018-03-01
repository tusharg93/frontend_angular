import { Component, OnInit, ViewChild, Renderer , ViewEncapsulation } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ApiService } from './../common/services/api.service';
import { StorageService } from './../common/services/storage.service';
import { Router,ActivatedRoute, Params } from '@angular/router';

import { isBrowser, isNode } from 'angular2-universal';


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
         this.ApiService.getApiMc4k('api/v1/forms/defaults',0,true).then((value)=>{
           if(value&&value.data){
             this.environment.random.keys = value.data;
             this.environment.random.keys['others'] = new Array();
             let param = [];
             for(var i in this.environment.random.keys){
               for(var j in this.environment.random.keys[i]){
                 param[this.environment.random.keys[i][j].name] = this.environment.random.keys[i][j].id;
                 param[this.environment.random.keys[i][j].id] = this.environment.random.keys[i][j].name;
               }

             }
             this.environment.random.keys['others']  = param;
           }
         });

       }
    })

  }

  dashboard(){
    this.ApiService.getApiMc4k('api/v1/forms/dashboard',0,true).then((value)=>{
      if(value&&value.data){
        this.environment.random.userDetail = value.data;
      }
    })
  }

  vdahboard(){
    // this.ApiService.getApiMc4k('api/v1/forms/dashboard',0,true).then((value)=>{
    //   if(value&&value.data){
    //     this.environment.random.userDetail = value.data;
    //   }
    // })
  }


  logout(){
    let date1 = 'Thu, 01 Jan 1970 00:00:01 GMT;';
    this._storage.storeCookies('id',false,date1);
    this._storage.storeCookies('token',false,date1);
    this._storage.storeCookies('source',false,date1);
    this.environment.random.userDetail = new Array();
    this.environment.random.userInfo = new Array();
    this.router.navigateByUrl('/');
  }
    
   

}
