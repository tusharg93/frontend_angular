import { Component, OnInit, ViewChild, ChangeDetectorRef , ViewEncapsulation } from '@angular/core';
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
  templateUrl: './section-one.html',
  providers: [ApiService,StorageService],
})


export class SectionOneComponent implements OnInit {
  @ViewChild(MetaComponent) private metaComp: MetaComponent;
    
  environment:any;
  data:any;
  currency:any;
  timezone:any;
  slotMonths:any;
  days:any;
  slotTime:any;
  minGolf:any;
  constructor(private ref:ChangeDetectorRef,private _storage:StorageService,private activeRoute:ActivatedRoute,private _router: Router, private ApiService: ApiService) {
    this.environment = environment;
    this.data = new Array();
    this.currency = new Array();
    this.timezone = new Array();
    this.slotTime = new Array(5,10,15,20);
    this.minGolf = new Array(1,2,3,4);
  }

  ngOnInit() {
      this._storage.promLogIn().then((val)=>{
        switchMaker();
        this._section_1();
      })

   
  }

  ngOnDestroy() {
    this.ref.detach();
  }

  _section_1(){
    //currency
    this.ApiService.getApiMc4k('assets/json/currency.json',1).then((value)=>{
        this.currency = value.data;
      
    });
    //time zone
    this.ApiService.getApiMc4k('assets/json/time-zone.json',1).then((value)=>{
      this.timezone = value.data;
    });
    let slots = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
    this.slotMonths = slots;
  }



  save_1(form) {
    if (form.valid) {
      let params = {currency:this.data.currency,timezone:this.data.timezone,hole_9:this.data.hole_9?this.data.hole_9:false,hole_18:this.data.hole_18?this.data.hole_18:false, member:this.data.member?this.data.member:false,online:this.data.online?this.data.online:false,guest:this.data.guest?this.data.guest:false,duration:this.data.duration,tee:this.data.tee};
      this.ApiService.postApiMc4k('api/v1/forms/1',params,false,true).then((value)=>{
          if(value&&value.msg&&value.msg=="success"){
            this._storage.userDetail(params);
            this.ApiService.userDetail('golf-course/section-2');

          }
      });
     
    }
  }

  update(form){
    if (form.valid) {
      let params = {currency:this.data.currency,timezone:this.data.timezone,hole_9:this.data.hole_9?this.data.hole_9:false,hole_18:this.data.hole_18?this.data.hole_18:false, member:this.data.member?this.data.member:false,online:this.data.online?this.data.online:false,guest:this.data.guest?this.data.guest:false,duration:this.data.duration,tee:this.data.tee};
      this.ApiService.putApiMc4k('api/v1/forms/1',params,0).then((value)=>{
        if(value&&value.msg&&value.msg=="success"){
          this._storage.userDetail(params);
          this.ApiService.userDetail('golf-course/section-2');
        }
      });

    }
  }

  setValue(){
    let data = this.environment.random.userDetail;
    let params = {currency:data.gc_basic_info.currency,timezone:data.gc_basic_info.time_zone,hole_9:data.gc_basic_info.is_hole_9,hole_18:data.gc_basic_info.is_hole_18, member:data.gc_basic_info.member,online:data.gc_basic_info.online,guest:data.gc_basic_info.guest,duration:data.gc_basic_info.duration,tee:data.gc_basic_info.tee_avl};
    for(var i in params){
      this.data[i] = params[i];
      if(typeof this.data[i] == 'boolean' && this.data[i]){
        $('#'+i).click();
      }

    }

    if(typeof params.tee == 'string'){
      params.tee = params.tee?params.tee.split(','):[];
      for(var i in params.tee){
        params.tee[i] = params.tee[i].replace('{','');
        params.tee[i] = params.tee[i].replace('}','');
      }
    }

    this.data['tee'] = params.tee
  }

  setCheckBox(type){
    var _self=this;
    this.data.tee = type?[1]:this.data.tee;
    setTimeout(function(){
      if(type){
        for(var i in _self.slotMonths){
          $('#slots_'+_self.slotMonths[i]).prop('checked',false);
        }
      }
      for(var i in _self.data.tee){
        $('#slots_'+_self.data.tee[i]).prop('checked',true);
      }
    },100)


  }

  clickMulti(key){
    let removed;

    this.data.tee = this.data.tee?this.data.tee:[];
    for(var i in this.data.tee){
      if(key == this.data.tee[i]||this.data.tee[i]==''){
        this.data.tee.splice(i,1);
        removed = true;
        break;
      }
    }

    if(!removed&&this.data.tee.length<2) {
      this.data.tee.push(key);
    }else if(!removed&&this.data.tee.length==2){
      swal('You can select max 2 tee','','error');
      $('#slots_'+key).attr('checked',false);
    }
  }


}
