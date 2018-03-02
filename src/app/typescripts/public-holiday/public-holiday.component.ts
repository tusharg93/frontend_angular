import { Component, OnInit, ViewChild, Renderer , ViewEncapsulation } from '@angular/core';
import { ApiService } from './../common/services/api.service';
import { StorageService } from './../common/services/storage.service';
import { environment } from '../../../environments/environment';
import {ActivatedRoute, Params} from '@angular/router';
import { MetaComponent } from '../common/components/meta.component';
import { isBrowser } from 'angular2-universal';

declare var swal:any;
declare var flatpickr:any;


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
    this.environment.headerChild = [];
    this.data = new Array();
    this.data.holidays = new Array()
    this.data.maintenance = new Array()
  }

  ngOnInit() {
      this._storage.promLogIn().then((val)=>{

      })

   
  }

  ngOnDestroy() {

  }


   save(form,type){
     let params = {};
     if(form.valid){
       params['type'] = type?'holiday':'closed';
        let data = type?this.data.holidays:this.data.maintenance;
       for(var i in data){
         if(data[i].name&&data[i].date){
           params['data'] = params['data'] ?params['data']:[];
           params['data'].push(data[i]);
         }
       }
       this.ApiService.postApiMc4k('api/v1/slots/manage',params,false,true).then((value)=>{

       });
     }

   }

  addNew(type){
    this.data[type].push({name:'',date:''});
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
    for(var i in data.closed_info){
      this.data.holidays.push({name:data.closed_info[i].name,date:data.closed_info[i].date})
    }
    console.log(this.data.holidays.length)
    if(this.data.holidays.length == 0){
      this.addNew('holidays');
    }
    if(this.data.maintenance.length == 0){
      this.addNew('maintenance');
    }
  }


}
