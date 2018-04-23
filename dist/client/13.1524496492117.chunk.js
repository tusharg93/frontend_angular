webpackJsonp([13,19],{

/***/ 683:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_component__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_routing_module__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_modules_meta_module__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipe_modules_parse_module__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipe_modules_limit_module__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipe_modules_number_module__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipe_modules_safe_module__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directive_modules_date_convertor_module__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__directive_modules_ng_init_module__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__(381);
/* harmony export (binding) */ __webpack_require__.d(exports, "DashboardModule", function() { return DashboardModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_1__dashboard_routing_module__["a" /* DashboardRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__common_modules_meta_module__["a" /* MetaModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_6__pipe_modules_parse_module__["a" /* ParserPipeModule */],
                __WEBPACK_IMPORTED_MODULE_7__pipe_modules_limit_module__["a" /* LimitPipeModule */],
                __WEBPACK_IMPORTED_MODULE_8__pipe_modules_number_module__["a" /* NumberPipeModule */],
                __WEBPACK_IMPORTED_MODULE_9__pipe_modules_safe_module__["a" /* SafePipeModule */],
                __WEBPACK_IMPORTED_MODULE_10__directive_modules_date_convertor_module__["a" /* DateConvertorDirectiveModule */],
                __WEBPACK_IMPORTED_MODULE_11__directive_modules_ng_init_module__["a" /* NgInitDirectiveModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__dashboard_component__["a" /* DashboardComponent */]
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardModule);
    return DashboardModule;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/tee/src/dashboard.module.js.map

/***/ },

/***/ 698:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_meta_service__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_universal__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MetaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MetaComponent = (function () {
    function MetaComponent(activeRoute, meta, _router) {
        this.activeRoute = activeRoute;
        this.meta = meta;
        this._router = _router;
        this.description = 'Tee';
        this.environment = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */];
        this.environment.random.pageName = this.activeRoute.snapshot.data['name'];
        this.environment.random.screenName = this.activeRoute.snapshot.data['name'] + ' ' + this.activeRoute.snapshot.data['type'];
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
    MetaComponent.prototype.ngOnInit = function () { };
    MetaComponent.prototype.setMetaData = function (val) {
        var description = val && val['metaDescription'] ? val['metaDescription'] : this.description;
        description = description.replace(/nbsp;|&nbsp;|&amp;|nbsp;|&amp;nbsp;|"|'/g, '');
        description = description.replace(/&#(\d+);/g, function (match, dec) {
            return String.fromCharCode(dec);
        });
        var img = val && val['image'] ? val['image'] : this.image;
        var imgAlt = val && val['imageAlt'] ? val['imageAlt'] : this.imageAlt;
        var imgWidth = val && val['imageWidth'] ? val['imageWidth'] : this.imageWidth;
        var imgHeight = val && val['imageHeight'] ? val['imageHeight'] : this.imageHeight;
        var keywords = val && val['metaKeyWord'] ? val['metaKeyWord'] : this.keyword;
        var titl = val && val['metaTitle'] ? val['metaTitle'] : this.title;
        titl = titl.replace(/nbsp;|&nbsp;|&amp;|nbsp;|&amp;nbsp;|"|'/g, '');
        var title = val && val['pageTitle'] ? val['pageTitle'] : titl;
        title = title.replace(/nbsp;|&nbsp;|&amp;|nbsp;|&amp;nbsp;|"|'/g, '');
        title = title.replace(/&#(\d+);/g, function (match, dec) {
            return String.fromCharCode(dec);
        });
        var publishedTime = val['publishedTime'] ? new Date(val['publishedTime'] * 1000).toISOString() : this.publishedTime;
        var section = val['section'] ? val['section'] : this.section;
        var tagArr = val['tag'] ? val['tag'] : this.tag;
        var ogTitle = val && val['ogTitle'] ? val['ogTitle'] : titl;
        ogTitle = ogTitle.replace(/nbsp;|&nbsp;|&amp;|nbsp;|&amp;nbsp;|"|'/g, '');
        ogTitle = ogTitle.replace(/&#(\d+);/g, function (match, dec) {
            return String.fromCharCode(dec);
        });
        var Type = val && val['type'] ? val && val['type'] : this.type;
        var canonical_url = this.environment.baseUrlMomspresso + this._router.url;
        var url = this.environment.baseUrlMomspresso + (this.environment.random['articleUrl'] ? this.environment.random['articleUrl'] : this._router.url);
        var iosUrl = 'mck://' + url.replace('https://', '');
        var iosLink = 'app-id=873173909, app-argument=' + iosUrl;
        var fb_app_id = val['fb_app_id'] ? val['fb_app_id'] : this.fb_app_id;
        var metas_name = [
            { name: 'twitter:description', content: description },
            { name: 'description', content: description },
            { name: 'twitter:image', content: img },
            { name: 'twitter:title', content: ogTitle },
            { name: 'keywords', content: keywords },
            { name: 'apple-itunes-app', content: iosLink }
        ]; // Meta Name
        var metas_prop = [
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
        if (Type == "article") {
            metas_prop.push({ property: 'article:published_time', content: publishedTime });
            metas_prop.push({ property: 'article:section', content: section });
            for (var i in tagArr) {
                metas_prop.push({ property: 'article:tag', content: tagArr[i] });
            }
        }
        var metas = JSON.parse(JSON.stringify(metas_name));
        Array.prototype.push.apply(metas, metas_prop);
        this.meta.addTags(metas);
        this.meta.setTitle(title);
        if (Type == "article") {
            this.meta.setHeadAttribute("prefix", "og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#");
            var ampUrl = url.replace('www', 'amp');
            this.meta.setElement('link', { rel: 'amphtml', href: ampUrl });
        }
        this.meta.setCanonicalUrl(canonical_url);
        if (__WEBPACK_IMPORTED_MODULE_3_angular2_universal__["isBrowser"]) {
            if (!this.environment.random.canonicalChanged) {
                var canonical_url_1 = this.environment.baseUrlMomspresso + this._router.url;
                var canonicalUrlParts = canonical_url_1.split('?');
                canonical_url_1 = canonicalUrlParts[0];
                canonical_url_1 = canonical_url_1.replace('/sort%3Amostread/direction%3Adesc', '');
                canonical_url_1 = canonical_url_1.replace('/sort%3Acreated/direction%3Adesc', '');
                var canonical_url_str = canonical_url_1.split('/page%3A');
                canonical_url_1 = canonical_url_str[0];
                this.environment.random['canonicalChanged'] = true;
                $('link[rel="canonical"]').attr('href', canonical_url_1);
            }
            $("meta").each(function () {
                for (var i in metas_name) {
                    if ($(this).attr("name") == metas_name[i].name) {
                        $(this).attr("content", metas_name[i].content);
                    }
                    ;
                }
                for (var i in metas_prop) {
                    if ($(this).attr("property") == metas_prop[i].property) {
                        $(this).attr("content", metas_prop[i].content);
                    }
                    ;
                }
            });
        }
    };
    MetaComponent.prototype.callGA = function (dimesions) {
        if (__WEBPACK_IMPORTED_MODULE_3_angular2_universal__["isBrowser"]) {
            var url = this.environment.random['articleUrl'] ? this.environment.random['articleUrl'] : this._router.url;
            var ourUserPrint = userPrint ? 'userP-' + userPrint : 'userP-';
            var userId = this.environment.userInfo.id ? this.environment.userInfo.id : ourUserPrint;
            if (dimesions && !dimesions['title']) {
                dimesions['title'] = this.title;
            }
            if (!this.environment.random.gaFirstCall) {
                gaScript('userId', dimesions);
                this.environment.random.gaFirstCall = true;
            }
            else {
                this.customGA(dimesions, url);
            }
        }
    };
    MetaComponent.prototype.customGA = function (dimesions, url) {
        if (__WEBPACK_IMPORTED_MODULE_3_angular2_universal__["isBrowser"]) {
            if (dimesions && !dimesions['title']) {
                dimesions['title'] = this.title;
            }
            if (url) {
                if (url.indexOf('http://') === 0 || url.indexOf('https://') === 0) {
                    url = url.replace(/^(?:\/\/|[^\/]+)*\//, "");
                    url = '/' + url;
                }
            }
            var canonical_url = (this.environment.baseUrlMomspresso + url).split('?')[0];
            canonical_url = canonical_url.replace('/sort%3Amostread/direction%3Adesc', '');
            canonical_url = canonical_url.replace('/sort%3Acreated/direction%3Adesc', '');
            var canonical_url_str = canonical_url.split('/page%3A');
            canonical_url = canonical_url_str[0];
            this.meta.setCanonicalUrl(canonical_url);
            $('link[rel="canonical"]').attr('href', canonical_url);
            var ourUserPrint = userPrint ? 'userP-' + userPrint : 'userP-';
            var userId = this.environment.userInfo.id ? this.environment.userInfo.id : ourUserPrint;
            for (var i in dimesions) {
                ga("set", i, dimesions[i]);
            }
            //console.log(dimesions)
            ga("set", "location", url);
            ga('set', 'userId', userId);
            ga('send', 'pageview', url);
        }
    };
    MetaComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            template: "",
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_meta_service__["a" /* Meta */]],
            selector: 'tee-meta',
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_meta_service__["a" /* Meta */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_meta_service__["a" /* Meta */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === 'function' && _c) || Object])
    ], MetaComponent);
    return MetaComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/tee/src/meta.component.js.map

/***/ },

/***/ 699:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_meta_component__ = __webpack_require__(698);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MetaModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MetaModule = (function () {
    function MetaModule() {
    }
    MetaModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__components_meta_component__["a" /* MetaComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__components_meta_component__["a" /* MetaComponent */]],
        }), 
        __metadata('design:paramtypes', [])
    ], MetaModule);
    return MetaModule;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/tee/src/meta.module.js.map

