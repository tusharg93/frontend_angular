webpackJsonp([9,19],{688:function(t,e,n){"use strict";var i=n(737),o=n(753),s=n(0),a=n(80),r=n(699),c=n(82),l=n(702),d=n(708),p=n(706),f=n(703),u=n(700),h=n(383),m=n(381);n.d(e,"ManageSlotModule",function(){return _});var y=this&&this.__decorate||function(t,e,n,i){var o,s=arguments.length,a=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var r=t.length-1;r>=0;r--)(o=t[r])&&(a=(s<3?o(a):s>3?o(e,n,a):o(e,n))||a);return s>3&&a&&Object.defineProperty(e,n,a),a},v=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},_=function(){function t(){}return t=y([n.i(s.NgModule)({imports:[a.b,o.a,m.a,r.a,c.CommonModule,l.a,d.a,p.a,f.a,u.a,h.a],declarations:[i.a],providers:[]}),v("design:paramtypes",[])],t)}()},698:function(t,e,n){"use strict";var i=n(0),o=n(81),s=n(382),a=n(83),r=(n.n(a),n(80));n.d(e,"a",function(){return d});var c=this&&this.__decorate||function(t,e,n,i){var o,s=arguments.length,a=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var r=t.length-1;r>=0;r--)(o=t[r])&&(a=(s<3?o(a):s>3?o(e,n,a):o(e,n))||a);return s>3&&a&&Object.defineProperty(e,n,a),a},l=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},d=function(){function t(t,e,n){this.activeRoute=t,this.meta=e,this._router=n,this.description="Tee",this.environment=o.a,this.environment.random.pageName=this.activeRoute.snapshot.data.name,this.environment.random.screenName=this.activeRoute.snapshot.data.name+" "+this.activeRoute.snapshot.data.type,this.image="logo",this.title="tee",this.keyword="tee",this.type="",this.imageAlt="",this.imageWidth="",this.imageHeight="",this.publishedTime="",this.section="",this.tag=[],this.fb_app_id=""}return t.prototype.ngOnInit=function(){},t.prototype.setMetaData=function(t){var e=t&&t.metaDescription?t.metaDescription:this.description;e=e.replace(/nbsp;|&nbsp;|&amp;|nbsp;|&amp;nbsp;|"|'/g,""),e=e.replace(/&#(\d+);/g,function(t,e){return String.fromCharCode(e)});var n=t&&t.image?t.image:this.image,i=t&&t.imageAlt?t.imageAlt:this.imageAlt,o=t&&t.imageWidth?t.imageWidth:this.imageWidth,s=t&&t.imageHeight?t.imageHeight:this.imageHeight,r=t&&t.metaKeyWord?t.metaKeyWord:this.keyword,c=t&&t.metaTitle?t.metaTitle:this.title;c=c.replace(/nbsp;|&nbsp;|&amp;|nbsp;|&amp;nbsp;|"|'/g,"");var l=t&&t.pageTitle?t.pageTitle:c;l=l.replace(/nbsp;|&nbsp;|&amp;|nbsp;|&amp;nbsp;|"|'/g,""),l=l.replace(/&#(\d+);/g,function(t,e){return String.fromCharCode(e)});var d=t.publishedTime?new Date(1e3*t.publishedTime).toISOString():this.publishedTime,p=t.section?t.section:this.section,f=t.tag?t.tag:this.tag,u=t&&t.ogTitle?t.ogTitle:c;u=u.replace(/nbsp;|&nbsp;|&amp;|nbsp;|&amp;nbsp;|"|'/g,""),u=u.replace(/&#(\d+);/g,function(t,e){return String.fromCharCode(e)});var h=t&&t.type?t&&t.type:this.type,m=this.environment.baseUrlMomspresso+this._router.url,y=this.environment.baseUrlMomspresso+(this.environment.random.articleUrl?this.environment.random.articleUrl:this._router.url),v="mck://"+y.replace("https://",""),_="app-id=873173909, app-argument="+v,g=t.fb_app_id?t.fb_app_id:this.fb_app_id,b=[{name:"twitter:description",content:e},{name:"description",content:e},{name:"twitter:image",content:n},{name:"twitter:title",content:u},{name:"keywords",content:r},{name:"apple-itunes-app",content:_}],O=[{property:"og:description",content:e},{property:"og:image",content:n},{property:"og:image:alt",content:i},{property:"og:image:width",content:o},{property:"og:image:height",content:s},{property:"og:title",content:u},{property:"og:type",content:h},{property:"og:url",content:m},{property:"fb:app_id",content:g},{property:"al:ios:url",content:v}];if("article"==h){O.push({property:"article:published_time",content:d}),O.push({property:"article:section",content:p});for(var R in f)O.push({property:"article:tag",content:f[R]})}var j=JSON.parse(JSON.stringify(b));if(Array.prototype.push.apply(j,O),this.meta.addTags(j),this.meta.setTitle(l),"article"==h){this.meta.setHeadAttribute("prefix","og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#");var w=y.replace("www","amp");this.meta.setElement("link",{rel:"amphtml",href:w})}if(this.meta.setCanonicalUrl(m),a.isBrowser){if(!this.environment.random.canonicalChanged){var E=this.environment.baseUrlMomspresso+this._router.url,D=E.split("?");E=D[0],E=E.replace("/sort%3Amostread/direction%3Adesc",""),E=E.replace("/sort%3Acreated/direction%3Adesc","");var k=E.split("/page%3A");E=k[0],this.environment.random.canonicalChanged=!0,$('link[rel="canonical"]').attr("href",E)}$("meta").each(function(){for(var t in b)$(this).attr("name")==b[t].name&&$(this).attr("content",b[t].content);for(var t in O)$(this).attr("property")==O[t].property&&$(this).attr("content",O[t].content)})}},t.prototype.callGA=function(t){if(a.isBrowser){var e=this.environment.random.articleUrl?this.environment.random.articleUrl:this._router.url,n=userPrint?"userP-"+userPrint:"userP-";this.environment.userInfo.id?this.environment.userInfo.id:n;t&&!t.title&&(t.title=this.title),this.environment.random.gaFirstCall?this.customGA(t,e):(gaScript("userId",t),this.environment.random.gaFirstCall=!0)}},t.prototype.customGA=function(t,e){if(a.isBrowser){t&&!t.title&&(t.title=this.title),e&&(0!==e.indexOf("http://")&&0!==e.indexOf("https://")||(e=e.replace(/^(?:\/\/|[^\/]+)*\//,""),e="/"+e));var n=(this.environment.baseUrlMomspresso+e).split("?")[0];n=n.replace("/sort%3Amostread/direction%3Adesc",""),n=n.replace("/sort%3Acreated/direction%3Adesc","");var i=n.split("/page%3A");n=i[0],this.meta.setCanonicalUrl(n),$('link[rel="canonical"]').attr("href",n);var o=userPrint?"userP-"+userPrint:"userP-",s=this.environment.userInfo.id?this.environment.userInfo.id:o;for(var r in t)ga("set",r,t[r]);ga("set","location",e),ga("set","userId",s),ga("send","pageview",e)}},t=c([n.i(i.Component)({encapsulation:i.ViewEncapsulation.None,template:"",providers:[s.a],selector:"tee-meta"}),l("design:paramtypes",["function"==typeof(e="undefined"!=typeof r.c&&r.c)&&e||Object,"function"==typeof(d="undefined"!=typeof s.a&&s.a)&&d||Object,"function"==typeof(p="undefined"!=typeof r.a&&r.a)&&p||Object])],t);var e,d,p}()},699:function(t,e,n){"use strict";var i=n(0),o=n(698);n.d(e,"a",function(){return r});var s=this&&this.__decorate||function(t,e,n,i){var o,s=arguments.length,a=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var r=t.length-1;r>=0;r--)(o=t[r])&&(a=(s<3?o(a):s>3?o(e,n,a):o(e,n))||a);return s>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=function(){function t(){}return t=s([n.i(i.NgModule)({imports:[],declarations:[o.a],exports:[o.a]}),a("design:paramtypes",[])],t)}()},700:function(t,e,n){"use strict";var i=n(0),o=n(701);n.d(e,"a",function(){return r});var s=this&&this.__decorate||function(t,e,n,i){var o,s=arguments.length,a=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var r=t.length-1;r>=0;r--)(o=t[r])&&(a=(s<3?o(a):s>3?o(e,n,a):o(e,n))||a);return s>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=function(){function t(){}return t=s([n.i(i.NgModule)({imports:[],declarations:[o.a],exports:[o.a]}),a("design:paramtypes",[])],t)}()},701:function(t,e,n){"use strict";var i=n(0);n.d(e,"a",function(){return a});var o=this&&this.__decorate||function(t,e,n,i){var o,s=arguments.length,a=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var r=t.length-1;r>=0;r--)(o=t[r])&&(a=(s<3?o(a):s>3?o(e,n,a):o(e,n))||a);return s>3&&a&&Object.defineProperty(e,n,a),a},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){}return t.prototype.ngOnInit=function(){var t,e=this.currDate;if(e){try{if(e.indexOf("-")>-1){e=e.split("-");var n=e[1]+"/"+e[2]+"/"+e[0];t=n}else t=parseInt(e)}catch(t){console.log(t)}var i=void 0;if(i=this.type?new Date(1e3*t):new Date(t),console.log(i),"Invalid Date"!=i){var o=i.toString().slice(3,15),s=[o.slice(0,7),",",o.slice(7)].join("");console.log(s),this.innerHTML=s}}},o([n.i(i.Input)(),s("design:type",Object)],t.prototype,"currDate",void 0),o([n.i(i.Input)(),s("design:type",String)],t.prototype,"type",void 0),o([n.i(i.HostBinding)("innerHTML"),s("design:type",Object)],t.prototype,"innerHTML",void 0),t=o([n.i(i.Directive)({selector:"[teeDate]"}),s("design:paramtypes",[])],t)}()},702:function(t,e,n){"use strict";var i=n(0),o=n(704);n.d(e,"a",function(){return r});var s=this&&this.__decorate||function(t,e,n,i){var o,s=arguments.length,a=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var r=t.length-1;r>=0;r--)(o=t[r])&&(a=(s<3?o(a):s>3?o(e,n,a):o(e,n))||a);return s>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=function(){function t(){}return t=s([n.i(i.NgModule)({imports:[],declarations:[o.a],exports:[o.a]}),a("design:paramtypes",[])],t)}()},703:function(t,e,n){"use strict";var i=n(0),o=n(705);n.d(e,"a",function(){return r});var s=this&&this.__decorate||function(t,e,n,i){var o,s=arguments.length,a=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var r=t.length-1;r>=0;r--)(o=t[r])&&(a=(s<3?o(a):s>3?o(e,n,a):o(e,n))||a);return s>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=function(){function t(){}return t=s([n.i(i.NgModule)({imports:[],declarations:[o.a,o.b],exports:[o.a,o.b]}),a("design:paramtypes",[])],t)}()},704:function(t,e,n){"use strict";var i=n(0),o=n(63);n.d(e,"a",function(){return r});var s=this&&this.__decorate||function(t,e,n,i){var o,s=arguments.length,a=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var r=t.length-1;r>=0;r--)(o=t[r])&&(a=(s<3?o(a):s>3?o(e,n,a):o(e,n))||a);return s>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=function(){function t(t){this.sanitizer=t}return t.prototype.transform=function(t){return t=t?t:"",this.sanitizer.bypassSecurityTrustHtml(t)},t=s([n.i(i.Pipe)({name:"parser"}),a("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.DomSanitizer&&o.DomSanitizer)&&e||Object])],t);var e}()},705:function(t,e,n){"use strict";var i=n(0),o=n(63);n.d(e,"a",function(){return r}),n.d(e,"b",function(){return c});var s=this&&this.__decorate||function(t,e,n,i){var o,s=arguments.length,a=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var r=t.length-1;r>=0;r--)(o=t[r])&&(a=(s<3?o(a):s>3?o(e,n,a):o(e,n))||a);return s>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=function(){function t(t){this.sanitizer=t}return t.prototype.transform=function(t){return this.sanitizer.bypassSecurityTrustResourceUrl(t)},t=s([n.i(i.Pipe)({name:"safe"}),a("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.DomSanitizer&&o.DomSanitizer)&&e||Object])],t);var e}(),c=function(){function t(t){this.sanitizer=t}return t.prototype.transform=function(t){return t=1==t,this.sanitizer.bypassSecurityTrustResourceUrl(t)},t=s([n.i(i.Pipe)({name:"checkbox"}),a("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.DomSanitizer&&o.DomSanitizer)&&e||Object])],t);var e}()},706:function(t,e,n){"use strict";var i=n(0),o=n(707);n.d(e,"a",function(){return r});var s=this&&this.__decorate||function(t,e,n,i){var o,s=arguments.length,a=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var r=t.length-1;r>=0;r--)(o=t[r])&&(a=(s<3?o(a):s>3?o(e,n,a):o(e,n))||a);return s>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=function(){function t(){}return t=s([n.i(i.NgModule)({imports:[],declarations:[o.a],exports:[o.a]}),a("design:paramtypes",[])],t)}()},707:function(t,e,n){"use strict";var i=n(0),o=n(63);n.d(e,"a",function(){return r});var s=this&&this.__decorate||function(t,e,n,i){var o,s=arguments.length,a=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var r=t.length-1;r>=0;r--)(o=t[r])&&(a=(s<3?o(a):s>3?o(e,n,a):o(e,n))||a);return s>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=function(){function t(t){this.sanitizer=t}return t.prototype.transform=function(t,e){if(t){var n=t?t:0,i=[{value:1e18,symbol:"E"},{value:1e15,symbol:"P"},{value:1e12,symbol:"T"},{value:1e9,symbol:"G"},{value:1e6,symbol:"M"},{value:1e3,symbol:"K"}],o=/\.0+$|(\.[0-9]*[1-9])0+$/,s=void 0;for(s=0;s<i.length;s++)if(n>=i[s].value)return(n/i[s].value).toFixed(e).replace(o,"$1")+i[s].symbol;return n}},t=s([n.i(i.Pipe)({name:"num"}),a("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.DomSanitizer&&o.DomSanitizer)&&e||Object])],t);var e}()},708:function(t,e,n){"use strict";var i=n(0),o=n(709);n.d(e,"a",function(){return r});var s=this&&this.__decorate||function(t,e,n,i){var o,s=arguments.length,a=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var r=t.length-1;r>=0;r--)(o=t[r])&&(a=(s<3?o(a):s>3?o(e,n,a):o(e,n))||a);return s>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=function(){function t(){}return t=s([n.i(i.NgModule)({imports:[],declarations:[o.a],exports:[o.a]}),a("design:paramtypes",[])],t)}()},709:function(t,e,n){"use strict";var i=n(0),o=n(63);n.d(e,"a",function(){return r});var s=this&&this.__decorate||function(t,e,n,i){var o,s=arguments.length,a=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var r=t.length-1;r>=0;r--)(o=t[r])&&(a=(s<3?o(a):s>3?o(e,n,a):o(e,n))||a);return s>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=function(){function t(t){this.sanitizer=t}return t.prototype.transform=function(t,e,n,i){if(!t)return"";if(n=parseInt(n,10),!n)return t;if(t.length<=n)return t;if(t=t.substr(0,n),e){var o=t.lastIndexOf(" ");o!==-1&&("."!==t.charAt(o-1)&&","!==t.charAt(o-1)||(o-=1),t=t.substr(0,o))}return this.sanitizer.bypassSecurityTrustHtml(t+(i||" …"))},t=s([n.i(i.Pipe)({name:"limit"}),a("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.DomSanitizer&&o.DomSanitizer)&&e||Object])],t);var e}()},737:function(t,e,n){"use strict";var i=n(0),o=n(238),s=n(237),a=n(81),r=n(80),c=n(698);n.d(e,"a",function(){return p});var l=this&&this.__decorate||function(t,e,n,i){var o,s=arguments.length,a=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var r=t.length-1;r>=0;r--)(o=t[r])&&(a=(s<3?o(a):s>3?o(e,n,a):o(e,n))||a);return s>3&&a&&Object.defineProperty(e,n,a),a},d=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},p=function(){function t(t,e,n,i){this._storage=t,this.router=e,this.renderer=n,this.ApiService=i,this.environment=a.a,this.environment.headerChild=[],this.data=new Array,this.current=new Array,this.days=new Array}return t.prototype.ngOnInit=function(){this._storage.promLogIn().then(function(t){})},t.prototype.ngOnDestroy=function(){},t.prototype.setValue=function(){var t=this.environment.random.userDetail,e=[];this.data.season_info=new Array;for(var n in t.seasons_info){var i=t.seasons_info[n];e.push({name:this.environment.random.keys.others[i.season_id],slot_status:!!i.slot_status&&i.slot_status,id:i.season_id,uid:i.id,start_date:i.start_date,end_date:i.end_date,start_time:i.start_time,end_time:i.end_time,interval:i.tee_interval,maintenance:{start_time:i.maintenance_stime,end_time:i.maintenance_etime}}),e[n].rates=[];for(var o in t.rates_info){var s=t.rates_info[o];s&&i.season_id==s.season_id&&e[n].rates.push({day_type:s.day_type,hole_18_price:s.hole_18_price,hole_9_price:s.hole_9_price,type:this.environment.random.keys.others[s.day_type]})}this.data.season_info.push(e[n])}t.gc_basic_info.weekdays&&(this.data.weekdays=t.gc_basic_info.weekdays.split(",")),t.gc_basic_info.weekends&&(this.data.weekends=t.gc_basic_info.weekends.split(","),this.setCheck(this.data.weekends)),this.is_hole_18=!!(this.environment.random.userDetail&&this.environment.random.userDetail.gc_basic_info&&this.environment.random.userDetail.gc_basic_info.is_hole_18),this.is_hole_9=!!(this.environment.random.userDetail&&this.environment.random.userDetail.gc_basic_info&&this.environment.random.userDetail.gc_basic_info.is_hole_9),0==this.data.season_info.length?(this.router.navigateByUrl("golf-course/section-3"),swal("Error","You need to add slots first","error")):(this.data.type="seasons",this.current={date:this.environment.random.keys.others.weekend,name:this.data.season_info[0].id,day:this.data.weekends[0],hole:"9",date_val:null,days:JSON.parse(JSON.stringify(this.data.weekends)),holes:"9"},this.days=[{id:this.environment.random.keys.others.weekend,name:"Weekend"},{id:this.environment.random.keys.others.weekday,name:"Weekday"}],this.getdata()),flatpickr(".cls",{enableTime:!1})},t.prototype.setCheck=function(t){var e=this;setTimeout(function(){for(var n in t)$("#"+t[n]).attr("checked",!0);e.current.days=JSON.parse(JSON.stringify(t))},100)},t.prototype.save=function(t){var e=this,n={},i="9"==this.slots[t].holes&&"OPEN"==this.slots[t].slot_status,o="18"==this.slots[t].holes&&"OPEN"==this.slots[t].slot_status1;"BOTH"==this.slots[t].holes&&(this.slots[t].slot_status=this.slots[t].slot_status2,this.slots[t].slot_status1=this.slots[t].slot_status2),n.type=this.data.type,"seasons"==n.type?(n.day_type=this.current.date,n.season_id=this.current.name,n.days=this.current.days,n.slots=[{hole_9_status:this.slots[t].slot_status,hole_18_status:this.slots[t].slot_status1,tee_time:this.slots[t].tee_time,hole_9_price:parseInt(this.slots[t].hole_9_price),hole_18_price:parseInt(this.slots[t].hole_18_price)}]):n.slots=[{hole_9_status:this.slots[t].slot_status,hole_18_status:this.slots[t].slot_status1,id:this.slots[t].id,hole_9_price:parseInt(this.slots[t].hole_9_price),hole_18_price:parseInt(this.slots[t].hole_18_price)}],i&&!this.slots[t].hole_9_price||o&&!this.slots[t].hole_18_price?swal("You need to enter a price","","error"):this.ApiService.putApiMc4k("api/v1/slots/filter",n,0).then(function(t){t&&t.msg&&"success"==t.msg?e.getdata():swal("Error",t.error,"error")})},t.prototype.getdata=function(){this.environment.random.showLoader=!0,this.slots=new Array;var t=this;setTimeout(function(){var e="type=seasons&season_id="+t.current.name+"&day_type="+t.current.date+"&day="+t.current.days;"date"==t.data.type&&(e="type=date&date="+t.current.date_val),t.ApiService.getApiMc4k("api/v1/slots/filter?"+e,0,!0).then(function(e){if(e&&e.data){var n=e.data;for(var i in n)n[i].holes=t.is_hole_9?"9":"18",n[i].slot_status=n[i].slot_status,n[i].slot_status1=n[i].slot_status,n[i].slot_status2=n[i].slot_status;t.slots=n,t.environment.random.showLoader=!1}})},100)},t.prototype.checkMultiple=function(t){var e;for(var n in this.current.days)if(t==this.current.days[n]){this.current.days.splice(n,1),e=!0;break}e||this.current.days.push(t)},l([n.i(i.ViewChild)(c.a),d("design:type","function"==typeof(e="undefined"!=typeof c.a&&c.a)&&e||Object)],t.prototype,"metaComp",void 0),t=l([n.i(i.Component)({encapsulation:i.ViewEncapsulation.None,selector:"golf",template:n(769),providers:[o.a,s.a]}),d("design:paramtypes",["function"==typeof(p="undefined"!=typeof s.a&&s.a)&&p||Object,"function"==typeof(f="undefined"!=typeof r.a&&r.a)&&f||Object,"function"==typeof(u="undefined"!=typeof i.Renderer&&i.Renderer)&&u||Object,"function"==typeof(h="undefined"!=typeof o.a&&o.a)&&h||Object])],t);var e,p,f,u,h}()},753:function(t,e,n){"use strict";var i=n(0),o=n(80),s=n(737);n.d(e,"a",function(){return c});var a=this&&this.__decorate||function(t,e,n,i){var o,s=arguments.length,a=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var r=t.length-1;r>=0;r--)(o=t[r])&&(a=(s<3?o(a):s>3?o(e,n,a):o(e,n))||a);return s>3&&a&&Object.defineProperty(e,n,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(){}return t=a([n.i(i.NgModule)({imports:[o.b.forChild([{path:"",component:s.a}])]}),r("design:paramtypes",[])],t)}()},769:function(t,e){t.exports='<div class="container-fluid">\n    <div class="row bg-title">\n        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">\n            <h4 class="page-title">MANAGE SLOTS</h4>\n        </div>\n\n        <!-- /.col-lg-12 -->\n    </div>\n    <div class="row">\n        <div class="col-sm-12">\n            <div class="white-box p-l-20 p-r-20">\n                <!--<h3 class="box-title m-b-0">MANAGE SLOTS</h3>-->\n                <!--<p class="text-muted m-b-30 font-13"></p>-->\n                <div class="row">\n                    <div class="col-md-12">\n                        <form class="floating-labels " #section1="ngForm" name="section1" id="section1">\n\n\n                            <div class="form-group m-b-40">\n                                <h4 class="box-title"> SLOT TYPE</h4>\n                                <p class="text-muted  font-13"></p>\n                                <div class="switchery-demo m-b-30">\n                                    <div class="str_rdio">\n                                        <input type="radio" [(ngModel)]="data.type"  value="seasons" name="type"  id="type_season2" />\n                                        <label for="type_season2">\n                                            <h2>Season</h2>\n                                            <!--<p>{{list.name}}</p>-->\n                                        </label>\n                                    </div>\n                                    <div class="str_rdio">\n                                        <input type="radio" [(ngModel)]="data.type"  value="date" name="type"  id="type_date1" />\n                                        <label for="type_date1">\n                                            <h2>Date</h2>\n                                            <!--<p>{{list.name}}</p>-->\n                                        </label>\n                                    </div>\n\n\n\n                                </div>\n                                <span class="bar"></span>\n                                <small class="form-text text-muted"> </small>\n                            </div>\n\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class="row" >\n        <div class="col-sm-12">\n            <div class="white-box p-l-20 p-r-20">\n                <h3 class="box-title m-b-0">MANAGE SLOTS</h3>\n                <p class="text-muted m-b-30 font-13"></p>\n                <div class="row" [hidden]="data.type==\'date\'">\n                    <div class="col-md-12">\n                        <form class="floating-labels " #section2="ngForm" name="section2" id="section2">\n\n\n                            <div class="form-group m-b-40" *ngIf="data.season_info">\n                                <select class="form-control p-0" (change)="getdata()" style="width: 40%;float: left;" [(ngModel)]="current.name" name="season_name" required>\n                                    <ng-container *ngFor="let list of data.season_info;let j=index">\n                                        <option required value="{{list.id}}"  class="season_cls">{{list.name}}</option>\n                                    </ng-container>\n                                </select>\n                                <select class="form-control p-0"  (change)="getdata();setCheck(current.date==environment.random.keys[\'others\'][\'weekend\']?data[\'weekdays\']:data[\'weekends\']);" style="width: 30%;float: left;"  [(ngModel)]="current.date" name="season_name1" required>\n                                    <ng-container *ngFor="let list of days;let j=index">\n                                        <option required value="{{list.id}}"  class="season_cls">{{list.name}}</option>\n                                    </ng-container>\n                                </select>\n\n                                <div class="multiselect" [hidden]="current.date==environment.random.keys[\'others\'][\'weekend\']" >\n                                    <div class="selectBox" onclick="showCheckboxes(\'checkboxes1\')">\n                                        <select>\n                                            <option>Select Weekday Days</option>\n                                        </select>\n                                        <div class="overSelect"></div>\n                                    </div>\n                                    <div id="checkboxes1">\n                                        <ng-container *ngFor="let list of data[\'weekdays\'];let j=index">\n                                            <label for="{{list}}">\n                                                <input type="checkbox"  (click)="checkMultiple(list);getdata()" id="{{list}}" />{{list}}</label><br/>\n                                        </ng-container>\n                                    </div>\n                                </div>\n\n                                <div class="multiselect" [hidden]="current.date!=environment.random.keys[\'others\'][\'weekend\']">\n                                    <div class="selectBox" onclick="showCheckboxes(\'checkboxes2\')">\n                                        <select>\n                                            <option>Select Weekend Days</option>\n                                        </select>\n                                        <div class="overSelect"></div>\n                                    </div>\n                                    <div id="checkboxes2">\n                                        <ng-container *ngFor="let list of data[\'weekends\'];let j=index">\n                                            <label for="{{list}}">\n                                                <input type="checkbox"  (click)="checkMultiple(list);getdata()" id="{{list}}" />{{list}}</label><br/>\n                                        </ng-container>\n                                    </div>\n                                </div>\n\n                            </div>\n\n                        </form>\n                    </div>\n                </div>\n                <div class="row" [hidden]="data.type==\'seasons\'">\n                    <input type="text" required  (change)="getdata(true);"  [(ngModel)]="current.date_val" class="flatpickr cls " placeholder="Select Date" name="end_time" id="end_date" />\n\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class="row" >\n        <div class="col-sm-12">\n            <form class="floating-labels " #section="ngForm" name="section" id="section">\n\n            <div class="white-box">\n                <!--<h3 class="box-title m-b-0">Data Table</h3>-->\n                <!--<p class="text-muted m-b-30">Data table example</p>-->\n                <div class="table-responsive">\n                    <table id="myTable" class="table table-striped">\n                        <thead>\n                        <tr>\n                            <th>Slot Time</th>\n                            <th>Holes</th>\n                            <th>9 Hole Price</th>\n                            <th *ngIf="is_hole_18">18 Hole Price</th>\n                            <th>Status</th>\n                            <th>Save Changes</th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor="let list of slots;let i=index">\n                            <ng-container >\n                                <td>{{list.tee_time}}</td>\n                                <td *ngIf="is_hole_18&&is_hole_9">\n                                    <select class="form-control p-0"  [(ngModel)]="slots[i].holes" name="holes{{i}}" required>\n                                        <option value="9" >9</option>\n                                        <option value="18" >18</option>\n                                        <option value="BOTH" >Both</option>\n                                    </select>\n                                </td>\n                                <td *ngIf="((is_hole_18&&!is_hole_9)||(!is_hole_18&&is_hole_9))">\n                                    {{slots[i].holes}}\n                                </td>\n\n\n                                <td *ngIf="is_hole_9"><input type="number" disabled="{{(slots[i].holes==\'18\')}}" class="mnge_input" required="{{slots[i].slot_status==\'OPEN\'?true:false}}" [(ngModel)]="slots[i].hole_9_price"  placeholder="Add a Price" name="price_9{{i}}" /></td>\n\n                                <td *ngIf="is_hole_18"><input type="number" disabled="{{(slots[i].holes==\'9\')}}" class="mnge_input" required="{{slots[i].slot_status1==\'OPEN\'?true:false}}" [(ngModel)]="slots[i].hole_18_price"  placeholder="Add a Price" name="price_18{{i}}" /></td>\n\n\n                                <td [hidden]="slots[i].holes==\'18\'" *ngIf="slots[i].slot_status==\'WEEKLY_OFF\'">{{slots[i].slot_status}}</td>\n                                <td [hidden]="slots[i].holes==\'9\'" *ngIf="slots[i].slot_status1==\'WEEKLY_OFF\'">{{slots[i].slot_status1}}</td>\n\n                                <td [hidden]="!(slots[i].holes==\'9\')" *ngIf="slots[i].slot_status!=\'WEEKLY_OFF\'">\n                                    <select class="form-control p-0"  [(ngModel)]="slots[i].slot_status" name="status{{i}}" required>\n                                        <option value="OPEN" >OPEN</option>\n                                        <option value="CLOSED" >CLOSED</option>\n                                        <option value="RESERVED" >RESERVED</option>\n                                        <option value="BOOKED" >BOOKED</option>\n                                        <!--<option value="WEEKLY_OFF">WEEKLY_OFF</option>-->\n                                    </select>\n                                </td>\n                                <td [hidden]="!(slots[i].holes==\'18\')" *ngIf="slots[i].slot_status1!=\'WEEKLY_OFF\'">\n                                    <select  class="form-control p-0"  [(ngModel)]="slots[i].slot_status1" name="status_price{{i}}" required >\n                                        <option value="OPEN" >OPEN</option>\n                                        <option value="CLOSED" >CLOSED</option>\n                                        <option value="RESERVED" >RESERVED</option>\n                                        <option value="BOOKED" >BOOKED</option>\n                                        <!--<option value="WEEKLY_OFF">WEEKLY_OFF</option>-->\n                                    </select>\n                                </td>\n                                <td [hidden]="!(slots[i].holes==\'BOTH\')" *ngIf="slots[i].slot_status2!=\'WEEKLY_OFF\'">\n                                    <select  class="form-control p-0"  [(ngModel)]="slots[i].slot_status2" name="status_price_both{{i}}" required >\n                                        <option value="OPEN" >OPEN</option>\n                                        <option value="CLOSED" >CLOSED</option>\n                                        <option value="RESERVED" >RESERVED</option>\n                                        <option value="BOOKED" >BOOKED</option>\n                                        <!--<option value="WEEKLY_OFF">WEEKLY_OFF</option>-->\n                                    </select>\n                                </td>\n\n                                <td>\n                                    <a href="javascript:void(0);" style="text-align: center;" (click)="save(i)">SAVE</a>\n                                </td>\n                            </ng-container>\n\n\n                        </tr>\n\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n                </form>\n        </div>\n\n    </div>\n</div>\n\n<div (ngInit)="setValue()" *ngIf="environment.random.userDetail&&environment.random.keys&&environment.random.keys[\'others\']"></div>\n\n\n';
}});
//# sourceMappingURL=9.3a2b324fbcbd4665b5a1.bundle.map