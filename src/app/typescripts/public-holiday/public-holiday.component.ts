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
  }

  ngOnInit() {
      this._storage.promLogIn().then((val)=>{

      })

   
  }

  ngOnDestroy() {

  }


   save(form){
     swal('No api','pending','error');
     let params = [];
     if(form.valid){
       this.ApiService.postApiMc4k('api/v1/forms/holidays',params,false,true).then((value)=>{

       });
     }

   }

  addNew(){
    this.data.holidays.push({name:'',date:''});
    flatpickr('.cls', {enableTime: false, minDate: new Date()});
  }

  setValue(){
    this.data.holidays = new Array()
    let data = this.environment.random.userDetail;
    for(var i in data.holidays_info){
      this.data.holidays.push({name:data.holidays_info[i].name,date:data.holidays_info[i].date})
    }
    if(this.data.holidays.length == 0){
      this.addNew();
    }
  }


}