/***/ },

/***/ 700:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directive_date_convertor_directive__ = __webpack_require__(701);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DateConvertorDirectiveModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DateConvertorDirectiveModule = (function () {
    function DateConvertorDirectiveModule() {
    }
    DateConvertorDirectiveModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__directive_date_convertor_directive__["a" /* DateConvertorDirective */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__directive_date_convertor_directive__["a" /* DateConvertorDirective */]],
        }), 
        __metadata('design:paramtypes', [])
    ], DateConvertorDirectiveModule);
    return DateConvertorDirectiveModule;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/tee/src/date-convertor.module.js.map

/***/ },

/***/ 701:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DateConvertorDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DateConvertorDirective = (function () {
    function DateConvertorDirective() {
    }
    DateConvertorDirective.prototype.ngOnInit = function () {
        var theDate = this.currDate;
        var data;
        if (theDate) {
            try {
                if (theDate.indexOf('-') > -1) {
                    theDate = theDate.split("-");
                    var newDate = theDate[1] + "/" + theDate[2] + "/" + theDate[0];
                    data = newDate;
                }
                else {
                    data = parseInt(theDate);
                }
            }
            catch (e) {
                console.log(e);
            }
            var d = void 0;
            if (this.type) {
                d = new Date(data * 1000);
            }
            else {
                d = new Date(data);
            }
            console.log(d);
            if (d != 'Invalid Date') {
                var ourdate = d.toString().slice(3, 15);
                var output = [ourdate.slice(0, 7), ',', ourdate.slice(7)].join('');
                console.log(output);
                this.innerHTML = output;
            }
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], DateConvertorDirective.prototype, "currDate", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], DateConvertorDirective.prototype, "type", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('innerHTML'), 
        __metadata('design:type', Object)
    ], DateConvertorDirective.prototype, "innerHTML", void 0);
    DateConvertorDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[teeDate]'
        }), 
        __metadata('design:paramtypes', [])
    ], DateConvertorDirective);
    return DateConvertorDirective;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/tee/src/date-convertor.directive.js.map

