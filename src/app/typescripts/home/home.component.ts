import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from './../common/services/api.service';
import { StorageService } from './../common/services/storage.service';
import { environment } from '../../../environments/environment';
import {Router} from '@angular/router';


declare var $:any;

@Component({
  encapsulation:ViewEncapsulation.None,
  selector:'home',
  templateUrl: './home.html',
})


export class HomeComponent implements OnInit {
 
    
  environment:any;
  constructor(private _storage:StorageService,private _router: Router) {
    this.environment = environment;
  }

  ngOnInit() {
      this._storage.userChecker(false).then((val)=>{
          if(val&&this.environment.random.source == 'golf_course'){
            this._router.navigateByUrl('golf-course/dashboard');
          }else if (val&&this.environment.random.source =='vendor'){
            this._router.navigateByUrl('vendor/dashboard');
          }
      })
   

   
  }

  ngOnDestroy() {
     
   
  }
    
 


  


}
