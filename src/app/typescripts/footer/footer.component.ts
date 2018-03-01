import { Component, OnInit, Input , ViewEncapsulation } from '@angular/core';
import { ApiService } from './../common/services/api.service';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { StorageService } from './../common/services/storage.service';

declare var hideId:any;
@Component({
  encapsulation:ViewEncapsulation.None, selector: 'mc4k-footer',
    template: './header.html',
    styleUrls:['./css/style.css'],
  providers: [ ApiService ],
})
export class FooterComponent implements OnInit {
  @Input() email: string;
  environment :any;
    firstNum:number;
    secondNum:number;
    sumNum:number;
    userDetail:any;
  constructor(private router:Router,private ApiService: ApiService,private _storage:StorageService){
    this.environment = environment;
     this.environment.random.footer = false;
     this.router.events.subscribe((evt) => {
        this.environment.random.footer = false;
     });
  }

  ngOnInit() {

  }

}