/***/ },

/***/ 702:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipe_parser_pipe__ = __webpack_require__(704);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ParserPipeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ParserPipeModule = (function () {
    function ParserPipeModule() {
    }
    ParserPipeModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__pipe_parser_pipe__["a" /* ParserPipe */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__pipe_parser_pipe__["a" /* ParserPipe */]],
        }), 
        __metadata('design:paramtypes', [])
    ], ParserPipeModule);
    return ParserPipeModule;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/tee/src/parse.module.js.map

/***/ },

/***/ 703:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipe_safe_pipe__ = __webpack_require__(705);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SafePipeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipeModule = (function () {
    function SafePipeModule() {
    }
    SafePipeModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__pipe_safe_pipe__["a" /* SafePipe */], __WEBPACK_IMPORTED_MODULE_1__pipe_safe_pipe__["b" /* CheckboxPipe */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__pipe_safe_pipe__["a" /* SafePipe */], __WEBPACK_IMPORTED_MODULE_1__pipe_safe_pipe__["b" /* CheckboxPipe */]],
        }), 
        __metadata('design:paramtypes', [])
    ], SafePipeModule);
    return SafePipeModule;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/tee/src/safe.module.js.map

/***/ },

/***/ 704:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(63);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ParserPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ParserPipe = (function () {
    function ParserPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    ParserPipe.prototype.transform = function (html) {
        html = html ? html : '';
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    ParserPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'parser' }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"]) === 'function' && _a) || Object])
    ], ParserPipe);
    return ParserPipe;
    var _a;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/tee/src/parser.pipe.js.map

/***/ },

/***/ 705:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(63);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SafePipe; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return CheckboxPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'safe' }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"]) === 'function' && _a) || Object])
    ], SafePipe);
    return SafePipe;
    var _a;
}());
var CheckboxPipe = (function () {
    function CheckboxPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    CheckboxPipe.prototype.transform = function (val) {
        val = val == 1 ? true : false;
        return this.sanitizer.bypassSecurityTrustResourceUrl(val);
    };
    CheckboxPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'checkbox' }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"]) === 'function' && _a) || Object])
    ], CheckboxPipe);
    return CheckboxPipe;
    var _a;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/tee/src/safe.pipe.js.map

/***/ },

/***/ 706:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipe_number_pipe__ = __webpack_require__(707);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NumberPipeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NumberPipeModule = (function () {
    function NumberPipeModule() {
    }
    NumberPipeModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__pipe_number_pipe__["a" /* NumberPipe */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__pipe_number_pipe__["a" /* NumberPipe */]],
        }), 
        __metadata('design:paramtypes', [])
    ], NumberPipeModule);
    return NumberPipeModule;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/tee/src/number.module.js.map

/***/ },

/***/ 707:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(63);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NumberPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NumberPipe = (function () {
    function NumberPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    NumberPipe.prototype.transform = function (numb, digits) {
        if (numb) {
            var num = numb ? numb : 0;
            var si = [
                { value: 1E18, symbol: "E" },
                { value: 1E15, symbol: "P" },
                { value: 1E12, symbol: "T" },
                { value: 1E9, symbol: "G" },
                { value: 1E6, symbol: "M" },
                { value: 1E3, symbol: "K" }
            ], rx = /\.0+$|(\.[0-9]*[1-9])0+$/, i = void 0;
            for (i = 0; i < si.length; i++) {
                if (num >= si[i].value) {
                    return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
                }
            }
            return num;
        }
    };
    NumberPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'num' }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"]) === 'function' && _a) || Object])
    ], NumberPipe);
    return NumberPipe;
    var _a;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/tee/src/number.pipe.js.map

/***/ },

/***/ 708:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipe_limit_pipe__ = __webpack_require__(709);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LimitPipeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LimitPipeModule = (function () {
    function LimitPipeModule() {
    }
    LimitPipeModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__pipe_limit_pipe__["a" /* LimitPipe */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__pipe_limit_pipe__["a" /* LimitPipe */]],
        }), 
        __metadata('design:paramtypes', [])
    ], LimitPipeModule);
    return LimitPipeModule;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/tee/src/limit.module.js.map

/***/ },

/***/ 709:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(63);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LimitPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LimitPipe = (function () {
    function LimitPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    LimitPipe.prototype.transform = function (value, wordwise, max, tail) {
        if (!value)
            return '';
        max = parseInt(max, 10);
        if (!max)
            return value;
        if (value.length <= max)
            return value;
        value = value.substr(0, max);
        if (wordwise) {
            var lastspace = value.lastIndexOf(' ');
            if (lastspace !== -1) {
                //Also remove . and , so its gives a cleaner result.
                if (value.charAt(lastspace - 1) === '.' || value.charAt(lastspace - 1) === ',') {
                    lastspace = lastspace - 1;
                }
                value = value.substr(0, lastspace);
            }
        }
        return this.sanitizer.bypassSecurityTrustHtml(value + (tail || ' …'));
    };
    LimitPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'limit' }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"]) === 'function' && _a) || Object])
    ], LimitPipe);
    return LimitPipe;
    var _a;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/tee/src/limit.pipe.js.map

/***/ },

/***/ 715:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_services_api_service__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_services_storage_service__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_components_meta_component__ = __webpack_require__(698);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardComponent = (function () {
    function DashboardComponent(_storage, activeRoute, renderer, ApiService) {
        this._storage = _storage;
        this.activeRoute = activeRoute;
        this.renderer = renderer;
        this.ApiService = ApiService;
        this.environment = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */];
        this.environment.headerChild = [];
        this.data = new Array();
        this.currency = new Array();
        this.timezone = new Array();
        this.slotTime = new Array(5, 10, 15, 20);
        this.minGolf = new Array(1, 2, 3, 4);
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this._storage.promLogIn().then(function (val) {
        });
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__common_components_meta_component__["a" /* MetaComponent */]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__common_components_meta_component__["a" /* MetaComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__common_components_meta_component__["a" /* MetaComponent */]) === 'function' && _a) || Object)
    ], DashboardComponent.prototype, "metaComp", void 0);
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            selector: 'vendor',
            template: __webpack_require__(747),
            providers: [__WEBPACK_IMPORTED_MODULE_1__common_services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_2__common_services_storage_service__["a" /* StorageService */]],
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__common_services_storage_service__["a" /* StorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__common_services_storage_service__["a" /* StorageService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__common_services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__common_services_api_service__["a" /* ApiService */]) === 'function' && _e) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/tee/src/dashboard.component.js.map

