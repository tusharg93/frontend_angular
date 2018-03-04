import { Component, OnInit, ViewChild, Renderer , ViewEncapsulation } from '@angular/core';
import { ApiService } from './../common/services/api.service';
import { StorageService } from './../common/services/storage.service';
import { environment } from '../../../environments/environment';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { MetaComponent } from '../common/components/meta.component';
import { isBrowser } from 'angular2-universal';

declare var $:any;
declare var swal:any;


@Component({
  encapsulation:ViewEncapsulation.None,
  selector:'home',
  templateUrl: './home.html',
  providers: [ApiService,StorageService],
})


export class HomeComponent implements OnInit {
  @ViewChild(MetaComponent) private metaComp: MetaComponent;
    
  environment:any;
  data:any;
  constructor(private _storage:StorageService,private activeRoute:ActivatedRoute,private _router: Router, private ApiService: ApiService) {
    this.environment = environment;
    this.environment.headerChild = [];
    this.data = new Array();
  }

  ngOnInit() {
      this._storage.userChecker(false).then((val)=>{
          if(val&&this.environment.random.source == 'golf_course'){
            this._router.navigateByUrl('golf-course/dashboard');
          }else if (val&&this.environment.random.source =='vendor'){
            this._router.navigateByUrl('vendor/dashboard');
          }
      })
    this.activeRoute.params.subscribe((params:Params) => {
      if(params['token'] && params['token'].trim() != ''){
        this._activeEmail(params['token']);
      }

    });

   
  }

  ngOnDestroy() {
     
   
  }
    
 

  setGaMeta(){
    // if(this.environment.myCity.cityName || this.allCityData.routerCity){
    //   this.metaComp.callGA({title:'kjhkjhk'});
    //   this.metaComp.setMetaData({metaDescription: 'dsada', metaTitle: 'dasdsad'});
    // }
   
  }


  loginMeIn(form){
    if(form.valid){
      this.environment.random.source = this.data.vendor?'vendor':'golf_course';
      var _self = this;
      swal({
            title: "Register Type",
            text: "Check user type",
            type: "warning",
            showCancelButton: true,
            confirmButtonClass: "btn-danger",
            confirmButtonText: "Golf Course",
            cancelButtonText: "Vendor",
            closeOnConfirm: true,
            closeOnCancel: true
          },
          function(isConfirm) {
            if (isConfirm) {
              _self.environment.random.source ='golf_course';
              _self.login()
            } else {
              _self.environment.random.source ='vendor';
              _self.login()
            }
          });
    }

  }

  login(){
    this.ApiService.postApiMc4k('api/v1/auth/login',"login_id="+this.data.email+"&password="+this.data.password+'&source='+this.environment.random.source,true).then((value)=>{

      if(value&&value.data&&this.environment.random.source==value.data['source']){
        this.environment.random.userInfo = {id:value.data['id'],token:value.data['token'],source:this.environment.random.source};
        let d = new Date();
        if(this.data.remember){
          d.setTime(d.getTime() + (12*30*24*60*60*1000));
          this._storage.storeCookies('id',this.environment.random.userInfo.id,d.toUTCString());
          this._storage.storeCookies('token',this.environment.random.userInfo.token,d.toUTCString());
          this._storage.storeCookies('source',this.environment.random.userInfo.source,d.toUTCString());
        }else {
          d.setTime(d.getTime() + (1*60*60*1000));
          this._storage.storeCookies('id',this.environment.random.userInfo.id,d.toUTCString());
          this._storage.storeCookies('token',this.environment.random.userInfo.token,d.toUTCString());
          this._storage.storeCookies('source',this.environment.random.userInfo.source,d.toUTCString());
        }

        this._router.navigateByUrl('golf-course/dashboard');

      }else if(value&&value.data&&this.environment.random.userInfo.source!=value.data['source']){
        swal("Error", 'You are not a '+this.environment.random.source, "error")
      }else{
        swal("Error", value.error, "error")
      }
    });

  }

  registerMeIn(form){
    if(form.valid){
      this.environment.random.source ='golf_course';
      this.ApiService.postApiMc4k('api/v1/forms/register',{email:this.data.email,password:this.data.password}).then((value)=>{
        if(value&&value.msg=='success'){
          swal("Success", value.msg, "success")
        }else{
          swal("Error", value.error, "error")
        }
      });
    }

  }

  registerVendor(form){
    if(form.valid) {
      this.environment.random.source ='vendor';
      let params = {name:this.data.name,country:this.data.country, city:this.data.city, mobile:this.data.mobile, country_code:this.data.country_code, email:this.data.email, password:this.data.password, website_url:this.data.website_url}
      this.ApiService.postApiMc4k('api/v1/vendors/register', params).then((value)=> {
        if(value&&value.msg=='success'){
          swal("Success", value.msg, "success")
        }else{
          swal("Error", value.error, "error")
        }
      });
    }
  }

  _activeEmail(token){
    let vendor = document.location.search.replace('?','&');
    vendor = vendor?vendor:'';
    this.environment.random.source = vendor==''?'golf_course':'vendor';
    this.ApiService.getApiMc4k('api/v1/forms/verify-email?token='+token+vendor,0).then((value)=>{
      if(value&&value.data){
        swal("Success", value.msg, "success")
      }else{
        swal("Error", value.error, "error")
      }
    });
  }

  _getCountry(){
    this.ApiService._getCountry();
  }

  _getCity(country){
    this.ApiService._getCity(country);
  }

  terms(id){
    swal({
          title: "Are you sure?",
          text: "TERMS & CONDITION",
          type: "warning",
          showCancelButton: false,
          confirmButtonClass: "btn-danger",
          confirmButtonText: "Yes, I AGREE!",
          closeOnConfirm: true
        },
        function(){
          $('#'+id).prop('checked',true)
        });
  }


}
