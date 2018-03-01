import { Component, OnInit, ViewChild, Renderer , ViewEncapsulation } from '@angular/core';
import { ApiService } from './../common/services/api.service';
import { StorageService } from './../common/services/storage.service';
import { environment } from '../../../environments/environment';
import {ActivatedRoute, Params} from '@angular/router';
import { MetaComponent } from '../common/components/meta.component';
import { isBrowser } from 'angular2-universal';

declare var $:any;
declare var switchMaker:any;


@Component({
  encapsulation:ViewEncapsulation.None,
  selector:'golf',
  templateUrl: './golf.html',
  providers: [ApiService,StorageService],
})


export class DashboardComponent implements OnInit {
  @ViewChild(MetaComponent) private metaComp: MetaComponent;
    
  environment:any;
  data:any;
  currency:any;
  timezone:any;
  slotMonths:any;
  days:any;
  slotTime:any;
  minGolf:any;
  constructor(private _storage:StorageService,private activeRoute:ActivatedRoute,private renderer: Renderer, private ApiService: ApiService) {
    this.environment = environment;
    this.environment.headerChild = [];
    this.data = new Array();
    this.currency = new Array();
    this.timezone = new Array();
    this.slotTime = new Array(5,10,15,20);
    this.minGolf = new Array(1,2,3,4);
  }

  ngOnInit() {
      this._storage.userChecker(false).then((val)=>{
        switchMaker();
      })
    this._section_1();
   
  }

  ngOnDestroy() {

  }

  _section_1(){
    //currency
    this.ApiService.getApiMc4k('assets/json/currency.json',1).then((value)=>{
        this.currency = value.data;
      
    });
    //time zone
    this.ApiService.getApiMc4k('assets/json/time-zone.json',1).then((value)=>{
      this.timezone = value.data;
      this.data['timezone'] = this.timezone[0].offset;
    });
    let slots = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
    this.slotMonths = slots;
  }

  _section_2(){
     let days = ['Mon','Tue','Wed','Thur','Fri','Sat','Sun'];
     this.days = days;
  }

  save_1(form) {
    if (form.valid) {
      let params = {currency:this.data.currency,timezone:this.data.timezone,hole_9:this.data.hole_9?this.data.hole_9:false,hole_18:this.data.hole_18?this.data.hole_18:false, member:this.data.member?this.data.member:false,online:this.data.online?this.data.online:false,guest:this.data.guest?this.data.guest:false,duration:this.data.duration,tee:this.data.tee};
      this._saveAll(1,params);
      this._section_2();
    }
  }

  save_2(form){
    if (form.valid) {
      let params = {weekdays:this.data.weekdays,weekends:this.data.weekends,closed:{day:this.data.closed,day_type:this.data.day_type,fullday:this.data.full_day}};
      this._saveAll(2,params);
    }
  }
  

   _saveAll(form,params){
     this.ApiService.postApiMc4k('api/v1/forms/'+form,params,false,true).then((value)=>{

     });
   }

  clickMulti(key,value,disabled){
    let removed;
    this.data[value] = this.data[value]?this.data[value]:[];
    for(var i in this.data[value]){
      if(key == this.data[value][i]){
        this.data[value].splice(i,0);
        removed = true;
        $('#'+disabled+key).attr('disabled', false);
        $('#c_'+key).attr('disabled', false);
        break;
      }
    }

    if(!removed){
      this.data[value].push(key);
      $('#'+disabled+key).attr('disabled', true);
      $('#c_'+key).attr('disabled', true);
    }

  }

  setSeason(){
    this.data.seasonList = new Array();
    this.data.season_info = new Array();
    for(var i=0;i < this.data['noseason'];i++){
      this.data.seasonList.push(i);
      this.data.season_info.push({id:i,name:'Season '+(i+1),rates:{hole_9_price:"",hole_18_price:""}});
    }
  }

  // setMax(key){
  //   $('#'+disabled+key).attr('disabled', true);
  // }

  setMaintainance(){
    let main = {rates:{hole_9_price:"",hole_18_price:""}};
    this.data.maintainance = new Array();
    this.data.maintainance = main;
  }


  _getCountry(){
    this.ApiService._getCountry();
  }
  
  _getCity(country){
    this.ApiService._getCity(country);
  }


}
