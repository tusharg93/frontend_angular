import { Component, OnInit, ViewChild, Renderer , ViewEncapsulation } from '@angular/core';
import { ApiService } from './../common/services/api.service';
import { StorageService } from './../common/services/storage.service';
import { environment } from '../../../environments/environment';
import {ActivatedRoute, Router} from '@angular/router';
import { MetaComponent } from '../common/components/meta.component';
import { isBrowser } from 'angular2-universal';

declare var $:any;
declare var flatpickr:any;

declare var swal:any;
@Component({
  encapsulation:ViewEncapsulation.None,
  selector:'golf',
  templateUrl: './section-four.html',
  providers: [ApiService,StorageService],
})


export class SectionFourComponent implements OnInit {
  @ViewChild(MetaComponent) private metaComp: MetaComponent;
    
  environment:any;
  data:any;
  currency:any;
  timezone:any;
  slotMonths:any;
  days:any;
  slotTime:any;
  minGolf:any;
  next:number;
  constructor(private _storage:StorageService,private _router:Router,private renderer: Renderer, private ApiService: ApiService) {
    this.environment = environment;
    this.data = new Array();
    this.data.season = new Array();
    this.slotTime = new Array(5,10,15,20);
    this.minGolf = new Array(1,2,3,4);
    this.next = 0;
  }

  ngOnInit() {

    this._storage.promLogIn().then((val)=>{
      
    })
  }

  ngOnDestroy() {

  }


  save(form,i){
    if (form.valid){
       if(this.data.length == this.next+1){
         let params = [];
         for(let i in this.data){
           params.push({id:this.data[i].id,start_time:this.data[i].start_time,end_time:this.data[i].end_time,interval:this.data[i].interval,rates:this.data[i].rates,maintenance:this.data[i].maintenance})
         }
         this.ApiService.postApiMc4k('api/v1/forms/4',{seasons_info:params},false,true).then((value)=>{
           if(value&&value.msg&&value.msg=="success"){
             // this._router.navigateByUrl('golf-course/section-add-on');
             this.ApiService.userDetail('golf-course/section-add-on');
           }else{
             swal('Error', value.error,'error')
           }
         });
       }else{
         this.next = i +1;
       }

      }


  }


  setFlact(id){
    flatpickr('#'+id, {noCalendar: true, enableTime: true, time_24hr: true});

  }

  setValue(){
    let data = this.environment.random.userDetail;let params =[];
    for(let i in data.seasons_info){
      let pr = data.seasons_info[i];
      params.push({id:pr.season_id,uid:pr.id,start_date:pr.start_date,end_date:pr.end_date,start_time:pr.start_time,end_time:pr.end_time,interval:pr.tee_interval,maintenance:{start_time:pr.maintenance_stime,end_time:pr.maintenance_etime}});
      params[i].rates = [];
      if(data.rates_info&& data.rates_info.length == 0){
        params[i].rates.push({day_type:this.environment.random.keys['others']['weekday'],hole_18_price:null,hole_9_price:null,type:'weekday'});
        params[i].rates.push({day_type:this.environment.random.keys['others']['weekend'],hole_18_price:null,hole_9_price:null,type:'weekend'});

      }else{
        for(var j in data.rates_info){

          let pr1 = data.rates_info[j];
          if(pr1){
            if(this.environment.random.keys['others']['weekday'] == pr1.day_type){
              params[i].rates.push({day_type:this.environment.random.keys['others']['weekday'],hole_18_price:pr1.hole_18_price,hole_9_price:pr1.hole_9_price,type:'weekday'});
              break;
            }
            if(this.environment.random.keys['others']['weekend'] == pr1.day_type){
              params[i].rates.push({day_type:this.environment.random.keys['others']['weekend'],hole_18_price:pr1.hole_18_price,hole_9_price:pr1.hole_9_price,type:'weekend'});
              break;
            }
          }

        }
      }


    }
    this.data= params;
    console.log(this.data)

  }

  





}