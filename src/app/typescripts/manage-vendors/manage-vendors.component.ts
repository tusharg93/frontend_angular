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
  templateUrl: './manage-vendors.html',
  providers: [ApiService,StorageService],
})


export class ManageVendorsComponent implements OnInit {
  @ViewChild(MetaComponent) private metaComp: MetaComponent;
    
  environment:any;
  data:any;
  constructor(private _storage:StorageService,private activeRoute:ActivatedRoute,private renderer: Renderer, private ApiService: ApiService) {
    this.environment = environment;
    this.environment.headerChild = [];
    this.data = new Array();
  }

  ngOnInit() {
      this._storage.promLogIn().then((val)=>{
        switchMaker();
      })
    
  }

  ngOnDestroy() {

  }
  
  setValue(){
    let data = this.environment.random.userDetail.vendor_info;
    let alldata = [];
    for(var j in data.accepted){
      data.all[j].accepted = true;
      alldata.push(data.all[j]);

    }
    for(var j in data.declined){
      data.all[j].declined = true;
      alldata.push(data.all[j]);

    }
    for(var j in data.pending){
      data.all[j].pending = true;
      alldata.push(data.all[j]);

    }
    var _self = this;
    _self.data.vendor_info = alldata;
    setTimeout(function(){
      switchMaker();
      for(var i in data.all){
        if(data.all[i].accepted){
          $('#accepted'+i).click()
        }
        if(data.all[i].declined){
          $('#declined'+i).click()
        }
        if(data.all[i].pending){
          $('#pending'+i).click()
        }
      }
    })

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
    let params = {id:this.data.vendor_info[i].id,v_id:this.data.vendor_info[i].v_id}
    let status = 'ACCEPTED';

    if(this.data.vendor_info[i].declined){
      status = 'DECLINED';
    }
    if(this.data.vendor_info[i].pending){
      status = 'PENDING';
    }
    params['status'] = status;
    this.ApiService.postApiMc4k('/api/v1/vendors/request',params,false,true).then((value)=>{
      if(value&&value.msg=='success'){
        swal('Status changed','','success')
      }

    });

  }

  

}
