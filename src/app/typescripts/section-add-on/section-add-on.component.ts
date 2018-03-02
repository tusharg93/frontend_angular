import { Component, OnInit, ViewChild, Renderer , ViewEncapsulation } from '@angular/core';
import { ApiService } from './../common/services/api.service';
import { StorageService } from './../common/services/storage.service';
import { environment } from '../../../environments/environment';
import {ActivatedRoute, Router} from '@angular/router';
import { MetaComponent } from '../common/components/meta.component';
import { isBrowser } from 'angular2-universal';

declare var $:any;
declare var switchMaker:any;
declare var swal:any;

@Component({
  encapsulation:ViewEncapsulation.None,
  selector:'golf',
  templateUrl: './section-add-on.html',
  providers: [ApiService,StorageService],
})


export class SectionAddOnComponent implements OnInit {
  @ViewChild(MetaComponent) private metaComp: MetaComponent;
    
  environment:any;
  data:any;
  commodities:any;
  timezone:any;
  newcommodities:any;
  days:any;
  others:boolean;
  minGolf:any;
  constructor(private _storage:StorageService,private _router:Router, private ApiService: ApiService) {
    this.environment = environment;
    this.environment.headerChild = [];
    this.data = new Array();
    this.commodities = new Array();
    let commodities = ['Green Fee','Taxes','Golf Cart','Caddy Fee','Range Balls','Insurance','Bottled Water','Member Guest','Driving Range Access','Other'];
    this.commodities = commodities;
    this.minGolf = new Array(1,2,3,4);
    this.data.price_includes = new Array();
    let newcommodities = [{name:'Golf Cart',price:null},{name:'Caddy Fee',price:null},{name:'Golf Shoes',price:null},{name:'Golf Clubs',price:null}];
    this.data.pricecommodities = newcommodities;
    this.data.newcommodities = new Array();
  }

  ngOnInit() {
      this._storage.promLogIn().then((val)=>{
        switchMaker();
      })

   
  }

  ngOnDestroy() {

  }

  clickMulti(key){
    let removed;
    for(var i in this.commodities){
      if(key == this.data.price_includes[i]){
        this.data.price_includes.splice(i,0);
        this.others = key=='Other'?false:true;
        removed = true;
        break;
      }
    }

    if(!removed){
      this.others = key=='Other'?true:false;
      this.data.price_includes.push(key);
    }
  }

  addNew(){
    this.data.newcommodities.push({name:'',price:''})
  }

  save(form){
    if (form.valid) {
      for(var i in this.data.price_includes){
        if(this.data.price_includes[i] == 'Other'){
          this.data.price_includes[this.data.price_includes.length] = 'Other:'+this.data.others;
          break;
        }
      }
      let params = {price_includes:this.data.price_includes,cancel_policy:this.data.cancel_policy,tnc:this.data.tnc,min_weekdays:this.data.min_weekdays,min_weekends:this.data.min_weekends}
      this.ApiService.postApiMc4k('api/v1/forms/8',params,false,true).then((value)=>{
      });
    }
  }

  saverental(){
    let params = [];
    for(var i in this.data.pricecommodities){
      if(this.data.pricecommodities[i].price){
        params.push({name:this.data.pricecommodities[i].name,price:this.data.pricecommodities[i].price.toString()})
      }
    }
    for(var i in this.data.newcommodities){
      if(this.data.newcommodities[i].price){
        params.push({name:this.data.newcommodities[i].name,price:this.data.newcommodities[i].price.toString()})
      }
    }
    this.ApiService.postApiMc4k('api/v1/forms/rentals',{rentals:params},false,true).then((value)=>{
      if(value&&value.msg&&value.msg=="success"){
        this._router.navigateByUrl('golf-course/public-holiday');
      }
    });
  }


  setValue(){

    let data = this.environment.random.userDetail;
    let defaultArr = [];
    for(var i in data.extras_info){
      let defaultVal = false;
      this.others = data.extras_info[i].name=='Others'&&!this.others?true:false;
      for(var j in this.data.pricecommodities){
        if(this.data.pricecommodities[j].name == data.extras_info[i].name){
          this.data.pricecommodities[j].price = data.extras_info[i].price;
          defaultVal = true;
          break;
        }
      }
      if(!defaultVal){
        defaultVal = false;
        defaultArr.push(data.extras_info[i]);
      }
    }

    this.data.tnc = data.gc_basic_info.tnc;
    this.data.cancel_policy = data.gc_basic_info.cancel_policy;
    this.data.price_includes = data.gc_basic_info.price_includes;
    if(this.others){
      // this.data.others = data.gc_basic_info.price_includes[data.gc_basic_info.price_includes.length-1];
      // this.data.others = this.data.others.replace('Others:','');
      this.data.price_includes.pop();
    }

    for(var i in this.data.price_includes){
      $('#'+this.data.price_includes[i]).click();
    }
    this.data.min_weekdays = data.gc_basic_info.min_golfers_weekdays;
    this.data.min_weekends = data.gc_basic_info.min_golfers_weekends;
    this.data.newcommodities = defaultArr;
  }


}
