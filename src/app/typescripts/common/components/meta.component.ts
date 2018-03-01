import { Component, OnInit , ViewEncapsulation } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Meta,MetaDefinition } from '../services/meta.service';
import { isBrowser, isNode } from 'angular2-universal';
declare var ga:any;
declare var gaScript:any;
declare var userPrint:any;
declare var $:any;
declare function escape(s:string): string;

import { Router, ActivatedRoute } from '@angular/router';
@Component({
  encapsulation:ViewEncapsulation.None,
  template: ``,
  providers:[Meta],
  selector: 'tee-meta',
})

export class MetaComponent implements OnInit {
metaTags : any; type:string;title:string;description:string;keyword:string;image:string;environment:any;imageAlt: string;imageWidth: string;imageHeight: string; publishedTime: string; section: string;tag:any; fb_app_id: string;
    
    constructor(private activeRoute:ActivatedRoute, private meta:Meta,private _router:Router) {
        this.description = 'Tee';
        this.environment = environment;
        this.environment.random.pageName = this.activeRoute.snapshot.data['name'];
        this.environment.random.screenName = this.activeRoute.snapshot.data['name']+' '+this.activeRoute.snapshot.data['type'];
        this.image = 'logo';
        this.title = 'tee';
        this.keyword = 'tee';
        this.type = '';
        this.imageAlt = '';
        this.imageWidth = '';
        this.imageHeight = '';
        this.publishedTime = '';
        this.section = '';
        this.tag = [];
        this.fb_app_id = '';
    }
    
    ngOnInit() {}

