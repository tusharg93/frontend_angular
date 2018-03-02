import { Component, OnInit, ViewChild, ChangeDetectorRef , ViewEncapsulation } from '@angular/core';
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
  templateUrl: './section-three.html',
  providers: [ApiService,StorageService],
})


export class SectionThreeComponent implements OnInit {
  @ViewChild(MetaComponent) private metaComp: MetaComponent;
    
  environment:any;
  data:any;
  currency:any;
  timezone:any;
  slotMonths:any;
  days:any;
  slotTime:any;
  minGolf:any;
  constructor(private ref:ChangeDetectorRef,private _storage:StorageService,private _router:Router, private ApiService: ApiService) {
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
        
      })
    
   
  }

  ngOnDestroy() {

  }

  save(form,update){
    if (form.valid) {
      let total = 0;let params = [];
      for(var i  in this.data.season_info){
        total = total+this.data.season_info[i].diff;
        let str_d = this.data.season_info[i].start_date;
        let str_d_arr = str_d.split('-');
        let end_d = this.data.season_info[i].end_date;
        let end_d_arr = end_d.split('-');
        params.push({id:this.data.season_info[i].id,name:this.data.season_info[i].name,start_date:str_d_arr[1]+'-'+str_d_arr[2],end_date:end_d_arr[1]+'-'+end_d_arr[2],type:null})
        if(update){
          params[i].uid = this.data.season_info[i].uid;
        }

      }
      if(total>364){
        if(!update){
          this.ApiService.postApiMc4k('api/v1/forms/3',{seasons:params},false,true).then((value)=>{
            if(value&&value.msg&&value.msg=="success"){
              this._router.navigateByUrl('golf-course/section-4');
            }else{
              swal('Error', value.error,'error')
            }
          });
        }else{
          this.ApiService.putApiMc4k('api/v1/forms/3',{seasons:params},0).then((value)=>{
            if(value&&value.msg&&value.msg=="success"){
              this._router.navigateByUrl('golf-course/section-4');
            }else{
              swal('Error', value.error,'error')
            }
          });
        }

      }else{
        swal('Error', 'Please select atleast 365 days','error')
      }

    }
  }
  

  setSeason(){
    let self = this;
   if(this.data['noseason']){
     swal({
           title: "Are you sure?",
           text: "All previous data will be erased",
           type: "warning",
           showCancelButton: true,
           confirmButtonClass: "btn-danger",
           confirmButtonText: "Yes, rewrite it!",
           closeOnConfirm: false
         },
         function(){
           self.setSeas();
           self.setNext();
         });
   }else{
     self.setSeas();
     self.setNext();
   }

  }

  setSeas(){
    this.data.seasonList = new Array();
    this.data.season_info = new Array();
    for(var i=0;i < this.data['noseason'];i++){
      this.data.seasonList.push(i);
      this.data.season_info.push({rates:[{day_type:1,hole_18_price:null,hole_9_price:null,type:'weekday'},{day_type:'nn',hole_18_price:null,hole_9_price:null,type:'weekend'}],maintenance:{start_time:'',end_time:''}});
    }
  }



  disabledSeason(key){
    let _self=this;
    setTimeout(function(){
      let className = '.season_cls'+_self.data.season_info[key].id;
      $(className).not('#season_cls'+key).attr("disabled", "disabled");
      for(var i in _self.environment.random.keys.seasons){
        if(_self.data.season_info[key].id==_self.environment.random.keys.seasons[i].id){
          _self.data.season_info[key].name = _self.environment.random.keys.seasons[i].name;
          break;
        }
      }
    })
  }

  setEnd(key,fromkey,tokey,end?){
    var _self = this;
    setTimeout(function() {
      var startDate = new Date(_self.data.season_info[key][fromkey])
      var day = 60 * 60 * 24  * 1000;
      var newMinCallDate = new Date(startDate.getTime() + day);
      flatpickr('#'+tokey, {enableTime: false, minDate: newMinCallDate});
      if(end){
        _self.dateDiff(_self,key);
      }
    },50);
  }

  setNext(){
    var _self = this;
    setTimeout(function(){
      for(var i=0;i < _self.data['noseason'];i++){
        flatpickr('#start_date'+i, {enableTime:false,minDate:new Date()});
        flatpickr('#end_date'+i, {enableTime:false,minDate:new Date()});
      }
    },100)

  }

  dateDiff(_self,key){
    var date1 = new Date(_self.data.season_info[key].start_date);
    var date2 = new Date(_self.data.season_info[key].end_date);
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    _self.data.season_info[key].diff = diffDays;
  }

  setValue(){
    this.data['season_info'] = new Array();
    this.data.seasonList = new Array();
    let data = this.environment.random.userDetail;
    for(var i in data.seasons_info){
        let pr = data.seasons_info[i];
        var d = new Date();
        var n = d.getFullYear();
        let params = {uid:pr.id,id:pr.season_id,name:this.environment.random.keys['others'][pr.season_id],start_date:n+'-'+pr.start_date,end_date:(n+1)+'-'+pr.end_date,type:null,rates:[{day_type:this.environment.random.keys['others']['weekday'],hole_18_price:null,hole_9_price:null,type:'weekday'},{day_type:this.environment.random.keys['others']['weekend'],hole_18_price:null,hole_9_price:null,type:'weekend'}],maintenance:{start_time:'',end_time:''}};
        this.data['season_info'][i] = params;
        this.data.seasonList.push(i);
        this.dateDiff(this,i);
      
    }
    this.data.noseason = this.data.seasonList.length;
  }

  initFlatpicker(id,value){
    if(value){
      flatpickr('.cls', {enableTime: false, minDate: new Date()});
    }

  }

  initSeason(id,value){
    if(value){
      this.disabledSeason(id);
    }

  }
}
