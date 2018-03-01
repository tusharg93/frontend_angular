import { Component, OnInit, ViewChild, Renderer , ViewEncapsulation } from '@angular/core';
import { ApiService } from './../common/services/api.service';
import { StorageService } from './../common/services/storage.service';
import { environment } from '../../../environments/environment';
import {ActivatedRoute, Params} from '@angular/router';
import { MetaComponent } from '../common/components/meta.component';
import { isBrowser } from 'angular2-universal';

declare var $:any;
declare var switchMaker:any;


@Component({
  encapsulation:ViewEncapsulation.None,
  selector:'golf',
  templateUrl: './dashboard.html',
  providers: [ApiService,StorageService],
})


export class DashboardComponent implements OnInit {
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

 
}