    setMetaData(val){
        
        let description = val&&val['metaDescription']?val['metaDescription']:this.description;
        description = description.replace(/nbsp;|&nbsp;|&amp;|nbsp;|&amp;nbsp;|"|'/g, '');
        description =  description.replace(/&#(\d+);/g, function(match, dec) {
            return String.fromCharCode(dec);
        });
        
        let img = val&&val['image']?val['image']:this.image;
        let imgAlt = val&&val['imageAlt']?val['imageAlt']:this.imageAlt;
        let imgWidth = val&&val['imageWidth']?val['imageWidth']:this.imageWidth;
        let imgHeight = val&&val['imageHeight']?val['imageHeight']:this.imageHeight;
        
        
        let keywords = val&&val['metaKeyWord'] ? val['metaKeyWord'] : this.keyword;
        
        let titl = val&&val['metaTitle']?val['metaTitle']:this.title;
        titl = titl.replace(/nbsp;|&nbsp;|&amp;|nbsp;|&amp;nbsp;|"|'/g, '');
        let title = val&&val['pageTitle']?val['pageTitle']:titl;
        title = title.replace(/nbsp;|&nbsp;|&amp;|nbsp;|&amp;nbsp;|"|'/g, '');
        title =  title.replace(/&#(\d+);/g, function(match, dec) {
            return String.fromCharCode(dec);
        });
        
        let publishedTime = val['publishedTime']?new Date(val['publishedTime'] * 1000).toISOString():this.publishedTime;
        
        let section = val['section']? val['section'] :this.section;
        let tagArr = val['tag']? val['tag'] :this.tag;
        
        let ogTitle = val&&val['ogTitle']?val['ogTitle']:titl;
        ogTitle = ogTitle.replace(/nbsp;|&nbsp;|&amp;|nbsp;|&amp;nbsp;|"|'/g, '');
        ogTitle =  ogTitle.replace(/&#(\d+);/g, function(match, dec) {
            return String.fromCharCode(dec);
        });
        
        let Type = val&&val['type']?val&&val['type']:this.type;
        let canonical_url = this.environment.baseUrlMomspresso+this._router.url;
        let url = this.environment.baseUrlMomspresso + (this.environment.random['articleUrl']?this.environment.random['articleUrl']:this._router.url);
        let iosUrl = 'mck://'+url.replace('https://','');
        let iosLink = 'app-id=873173909, app-argument='+iosUrl;
        
        let fb_app_id = val['fb_app_id']? val['fb_app_id'] :this.fb_app_id; 
       
        let metas_name = [
         { name: 'twitter:description', content: description },
         { name: 'description', content: description },
         { name: 'twitter:image', content: img }, 
         { name: 'twitter:title', content: ogTitle },
         { name: 'keywords', content: keywords },
         { name:'apple-itunes-app', content:iosLink }
        ]; // Meta Name

          let metas_prop = [
          { property: 'og:description', content: description },
          { property: 'og:image', content: img },
          { property: 'og:image:alt', content: imgAlt }, 
          { property: 'og:image:width', content: imgWidth },
          { property: 'og:image:height', content: imgHeight },
          { property: 'og:title', content: ogTitle },
          { property: 'og:type', content: Type }, 
          { property: 'og:url', content: canonical_url }, 
          { property: 'fb:app_id', content: fb_app_id },
          { property: 'al:ios:url', content: iosUrl }
        ]; // Meta Property

          if(Type=="article"){
              metas_prop.push({ property: 'article:published_time', content: publishedTime });
              metas_prop.push({ property: 'article:section', content: section });
              for(var i in tagArr){
                 metas_prop.push({ property: 'article:tag', content: tagArr[i] });
              }             
          }

        var metas = JSON.parse(JSON.stringify(metas_name));
          Array.prototype.push.apply(metas,metas_prop);


           
        this.meta.addTags(metas);
        this.meta.setTitle(title);
        if(Type=="article"){
            this.meta.setHeadAttribute("prefix","og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#");
            let ampUrl = url.replace('www','amp'); 
            this.meta.setElement('link', {rel: 'amphtml', href: ampUrl});               
        }
         
         this.meta.setCanonicalUrl(canonical_url);
        if(isBrowser){

 
           if(!this.environment.random.canonicalChanged){ //this to change only when first time load
             let canonical_url = this.environment.baseUrlMomspresso+this._router.url;
             let canonicalUrlParts = canonical_url.split('?');
               canonical_url = canonicalUrlParts[0];
               canonical_url = canonical_url.replace('/sort%3Amostread/direction%3Adesc','');
               canonical_url = canonical_url.replace('/sort%3Acreated/direction%3Adesc','');
               let canonical_url_str = canonical_url.split('/page%3A');
               canonical_url = canonical_url_str[0];
               this.environment.random['canonicalChanged'] = true;
             $('link[rel="canonical"]').attr('href', canonical_url);
           }

          $("meta").each(function() { // To update meta tags on location change

              for(var i in metas_name){
                if($(this).attr("name") == metas_name[i].name) {
                    $(this).attr("content" , metas_name[i].content);
                };
              } 
              for(var i in metas_prop){
                if($(this).attr("property") == metas_prop[i].property) {
                    $(this).attr("content" , metas_prop[i].content);
                };
              }              
          });

        }

     
  
    }

    callGA(dimesions){
      if(isBrowser){
        let url = this.environment.random['articleUrl']?this.environment.random['articleUrl']:this._router.url;
        let ourUserPrint = userPrint?'userP-'+userPrint:'userP-';
        let userId = this.environment.userInfo.id?this.environment.userInfo.id:ourUserPrint;  

        if(dimesions && !dimesions['title']){
           dimesions['title'] = this.title;
        }
      
        if(!this.environment.random.gaFirstCall){
          gaScript('userId',dimesions);

          this.environment.random.gaFirstCall = true;
        }else{
           this.customGA(dimesions,url);
         
        
        }
      }
 
    }

    customGA(dimesions,url){
       if(isBrowser){
        if(dimesions && !dimesions['title']){
           dimesions['title'] = this.title;
        }

        if(url){
          if (url.indexOf('http://') === 0 || url.indexOf('https://') === 0){
           url = url.replace(/^(?:\/\/|[^\/]+)*\//, "");
           url = '/'+url;
          }
        }
           let canonical_url = (this.environment.baseUrlMomspresso+url).split('?')[0];
           canonical_url = canonical_url.replace('/sort%3Amostread/direction%3Adesc','');
           canonical_url = canonical_url.replace('/sort%3Acreated/direction%3Adesc','');
           let canonical_url_str = canonical_url.split('/page%3A');
           canonical_url = canonical_url_str[0];
           this.meta.setCanonicalUrl(canonical_url);
           
           

           $('link[rel="canonical"]').attr('href', canonical_url);

        let ourUserPrint = userPrint?'userP-'+userPrint:'userP-';
        let userId = this.environment.userInfo.id?this.environment.userInfo.id:ourUserPrint;  
        for(var i in dimesions){
          ga("set",i,dimesions[i]);
        }
         //console.log(dimesions)
        ga("set", "location", url);
        ga('set', 'userId', userId);
      
        ga('send', 'pageview',url);

       }
    }
}