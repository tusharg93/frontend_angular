import { Component, OnInit, ViewChild, Renderer , ViewEncapsulation } from '@angular/core';
import { ApiService } from './../common/services/api.service';
import { StorageService } from './../common/services/storage.service';
import { environment } from '../../../environments/environment';
import {ActivatedRoute, Params} from '@angular/router';
import { MetaComponent } from '../common/components/meta.component';
import { isBrowser } from 'angular2-universal';

declare var $:any;
declare var switchMaker:any;
declare var swal:any;


@Component({
  encapsulation:ViewEncapsulation.None,
  selector:'golf',
  templateUrl: './manage-golf-course.html',
  providers: [ApiService,StorageService],
})


export class ManageGolfCourseComponent implements OnInit {
  @ViewChild(MetaComponent) private metaComp: MetaComponent;
    
  environment:any;
  data:any;
  currency:any;
  timezone:any;
  slotMonths:any;
  days:any;
  slotTime:any;
  minGolf:any;
  constructor(private _storage:StorageService,private activeRoute:ActivatedRoute,private renderer: Renderer, private ApiService: ApiService) {
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

  setValue(){
    let data = this.environment.random.userDetail.manage_course;
    let alldata = []
    
    for(var j in data.all){
      data.all[j].status = 'NO ACTION';
      alldata.push(data.all[j]);

    }
    for(var j in data.accepted){
      data.accepted[j].accepted = true;
      data.accepted[j].status = 'ACCEPTED';
      alldata.push(data.accepted[j]);

    }
    for(var j in data.declined){
      data.declined[j].declined = true;
      data.declined[j].status = 'DECLINED';
      alldata.push(data.declined[j]);

    }
    for(var j in data.pending){
      data.pending[j].pending = true;
      data.pending[j].status = 'PENDING';
      alldata.push(data.pending[j]);

    }

    var _self = this;
    _self.data.vendor_info = alldata;
    setTimeout(function(){
      switchMaker();
      for(var i in data){
        if(data[i].accepted){
          $('#accepted'+i).click()
        }
        if(data[i].declined){
          $('#declined'+i).click()
        }

      }
    },10)

  }

  changeAll(i,key,fr,sc){
    var _self = this;
    setTimeout(function(){
      if(_self.data.vendor_info[i][key]){
        if(_self.data.vendor_info[i][fr]){
          _self.data.vendor_info[i][fr] = false;
          $('#'+fr+i).click()
        }
        if(_self.data.vendor_info[i][sc]){
          _self.data.vendor_info[i][sc] = false;
          $('#'+sc+i).click()
        }
      }
      _self.save(i);
    },50)



  }

  save(i){
    let params = {id:this.data.vendor_info[i].id,gc_id:this.data.vendor_info[i].gc_id}
    let status = 'ACCEPTED';

    if(this.data.vendor_info[i].declined){
      status = 'DECLINED';
    }
    if(this.data.vendor_info[i].pending){
      status = 'PENDING';
    }
    params['status'] = status;
    this.data.vendor_info[i].status = status;
    this.ApiService.postApiMc4k('/api/v1/vendors/request',params,false,true).then((value)=>{
      if(value&&value.msg=='success'){
         swal('Status changed','','success')
      }

    });

  }


}
