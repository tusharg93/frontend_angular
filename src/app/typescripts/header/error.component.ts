import { Component, OnInit , ViewEncapsulation } from '@angular/core';
import { StorageService } from './../common/services/storage.service';
import { environment } from '../../../environments/environment';

@Component({
    encapsulation:ViewEncapsulation.None, selector: 'error',
    // templateUrl: '../../views/viewDesktop/top/notification.html',
    template:`
            <div style="display: none" id="error404page">
        <div class="content_container" *ngIf="environment.random.error404" >
            <META NAME="ROBOTS" CONTENT="NOINDEX, FOLLOW">
            <META NAME="ROBOTS" CONTENT="INDEX, NOFOLLOW">
            <META NAME="ROBOTS" CONTENT="NOINDEX, NOFOLLOW">
            <div class="four-o-4"><img [src]="environment.random.image404" /></div>
            <div class="four-o-4-heading">OOPS!</div>
            <div class="four-o-4-text">We're busy multitasking too and can't quite find the page you are looking for <span><i class="fa fa-smile-o" aria-hidden="true"></i> </span><br /><a href="https://www.mycity4kids.com/">Click here</a> to browse other articles</div>

        </div>
    </div>
       
    `,
    styleUrls: ['./../../css/style.css'],
  
})
export class ErrorComponent implements OnInit {
    
    environment:any;
    
    constructor(private _storage:StorageService) {
        this.environment = environment;

    }

    ngOnInit() {

    }

}   