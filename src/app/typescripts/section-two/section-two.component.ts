import { Component, OnInit, ViewChild, Renderer , ViewEncapsulation } from '@angular/core';
import { ApiService } from './../common/services/api.service';
import { StorageService } from './../common/services/storage.service';
import { environment } from '../../../environments/environment';
import {ActivatedRoute, Router} from '@angular/router';
import { MetaComponent } from '../common/components/meta.component';
import { isBrowser } from 'angular2-universal';

declare var $:any;
declare var switchMaker:any;
declare var swal:any;


@Component({
  encapsulation:ViewEncapsulation.None,
  selector:'golf',
  templateUrl: './section-two.html',
  providers: [ApiService,StorageService],
})


export class SectionTwoComponent implements OnInit {
  @ViewChild(MetaComponent) private metaComp: MetaComponent;
    
  environment:any;
  data:any;
  currency:any;
  timezone:any;
  slotMonths:any;
  days:any;
  slotTime:any;
  minGolf:any;
  constructor(private _storage:StorageService,private _router: Router, private ApiService: ApiService) {
    this.environment = environment;
    this.environment.headerChild = [];
    this.data = new Array();
    this.currency = new Array();
    this.timezone = new Array();
    this.slotTime = new Array(5,10,15,20);
    this.minGolf = new Array(1,2,3,4);
  }

  ngOnInit() {
      
    this._storage.promLogIn().then((val)=>{
      switchMaker();
    })
    let days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
    this.days = days;
    this.data.weekdays = [];
    this.data.weekends = [];
   
  }

  ngOnDestroy() {

  }



  save_2(form,update){
    console.log(this.data)
    let sum = this.data.weekdays.length+this.data.weekends.length;

    if (form.valid&&sum== 7) {
      for(var i in this.data.weekends){
        if(this.data.closed == this.data.weekends[i]){
          this.data.day_type = this.environment.random.keys['others']['weekend'];
          break;
        }
      }
      if(!this.data.day_type){
        for(var i in this.data.weekdays){
          if(this.data.closed == this.data.weekdays[i]){
            this.data.day_type = this.environment.random.keys['others']['weekday'];
            break;
          }
        }
      }

      for(var i in this.environment.random.keys.days){
        if(this.environment.random.keys.days[i].name.toLowerCase() == this.data.day_type){
          this.data.day_type = this.environment.random.keys.days[i].id;
          break;
        }
      }

      let params = {weekdays:this.data.weekdays,weekends:this.data.weekends,closed:this.data.closed?[{day:this.data.closed,day_type:this.data.closed?this.data.day_type:'',fullday:this.data.full_day}]:null};
      if(update){
        this.ApiService.putApiMc4k('api/v1/forms/2',params,0).then((value)=>{
          if(value&&value.msg&&value.msg=="success"){
            this._storage.userDetail(params);
            this._router.navigateByUrl('golf-course/section-3');
          }
        });
      }else{
        this.ApiService.postApiMc4k('api/v1/forms/2',params,false,true).then((value)=>{
          if(value&&value.msg&&value.msg=="success"){
            this._storage.userDetail(params);
            this._router.navigateByUrl('golf-course/section-3');
          }
        });
      }
      
    }else if(sum != 7){
      swal('Error', 'Please select all days','error')
    }
  }
  


  clickMulti(key,value,disabled){
    let removed;
    this.data[value] = this.data[value]?this.data[value]:[];
    for(var i in this.data[value]){
      if(key == this.data[value][i]){
        this.data[value].splice(i,0);
        removed = true;
        $('#'+disabled+key).next().removeClass('disabled');
        break;
      }
    }

    if(!removed){
      this.data[value].push(key);
      $('#'+disabled+key).next().addClass('disabled');
    }
  }



  setValue(){
    let data = this.environment.random.userDetail;
    let params = {weekdays:data.gc_basic_info.weekdays.split(','),weekends:data.gc_basic_info.weekends.split(','),closed:data.gc_basic_info.maintenance_day?[{day:data.gc_basic_info.maintenance_day,fullday:data.gc_basic_info.maintenance_type}]:null};
    for(var i in params.weekdays){
      this.data['weekdays'].push(params.weekdays[i]);
      $('#weekdays'+this.data['weekdays'][i]).click();
    }
    for(var i in params.weekends){
      this.data['weekends'].push(params.weekends[i]);
      $('#weekends'+this.data['weekends'][i]).click();
    }
    if(params.closed){
      this.data['closed'] = params.closed;
      this.data.closedK = true;
      this.data.closed = data.gc_basic_info.maintenance_day;
      this.data.full_day = data.gc_basic_info.maintenance_type;
    }


  }


}
