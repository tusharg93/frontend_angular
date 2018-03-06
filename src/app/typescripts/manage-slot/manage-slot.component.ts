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
      this.data['weekdays'] = data.gc_basic_info.weekdays.split(',')

    }
    if(data.gc_basic_info.weekends){
      this.data['weekends'] = data.gc_basic_info.weekends  .split(',')
    }
    
    if(this.data.season_info.length==0){
      this.router.navigateByUrl('golf-course/section-3');
      swal('Error','You need to add slots first','error')
    }else{
      this.data.type = 'seasons';
      this.current = {date:this.environment.random.keys['others']['weekend'],name:this.data.season_info[0].id,day:this.data['weekends'][0],hole:"9",date_val:null,days:[],holes:"9"};
      this.days = [{id:this.environment.random.keys['others']['weekend'],name:"Weekend"},{id:this.environment.random.keys['others']['weekday'],name:"Weekday"}]
      this.getdata();
    }

    flatpickr('.cls',{enableTime:false});

  }

  save(i){

    let params = {};
    let holes_9 = true;
    let holes_18 = true;


    if(this.slots[i].holes == "9" && this.slots[i].slot_status =="CLOSED"){
      holes_18 = !this.slots[i].hole_18_price||this.slots[i].hole_18_price==0||this.slots[i].slot_status1=='CLOSED'?false:true;
      holes_9 = false;

    }
    if(this.slots[i].holes == "9"&& this.slots[i].slot_status=="OPEN"){
      holes_18 = !this.slots[i].hole_18_price||this.slots[i].hole_18_price==0||this.slots[i].slot_status1=='CLOSED'?false:true;
      holes_9 = false

    }

    if(this.slots[i].holes == "18" && this.slots[i].slot_status1=="OPEN"){
      holes_18 = true;
      holes_9 = !this.slots[i].hole_9_price||this.slots[i].hole_9_price==0||this.slots[i].slot_status=='CLOSED'?false:true;

    }

    if(this.slots[i].holes == "18"&& this.slots[i].slot_status1=="CLOSED"){
      holes_18 = !this.slots[i].hole_9_price||this.slots[i].hole_9_price==0||this.slots[i].slot_status=='CLOSED'?false:true;
      holes_9 = true;

    }



    params['type'] = this.data.type;
    let statusVal = holes_9&&holes_18?'CLOSED':null;
    statusVal = !holes_9&&!holes_18?'OPEN':null;
    if(params['type']=='seasons'){
      params['day_type'] = this.current.date
      params['season_id'] = this.current.name;
      let days = (this.current.date==this.environment.random.keys['others']['weekend'])?this.data['weekends']:this.data['weekdays']
      this.current.days = this.current.days.length>0?this.current.days:days;
      params['days'] = this.current.days;
      params['days'] = params['days'];
      params['slots'] = [{tee_time:this.slots[i].tee_time,hole_9_price:this.slots[i].hole_9_price,hole_18_price:this.slots[i].hole_18_price,hole_18_flag:holes_18,hole_9_flag:holes_9}];
    }else{
      params['slots'] = [{id:this.slots[i].id,hole_9_price:this.slots[i].hole_9_price,hole_18_price:this.slots[i].hole_18_price,hole_18_flag:holes_18,hole_9_flag:holes_9}]

    }
    if(statusVal){
      params['slots'][0]['slot_status'] = statusVal;
    }
    

    this.ApiService.putApiMc4k('api/v1/slots/filter',params,0).then((value)=>{
      if(value&&value.msg&&value.msg=="success"){
        this.getdata();
      }else{
        swal('Error', value.error,'error')
      }
    });

  }

  saveAll(i){

  }





  getdata(){
    let param = 'type=seasons&season_id='+this.current.name+'&day_type='+this.current.date;

    this.slots = new Array();
    var _self = this;
    setTimeout(function(){
      if(_self.data.type == 'date'){
        param = 'type=date&date='+_self.current.date_val;
      }
      _self.ApiService.getApiMc4k('api/v1/slots/filter?'+param,0,true).then((value)=>{
        if(value&&value.data){
          let data = value.data;
          for(var i in data){
            data[i].holes = '9';
            if(_self.data.type == 'date'){
              data[i].slot_status = data[i].slot_status=='CLOSED'?'CLOSED':'OPEN';
              data[i].slot_status1 = data[i].slot_status=='CLOSED'?'CLOSED':'OPEN';
            }else{
              data[i].slot_status = data[i].hole_9_price<=0?'CLOSED':'OPEN';
              data[i].slot_status1 = data[i].hole_18_price<=0?'CLOSED':'OPEN';
            }

          }
          _self.slots = data;
        }
      })
    },100)
  }


  showCheckboxes(id) {
  var checkboxes = document.getElementById(id);
  if (checkboxes.style.display=='block') {
    checkboxes.style.display = "none";
  } else {
    checkboxes.style.display = "block";
  }
}

  checkMultiple(val) {
    let removed;let days =[]
    for(var i in this.current.days){
      if(val == this.current.days[i]){
        this.current.days.splice(i,0);
        removed = true;
        break;
      }
    }

    if(!removed){
      this.current.days.push(val);
    }
  }


}
