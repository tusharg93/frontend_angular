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
    this.data.season = [];
    this.slotTime = new Array(5,10,15,20);
    this.minGolf = new Array(1,2,3,4);
    this.next = 0;
  }

  ngOnInit() {
      this.data = this.environment.random.userDetail;
    
    this._storage.promLogIn().then((val)=>{
      if(val){
        let time = new Date(new Date().getTime() + 4*60*60*1000).toLocaleTimeString();
        flatpickr('.cls', {noCalendar: true, enableTime: true, time_24hr: true});
      }
    })
  }

  ngOnDestroy() {

  }


  save(form,i){
    if (form.valid){
       if(this.data.season_info.length == this.next){
         let params = [];
         for(let i in this.data.season_info){
           params.push({id:this.data.season_info[i].id,start_time:this.data.season_info[i].start_time,end_time:this.data.season_info[i].end_time,interval:this.data.season_info[i].interval,rates:this.data.season_info[i].rates,maintenance:this.data.season_info[i].maintenance})
         }
         this.ApiService.postApiMc4k('api/v1/forms/4',{seasons_info:params},false,true).then((value)=>{
           if(value&&value.msg&&value.msg=="success"){
             this._router.navigateByUrl('golf-course/section-add-on');
           }else{
             swal('Error', value.error,'error')
           }
         });
       }else{
         this.next = i +1;
       }

      }


  }


  setFlact(){

    let time = new Date(new Date().getTime() + 4*60*60*1000).toLocaleTimeString();
    flatpickr('.cls', {noCalendar: true, enableTime: true, time_24hr: true});

  }

  setValue(){
    // let data = this.environment.random.userDetail;let params =[];
    // for(let i in data.seasons_info){
    //   let pr = data.seasons_info[i];
    //   params.push({id:pr.season_id,uid:pr.id,start_time:pr.start_time,end_time:pr.end_time,interval:pr.tee_interval,maintenance:{start_time:pr.maintenance_stime,end_time:pr.maintenance_etime}});
    //   params[i].rates = [];
    //   for(var i in data.rates_info){
    //     let pr1 = data.rates_info[i];
    //     if(pr1){
    //       if(this.environment.random.keys['others']['weekday'] == pr1.day_type){
    //         params[i].rates.push({day_type:this.environment.random.keys['others']['weekday'],hole_18_price:pr1.hole_18_price,hole_9_price:pr1.hole_9_price,type:'weekday'});
    //       }
    //       if(this.environment.random.keys['others']['weekday'] == pr1.day_type){
    //         params[i].rates.push({day_type:this.environment.random.keys['others']['weekend'],hole_18_price:pr1.hole_18_price,hole_9_price:pr1.hole_9_price,type:'weekend'});
    //
    //       }
    //     }
    //
    //    }
    // }
  }

  





}
