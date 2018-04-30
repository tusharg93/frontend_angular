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
  time:any;
  constructor(private _storage:StorageService,private _router:Router, private ApiService: ApiService) {
    this.environment = environment;
    this.environment.headerChild = [];
    this.data = new Array();
    this.data.weekday_hrs = {start_time:null,end_time:null};
    this.data.weekend_hrs = {start_time:null,end_time:null};
    this.time = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];

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

      console.log(form)

    if(form.valid){
      let params = {};
      for(var i in this.data){

        if(this.data[i]!=''){
          params[i] = this.data[i];
        }

      }
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
      name:data.basic_info.name,
      facebook_url:data.basic_info.facebook_url, facilities:data.basic_info.facilities,
      twitter_url:data.basic_info.twiter_url, instagram_url:data.basic_info.instagram_url,weekday_hrs:
      {start_time:weekday_operating_hrs?weekday_operating_hrs[0]:null, end_time:weekday_operating_hrs?weekday_operating_hrs[1]:null},
      weekend_hrs: {start_time: weekend_operating_hrs?weekend_operating_hrs[0]:null, end_time:weekend_operating_hrs?weekend_operating_hrs[1]:null}}

    this.data = params;
    


    summernode(this.data.about);

  }

  changeImg($event){
    this.imageComp.fileChangeListener($event);
  }

  updateImageParent(image){
    this.image = image;
  }

}
