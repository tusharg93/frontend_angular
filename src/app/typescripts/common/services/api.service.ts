import { Injectable, NgZone } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { environment } from '../../../../environments/environment';
import { TeeResponse } from './response';
import 'rxjs/add/operator/toPromise';
import { StorageService } from './storage.service';
import { isBrowser } from 'angular2-universal';
declare var $:any;
declare var setSelect:any;
@Injectable()
export class ApiService {
  userInfo:any;urlList:any;environment:any;
  constructor(private zone:NgZone, private http: Http, private _storage:StorageService) {
    this.environment = environment;
    let url = [this.environment.apiUrl,''];
    this.urlList = url;
  }




  getApiMc4k (url, baseUrl?,header?): Promise<TeeResponse>{
    let headers = new Headers();
    if(this.environment.random.userInfo&&header){
      headers = new Headers({'id' :this.environment.random.userInfo.id,'token':this.environment.random.userInfo.token,'source':this.environment.random.source});
    }
    let options = new RequestOptions({ headers: headers });
    var urlReq = baseUrl?this.urlList[baseUrl]:this.urlList[0];
    urlReq = urlReq+url;
    return this.http.get(urlReq,options)
        .toPromise()
        .then(this.returnData)
        .catch(this.handleError);
  }
  


  postApiMc4k (url,params,formdata?,header?,baseUrl?): Promise<TeeResponse>{
    let headers = new Headers({ 'Content-Type': 'application/json','source':this.environment.random.source});
    if(this.environment.random.userInfo&&header){
      headers = new Headers({'id' :this.environment.random.userInfo.id,'token':this.environment.random.userInfo.token,'source':this.environment.random.source});
    }
    if(formdata){
      headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded','source':this.environment.random.source});
    }
    let options = new RequestOptions({ headers: headers });
    var urlReq = baseUrl?this.urlList[baseUrl]:this.urlList[0];
    urlReq = urlReq+url;
    return this.http.post(urlReq, params, options)
        .toPromise()
        .then(this.returnData)
        .catch(this.handleError);
  }
  

  

  putApiMc4k (url,params,baseUrl?): Promise<TeeResponse>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    if(this.environment.random.userInfo){
      headers = new Headers({'id' :this.environment.random.userInfo.id,'token':this.environment.random.userInfo.token,'source':this.environment.random.source});
    }
    let options = new RequestOptions({ headers: headers });
    var urlReq = baseUrl?this.urlList[baseUrl]:this.urlList[0];
    urlReq = urlReq+url;
    return this.http.put(urlReq, params, options)
        .toPromise()
        .then(this.returnData)
        .catch(this.handleError);
  }
  

  

  deleteApiMc4k (url): Promise<TeeResponse>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    if(this.environment.loggedIn){
      headers = new Headers({'id' :this.environment.userInfo.id,'mc4kToken':this.environment.userInfo.mc4kToken});
    }
    let options = new RequestOptions({ headers: headers });
    var urlReq = this.environment.mc4kApiUrl+url;
    return this.http.delete(urlReq, options)
        .toPromise()
        .then(this.returnData)
        .catch(this.handleError);
  }

  imageApiMc4k(url,fileData): Promise<TeeResponse>{
    let headers = new Headers({'id' :this.environment.userInfo.id,'mc4kToken':this.environment.userInfo.mc4kToken,'agent':'web'});
    let options = new RequestOptions({ headers: headers });
    var urlReq = this.environment.mc4kApiUrl+url;
    return this.http.post(urlReq, fileData, options)
        .toPromise()
        .then(this.returnData)
        .catch(this.handleError);
  }


  private returnData(res: Response) {
    let body = res.json();
    return body || { };
  }


  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Promise.reject(errMsg);
  }

 
  
  
  JsNewPromise(url,id){
    var _self = this;
    return new Promise((resolve, reject) => {
      (function () {
        if(document.getElementById(id)) {
          resolve(true);
        }else{
          var po = document.createElement('script');
          po.type = 'text/javascript';
          po.id = id;
          po.async = true;
          po.src = url;
          var head = document.getElementsByTagName('head')[0];
          head.appendChild(po);
          po.onload = function(){
            resolve(true);
          };
        }
      })();
    });
  }

  _getCountry(){
    if(!this.environment.random.countries){
      this.getApiMc4k('https://restcountries.eu/rest/v2/all',1).then((value)=>{
        this.environment.random.countries = value;
        setTimeout(()=>{
          // setSelect();
        },100)
      });
    }
  }

  _getCity(country){
    if(!this.environment.random.city){
      // this.getApiMc4k('http://battuta.medunes.net/api/country/search/?country='+country+'&region=&city=&key='+this.environment.random.Battuta,1).then((value)=>{
      //   this.environment.random.city = value;
      //   setTimeout(()=>{
      //     // $('.selectpicker').selectpicker();
      //   },100)
      // });
    }
  }
  
   
  
}



