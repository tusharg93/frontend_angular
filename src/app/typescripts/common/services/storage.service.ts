import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import 'rxjs/add/operator/toPromise';
import {CookieService} from 'angular2-cookie/core';
import { isBrowser } from 'angular2-universal';

declare var swal:any;
declare var hideId:any;
declare var $:any;



@Injectable()
export class StorageService {
  environment:any;

  constructor(private zone:NgZone, private router:Router, private _cookie:CookieService) {
    this.environment = environment;
  }
  



  userChecker(update){
    return new Promise((resolve, reject) => {
      if(isBrowser) {
        let cookies = this._cookie.getAll();
        if (this.environment.random.userInfo) {
          this.environment.random.source = this.environment.random.userInfo.source;
          resolve(this.environment.random.userInfo);
        } else if (cookies['id'] && cookies['token'] && cookies['source']) {
          this.environment.random.userInfo = {id:cookies['id'],token:cookies['token'],source:cookies['source']};
          this.environment.random.source = this.environment.random.userInfo.source;
          resolve(this.environment.random.userInfo);
        } else {
          resolve();
        }
      }

    });
  }


  

  promLogIn(){
    return new Promise((resolve, reject) => {
      if(isBrowser) {
        let cookies = this._cookie.getAll();
        if (this.environment.random.userInfo) {
          this.environment.random.source = this.environment.random.userInfo.source;
          resolve(this.environment.random.userInfo);
        } else if (cookies['id'] && cookies['token'] && cookies['source']) {
          this.environment.random.userInfo = {id:cookies['id'],token:cookies['token'],source:cookies['source']};
          this.environment.random.source = this.environment.random.userInfo.source;
          resolve(this.environment.random.userInfo);
        } else {
          this.router.navigateByUrl('/');
          swal('Access Denied','You will need to sign in first','error');
          resolve();
        }
      }

    });
  }

  storeCookies(name,val,time){
    document.cookie=name+"="+val+"; expires="+time+"; path=/";
   }
  

  deleteStorage(){

    let expires = "Thu, 01 Jan 1970 00:00:01 GMT";
    let d = new Date();
    d.setTime(d.getTime() + (24*60*60*1000));
    let cookies = this._cookie.getAll();
    // if(isBrowser){
    //     deleteCookie();
    // }
    for(var i in cookies){
      if(i.indexOf('CakeCookie') > -1){
        this._cookie.remove(i,{path:'/'});
      }
    }
    this._cookie.remove("mc4kParentTokenId",{path:'/'});
    this._cookie.remove("apiUserId",{path:'/'});
    this._cookie.put("mc4kParentDTokenId",'logout' ,{path:'/',expires:d.toUTCString()});
    this.environment.userInfo = [];
    this.environment.loggedIn = false;
    this.environment.langSelection = [];
    localStorage.removeItem('ngStorage-userInfo');


  }







  showMessage(message,type){
      if(type == 'error' || type == 'failure'){
        this.environment.random.errorImg = this.environment.cdnParentingPath+'error_img';
       $('#errorMessage').text(message);
        $("#search-popup8").addClass('cmn_modal_active');
      }else if(type == 'success'){
        this.environment.random.successImg = this.environment.cdnParentingPath+'success_img';
        $('#successMessage').text(message);
        $("#search-popup7").addClass('cmn_modal_active');
      }
  }

  updateEnvironment(params){
  
        for(let i in params){
            this.environment.userInfo[i] = params[i];
        }
         
        this.zone.run(()=>{
            this.environment.userInfo =  this.environment.userInfo;
        });
        return this.environment.userInfo;
    }




  userDetail(params){
    this.environment.random.userDetail = this.environment.random.userDetail?this.environment.random.userDetail:new Array();
    for(var i in params){
      this.environment.random.userDetail[i] = params[i];
    }
  }

 
  
    
}
