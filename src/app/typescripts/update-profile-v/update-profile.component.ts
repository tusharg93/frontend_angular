import { Component, OnInit, ViewChild, Renderer , ViewEncapsulation } from '@angular/core';
import { ApiService } from './../common/services/api.service';
import { StorageService } from './../common/services/storage.service';
import { environment } from '../../../environments/environment';
import {ActivatedRoute, Router} from '@angular/router';
import { MetaComponent } from '../common/components/meta.component';
import { isBrowser } from 'angular2-universal';

declare var $:any;
declare var switchMaker:any;
declare var flatpickr:any;


@Component({
  encapsulation:ViewEncapsulation.None,
  selector:'golf',
  templateUrl: './update-profile.html',
  providers: [ApiService,StorageService],
})


export class UpdateProfileComponent implements OnInit {
  @ViewChild(MetaComponent) private metaComp: MetaComponent;

  environment:any;
  data:any;

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
    this._storage.userChecker(false).then((val)=>{
      switchMaker();
    })



  }

  ngOnDestroy() {

  }


  _saveAll(form){
    if(form.valid){
      let params = {};
      for(var i in this.data){
        if(this.data[i]!=''){
          params[i] = this.data[i];
        }

      }
      console.log(params)
      this.ApiService.postApiMc4k('api/v1/vendors/profile',params,false,true).then((value)=>{
        if(value&&value.msg&&value.msg=="success"){
          this._router.navigateByUrl('vendors/dashboard');
        }
      });
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

  }




}
