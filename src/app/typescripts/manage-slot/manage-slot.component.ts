import { Component, OnInit, ViewChild, Renderer , ViewEncapsulation } from '@angular/core';
import { ApiService } from './../common/services/api.service';
import { StorageService } from './../common/services/storage.service';
import { environment } from '../../../environments/environment';
import {Router, Params} from '@angular/router';
import { MetaComponent } from '../common/components/meta.component';
import { isBrowser } from 'angular2-universal';

declare var $:any;
declare var swal:any;


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
 
  constructor(private _storage:StorageService,private router:Router,private renderer: Renderer, private ApiService: ApiService) {
    this.environment = environment;
    this.environment.headerChild = [];
    this.data = new Array();
    
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
      params.push({status:pr.status?pr.status:false,holes:"9",id:pr.season_id,uid:pr.id,start_date:pr.start_date,end_date:pr.end_date,start_time:pr.start_time,end_time:pr.end_time,interval:pr.tee_interval,maintenance:{start_time:pr.maintenance_stime,end_time:pr.maintenance_etime}});
      params[i].rates = [];
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

     this.data.season_info.push(params[i])
    }
    if(this.data.season_info.length==0){
      this.router.navigateByUrl('golf-course/section-3');
      swal('Error','You need to add slots first','error')
    }
    this.data.type = 2;
  }

  updateSlots(){
    
  }



}