/***/ },

/***/ 731:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__(715);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DashboardRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardRoutingModule = (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */] },
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/tee/src/dashboard-routing.module.js.map

/***/ },

/***/ 747:
/***/ function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row bg-title\">\n        <div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-12\">\n            <h4 class=\"page-title\">Dashboard 1</h4>\n        </div>\n        <div class=\"col-lg-9 col-sm-8 col-md-8 col-xs-12\">\n            <a href=\"https://themeforest.net/item/elite-admin-responsive-dashboard-web-app-kit-/16750820\" target=\"_blank\" class=\"btn btn-danger pull-right m-l-20 btn-rounded btn-outline hidden-xs hidden-sm waves-effect waves-light\">Buy Now</a>\n            <ol class=\"breadcrumb\">\n                <li><a href=\"#\">Dashboard</a></li>\n                <li class=\"active\">Dashboard 1</li>\n            </ol>\n        </div>\n        <!-- /.col-lg-12 -->\n    </div>\n    <!-- /.row -->\n    <div class=\"row\" *ngIf=\"environment.random.userDetail\">\n        <div class=\"col-md-12 col-lg-12 col-sm-12\" >\n            <div class=\"white-box\">\n                <div class=\"row row-in\">\n                    <div class=\"col-lg-3 col-sm-6 row-in-br\">\n                        <div class=\"col-in row\">\n                            <div class=\"col-md-6 col-sm-6 col-xs-6\"> <i data-icon=\"E\" class=\"linea-icon linea-basic\"></i>\n                                <h5 class=\"text-muted vb\">PENDING REQUEST</h5>\n                            </div>\n                            <div class=\"col-md-6 col-sm-6 col-xs-6\">\n                                <h3 class=\"counter text-right m-t-15 text-danger\">{{environment.random.userDetail.manage_course.pending.length}}</h3>\n                            </div>\n                            <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                                <div class=\"progress\">\n                                    <div class=\"progress-bar progress-bar-danger\" role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 40%\"> <span class=\"sr-only\">40% Complete (success)</span> </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-sm-6 row-in-br  b-r-none\">\n                        <div class=\"col-in row\">\n                            <div class=\"col-md-6 col-sm-6 col-xs-6\"> <i class=\"linea-icon linea-basic\" data-icon=\"&#xe01b;\"></i>\n                                <h5 class=\"text-muted vb\">ACCEPTED</h5>\n                            </div>\n                            <div class=\"col-md-6 col-sm-6 col-xs-6\">\n                                <h3 class=\"counter text-right m-t-15 text-megna\">{{environment.random.userDetail.manage_course.accepted.length}}</h3>\n                            </div>\n                            <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                                <div class=\"progress\">\n                                    <div class=\"progress-bar progress-bar-megna\" role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 40%\"> <span class=\"sr-only\">40% Complete (success)</span> </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-sm-6 row-in-br\">\n                        <div class=\"col-in row\">\n                            <div class=\"col-md-6 col-sm-6 col-xs-6\"> <i class=\"linea-icon linea-basic\" data-icon=\"&#xe00b;\"></i>\n                                <h5 class=\"text-muted vb\">DECLINED</h5>\n                            </div>\n                            <div class=\"col-md-6 col-sm-6 col-xs-6\">\n                                <h3 class=\"counter text-right m-t-15 text-primary\">{{environment.random.userDetail.manage_course.declined.length}}</h3>\n                            </div>\n                            <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                                <div class=\"progress\">\n                                    <div class=\"progress-bar progress-bar-primary\" role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 40%\"> <span class=\"sr-only\">40% Complete (success)</span> </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-3 col-sm-6  b-0\">\n                        <div class=\"col-in row\">\n                            <div class=\"col-md-6 col-sm-6 col-xs-6\"> <i class=\"linea-icon linea-basic\" data-icon=\"&#xe016;\"></i>\n                                <h5 class=\"text-muted vb\">NO OF SLOTS</h5>\n                            </div>\n                            <div class=\"col-md-6 col-sm-6 col-xs-6\">\n                                <h3 class=\"counter text-right m-t-15 text-success\">431</h3>\n                            </div>\n                            <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                                <div class=\"progress\">\n                                    <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 40%\"> <span class=\"sr-only\">40% Complete (success)</span> </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--row -->\n    <!-- /.row -->\n    <div class=\"row\">\n        <div class=\"col-md-7 col-lg-9 col-sm-12 col-xs-12\">\n            <div class=\"white-box\">\n                <h3 class=\"box-title\">Yearly Sales</h3>\n                <ul class=\"list-inline text-right\">\n                    <li>\n                        <h5><i class=\"fa fa-circle m-r-5\" style=\"color: #00bfc7;\"></i>iPhone</h5>\n                    </li>\n                    <li>\n                        <h5><i class=\"fa fa-circle m-r-5\" style=\"color: #fb9678;\"></i>iPad</h5>\n                    </li>\n                    <li>\n                        <h5><i class=\"fa fa-circle m-r-5\" style=\"color: #9675ce;\"></i>iPod</h5>\n                    </li>\n                </ul>\n                <div id=\"morris-area-chart\" style=\"height: 340px;\"></div>\n            </div>\n        </div>\n        <div class=\"col-md-5 col-lg-3 col-sm-6 col-xs-12\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"bg-theme-dark m-b-15\">\n                        <div class=\"row weather p-20\">\n                            <div class=\"col-md-6 col-xs-6 col-lg-6 col-sm-6 m-t-40\">\n                                <h3>&nbsp;</h3>\n                                <h1>73<sup>°F</sup></h1>\n                                <p class=\"text-white\">AHMEDABAD, INDIA</p>\n                            </div>\n                            <div class=\"col-md-6 col-xs-6 col-lg-6 col-sm-6 text-right\"> <i class=\"wi wi-day-cloudy-high\"></i>\n                                <br/>\n                                <br/>\n                                <b class=\"text-white\">SUNNEY DAY</b>\n                                <p class=\"w-title-sub\">April 14</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-12\">\n                    <div class=\"bg-theme m-b-15\">\n                        <div id=\"myCarouse2\" class=\"carousel vcarousel slide p-20\">\n                            <!-- Carousel items -->\n                            <div class=\"carousel-inner \">\n                                <div class=\"active item\">\n                                    <h3 class=\"text-white\">My Acting blown <span class=\"font-bold\">Your Mind</span> and you also laugh at the moment</h3>\n                                    <div class=\"twi-user\"><img src=\"../plugins/images/users/hritik.jpg\" alt=\"user\" class=\"img-circle img-responsive pull-left\">\n                                        <h4 class=\"text-white m-b-0\">Govinda</h4>\n                                        <p class=\"text-white\">Actor</p>\n                                    </div>\n                                </div>\n                                <div class=\"item\">\n                                    <h3 class=\"text-white\">My Acting blown <span class=\"font-bold\">Your Mind</span> and you also laugh at the moment</h3>\n                                    <div class=\"twi-user\"><img src=\"../plugins/images/users/genu.jpg\" alt=\"user\" class=\"img-circle img-responsive pull-left\">\n                                        <h4 class=\"text-white m-b-0\">Govinda</h4>\n                                        <p class=\"text-white\">Actor</p>\n                                    </div>\n                                </div>\n                                <div class=\"item\">\n                                    <h3 class=\"text-white\">My Acting blown <span class=\"font-bold\">Your Mind</span> and you also laugh at the moment</h3>\n                                    <div class=\"twi-user\"><img src=\"../plugins/images/users/ritesh.jpg\" alt=\"user\" class=\"img-circle img-responsive pull-left\">\n                                        <h4 class=\"text-white m-b-0\">Govinda</h4>\n                                        <p class=\"text-white\">Actor</p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--row -->\n    <div class=\"row\">\n        <div class=\"col-md-12 col-lg-6 col-sm-12\">\n            <div class=\"white-box\">\n                <h3 class=\"box-title\">Recent Comments</h3>\n                <div class=\"comment-center\">\n                    <div class=\"comment-body\">\n                        <div class=\"user-img\"> <img src=\"../plugins/images/users/pawandeep.jpg\" alt=\"user\" class=\"img-circle\"></div>\n                        <div class=\"mail-contnet\">\n                            <h5>Pavan kumar</h5>\n                            <span class=\"mail-desc\">Donec ac condimentum massa. Etiam pellentesque pretium lacus. Phasellus ultricies dictum suscipit. Aenean commodo dui pellentesque molestie feugiat.</span> <span class=\"label label-rounded label-info\">PENDING</span><a href=\"javacript:void(0)\" class=\"action\"><i class=\"ti-close text-danger\"></i></a> <a href=\"javacript:void(0)\" class=\"action\"><i class=\"ti-check text-success\"></i></a><span class=\"time pull-right\">April 14, 2017</span></div>\n                    </div>\n                    <div class=\"comment-body\">\n                        <div class=\"user-img\"> <img src=\"../plugins/images/users/sonu.jpg\" alt=\"user\" class=\"img-circle\"> </div>\n                        <div class=\"mail-contnet\">\n                            <h5>Sonu Nigam</h5>\n                            <span class=\"mail-desc\">Donec ac condimentum massa. Etiam pellentesque pretium lacus. Phasellus ultricies dictum suscipit. Aenean commodo dui pellentesque molestie feugiat.</span><span class=\"label label-rounded label-success\">APPROVED</span><a href=\"javacript:void(0)\" class=\"action\"><i class=\"ti-close text-danger\"></i></a> <a href=\"javacript:void(0)\" class=\"action\"><i class=\"ti-check text-success\"></i></a><span class=\"time pull-right\">April 14, 2017</span></div>\n                    </div>\n                    <div class=\"comment-body\">\n                        <div class=\"user-img\"> <img src=\"../plugins/images/users/arijit.jpg\" alt=\"user\" class=\"img-circle\"> </div>\n                        <div class=\"mail-contnet\">\n                            <h5>Arijit Sinh</h5>\n                            <span class=\"mail-desc\">Donec ac condimentum massa. Etiam pellentesque pretium lacus. Phasellus ultricies dictum suscipit. Aenean commodo dui pellentesque molestie feugiat. </span><span class=\"label label-rounded label-danger\">REJECTED</span><a href=\"javacript:void(0)\" class=\"action\"><i class=\"ti-close text-danger\"></i></a> <a href=\"javacript:void(0)\" class=\"action\"><i class=\"ti-check text-success\"></i></a><span class=\"time pull-right\">April 14, 2017</span></div>\n                    </div>\n                    <div class=\"comment-body b-none\">\n                        <div class=\"user-img\"> <img src=\"../plugins/images/users/pawandeep.jpg\" alt=\"user\" class=\"img-circle\"></div>\n                        <div class=\"mail-contnet\">\n                            <h5>Pavan kumar</h5>\n                            <span class=\"mail-desc\">Donec ac condimentum massa. Etiam pellentesque pretium lacus. Phasellus ultricies dictum suscipit. Aenean commodo dui pellentesque molestie feugiat.</span> <span class=\"label label-rounded label-info\">PENDING</span> <a href=\"javacript:void(0)\" class=\"action\"><i class=\"ti-close text-danger\"></i></a> <a href=\"javacript:void(0)\" class=\"action\"><i class=\"ti-check text-success\"></i></a><span class=\"time pull-right\">April 14, 2017</span></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-12 col-lg-6 col-sm-12\">\n            <div class=\"white-box\">\n                <h3 class=\"box-title\">Recent sales\n                    <div class=\"col-md-3 col-sm-4 col-xs-6 pull-right\">\n                        <select class=\"form-control pull-right row b-none\">\n                            <option>March 2017</option>\n                            <option>April 2017</option>\n                            <option>May 2017</option>\n                            <option>June 2017</option>\n                            <option>July 2017</option>\n                        </select>\n                    </div>\n                </h3>\n                <div class=\"row sales-report\">\n                    <div class=\"col-md-6 col-sm-6 col-xs-6\">\n                        <h2>March 2017</h2>\n                        <p>SALES REPORT</p>\n                    </div>\n                    <div class=\"col-md-6 col-sm-6 col-xs-6 \">\n                        <h1 class=\"text-right text-success m-t-20\">$3,690</h1>\n                    </div>\n                </div>\n                <div class=\"table-responsive\">\n                    <table class=\"table \">\n                        <thead>\n                        <tr>\n                            <th>NAME</th>\n                            <th>STATUS</th>\n                            <th>DATE</th>\n                            <th>PRICE</th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr>\n                            <td class=\"txt-oflo\">Elite admin</td>\n                            <td><span class=\"label label-megna label-rounded\">SALE</span> </td>\n                            <td class=\"txt-oflo\">April 18</td>\n                            <td><span class=\"text-success\">$24</span></td>\n                        </tr>\n                        <tr>\n                            <td class=\"txt-oflo\">Real Homes</td>\n                            <td><span class=\"label label-info label-rounded\">EXTENDED</span></td>\n                            <td class=\"txt-oflo\">April 19</td>\n                            <td><span class=\"text-info\">$1250</span></td>\n                        </tr>\n                        <tr>\n                            <td class=\"txt-oflo\">Medical Pro</td>\n                            <td><span class=\"label label-danger label-rounded\">TAX</span></td>\n                            <td class=\"txt-oflo\">April 20</td>\n                            <td><span class=\"text-danger\">-$24</span></td>\n                        </tr>\n                        <tr>\n                            <td class=\"txt-oflo\">Hosting press</td>\n                            <td><span class=\"label label-megna label-rounded\">SALE</span></td>\n                            <td class=\"txt-oflo\">April 21</td>\n                            <td><span class=\"text-success\">$24</span></td>\n                        </tr>\n                        <tr>\n                            <td class=\"txt-oflo\">Helping Hands</td>\n                            <td><span class=\"label label-success label-rounded\">MEMBER</span></td>\n                            <td class=\"txt-oflo\">April 22</td>\n                            <td><span class=\"text-success\">$24</span></td>\n                        </tr>\n                        <tr>\n                            <td class=\"txt-oflo\">Digital Agency</td>\n                            <td><span class=\"label label-megna label-rounded\">SALE</span> </td>\n                            <td class=\"txt-oflo\">April 23</td>\n                            <td><span class=\"text-danger\">-$14</span></td>\n                        </tr>\n                        <tr>\n                            <td class=\"txt-oflo\">Helping Hands</td>\n                            <td><span class=\"label label-success label-rounded\">MEMBER</span></td>\n                            <td class=\"txt-oflo\">April 22</td>\n                            <td><span class=\"text-success\">$64</span></td>\n                        </tr>\n                        </tbody>\n                    </table>\n                    <a href=\"#\">Check all the sales</a> </div>\n            </div>\n        </div>\n    </div>\n    <!-- /.row -->\n    <!--row -->\n    <div class=\"row\">\n        <div class=\"col-md-12 col-lg-9 col-sm-12 col-xs-12 pull-right\">\n            <div class=\"white-box\">\n                <h3 class=\"box-title\">Sales Difference</h3>\n                <ul class=\"list-inline text-right\">\n                    <li>\n                        <h5><i class=\"fa fa-circle m-r-5\" style=\"color: #00bfc7;\"></i>Site A View</h5>\n                    </li>\n                    <li>\n                        <h5><i class=\"fa fa-circle m-r-5\" style=\"color: #fdc006;\"></i>Site B View</h5>\n                    </li>\n                </ul>\n                <div id=\"morris-area-chart2\" style=\"height: 370px;\"></div>\n            </div>\n        </div>\n        <div class=\"col-md-12 col-lg-3 col-sm-6 col-xs-12\">\n            <div class=\"row\">\n                <div class=\"col-md-6 col-lg-12\">\n                    <div class=\"white-box m-b-15\">\n                        <h3 class=\"box-title\">Sales Difference</h3>\n                        <div class=\"row\">\n                            <div class=\"col-md-6 col-sm-6 col-xs-6  m-t-30\">\n                                <h1 class=\"text-info\">$647</h1>\n                                <p class=\"text-muted\">APRIL 2017</p>\n                                <b>(150 Sales)</b> </div>\n                            <div class=\"col-md-6 col-sm-6 col-xs-6\">\n                                <div id=\"sparkline2dash\" class=\"text-center\"></div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6 col-lg-12\">\n                    <div class=\"white-box bg-purple m-b-15\">\n                        <h3 class=\"text-white box-title\">VISIT STATASTICS</h3>\n                        <div class=\"row\">\n                            <div class=\"col-md-6 col-sm-6 col-xs-6  m-t-30\">\n                                <h1 class=\"text-white\">$347</h1>\n                                <p class=\"light_op_text\">APRIL 2017</p>\n                                <b class=\"text-white\">(150 Sales)</b> </div>\n                            <div class=\"col-md-6 col-sm-6 col-xs-6\">\n                                <div id=\"sales1\" class=\"text-center\"></div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- row -->\n    <div class=\"row\">\n        <div class=\"col-md-12 col-lg-4\">\n            <div class=\"white-box\">\n                <h3 class=\"box-title\">To Do List</h3>\n                <ul class=\"list-task list-group\" data-role=\"tasklist\">\n                    <li class=\"list-group-item\" data-role=\"task\">\n                        <div class=\"checkbox checkbox-info\">\n                            <input type=\"checkbox\" id=\"inputSchedule\" name=\"inputCheckboxesSchedule\">\n                            <label for=\"inputSchedule\"> <span>Schedule meeting</span> </label>\n                        </div>\n                    </li>\n                    <li class=\"list-group-item\" data-role=\"task\">\n                        <div class=\"checkbox checkbox-info\">\n                            <input type=\"checkbox\" id=\"inputCall\" name=\"inputCheckboxesCall\">\n                            <label for=\"inputCall\"> <span>Give Purchase report</span> <span class=\"label label-danger\">Today</span> </label>\n                        </div>\n                    </li>\n                    <li class=\"list-group-item\" data-role=\"task\">\n                        <div class=\"checkbox checkbox-info\">\n                            <input type=\"checkbox\" id=\"inputBook\" name=\"inputCheckboxesBook\">\n                            <label for=\"inputBook\"> <span>Book flight for holiday</span> </label>\n                        </div>\n                    </li>\n                    <li class=\"list-group-item\" data-role=\"task\">\n                        <div class=\"checkbox checkbox-info\">\n                            <input type=\"checkbox\" id=\"inputForward\" name=\"inputCheckboxesForward\">\n                            <label for=\"inputForward\"> <span>Forward all tasks</span> <span class=\"label label-warning\">2 weeks</span> </label>\n                        </div>\n                    </li>\n                    <li class=\"list-group-item\" data-role=\"task\">\n                        <div class=\"checkbox checkbox-info\">\n                            <input type=\"checkbox\" id=\"inputRecieve\" name=\"inputCheckboxesRecieve\">\n                            <label for=\"inputRecieve\"> <span>Recieve shipment</span> </label>\n                        </div>\n                    </li>\n                    <li class=\"list-group-item\" data-role=\"task\">\n                        <div class=\"checkbox checkbox-info\">\n                            <input type=\"checkbox\" id=\"inputForward2\" name=\"inputCheckboxesd\">\n                            <label for=\"inputForward2\"> <span>Important tasks</span> <span class=\"label label-success\">2 weeks</span> </label>\n                        </div>\n                    </li>\n                </ul>\n            </div>\n        </div>\n        <div class=\"col-md-12 col-lg-4\">\n            <div class=\"white-box\">\n                <h3 class=\"box-title\">You have 5 new messages</h3>\n                <div class=\"message-center\">\n                    <a href=\"#\">\n                        <div class=\"user-img\"> <img src=\"../plugins/images/users/pawandeep.jpg\" alt=\"user\" class=\"img-circle\"> <span class=\"profile-status online pull-right\"></span> </div>\n                        <div class=\"mail-contnet\">\n                            <h5>Pavan kumar</h5>\n                            <span class=\"mail-desc\">Just see the my admin!</span> <span class=\"time\">9:30 AM</span> </div>\n                    </a>\n                    <a href=\"#\">\n                        <div class=\"user-img\"> <img src=\"../plugins/images/users/sonu.jpg\" alt=\"user\" class=\"img-circle\"> <span class=\"profile-status busy pull-right\"></span> </div>\n                        <div class=\"mail-contnet\">\n                            <h5>Sonu Nigam</h5>\n                            <span class=\"mail-desc\">I've sung a song! See you at</span> <span class=\"time\">9:10 AM</span> </div>\n                    </a>\n                    <a href=\"#\">\n                        <div class=\"user-img\"> <img src=\"../plugins/images/users/arijit.jpg\" alt=\"user\" class=\"img-circle\"> <span class=\"profile-status away pull-right\"></span> </div>\n                        <div class=\"mail-contnet\">\n                            <h5>Arijit Sinh</h5>\n                            <span class=\"mail-desc\">I am a singer!</span> <span class=\"time\">9:08 AM</span> </div>\n                    </a>\n                    <a href=\"#\">\n                        <div class=\"user-img\"> <img src=\"../plugins/images/users/genu.jpg\" alt=\"user\" class=\"img-circle\"> <span class=\"profile-status online pull-right\"></span> </div>\n                        <div class=\"mail-contnet\">\n                            <h5>Genelia Deshmukh</h5>\n                            <span class=\"mail-desc\">I love to do acting and dancing</span> <span class=\"time\">9:08 AM</span> </div>\n                    </a>\n                    <a href=\"#\" class=\"b-none\">\n                        <div class=\"user-img\"> <img src=\"../plugins/images/users/pawandeep.jpg\" alt=\"user\" class=\"img-circle\"> <span class=\"profile-status offline pull-right\"></span> </div>\n                        <div class=\"mail-contnet\">\n                            <h5>Pavan kumar</h5>\n                            <span class=\"mail-desc\">Just see the my admin!</span> <span class=\"time\">9:02 AM</span> </div>\n                    </a>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-4 col-md-12\">\n            <div class=\"white-box\">\n                <h3 class=\"box-title\">Chat</h3>\n                <div class=\"chat-box\">\n                    <ul class=\"chat-list slimscroll\" style=\"overflow: hidden;\" tabindex=\"5005\">\n                        <li>\n                            <div class=\"chat-image\"> <img alt=\"male\" src=\"../plugins/images/users/sonu.jpg\"> </div>\n                            <div class=\"chat-body\">\n                                <div class=\"chat-text\">\n                                    <h4>Sonu Nigam</h4>\n                                    <p> Hi, All! </p>\n                                    <b>10.00 am</b> </div>\n                            </div>\n                        </li>\n                        <li class=\"odd\">\n                            <div class=\"chat-image\"> <img alt=\"Female\" src=\"../plugins/images/users/genu.jpg\"> </div>\n                            <div class=\"chat-body\">\n                                <div class=\"chat-text\">\n                                    <h4>Genelia</h4>\n                                    <p> Hi, How are you Sonu? ur next concert? </p>\n                                    <b>10.03 am</b> </div>\n                            </div>\n                        </li>\n                        <li>\n                            <div class=\"chat-image\"> <img alt=\"male\" src=\"../plugins/images/users/ritesh.jpg\"> </div>\n                            <div class=\"chat-body\">\n                                <div class=\"chat-text\">\n                                    <h4>Ritesh</h4>\n                                    <p> Hi, Sonu and Genelia, </p>\n                                    <b>10.05 am</b> </div>\n                            </div>\n                        </li>\n                    </ul>\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <div class=\"input-group\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Say something\">\n                                            <span class=\"input-group-btn\">\n                    <button class=\"btn btn-success\" type=\"button\">Send</button>\n                    </span> </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- /.row -->\n    <!-- .right-sidebar -->\n    <div class=\"right-sidebar\">\n        <div class=\"slimscrollright\">\n            <div class=\"rpanel-title\"> Service Panel <span><i class=\"ti-close right-side-toggle\"></i></span> </div>\n            <div class=\"r-panel-body\">\n                <ul>\n                    <li><b>Layout Options</b></li>\n                    <li>\n                        <div class=\"checkbox checkbox-info\">\n                            <input id=\"checkbox1\" type=\"checkbox\" class=\"fxhdr\">\n                            <label for=\"checkbox1\"> Fix Header </label>\n                        </div>\n                    </li>\n                    <li>\n                        <div class=\"checkbox checkbox-success\">\n                            <input id=\"checkbox4\" type=\"checkbox\" class=\"open-close\">\n                            <label for=\"checkbox4\"> Toggle Sidebar </label>\n                        </div>\n                    </li>\n                    <li>\n                        <div class=\"checkbox checkbox-warning\">\n                            <input id=\"checkbox2\" type=\"checkbox\" class=\"fxsdr\">\n                            <label for=\"checkbox2\"> Fix Sidebar </label>\n                        </div>\n                    </li>\n                </ul>\n                <ul id=\"themecolors\" class=\"m-t-20\">\n                    <li><b>With Light sidebar</b></li>\n                    <li><a href=\"javascript:void(0)\" theme=\"default\" class=\"default-theme working\">1</a></li>\n                    <li><a href=\"javascript:void(0)\" theme=\"green\" class=\"green-theme\">2</a></li>\n                    <li><a href=\"javascript:void(0)\" theme=\"gray\" class=\"yellow-theme\">3</a></li>\n                    <li><a href=\"javascript:void(0)\" theme=\"blue\" class=\"blue-theme\">4</a></li>\n                    <li><a href=\"javascript:void(0)\" theme=\"purple\" class=\"purple-theme\">5</a></li>\n                    <li><a href=\"javascript:void(0)\" theme=\"megna\" class=\"megna-theme\">6</a></li>\n                    <li><b>With Dark sidebar</b></li>\n                    <br/>\n                    <li><a href=\"javascript:void(0)\" theme=\"default-dark\" class=\"default-dark-theme\">7</a></li>\n                    <li><a href=\"javascript:void(0)\" theme=\"green-dark\" class=\"green-dark-theme\">8</a></li>\n                    <li><a href=\"javascript:void(0)\" theme=\"gray-dark\" class=\"yellow-dark-theme\">9</a></li>\n                    <li><a href=\"javascript:void(0)\" theme=\"blue-dark\" class=\"blue-dark-theme\">10</a></li>\n                    <li><a href=\"javascript:void(0)\" theme=\"purple-dark\" class=\"purple-dark-theme\">11</a></li>\n                    <li><a href=\"javascript:void(0)\" theme=\"megna-dark\" class=\"megna-dark-theme\">12</a></li>\n                </ul>\n                <ul class=\"m-t-20 chatonline\">\n                    <li><b>Chat option</b></li>\n                    <li>\n                        <a href=\"javascript:void(0)\"><img src=\"../plugins/images/users/varun.jpg\" alt=\"user-img\" class=\"img-circle\"> <span>Varun Dhavan <small class=\"text-success\">online</small></span></a>\n                    </li>\n                    <li>\n                        <a href=\"javascript:void(0)\"><img src=\"../plugins/images/users/genu.jpg\" alt=\"user-img\" class=\"img-circle\"> <span>Genelia Deshmukh <small class=\"text-warning\">Away</small></span></a>\n                    </li>\n                    <li>\n                        <a href=\"javascript:void(0)\"><img src=\"../plugins/images/users/ritesh.jpg\" alt=\"user-img\" class=\"img-circle\"> <span>Ritesh Deshmukh <small class=\"text-danger\">Busy</small></span></a>\n                    </li>\n                    <li>\n                        <a href=\"javascript:void(0)\"><img src=\"../plugins/images/users/arijit.jpg\" alt=\"user-img\" class=\"img-circle\"> <span>Arijit Sinh <small class=\"text-muted\">Offline</small></span></a>\n                    </li>\n                    <li>\n                        <a href=\"javascript:void(0)\"><img src=\"../plugins/images/users/govinda.jpg\" alt=\"user-img\" class=\"img-circle\"> <span>Govinda Star <small class=\"text-success\">online</small></span></a>\n                    </li>\n                    <li>\n                        <a href=\"javascript:void(0)\"><img src=\"../plugins/images/users/hritik.jpg\" alt=\"user-img\" class=\"img-circle\"> <span>John Abraham<small class=\"text-success\">online</small></span></a>\n                    </li>\n                    <li>\n                        <a href=\"javascript:void(0)\"><img src=\"../plugins/images/users/john.jpg\" alt=\"user-img\" class=\"img-circle\"> <span>Hritik Roshan<small class=\"text-success\">online</small></span></a>\n                    </li>\n                    <li>\n                        <a href=\"javascript:void(0)\"><img src=\"../plugins/images/users/pawandeep.jpg\" alt=\"user-img\" class=\"img-circle\"> <span>Pwandeep rajan <small class=\"text-success\">online</small></span></a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <!-- /.right-sidebar -->\n</div>\n"

/***/ }

});
//# sourceMappingURL=13.bundle.map