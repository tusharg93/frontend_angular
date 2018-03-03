import { Component, OnInit, ViewChild, Renderer , ViewEncapsulation } from '@angular/core';
import { ApiService } from './../common/services/api.service';
import { StorageService } from './../common/services/storage.service';
import { environment } from '../../../environments/environment';
import {ActivatedRoute, Params} from '@angular/router';
import { MetaComponent } from '../common/components/meta.component';
import { isBrowser } from 'angular2-universal';

declare var swal:any;
declare var flatpickr:any;
declare var switchId:any;


@Component({
  encapsulation:ViewEncapsulation.None,
  selector:'golf',
  templateUrl: './public-holiday.html',
  providers: [ApiService,StorageService],
})


export class PublicHolidayComponent implements OnInit {
  @ViewChild(MetaComponent) private metaComp: MetaComponent;
    
  environment:any;
  data:any;

  constructor(private _storage:StorageService,private activeRoute:ActivatedRoute,private renderer: Renderer, private ApiService: ApiService) {
    this.environment = environment;
    this.data = new Array();
    this.data.holidays = new Array()
   
  }

  ngOnInit() {
      this._storage.promLogIn().then((val)=>{

      })

   
  }

  ngOnDestroy() {

  }


   save(form){
     let params = {};
     if(form.valid){
       params['type'] = 'holiday';
       params['data'] = []
       for(var i in this.data.holidays){
         params['data'].push({date:this.data.holidays[i].date,name:this.data.holidays[i].name,universal:this.data.holidays[i].universal?true:false})
       }
       this.ApiService.postApiMc4k('api/v1/slots/manage',params,false,true).then((value)=>{
         if(value&&value.msg=='success'){
           this.ApiService.userDetail('golf-course/close-days');
         }

       });
     }

   }

  addNew(type){
    this.data[type].push({name:null,date:null});
    setTimeout(function(){
      flatpickr('.cls', {enableTime: false, minDate: new Date()});
    },100)

  }

  setValue(){
    this.data.holidays = new Array()
    let data = this.environment.random.userDetail;
    for(var i in data.holidays_info){
      this.data.holidays.push({name:data.holidays_info[i].name,date:data.holidays_info[i].date})
    }
  
   if(this.data.holidays.length == 0){
     this.data['holidays'].push({name:null,date:null});

    }
    
  }
  
  
  ngInitFlact(i){
    flatpickr('.cls', {enableTime: false, minDate: new Date()});
  }


}
