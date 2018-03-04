import { Component, OnInit, Renderer , ViewEncapsulation, ElementRef } from '@angular/core';
import { ApiService } from './../api.service';
import { StorageService } from './../storage.service';
import { environment } from '../../../environments/environment';
declare var $:any;
declare var notifyQuery:any;

@Component({
    encapsulation:ViewEncapsulation.None, selector: 'mc4k-notification',
    // templateUrl: '../../views/viewDesktop/top/notification.html',
    template:`
        <div class="accordion" id="acc1" *ngIf="environment.loggedIn">
                    <a *ngIf="environment.notificationCount!='0'" class="accordion-head2" href="javascript:void(0);" (click)="markAllAsRead()">Mark all as read</a>
                    <div class="accordion-head" id="acc2"  (click)="getNotification()" mc4kGtm event="notificationCentreClicked">{{environment.notificationCount != '0'?environment.notificationCount:''}} Notifications
                        <div class="arrow down" id="acc4"></div>                        
                    </div>
                             <div class="accordion-body" id="acc3" style="display:none">
                                 <div class="mCustomScrollbar notification_scrollh" id="scrollEle" (scroll)="getMoreData($event)">
                                     <div *ngIf="noNotification">You do not have any notification as yet</div>
                                     
                                     <div *ngFor="let notify of notification;let i=index" (click)="watchNotify(notify.id,notify.isRead,i)" id="notification" [notificationType]="notificationType[notify.notifType]" [type]="notificationType[notify.notifType]" mc4kGtm event="notificationClicked" [index]="i" screenName="Parenting Notification Centre"  [url]="notify.notifType==1?notify.sharingUrl:((notify.notifType==3)?environment.myCity.eventCityLink:notify.url)"> 
                                        <a target="_blank" [href]="notify.notifType==1?notify.sharingUrl:((notify.notifType==3)?environment.myCity.eventCityLink:notify.url)">
                                         <div [class]="(notify.isRead == 1)?'blog_area':'blog_area article_unread'" mc4kGtm event="articleDetailClicked" [index]="i" screenName="Parenting Notification Centre" [notificationType]="notificationType[notify.notifType]" [url]="notify.notifType==1?notify.sharingUrl:((notify.notifType==3)?environment.myCity.eventCityLink:notify.url)" >
                                             <div class="title">{{notify.title}}</div>
                                             
                                             <img [defaultImage]="environment.defaultListingImage" [lazyLoad]="notify.thumbNail"  alt="img" class="blog_img ng-lazyloaded" />
                                             <div class="left">
                                                 <span class="trnd_title1">{{notify.body}}</span>
                                                 <div class="cl_height_5"></div>
                                                 <div class="date_time">
                                                     <div class="left" mc4kDate [currDate]="notify.createdTime" [type]="1"></div>
                                                     <!--<div class="left">Feb 23</div> <div class="left">&nbsp;|&nbsp;</div> <div class="left">11:02</div>-->
                                                 </div>
                                             </div>
                                         </div>
                                         <div class="dotted_border_bottom"></div>
                                        </a>
                                     </div>

                                 </div>
                             </div>

                </div>
    `,
    styleUrls: ['../../css/reset.css','../../css/common.css','../../css/header.css'],
    providers: [ApiService],
})
export class NotificationComponent implements OnInit {
    notificationCount: any;
    pagination: any;
    notification : any;
    getFirstData: boolean;
    requestNext:boolean;
    environment:any;
    open:boolean;
    notificationType:any;
    noNotification:boolean;
    lastScrollTop: any;
    constructor(private ApiService:ApiService, private renderer:Renderer, private _storage:StorageService, private elementRef: ElementRef) {
        this.pagination = '1';
        this.environment = environment;
        this.notificationType = this.environment.apiConfig.notificationType;
        /* this.notificationType = {
            0: "webView",//facebook--url
            1: "article_details",//article detail--sharingUrl
            2: "profile",//follow--sharingUrl
            3:"upcoming_event_list"//event  http://www.mycity4kids.com/Delhi-NCR/Events_el
        }; */
        this.notification = new Array();
        this.getFirstData = true;
        this.requestNext = true;
        this.lastScrollTop = 0;       
//        this.renderer.listen(notifDiv, 'scroll', (evt) => {
//            if($('.top_user_profile_parent').css('display') == 'block' && $('#acc3').css('display') == 'block'){
//               this._getData();
//            }
//        });
    }

    ngOnInit() {
        this._storage.promLogIn().then((val)=>{
            if(val){
                this._getNotifyCount();
            }
        });
    }
    
    getMoreData(evt){
        var st = this.elementRef.nativeElement.querySelector('#scrollEle').scrollTop;
        if(st > this.lastScrollTop){ // Scroll Down
            if($('.top_user_profile_parent').css('display') == 'block' && $('#acc3').css('display') == 'block'){
               this._getData();
            }
        }
        this.lastScrollTop = st;          
    }
    
    getNotification(){
        if(this.getFirstData){
            this._getData();
            this.getFirstData = false;
        }
         notifyQuery();
    }

    _getData(){
        if(this.pagination && this.requestNext){
            this.requestNext = false;
            let pagination = (this.pagination == 1)?'':this.pagination;
            this.ApiService.getApiMc4k('v1/notifications/'+this.environment.userInfo.id+'?limit=5&pagination='+pagination)
                .then((value) => {
                    if(value&&value.data&&value.data.result){
                        this.notification = this.notification.concat(value.data.result);
                    }
                    if(value.data.pagination){
                         this.requestNext = true;
                        this.pagination = value.data.pagination.id+'_'+value.data.pagination.createdTime;
                    }else{
                        this.pagination = undefined;
                    }
                    if(this.notification.length == '0'){
                        this.noNotification = true;
                    }
                   
                }, (error) => {
                    console.log(error);
                })
        }
    }

    watchNotify(id,read,index){
        this.notification[index].isRead = 1;
        if(read == 0){
            this.ApiService.putApiMc4k('v1/notifications/centre/',{notifId:id})
                .then(
                    result  => {
                        
                        this._getNotifyCount();
                    }
                );
        }

    }

    _getNotifyCount(){
        this.ApiService.getApiMc4k('v1/notifications/centre/'+this.environment.userInfo.id)
            .then((value) => {
                if(value.data){
                    this.environment.notificationCount = value.data.total;
                }
            }, (error) => {
                console.log(error);
            })

    }
    
    markAllAsRead(){    
        this.ApiService.putApiMc4k('v1/notifications/centre/',{ "readAll" : "1"}).then((value)=>{ });
        
        var unreadNotif = document.querySelectorAll(".article_unread");
        //console.log("unreadNotif===", unreadNotif);
        for ( var i  = 0, len = unreadNotif.length; i < len; i++ ) {
          unreadNotif[i].classList.remove('article_unread');
        }
        this.environment.notificationCount = 0;       
    }

}
