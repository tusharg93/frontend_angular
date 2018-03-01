import { Component,HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from './../environments/environment';
import { isBrowser } from 'angular2-universal';

@Component({
  selector: 'app-root',
  templateUrl:'./main.html',
})
export class AppComponent {
  environment:any;
  @HostListener('window:load', ['$event'])
    onloadHandler($event) {
    this.environment.random.onload = true;
    }
  
  
  constructor(private router:Router) {
    this.environment = environment;
    if(isBrowser){
      this.environment.random.isBrowser = true;
    }else{
      this.environment.random.isServer = true;
    }
    this.environment.random.Battuta = 'fa75e933df89d860c029945583cddef3';
  }


  ngOnInit() {
    
    this.router.events.subscribe((evt) => {
      this.environment.random.evtId = evt.id;
      this.environment.random.currentUrl = evt.url;
      
    });
  }


  


}
