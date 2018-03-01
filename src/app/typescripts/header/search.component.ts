import { Component, OnInit, ChangeDetectorRef , ViewEncapsulation } from '@angular/core';
import { ApiService } from './../api.service';
import { environment } from '../../../environments/environment';
declare var $:any;
@Component({
  encapsulation:ViewEncapsulation.None, selector: 'mc4k-search',
  templateUrl: '../../views/viewDesktop/top/search.html',
  styleUrls: ['../../css/reset.css','../../css/common.css','../../css/search.css','../../css/nice-select.css'],
  providers: [ApiService]
})
export class SearchComponent implements OnInit {
  environment:any;selector:string;searchKey:string; searchQuery:string;searchResult:any;previousKey:string;searchOption:any;selectSearch:string;currentTopic:string;
  constructor(private ApiService:ApiService,  private ref:ChangeDetectorRef) {
    this.searchResult = new Array();
    this.selectSearch = '';
    this.selector = '2';
    let searchOption = [{id:'',name:'All'},{id:'author',name:'Authors'},{id:'article',name:'Articles'},{id:'topic',name:'Topics'}];
    this.searchOption = searchOption;
    this.currentTopic = searchOption[0].name;
    this.environment = environment;
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.ref.detach();
  }

  search = function (type,start,selector) {
   
  if (this.searchKey !== undefined) {
    let searchQuery = this.searchKey.trim();
    if(this.searchQuery && this.previousKey != searchQuery){clearTimeout(this.searchQuery)};
    this.searchQuery = setTimeout(() => {

      if (((this.previousKey != searchQuery && searchQuery.length > 0) ||  typeof start != undefined) && selector != '3') {
        start = start?start+1:1;
        let end = start+3;
        type = type?type:this.selectSearch;
        let extra= '';
        // if($rootScope.currentPageUrl.indexOf('/tag/editor-picks') > -1){
        //   extra = '&city='+currentData.getCategoryCity('cityId');
        // }else if($routeParams.category || $routeParams.brandName){
        //   extra = '&category='+currentData.getCategoryCity('categoryId');
        // }
        let q = "&q="+searchQuery;
        this.ApiService.getApiMc4k('v1/search/find?start='+start+'&end='+end+'&type='+type+extra+q)
            .then((value) => {
              let data = value.data;
              if(type != '' && this.previousKey == searchQuery){
                this.searchResult[type] = this.searchResult[type]?this.searchResult[type]:new Array();
                this.searchResult[type] = this.searchResult[type].concat(data.result[type]);
                this.searchResult[type].end = (data.result[type].length == 3)?true:false;
              }else{
                let searchResult = [];
                for(var i in data.result){
                  if(data.result[i].length>0){
                    searchResult[i] = [];
                    searchResult[i] = data.result[i];
                    searchResult[i].end = data.result[i].length == 3?true:false;
                  }else{
                    searchResult[i] = [];
                    searchResult[i].end = false;
                  }
                }
                this.searchResult = searchResult;
                this.searchResult.result = 'result';
                this.ref.detectChanges();
              }
              this.previousKey = searchQuery;
              this.ref.detectChanges();
            },
                (error) => {
              console.log(error);
            })
      }else if(((this.previousKey != searchQuery && searchQuery.length > 0) ||  typeof start != undefined) && selector == '3'){
          let cityId = this.environment.myCity.cityId?this.environment.myCity.cityId:'1';
          this.ApiService.getApiMc4k('/apisearches/search?type=business&city_id='+cityId+'&q='+searchQuery)
            .then((value) => {
              
              if(value && value.result && value.result.data && value.result.data.data){
                this.searchResult['events'] = value.result.data.data;
              }else{
                this.searchResult['events'] =  new Array();
              }
            });
          
      }
    }, 750);

  }
};
  
  changeType = function(id,index){
    if(this.selectSearch != id){
      this.searchResult = new Array();
      this.currentTopic = this.searchOption[index].name;
      this.selectSearch = id;
      this.previousKey = null;
      this.search(this.selectSearch,1);
      this.ref.detectChanges();
    }

  }
  
  restore(){
    if(this.searchResult){
      this.selectSearch = '';
      this.searchResult = new Array();
      this.searchKey = '';
      this.selector = '2';
      this.ref.detectChanges();
    }
  }

  eventPage(localityName,eventName){
    let searchString = localityName?eventName.replace(/\s/g, "-") +'-<near>-'+localityName:eventName.replace(/\s/g, "-");
    $(location).attr('href', this.environment.baseUrl+'/'+this.environment.myCity.cityName+'/'+searchString);
  }



}
