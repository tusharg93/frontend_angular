import { Component, OnInit, ViewChild, Renderer , ViewEncapsulation } from '@angular/core';
import { ApiService } from './../common/services/api.service';
import { StorageService } from './../common/services/storage.service';
import { environment } from '../../../environments/environment';
import {Router, Params} from '@angular/router';
import { MetaComponent } from '../common/components/meta.component';
import { isBrowser } from 'angular2-universal';

declare var $:any;
declare var swal:any;
declare var flatpickr:any;

@Component({
  encapsulation:ViewEncapsulation.None,
  selector:'golf',
  templateUrl: './manage-slot.html',
  providers: [ApiService,StorageService],
})


export class ManageSlotComponent implements OnInit {
  @ViewChild(MetaComponent) private metaComp: MetaComponent;
    
  environment:any;
  data:any;
  current:any;
  days:any;
  slots:any;
  is_hole_18:boolean;
  is_hole_9:boolean;
  constructor(private _storage:StorageService,private router:Router,private renderer: Renderer, private ApiService: ApiService) {
    this.environment = environment;
    this.environment.headerChild = [];
    this.data = new Array();
    this.current = new Array();
    this.days = new Array();
  }

  ngOnInit() {
    this._storage.promLogIn().then((val)=>{

    })

  }

  ngOnDestroy() {

  }

  setValue(){
    let data = this.environment.random.userDetail;let params =[];
    this.data.season_info = new Array();
    for(let i in data.seasons_info){
      let pr = data.seasons_info[i];
      params.push({name:this.environment.random.keys['others'][pr.season_id],slot_status:pr.slot_status?pr.slot_status:false,id:pr.season_id,uid:pr.id,start_date:pr.start_date,end_date:pr.end_date,start_time:pr.start_time,end_time:pr.end_time,interval:pr.tee_interval,maintenance:{start_time:pr.maintenance_stime,end_time:pr.maintenance_etime}});
      params[i].rates = [];
      for(var j in data.rates_info){
        let pr1 = data.rates_info[j];
        if(pr1){
          if(pr.season_id == pr1.season_id){
            params[i].rates.push({day_type:pr1.day_type,hole_18_price:pr1.hole_18_price,hole_9_price:pr1.hole_9_price,type:this.environment.random.keys['others'][pr1.day_type]});

          }
        }

      }

     this.data.season_info.push(params[i])
    }

    if(data.gc_basic_info.weekdays){
      this.data['weekdays'] = data.gc_basic_info.weekdays.split(',');
    }
    if(data.gc_basic_info.weekends){
      this.data['weekends'] = data.gc_basic_info.weekends.split(',');
      this.setCheck(this.data['weekends']);
    }
    this.is_hole_18 = this.environment.random.userDetail&&this.environment.random.userDetail['gc_basic_info']&&this.environment.random.userDetail['gc_basic_info']['is_hole_18']?true:false;

    this.is_hole_9 = this.environment.random.userDetail&&this.environment.random.userDetail['gc_basic_info']&&this.environment.random.userDetail['gc_basic_info']['is_hole_9']?true:false;

    if(this.data.season_info.length==0){
      this.router.navigateByUrl('golf-course/section-3');
      swal('Error','You need to add slots first','error')
    }else{
      this.data.type = 'seasons';
      this.current = {date:this.environment.random.keys['others']['weekend'],name:this.data.season_info[0].id,day:this.data['weekends'][0],hole:"9",date_val:null,days:JSON.parse(JSON.stringify(this.data['weekends'])),holes:"9"};
      this.days = [{id:this.environment.random.keys['others']['weekend'],name:"Weekend"},{id:this.environment.random.keys['others']['weekday'],name:"Weekday"}]
      this.getdata();
    }

    flatpickr('.cls',{enableTime:false});

  }
  
  setCheck(val){

    var _self = this;
    setTimeout(function(){
      for(var i in val){
        $('#'+val[i]).attr('checked',true);
      }
      _self.current.days = JSON.parse(JSON.stringify(val));

    },100);


  }

  save(i){

    let params = {};
    let holes_9 = this.slots[i].holes == '9'&&this.slots[i].slot_status=='OPEN';
    let holes_18 = this.slots[i].holes == '18'&&this.slots[i].slot_status1=='OPEN';
    if(this.slots[i].holes == 'BOTH'){
      this.slots[i].slot_status =this.slots[i].slot_status2;
      this.slots[i].slot_status1 = this.slots[i].slot_status2;
    }

    params['type'] = this.data.type;
    if(params['type']=='seasons'){
      params['day_type'] = this.current.date
      params['season_id'] = this.current.name;
      params['days'] = this.current.days;
      params['slots'] = [{hole_9_status:this.slots[i].slot_status,hole_18_status:this.slots[i].slot_status1,tee_time:this.slots[i].tee_time,hole_9_price:parseInt(this.slots[i].hole_9_price),hole_18_price:parseInt(this.slots[i].hole_18_price)}];
    }else{
      params['slots'] = [{hole_9_status:this.slots[i].slot_status,hole_18_status:this.slots[i].slot_status1,id:this.slots[i].id,hole_9_price:parseInt(this.slots[i].hole_9_price),hole_18_price:parseInt(this.slots[i].hole_18_price)}]

    }

    if((holes_9&&!this.slots[i].hole_9_price)||(holes_18&&!this.slots[i].hole_18_price)){
      swal('You need to enter a price','','error');
    }else{
      this.ApiService.putApiMc4k('api/v1/slots/filter',params,0).then((value)=>{
        if(value&&value.msg&&value.msg=="success"){
          this.getdata();
        }else{
          swal('Error', value.error,'error')
        }
      });

    }


  }







  getdata(){
    this.environment.random.showLoader = true;
    this.slots = new Array();
    var _self = this;

    setTimeout(function(){
      let param = 'type=seasons&season_id='+_self.current.name+'&day_type='+_self.current.date+'&day='+_self.current.days;

      if(_self.data.type == 'date'){
        param = 'type=date&date='+_self.current.date_val;
      }
      _self.ApiService.getApiMc4k('api/v1/slots/filter?'+param,0,true).then((value)=>{
        if(value&&value.data){
          let data = value.data;
          for(var i in data){

            data[i].holes = _self.is_hole_9?'9':'18';

            data[i].slot_status = data[i].slot_status;
            data[i].slot_status1 = data[i].slot_status;
            data[i].slot_status2 = data[i].slot_status;
          }
          _self.slots = data;
          _self.environment.random.showLoader = false;
        }
      })
    },100)
  }


  

  checkMultiple(val) {
    let removed;let days =[]
    for(var i in this.current.days){
      if(val == this.current.days[i]){
        this.current.days.splice(i,1);
        removed = true;
        break;
      }
    }

    if(!removed){
      this.current.days.push(val);
    }

  }


}
