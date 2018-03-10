import { Component, OnInit, ViewChild, Renderer , ViewEncapsulation } from '@angular/core';
import { ApiService } from './../common/services/api.service';
import { StorageService } from './../common/services/storage.service';
import { environment } from '../../../environments/environment';
import {ActivatedRoute, Params} from '@angular/router';
import { MetaComponent } from '../common/components/meta.component';
import { isBrowser } from 'angular2-universal';

declare var swal:any;
declare var flatpickr:any;
declare var $:any;
declare var switchMaker:any;


@Component({
  encapsulation:ViewEncapsulation.None,
  selector:'golf',
  templateUrl: './public-holiday.html',
  providers: [ApiService,StorageService],
})


export class PublicHolidayComponent implements OnInit {
  @ViewChild(MetaComponent) private metaComp: MetaComponent;
    
  environment:any;
  data:any;

  constructor(private _storage:StorageService,private activeRoute:ActivatedRoute,private renderer: Renderer, private ApiService: ApiService) {
    this.environment = environment;
    this.data = new Array();
    this.data.holidays = new Array()
   
  }

  ngOnInit() {
      this._storage.promLogIn().then((val)=>{

      })

   
  }

  ngOnDestroy() {

  }


   save(form,update){
     let params = {};
     if(form.valid){
       params['type'] = 'holiday';
       params['data'] = []
       for(var i in this.data.holidays){
         params['data'].push({date:this.data.holidays[i].date,name:this.data.holidays[i].name,universal:this.data.holidays[i].universal?true:false,id:this.data.holidays[i].id})
       }
       if(!update){
         this.ApiService.postApiMc4k('api/v1/slots/manage',params,false,true).then((value)=>{
           if(value&&value.msg=='success'){
             this.ApiService.userDetail('golf-course/close-days');
           }

         });
       }else{
         this.ApiService.putApiMc4k('api/v1/slots/manage',params,0).then((value)=>{
           if(value&&value.msg=='success'){
             this.ApiService.userDetail('golf-course/close-days');
           }

         });
       }

     }

   }

  addNew(type){
    this.data[type].push({name:null,date:null,universal:false});
    var _self = this;
    setTimeout(function(){
      flatpickr('.cls', {enableTime: false,minDate:new Date()});
      _self.clickTheCheck()
    },50)

  }

  setValue(){
    this.data.holidays = new Array()
    let data = this.environment.random.userDetail;
    for(var i in data.holidays_info){
      this.data.holidays.push({universal:data.holidays_info[i].universal,name:data.holidays_info[i].name,date:data.holidays_info[i].date,id:data.holidays_info[i].id})
    }
  
   if(this.data.holidays.length == 0){
     this.data['holidays'].push({name:null,date:null,universal:false});
    }
    var _self = this;
    setTimeout(function(){
      _self.clickTheCheck();
      switchMaker();
    },100)
  }


  clickTheCheck(){
    let holidays = this.data.holidays;
    this.data.holidays = new Array();
    var _self = this;
    setTimeout(function(){
      _self.data.holidays = holidays;
    },50)

    setTimeout(function(){
      switchMaker();
      for(var i in holidays){
        if(holidays[i].universal){
          $('#'+(i+5)).click();
        }
      }
    },500)
  }
  
  
  ngInitFlact(i){
    flatpickr('.cls', {enableTime: false,minDate:new Date()});
  }


}
