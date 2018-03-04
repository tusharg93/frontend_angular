import { Component, OnInit, ViewChild, Renderer , ViewEncapsulation } from '@angular/core';
import { ApiService } from './../common/services/api.service';
import { StorageService } from './../common/services/storage.service';
import { environment } from '../../../environments/environment';
import {ActivatedRoute, Params} from '@angular/router';
import { MetaComponent } from '../common/components/meta.component';
import { isBrowser } from 'angular2-universal';

declare var $:any;
declare var flatpickr:any;
declare var switchMaker:any;


@Component({
  encapsulation:ViewEncapsulation.None,
  selector:'golf',
  templateUrl: './close-days.html',
  providers: [ApiService,StorageService],
})


export class CloseDaysComponent implements OnInit {
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
    this.data = new Array();
  }

  ngOnInit() {
      this._storage.promLogIn().then((val)=>{
        
      })

  }

  ngOnDestroy() {

  }

  save(form,type){
    let params = {};
    if(form.valid){
      params['type'] = 'closed';
      params['data'] = [];
      for(var i in this.data.maintenance){
        let closed_info = this.data.maintenance[i]
        params['data'].push({full_day:closed_info.full_day,date:closed_info.date,start_time:closed_info.start_time,id:closed_info.id})
      }
      
        if(type){
            this.ApiService.putApiMc4k('api/v1/slots/manage',params,0).then((value)=>{
              this.ApiService.userDetail('golf-course/update-profile');
            });
        }else{
            this.ApiService.postApiMc4k('api/v1/slots/manage',params,false,true).then((value)=>{
              this.ApiService.userDetail('golf-course/update-profile');
            });
        }

    }

  }

  addNew(type){
    this.data[type].push({name:null,date:null,full_day:false});
    this.clickTheCheck();

  }

  setValue(){
    this.data.maintenance = new Array()
    let data = this.environment.random.userDetail;
    for(var i in data.closed_info){
      this.data.maintenance.push({full_day:data.closed_info[i].full_day,date:data.closed_info[i].date,start_time:data.closed_info[i].start_time,id:data.closed_info[i].id})

    }

    if(data.closed_info.length == 0){
      this.data['maintenance'].push({start_time:null,date:null,full_day:false});
    }

    var _self = this;
    setTimeout(function(){
      _self.clickTheCheck();
      switchMaker();
    },100)

    
  }

  ngInitFlact(i){
    flatpickr('.cls', {enableTime: false, minDate: new Date()});
    flatpickr('.cls_date', {noCalendar: true, enableTime: true, time_24hr: true});
    switchMaker('cdd'+i)
  }


  clickTheCheck(){
    let holidays = this.data.maintenance;
    this.data.maintenance = new Array();
    var _self = this;
    setTimeout(function(){
      _self.data.maintenance = holidays;
    },50)

    setTimeout(function(){
      switchMaker();
      for(var i in holidays){
        if(holidays[i].full_day){
          $('#'+(i+5)).click();
        }
      }
    },500)
  }



}
