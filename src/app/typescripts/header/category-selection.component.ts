import { Component, OnInit,ViewChild } from '@angular/core';
import { environment } from './../../../environments/environment';
import { ApiService } from './../api.service';
import { StorageService } from './../storage.service';
import {Router} from '@angular/router';
import { UserComponent } from '../common/components/user.component';
import { isBrowser } from 'angular2-universal';

declare var $:any;
declare var showId:any;
declare var hideId:any;

@Component({
  selector: 'mc4k-category-selection',
  templateUrl: '../../views/viewDesktop/top/category-selection.html',
  styles: ['../../css/category-selection.css']
})
export class CategorySelectionComponent implements OnInit {
  @ViewChild(UserComponent) private userComp: UserComponent;
  environment:any;
  popCateg:any;
  savePopCateg:any;
  categFollow:any;
  currentCount:number;
  saveCurrentCount: number;
  languages:any;
  mainPopCategory:any;
  constructor(private router:Router, private ApiService:ApiService, private _storage:StorageService) {
    this.environment = environment;
    this.popCateg = new Array();
    this.savePopCateg = [];
    this.categFollow = new Array();
    this.currentCount = 0;
    this.languages = new Array();
  }

  ngOnInit() {
    this._storage.userChecker(false).then((val)=>{
      if(val){
      
        if((this.environment.userInfo.id && !this.environment.userInfo.followCategories) || (this.environment.userInfo.followCategories && this.environment.userInfo.followCategories.length < 4)){
          this._storage.checkForCategory(false,false);
        }else{
          this.currentCount = this.environment.userInfo.followCategories.length;
          this.saveCurrentCount = this.currentCount;
          this.languageCheck();
        }
        this.getCategoryToFollow();
        this.getLanguage();
      }
    });
  }



  selectLanguage(){
    this.userComp.selectLanguage(this.languages);
    
  }

  getCategoryToFollow(){
    if(!this.popCateg[0]){
      this.ApiService.getS3Mc4k('category/popularList',false).then((value)=>{
        if(value){
          this.popCateg = value;
          this.environment.popularList = value;
          this.followingCategory();
        }
      })
    }
  }

  loadscroll(){
    this.ApiService.JsNewPromise("/assets/js/lazy-load-mscroll.js","mscroll-js").then(()=>{
      $('#category-m-scroll').mCustomScrollbar({scrollButtons:{enable:true}});
    })

  }

  getLanguage(){
    this.userComp.getLanguage();
  }

  updateUserLangParent(userLang){
      this.languages = userLang;
  }

  followingCategory(){
    this.currentCount = 0; // Tracks number of categories followed
    for(var i in this.environment.userInfo['followCategories']){
      for(var j in this.popCateg){ //this.popCateg has cats and subcats with follow status of subcats
        for(var k in this.popCateg[j].child){
          if(this.popCateg[j].child[k].id == this.environment.userInfo['followCategories'][i]){
            this.popCateg[j].child[k].follow = true;
            this.popCateg[j].selectedCount = this.popCateg[j].selectedCount ? this.popCateg[j].selectedCount+1: 1;
            this.currentCount++;
            break;
          }
        }
        this.popCateg[j].selectedCount = this.popCateg[j].selectedCount ? this.popCateg[j].selectedCount : 0;
        this.popCateg[j].allSelected = (this.popCateg[j].child.length == this.popCateg[j].selectedCount)? true: false;
      }
    }
    
    this.saveCurrentCount = this.currentCount;    
    this.savePopCateg = JSON.parse(JSON.stringify(this.popCateg));
  }

