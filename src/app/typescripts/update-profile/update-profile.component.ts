import { Component, OnInit, ViewChild, Renderer , ViewEncapsulation } from '@angular/core';
import { ApiService } from './../common/services/api.service';
import { StorageService } from './../common/services/storage.service';
import { ImageComponent } from './../common/components/image.component';
import { environment } from '../../../environments/environment';
import {ActivatedRoute, Router} from '@angular/router';
import { MetaComponent } from '../common/components/meta.component';
import { isBrowser } from 'angular2-universal';

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
  facilities:any;
  course:any;
  image:string;
  constructor(private _storage:StorageService,private _router:Router, private ApiService: ApiService) {
    this.environment = environment;
    this.data = new Array();
    this.data.coordinates = {latitude:null,longitude:null};
    this.data.weekday_hrs = {start_time:null,end_time:null};
    this.data.weekend_hrs = {start_time:null,end_time:null};
    let course = [{name:'Holes',value:null},{name:'Your Built',value:null},{name:'PAR',value:null},{name:'Architect(s)',value:null},{name:'Length',value:null},{name:'Clurse Type',value:null},{name:'Slope',value:null},{name:'Grass Type',value:null}];
    this.course = course;
    let facilities = ['Club Valet','Caddy','Golf Carts','Practise FAcilities','Golf Lessons','Club/Show Rental','Golf Shop','Dining','Locker Room','Health Club','Spa','Night Golf','Accomodation'];
    this.facilities = facilities;
  }

  ngOnInit() {
    this._storage.promLogIn().then((val)=>{

    })



  }

  ngOnDestroy() {

  }


  _saveAll(form,update){

    if(form.valid){
      let params = {};
      params['course'] = [];
      for(var i in this.data){

        if(this.data[i]!=''){
          params[i] = this.data[i];
        }

      }
      params['about'] = $('.note-editable').html();
      params['course'] = this.course;
      params['logo'] = this.image;
      if(!update){
        this.ApiService.postApiMc4k('api/v1/forms/profile',params,false,true).then((value)=>{
          if(value&&value.msg&&value.msg=="success"){
            this._router.navigateByUrl('golf-course/dashboard');
          }
        });
      }else{
        this.ApiService.putApiMc4k('api/v1/forms/profile',params,0).then((value)=>{
          if(value&&value.msg&&value.msg=="success"){
            this._router.navigateByUrl('golf-course/dashboard');
          }
        });
      }
      
    }

  }


  clickMulti(value,key){
    let removed;
    this.data[key] = this.data[key]?this.data[key]:[];
    for(var i in this.data[key]){
      if(key == this.data[key][i]){
        this.data[key].splice(i,0);
        removed = true;
        break;
      }
    }

    if(!removed){
      this.data[key].push(value);
    }

  }
  

  setValue(){

    let data = this.environment.random.userDetail;
    let weekday_operating_hrs = data.gc_basic_info.weekday_operating_hrs?data.gc_basic_info.weekday_operating_hrs.split('to'):null;
    let weekend_operating_hrs = data.gc_basic_info.weekend_operating_hrs?data.gc_basic_info.weekend_operating_hrs.split('to'):null;
    let params = {about:data.gc_basic_info.about,
      address_line_1:data.gc_basic_info.address_line_1,
      address_line_2:data.gc_basic_info.address_line_2,
      contact_mobile:data.gc_basic_info.person_mobile,
      contact_name:data.gc_basic_info.person_name,
      coordinates:{latitude:data.gc_basic_info.latitude, longitude:data.gc_basic_info.latitude},
      course:data.gc_basic_info.course_info,
      facebook_url:data.gc_basic_info.facebook_url, facilities:data.gc_basic_info.facilities,
      twitter_url:data.gc_basic_info.twiter_url, instagram_url:data.gc_basic_info.instagram_url,weekday_hrs:
      {start_time:weekday_operating_hrs?weekday_operating_hrs[0]:null, end_time:weekday_operating_hrs?weekday_operating_hrs[1]:null},
      weekend_hrs: {start_time: weekend_operating_hrs?weekend_operating_hrs[0]:null, end_time:weekend_operating_hrs?weekend_operating_hrs[1]:null}}

    this.data = params;
    for(var i in this.facilities){

      for(var j in this.data.facilities){
        if(this.facilities[i] == this.data.facilities[j]){

          $('#facilities'+i).click();
        }
      }
    }
    
    
    flatpickr('.cls_date', {noCalendar: true, enableTime: true, time_24hr: true});
    switchMaker();
    summernode(this.data.about);
    
  }

  changeImg($event){
    this.imageComp.fileChangeListener($event);
  }

  updateImageParent(image){
    this.image = image;
  }





}
