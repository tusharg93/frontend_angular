import { Component, OnInit, ViewChild, Renderer , ViewEncapsulation } from '@angular/core';
import { ApiService } from './../common/services/api.service';
import { StorageService } from './../common/services/storage.service';
import { environment } from '../../../environments/environment';
import {ActivatedRoute, Router} from '@angular/router';
import { MetaComponent } from '../common/components/meta.component';
import { isBrowser } from 'angular2-universal';
import { ImageComponent } from './../common/components/image.component';
declare var $:any;
declare var switchMaker:any;
declare var flatpickr:any;
declare var summernode:any;

@Component({
  encapsulation:ViewEncapsulation.None,
  selector:'golf',
  templateUrl: './update-profile.html',
  providers: [ApiService,StorageService],
})


export class UpdateProfileComponent implements OnInit {
  @ViewChild(MetaComponent) private metaComp: MetaComponent;
  @ViewChild(ImageComponent) private imageComp: ImageComponent;
  environment:any;
  data:any;
  image:string;
  facilities:any;
  course:any;
  constructor(private _storage:StorageService,private _router:Router, private ApiService: ApiService) {
    this.environment = environment;
    this.environment.headerChild = [];
    this.data = new Array();
    this.data.weekday_hrs = {start_time:null,end_time:null};
    this.data.weekend_hrs = {start_time:null,end_time:null};

  }

  ngOnInit() {
    this._storage.promLogIn().then((val)=>{
      switchMaker();
      summernode();
    })



  }

  ngOnDestroy() {

  }


  _saveAll(form,update){


    if(form.valid){
      let params = {};
      for(var i in this.data){

        if(this.data[i]!=''){
          params[i] = this.data[i];
        }

      }

      params['weekday_hrs']['start_time'] = params['weekday_hrs']['start_time']>12?params['weekday_hrs']['start_time']-12+'pm':params['weekday_hrs']['start_time']+'am';
      params['weekday_hrs']['end_time'] =params['weekday_hrs']['end_time']>12?params['weekday_hrs']['end_time']-12+'pm':params['weekday_hrs']['end_time']+'am';
      params['weekend_hrs']['start_time'] =params['weekend_hrs']['start_time']>12?params['weekend_hrs']['start_time']-12+'pm':params['weekend_hrs']['start_time']+'am';
      params['weekend_hrs']['end_time'] =params['weekend_hrs']['end_time']>12?params['weekend_hrs']['end_time']-12+'pm':params['weekend_hrs']['end_time']+'am';
      params['about'] = $('.note-editable').html();
      params['logo'] = this.image;
      if(!update){
        this.ApiService.postApiMc4k('api/v1/vendors/profile',params,false,true).then((value)=>{
          if(value&&value.msg&&value.msg=="success"){
            this.ApiService.userDetailVendor('vendor/dashboard');
          }
        });
      }else{
        this.ApiService.putApiMc4k('api/v1/vendors/profile',params,0).then((value)=>{
          if(value&&value.msg&&value.msg=="success"){
            this.ApiService.userDetailVendor('vendor/dashboard');
          }
        });
      }

    }

  }

  

  setValue(){

    let data = this.environment.random.userDetail;
    let weekday_operating_hrs = data.basic_info.weekday_operating_hrs?data.basic_info.weekday_operating_hrs.split('to'):null;
    let weekend_operating_hrs = data.basic_info.weekend_operating_hrs?data.basic_info.weekend_operating_hrs.split('to'):null;
    let params = {about:data.basic_info.about,
      address_line_1:data.basic_info.address_line_1,
      address_line_2:data.basic_info.address_line_2,
      mobile:data.basic_info.mobile,
      company_name:data.basic_info.company_name,
      facebook_url:data.basic_info.facebook_url, facilities:data.basic_info.facilities,
      twitter_url:data.basic_info.twiter_url, instagram_url:data.basic_info.instagram_url,weekday_hrs:
      {start_time:weekday_operating_hrs?weekday_operating_hrs[0]:null, end_time:weekday_operating_hrs?weekday_operating_hrs[1]:null},
      weekend_hrs: {start_time: weekend_operating_hrs?weekend_operating_hrs[0]:null, end_time:weekend_operating_hrs?weekend_operating_hrs[1]:null}}

    this.data = params;
    

    setTimeout(function(){
      flatpickr('.cls', {noCalendar: true, enableTime: true, time_12hr: true});
    },50)


    summernode(this.data.about);

  }

  changeImg($event){
    this.imageComp.fileChangeListener($event);
  }

  updateImageParent(image){
    this.image = image;
  }

}