  selectCateg(id,status,parentIndex,childIndex){ // status - previous follow status
    this.popCateg[parentIndex].child[childIndex].follow = status?false:true;
    this.currentCount = status?this.currentCount-1:this.currentCount+1;
    this.popCateg[parentIndex].selectedCount = status ? this.popCateg[parentIndex].selectedCount-1 : this.popCateg[parentIndex].selectedCount+1;
    // this.categFollow tracks all cats clicked - whether selected or unselected
    if(this.categFollow.indexOf(id)>-1){
        this.categFollow.splice(this.categFollow.indexOf(id),1);
    }else{
        this.categFollow = this.categFollow.concat(id);
    }
    this.popCateg[parentIndex].allSelected = (this.popCateg[parentIndex].selectedCount == this.popCateg[parentIndex].child.length) ? true : false;
  }

  selectAll(parentIndex){
    this.popCateg[parentIndex].allSelected = true;
    this.popCateg[parentIndex].selectedCount = this.popCateg[parentIndex].child.length;
    for(var i in this.popCateg[parentIndex].child){
      this.currentCount = this.popCateg[parentIndex].child[i].follow?this.currentCount:this.currentCount+1;      
      this.categFollow = this.popCateg[parentIndex].child[i].follow?this.categFollow:this.categFollow.concat(this.popCateg[parentIndex].child[i].id);
      this.popCateg[parentIndex].child[i].follow = true;      
    }
  }

    deselectAll(parentIndex){
    this.popCateg[parentIndex].allSelected = false;
    this.popCateg[parentIndex].selectedCount = 0;
    for(var i in this.popCateg[parentIndex].child){
      this.currentCount = this.popCateg[parentIndex].child[i].follow?this.currentCount-1:this.currentCount;
      let catIndex = this.categFollow.indexOf(this.popCateg[parentIndex].child[i].id);
      if((catIndex > -1)){
          this.categFollow.splice(catIndex, 1);
      }else{
          this.categFollow = this.categFollow.concat(this.popCateg[parentIndex].child[i].id);
      }
      this.popCateg[parentIndex].child[i].follow = false;      
    }
  }

  followCategory(){
     if(this.currentCount>=5){
      this.ApiService.putApiCMc4k('v1/users/'+this.environment.userInfo.id+'/topics',{categories:this.categFollow},false).then((value)=>{
        if(value && value['data']){
          this.environment.userInfo['followCategories'] = value['data'];
          this.saveCurrentCount = this.currentCount;
          this.savePopCateg.length = 0;          
          this.savePopCateg = JSON.parse(JSON.stringify(this.popCateg));          
          this.categFollow.length = 0;
          this._storage.categoryAllSelected();
          this._storage.showMessage(value['reason'],'success');     
          this.closeCateg();
        }
      });
    }else{
      this._storage.showMessage('You need to select 5 categories to proceed','error');
     
    }

  }


  closeCateg(){
       $('#categoryList').removeClass('cmn_modal_active');
       this.currentCount = this.saveCurrentCount;
       this.categFollow.length = 0;
        this.popCateg = JSON.parse(JSON.stringify(this.savePopCateg));
       this.closeSession();
  }

  languageCheck(){ 
    if(this.router.url.indexOf('/vernaculars/') > -1 && this.environment.random.evtId > 1 && this.environment.userInfo && this.environment.userInfo.id && !this.environment.userInfo.isLangSelection){
      let category = this.router.url.split('/'); 
      this._storage.checkForCategory(category[4],true);
    } 
    this.followingCategory();
  }
  
  skipLanguage(){
    this.followingCategory();
    
    if(this.currentCount<5){
      showId('category-topic');
      hideId('category-language');
     
    }else{
      $('#categoryList').removeClass('cmn_modal_active');
      this.closeSession();
    }

  }

  closeSession(){
      this.environment.random['categoryClose'] = new Date().getTime()+(60*60*1000);
  }

  callscroll(){
    if(isBrowser){
      this.ApiService.JsNewPromise("/assets/js/lazy-load-mscroll.js","mscroll-js").then(()=>{
        $('#category-m-scroll').mCustomScrollbar({scrollButtons:{enable:true}});
      })
    }

  }

} 
