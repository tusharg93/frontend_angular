import { Component, OnInit, ViewChild, Renderer , ViewEncapsulation } from '@angular/core';
import { ApiService } from './../common/services/api.service';
import { StorageService } from './../common/services/storage.service';
import { environment } from '../../../environments/environment';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { MetaComponent } from '../common/components/meta.component';
import { isBrowser } from 'angular2-universal';

declare var $:any;
declare var swal:any;
declare var flipCom:any;
var BATTUTA_KEY="00000000000000000000000000000000";

@Component({
  encapsulation:ViewEncapsulation.None,
  selector:'home',
  templateUrl: './login.html',
  providers: [ApiService,StorageService],
})


export class LoginComponent implements OnInit {
  @ViewChild(MetaComponent) private metaComp: MetaComponent;
    
  environment:any;all:any;
  data:any;cities:any;regions:any;
  constructor(private _storage:StorageService,private activeRoute:ActivatedRoute,private _router: Router, private ApiService: ApiService) {
    this.environment = environment;
    this.environment.headerChild = [];
    this.data = new Array();
    this.all = new Array();
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
      if(params['type']&& params['type'].trim() != ''){
        this.environment.random.source = params['type'];
        if(this._router.url.indexOf('register') >-1 && params['type'] == 'golf_course') {
          flipCom('registerform','centerForm')
        }else if(this._router.url.indexOf('register') >-1 && params['type'] == 'vendor'){
          flipCom('registerVForm','centerForm')
        }else if(this._router.url.indexOf('login')>-1){
          flipCom('loginform','centerForm')
        }

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

      this.ApiService.postApiMc4k('api/v1/auth/login',"login_id="+this.data.email+"&password="+this.data.password+'&source='+this.environment.random.source,true).then((value)=>{

        if(value&&value.data&&this.environment.random.source==value.data['source']){
          this.environment.random.userInfo = {activated:value.data.activated,id:value.data['id'],token:value.data['token'],source:this.environment.random.source};
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



        }else if(value&&value.data&&this.environment.random.userInfo.source!=value.data['source']){
          swal("Error", 'You are not a '+this.environment.random.source, "error")
        }else{
          swal("Error", value.error, "error")
        }
      });

    }

  }
  

  registerMeIn(form){
    if(form.valid){
      this.environment.random.source ='golf_course';
      let code = this.data.country_code?this.data.country_code:this.data.country_code2;
      let countryCode;
      for(var i in this.all['code']){
        if(this.all['code'][i].code==code){
          countryCode = this.all['code'][i].callingCode;
          break;
        }
      }
      let params = {name:this.data.name,country:this.data.country, city:this.data.city, mobile:this.data.mobile, country_code:countryCode, email:this.data.email1, password:this.data.password1}
      this.ApiService.postApiMc4k('api/v1/forms/register',params).then((value)=>{
        if(value&&value.msg=='success'){
          flipCom('loginform','registerform')
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
      let code = this.data.country_code?this.data.country_code:this.data.country_code2;
      let countryCode;
      for(var i in this.all['code']){
        if(this.all['code'][i].code==code){
          countryCode = this.all['code'][i].callingCode;
          break;
        }
      }
      let params = {name:this.data.name2,country:this.data.country2, city:this.data.city2, mobile:this.data.mobile2, country_code:countryCode, email:this.data.email2, password:this.data.password2, website_url:this.data.website_url2}
      this.ApiService.postApiMc4k('api/v1/vendors/register', params).then((value)=> {
        if(value&&value.msg=='success'){
          flipCom('loginform','registerVform')
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
      if(value&&value.msg){
        swal("Success", value.msg, "success")
      }else{
        swal("Error", value.error, "error")
      }
    });

  }

  _getCountry(){
    var url="https://battuta.medunes.net/api/country/all/?key="+BATTUTA_KEY+"&callback=?";
    var _self = this;
    $.getJSON(url,function(countries) {
      _self.environment.random.countries = countries;
      _self.all['countries'] = countries;
      setTimeout(()=>{
        $('.chosen').chosen()
      },200)
    });
    if(!this.environment.random.countries){
      this.ApiService.getApiMc4k('https://restcountries.eu/rest/v2/all',1).then((value)=>{
        let arr = [];
        for(var i in value){
          arr.push({code:value[i].alpha2Code.toLocaleLowerCase(),callingCode:value[i].callingCodes[0]})
        }
        this.all['code'] = arr;
      });
    }
  }

  _getRegion(countryCode){
    let url="https://battuta.medunes.net/api/region/" +countryCode +"/all/?key="+BATTUTA_KEY+"&callback=?";
    var _self = this;_self.regions = [];_self.all.search = null;
    $.getJSON(url,function(regions) {
      _self.regions = regions;
      _self.all['regions'] = regions;
    });
  }

  _getCity(countryCode,region){
    let url="https://battuta.medunes.net/api/city/" +countryCode +"/search/?region=" +region +"&key=" +BATTUTA_KEY +"&callback=?";
    var _self = this;_self.cities = [];_self.all.search1 = null;
    $.getJSON(url,function(cities) {
      _self.cities = cities;
      _self.all['cities'] = cities;
    });
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
