webpackJsonp([10,19],{

/***/ 686:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_component__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_routing_module__ = __webpack_require__(734);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_modules_meta_module__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipe_modules_parse_module__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipe_modules_key_module__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipe_modules_number_module__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipe_modules_safe_module__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directive_modules_date_convertor_module__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__directive_modules_ng_init_module__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__(381);
/* harmony export (binding) */ __webpack_require__.d(exports, "LoginModule", function() { return LoginModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_1__login_routing_module__["a" /* LoginRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__common_modules_meta_module__["a" /* MetaModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_6__pipe_modules_parse_module__["a" /* ParserPipeModule */],
                __WEBPACK_IMPORTED_MODULE_7__pipe_modules_key_module__["a" /* KeysPipeModule */],
                __WEBPACK_IMPORTED_MODULE_8__pipe_modules_number_module__["a" /* NumberPipeModule */],
                __WEBPACK_IMPORTED_MODULE_9__pipe_modules_safe_module__["a" /* SafePipeModule */],
                __WEBPACK_IMPORTED_MODULE_10__directive_modules_date_convertor_module__["a" /* DateConvertorDirectiveModule */],
                __WEBPACK_IMPORTED_MODULE_11__directive_modules_ng_init_module__["a" /* NgInitDirectiveModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__login_component__["a" /* LoginComponent */]
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], LoginModule);
    return LoginModule;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/tee/src/login.module.js.map

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

/***/ 712:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipe_key_pipe__ = __webpack_require__(713);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return KeysPipeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KeysPipeModule = (function () {
    function KeysPipeModule() {
    }
    KeysPipeModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__pipe_key_pipe__["a" /* KeysPipe */], __WEBPACK_IMPORTED_MODULE_1__pipe_key_pipe__["b" /* ForKeyPipe */], __WEBPACK_IMPORTED_MODULE_1__pipe_key_pipe__["c" /* FilterPipe */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__pipe_key_pipe__["a" /* KeysPipe */], __WEBPACK_IMPORTED_MODULE_1__pipe_key_pipe__["b" /* ForKeyPipe */], __WEBPACK_IMPORTED_MODULE_1__pipe_key_pipe__["c" /* FilterPipe */]],
        }), 
        __metadata('design:paramtypes', [])
    ], KeysPipeModule);
    return KeysPipeModule;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/tee/src/key.module.js.map

/***/ },

/***/ 713:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(63);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return KeysPipe; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return ForKeyPipe; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return FilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//convert url to safe url
var KeysPipe = (function () {
    function KeysPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    KeysPipe.prototype.transform = function (url) {
        var regex = /(https?:)?(\/\/)?(www\.|m\.)?(youtu\.be\/|youtube\.com\/(embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})([^\"]*)/i;
        var matches = url.match(regex);
        var embedLink = '';
        if (matches[6]) {
            embedLink = "https://www.youtube.com/embed/" + matches[6] + '?autoplay=1&rel=0';
        }
        return this.sanitizer.bypassSecurityTrustResourceUrl(embedLink);
    };
    KeysPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'keys' }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"]) === 'function' && _a) || Object])
    ], KeysPipe);
    return KeysPipe;
    var _a;
}());
//gives key and value
var ForKeyPipe = (function () {
    function ForKeyPipe() {
    }
    ForKeyPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            keys.push({ key: key, value: value[key] });
        }
        return keys;
    };
    ForKeyPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'forkey' }), 
        __metadata('design:paramtypes', [])
    ], ForKeyPipe);
    return ForKeyPipe;
}());
var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, field, value) {
        var allList = [];
        if (value && value.trim() && value.length > 0) {
            value = value.toLocaleLowerCase();
            value = value.trim();
            if (!items)
                return allList;
            for (var i in items) {
                var it = items[i];
                if (it[field].toLocaleLowerCase().indexOf(value) > -1) {
                    allList.push(it);
                }
            }
            return allList;
        }
        else {
            return items;
        }
    };
    FilterPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'FilterPipe' }), 
        __metadata('design:paramtypes', [])
    ], FilterPipe);
    return FilterPipe;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/tee/src/key.pipe.js.map

/***/ },

/***/ 718:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_services_api_service__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_services_storage_service__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_components_meta_component__ = __webpack_require__(698);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BATTUTA_KEY = "00000000000000000000000000000000";
var LoginComponent = (function () {
    function LoginComponent(_storage, activeRoute, _router, ApiService) {
        this._storage = _storage;
        this.activeRoute = activeRoute;
        this._router = _router;
        this.ApiService = ApiService;
        this.environment = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */];
        this.environment.headerChild = [];
        this.data = new Array();
        this.all = new Array();
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._storage.userChecker(false).then(function (val) {
            if (val && _this.environment.random.source == 'golf_course') {
                _this._router.navigateByUrl('golf-course/dashboard');
            }
            else if (val && _this.environment.random.source == 'vendor') {
                _this._router.navigateByUrl('vendor/dashboard');
            }
        });
        this.activeRoute.params.subscribe(function (params) {
            if (params['token'] && params['token'].trim() != '') {
                _this._activeEmail(params['token']);
            }
            if (params['type'] && params['type'].trim() != '') {
                _this.environment.random.source = params['type'];
                if (_this._router.url.indexOf('register') > -1 && params['type'] == 'golf_course') {
                    flipCom('registerform', 'centerForm');
                }
                else if (_this._router.url.indexOf('register') > -1 && params['type'] == 'vendor') {
                    flipCom('registerVForm', 'centerForm');
                }
                else if (_this._router.url.indexOf('login') > -1) {
                    flipCom('loginform', 'centerForm');
                }
            }
        });
    };
    LoginComponent.prototype.ngOnDestroy = function () {
    };
    LoginComponent.prototype.setGaMeta = function () {
        // if(this.environment.myCity.cityName || this.allCityData.routerCity){
        //   this.metaComp.callGA({title:'kjhkjhk'});
        //   this.metaComp.setMetaData({metaDescription: 'dsada', metaTitle: 'dasdsad'});
        // }
    };
    LoginComponent.prototype.loginMeIn = function (form) {
        var _this = this;
        if (form.valid) {
            this.ApiService.postApiMc4k('api/v1/auth/login', "login_id=" + this.data.email + "&password=" + this.data.password + '&source=' + this.environment.random.source, true).then(function (value) {
                if (value && value.data && _this.environment.random.source == value.data['source']) {
                    _this.environment.random.userInfo = { activated: value.data.activated, id: value.data['id'], token: value.data['token'], source: _this.environment.random.source };
                    var d = new Date();
                    if (_this.data.remember) {
                        d.setTime(d.getTime() + (12 * 30 * 24 * 60 * 60 * 1000));
                        _this._storage.storeCookies('id', _this.environment.random.userInfo.id, d.toUTCString());
                        _this._storage.storeCookies('token', _this.environment.random.userInfo.token, d.toUTCString());
                        _this._storage.storeCookies('source', _this.environment.random.userInfo.source, d.toUTCString());
                    }
                    else {
                        d.setTime(d.getTime() + (1 * 60 * 60 * 1000));
                        _this._storage.storeCookies('id', _this.environment.random.userInfo.id, d.toUTCString());
                        _this._storage.storeCookies('token', _this.environment.random.userInfo.token, d.toUTCString());
                        _this._storage.storeCookies('source', _this.environment.random.userInfo.source, d.toUTCString());
                    }
                }
                else if (value && value.data && _this.environment.random.userInfo.source != value.data['source']) {
                    swal("Error", 'You are not a ' + _this.environment.random.source, "error");
                }
                else {
                    swal("Error", value.error, "error");
                }
            });
        }
    };
    LoginComponent.prototype.registerMeIn = function (form) {
        if (form.valid) {
            this.environment.random.source = 'golf_course';
            var code = this.data.country_code ? this.data.country_code : this.data.country_code2;
            var countryCode = void 0;
            for (var i in this.all['code']) {
                if (this.all['code'][i].code == code) {
                    countryCode = this.all['code'][i].callingCode;
                    break;
                }
            }
            var params = { name: this.data.name, country: this.data.country, city: this.data.city, mobile: this.data.mobile, country_code: countryCode, email: this.data.email1, password: this.data.password1 };
            this.ApiService.postApiMc4k('api/v1/forms/register', params).then(function (value) {
                if (value && value.msg == 'success') {
                    flipCom('loginform', 'registerform');
                    swal("Success", value.msg, "success");
                }
                else {
                    swal("Error", value.error, "error");
                }
            });
        }
    };
    LoginComponent.prototype.registerVendor = function (form) {
        if (form.valid) {
            this.environment.random.source = 'vendor';
            var code = this.data.country_code ? this.data.country_code : this.data.country_code2;
            var countryCode = void 0;
            for (var i in this.all['code']) {
                if (this.all['code'][i].code == code) {
                    countryCode = this.all['code'][i].callingCode;
                    break;
                }
            }
            var params = { name: this.data.name2, country: this.data.country2, city: this.data.city2, mobile: this.data.mobile2, country_code: countryCode, email: this.data.email2, password: this.data.password2, website_url: this.data.website_url2 };
            this.ApiService.postApiMc4k('api/v1/vendors/register', params).then(function (value) {
                if (value && value.msg == 'success') {
                    flipCom('loginform', 'registerVform');
                    swal("Success", value.msg, "success");
                }
                else {
                    swal("Error", value.error, "error");
                }
            });
        }
    };
    LoginComponent.prototype._activeEmail = function (token) {
        var vendor = document.location.search.replace('?', '&');
        vendor = vendor ? vendor : '';
        this.environment.random.source = vendor == '' ? 'golf_course' : 'vendor';
        this.ApiService.getApiMc4k('api/v1/forms/verify-email?token=' + token + vendor, 0).then(function (value) {
            if (value && value.msg) {
                swal("Success", value.msg, "success");
            }
            else {
                swal("Error", value.error, "error");
            }
        });
    };
    LoginComponent.prototype._getCountry = function () {
        var _this = this;
        var url = "https://battuta.medunes.net/api/country/all/?key=" + BATTUTA_KEY + "&callback=?";
        var _self = this;
        $.getJSON(url, function (countries) {
            _self.environment.random.countries = countries;
            _self.all['countries'] = countries;
            setTimeout(function () {
                $('.chosen').chosen();
            }, 200);
        });
        if (!this.environment.random.countries) {
            this.ApiService.getApiMc4k('https://restcountries.eu/rest/v2/all', 1).then(function (value) {
                var arr = [];
                for (var i in value) {
                    arr.push({ code: value[i].alpha2Code.toLocaleLowerCase(), callingCode: value[i].callingCodes[0] });
                }
                _this.all['code'] = arr;
            });
        }
    };
    LoginComponent.prototype._getRegion = function (countryCode) {
        var url = "https://battuta.medunes.net/api/region/" + countryCode + "/all/?key=" + BATTUTA_KEY + "&callback=?";
        var _self = this;
        _self.regions = [];
        _self.all.search = null;
        $.getJSON(url, function (regions) {
            _self.regions = regions;
            _self.all['regions'] = regions;
        });
    };
    LoginComponent.prototype._getCity = function (countryCode, region) {
        var url = "https://battuta.medunes.net/api/city/" + countryCode + "/search/?region=" + region + "&key=" + BATTUTA_KEY + "&callback=?";
        var _self = this;
        _self.cities = [];
        _self.all.search1 = null;
        $.getJSON(url, function (cities) {
            _self.cities = cities;
            _self.all['cities'] = cities;
        });
    };
    LoginComponent.prototype.terms = function (id) {
        swal({
            title: "Are you sure?",
            text: "TERMS & CONDITION",
            type: "warning",
            showCancelButton: false,
            confirmButtonClass: "btn-danger",
            confirmButtonText: "Yes, I AGREE!",
            closeOnConfirm: true
        }, function () {
            $('#' + id).prop('checked', true);
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__common_components_meta_component__["a" /* MetaComponent */]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__common_components_meta_component__["a" /* MetaComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__common_components_meta_component__["a" /* MetaComponent */]) === 'function' && _a) || Object)
    ], LoginComponent.prototype, "metaComp", void 0);
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            selector: 'home',
            template: __webpack_require__(750),
            styles: [__webpack_require__(762)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__common_services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_2__common_services_storage_service__["a" /* StorageService */]],
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__common_services_storage_service__["a" /* StorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__common_services_storage_service__["a" /* StorageService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__common_services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__common_services_api_service__["a" /* ApiService */]) === 'function' && _e) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/tee/src/login.component.js.map

/***/ },

/***/ 734:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_component__ = __webpack_require__(718);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoginRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginRoutingModule = (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__login_component__["a" /* LoginComponent */] },
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/tee/src/login-routing.module.js.map

/***/ },

/***/ 750:
/***/ function(module, exports) {

module.exports = "<!--<div class=\"tee_menu\"></div>-->\n<!--<section id=\"wrapper\" class=\"login-register\">-->\n    <!--<div class=\"login-box\">-->\n\n        <!--<div class=\"white-box\" style=\"display: none\" id=\"loginform\">-->\n\n            <!--<form class=\"form-horizontal form-material\"  #loginForm=\"ngForm\" name=\"loginForm\">-->\n                <!--<h3 class=\"box-title m-b-20\">Sign In</h3>-->\n                <!--<div class=\"form-group \">-->\n                    <!--<div class=\"col-xs-12\">-->\n                        <!--<input class=\"form-control\" type=\"email\" name=\"email\" required #emailId=\"ngModel\" pattern=\"^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+[.]([A-Za-z]{2,5}|[A-Za-z){2}[.][A-Za-z]{2})$\" [(ngModel)]=\"data.email\" placeholder=\"Email\">-->\n                    <!--</div>-->\n                <!--</div>-->\n                <!--<div class=\"form-group\">-->\n                    <!--<div class=\"col-xs-12\">-->\n                        <!--<input class=\"form-control\" type=\"password\" name=\"password\" required #userPass=\"ngModel\" minlength=\"6\" [(ngModel)]=\"data.password\" placeholder=\"Password\">-->\n                    <!--</div>-->\n                    <!--<div class=\"input-error\" [hidden]=\"userPass.valid || userPass.untouched\" *ngIf=\"environment.random.isBrowser\">-->\n                        <!--<div  *ngIf=\"userPass.errors && userPass.errors.required\">-->\n                            <!--Password is required-->\n                        <!--</div>-->\n                        <!--<div  *ngIf=\"userPass.errors && userPass.errors.minlength\">-->\n                            <!--Password need to be minimum 6 characters-->\n                        <!--</div>-->\n                    <!--</div>-->\n                <!--</div>-->\n                <!--<div class=\"form-group\">-->\n                    <!--<div class=\"col-md-12\">-->\n                        <!--<div class=\"checkbox checkbox-primary pull-left p-t-0\">-->\n                            <!--<input id=\"checkbox-login\" type=\"checkbox\" [(ngModel)]=\"data.remember\" name=\"remember\">-->\n                            <!--<label for=\"checkbox-login\"> Remember me </label>-->\n                        <!--</div>-->\n                        <!--<a href=\"javascript:void(0)\" onclick=\"flipCom('recoverform','loginform')\" class=\"text-dark pull-right\"><i class=\"fa fa-lock m-r-5\"></i> Forgot pwd?</a> </div>-->\n                <!--</div>-->\n                <!--<div class=\"form-group text-center m-t-20\">-->\n                    <!--<div class=\"col-xs-12\">-->\n                        <!--<button (click)=\"loginMeIn(loginForm)\" class=\"btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light\" type=\"submit\">Log In</button>-->\n                    <!--</div>-->\n                <!--</div>-->\n                <!--<div class=\"form-group m-b-0\">-->\n                    <!--<div class=\"col-sm-12 text-center\" *ngIf=\"environment.random.source !='vendor'\">-->\n                        <!--<p>Don't have an account? <a href=\"javascript:void(0)\" class=\"text-primary m-l-5\" onclick=\"flipCom('registerform','loginform')\" (click)=\"_getCountry();\"><b>SIGN UP </b></a> </p>-->\n                    <!--</div>-->\n                    <!--<div class=\"col-sm-12 text-center\" *ngIf=\"environment.random.source =='vendor'\">-->\n                        <!--<p>Don't have an account? <a href=\"javascript:void(0)\" class=\"text-primary m-l-5\" onclick=\"flipCom('registerVForm','loginform')\" (click)=\"_getCountry();\"><b>SIGN UP</b></a></p>-->\n                    <!--</div>-->\n                <!--</div>-->\n\n            <!--</form>-->\n        <!--</div>-->\n        <!--<div class=\"white-box\" id=\"recoverform\" style=\"display: none\">-->\n            <!--<form class=\"form-horizontal\"  #recoverform=\"ngForm\" name=\"recoverform\">-->\n                <!--<div class=\"form-group \">-->\n                    <!--<div class=\"col-xs-12\">-->\n                        <!--<h3>Recover Password</h3>-->\n                        <!--<p class=\"text-muted\">Enter your Email and instructions will be sent to you! </p>-->\n                    <!--</div>-->\n                <!--</div>-->\n                <!--<div class=\"form-group \">-->\n                    <!--<div class=\"col-xs-12\">-->\n                        <!--<input class=\"form-control\" type=\"text\" required=\"\" placeholder=\"Email\">-->\n                    <!--</div>-->\n                <!--</div>-->\n                <!--<div class=\"form-group m-b-0\">-->\n                    <!--<div class=\"col-sm-12 text-center\">-->\n                        <!--<p>Don't have an account? <a href=\"javascript:void(0)\" class=\"text-primary m-l-5\" onclick=\"flipCom('registerform','recoverform')\"><b>Sign Up</b></a></p>-->\n                    <!--</div>-->\n                <!--</div>-->\n                <!--<div class=\"form-group text-center m-t-20\">-->\n                    <!--<div class=\"col-xs-12\">-->\n                        <!--<button class=\"btn btn-primary btn-lg btn-block text-uppercase waves-effect waves-light\" type=\"submit\">Reset</button>-->\n                    <!--</div>-->\n                <!--</div>-->\n            <!--</form>-->\n        <!--</div>-->\n\n        <!--<div class=\"white-box\" style=\"display: none\" id=\"registerform\">-->\n            <!--<form autocomplete=\"off\" class=\"form-horizontal form-material\"  #registerForm=\"ngForm\" name=\"registerForm\" >-->\n                <!--<h3 class=\"box-title m-b-20\">Sign In</h3>-->\n                <!--<div class=\"form-group\">-->\n                    <!--<div class=\"col-xs-12\">-->\n                        <!--<input class=\"form-control\" type=\"text\" required  name=\"name\" [(ngModel)]=\"data.name\" placeholder=\"Golf Course Name\">-->\n                    <!--</div>-->\n                <!--</div>-->\n                <!--<div class=\"form-group\">-->\n                    <!--&lt;!&ndash;<div class=\"col-xs-12\" *ngIf=\"!data.country\">&ndash;&gt;-->\n                        <!--&lt;!&ndash;<input class=\"form-control\" type=\"text\"  [(ngModel)]=\"all.search\" placeholder=\"Search Country\" name=\"countrysearch\"   />&ndash;&gt;-->\n                        <!--&lt;!&ndash;<div class=\"select2-drop select2-drop-multi select2-display-none select2-drop-active\" style=\"left: 270px;  top: 403px; bottom: auto; display: block;\"  *ngIf=\"all.search&&all.search!=''\">&ndash;&gt;-->\n                            <!--&lt;!&ndash;<ul class=\"select2-results\">&ndash;&gt;-->\n                                <!--&lt;!&ndash;<ng-container *ngFor=\"let list of environment.random.countries | FilterPipe:'name':all.search\">&ndash;&gt;-->\n                                <!--&lt;!&ndash;<li (click)=\"_getRegion(list.code,list.name);data.country=list.name;data.country_code=list.code;\" class=\"select2-results-dept-0 select2-result select2-result-unselectable select2-result-with-children ms-hover\" role=\"presentation\">&ndash;&gt;-->\n                                    <!--&lt;!&ndash;<div class=\"select2-result-label\"  role=\"option\">&ndash;&gt;-->\n                                        <!--&lt;!&ndash;<span class=\"select2-match\"></span>{{list.name}}&ndash;&gt;-->\n                                    <!--&lt;!&ndash;</div>&ndash;&gt;-->\n                                <!--&lt;!&ndash;</li>&ndash;&gt;-->\n                                <!--&lt;!&ndash;</ng-container>&ndash;&gt;-->\n                            <!--&lt;!&ndash;</ul>&ndash;&gt;-->\n\n                        <!--&lt;!&ndash;</div>&ndash;&gt;-->\n                     <!--&lt;!&ndash;</div>&ndash;&gt;-->\n\n                    <!--&lt;!&ndash;<div class=\"col-xs-12\" *ngIf=\"data.country\" (click)=\"data.country=null;data.region=null;data.city=null;\">&ndash;&gt;-->\n                        <!--&lt;!&ndash;<input disabled  class=\"form-control\" type=\"text\"  [(ngModel)]=\"data.country\" placeholder=\"Select Country\" name=\"country\"   />&ndash;&gt;-->\n                    <!--&lt;!&ndash;</div>&ndash;&gt;-->\n\n                    <!--<div class=\"col-xs-12\">-->\n                        <!--<select class=\"chosen\" [(ngModel)]=\"data.country\" name=\"country\" (change)=\"_getRegion(data.country)\">-->\n                            <!--<ng-container *ngFor=\"let list of environment.random.countries\">-->\n                                <!--<option value=\"{{list.name}}\" (click)=\"_getRegion(list.code,list.name);data.country=list.name;data.country_code=list.code;\">-->\n                                    <!--{{list.name}}</option>-->\n                            <!--</ng-container>-->\n                        <!--</select>-->\n                    <!--</div>-->\n                <!--</div>-->\n                <!--<div class=\"form-group\" *ngIf=\"data.country\">-->\n                    <!--<div class=\"col-xs-12\" *ngIf=\"!data.region\">-->\n                        <!--<input autocomplete=\"false\" class=\"form-control\" type=\"text\"  [(ngModel)]=\"all.search1\" placeholder=\"Search Region\" name=\"regioncountry\"   />-->\n                        <!--<div class=\"select2-drop select2-drop-multi select2-display-none select2-drop-active\" style=\"left: 270px;  top: 403px; bottom: auto; display: block;\" id=\"select2-drop\" *ngIf=\"all.search1&&all.search1!=''\">-->\n                            <!--<ul class=\"select2-results\">-->\n                                <!--<ng-container *ngFor=\"let list of regions | FilterPipe:'region':all.search1\">-->\n                                    <!--<li (click)=\"_getCity(data.country_code,list.region);data.region=list.region;\" class=\"select2-results-dept-0 select2-result select2-result-unselectable select2-result-with-children ms-hover\" role=\"presentation\">-->\n                                        <!--<div class=\"select2-result-label\"  role=\"option\">-->\n                                            <!--<span class=\"select2-match\"></span>{{list.region}}-->\n                                        <!--</div>-->\n                                    <!--</li>-->\n                                <!--</ng-container>-->\n                            <!--</ul>-->\n\n                        <!--</div>-->\n                    <!--</div>-->\n                    <!--<div class=\"col-xs-12\" *ngIf=\"data.region\" (click)=\"data.region=null;data.city=null;\">-->\n                        <!--<input disabled  class=\"form-control\" type=\"text\"  [(ngModel)]=\"data.region\" placeholder=\"Select Region\" name=\"region\"   />-->\n                    <!--</div>-->\n\n                <!--</div>-->\n                <!--<div class=\"form-group\" *ngIf=\"data.region\">-->\n\n                    <!--<div class=\"col-xs-12\" *ngIf=\"!data.city\">-->\n                        <!--<input autocomplete=\"false\" class=\"form-control\" type=\"text\"  [(ngModel)]=\"all.search2\" placeholder=\"Search City\" name=\"cityserch\"   />-->\n                        <!--<div class=\"select2-drop select2-drop-multi select2-display-none select2-drop-active\" style=\"left: 270px;  top: 403px; bottom: auto; display: block;\" id=\"select2-drop\" *ngIf=\"all.search2&&all.search2!=''\">-->\n                            <!--<ul class=\"select2-results\">-->\n                                <!--<ng-container *ngFor=\"let list of cities | FilterPipe:'city':all.search2\">-->\n                                    <!--<li (click)=\"data.city=list.city;\" class=\"select2-results-dept-0 select2-result select2-result-unselectable select2-result-with-children ms-hover\" role=\"presentation\">-->\n                                        <!--<div class=\"select2-result-label\"  role=\"option\">-->\n                                            <!--<span class=\"select2-match\"></span>{{list.city}}-->\n                                        <!--</div>-->\n                                    <!--</li>-->\n                                <!--</ng-container>-->\n                            <!--</ul>-->\n\n                        <!--</div>-->\n                    <!--</div>-->\n                    <!--<div class=\"col-xs-12\" *ngIf=\"data.city\" (click)=\"data.city=null;\">-->\n                        <!--<input disabled  class=\"form-control\" type=\"text\"  [(ngModel)]=\"data.city\" placeholder=\"Select City\" name=\"city\"   />-->\n                    <!--</div>-->\n\n                <!--</div>-->\n                <!--<div class=\"form-group\">-->\n                    <!--<div class=\"col-xs-12\">-->\n                        <!--<select data-search=\"true\" class=\"custom-select sources\" style=\"width:20%;float:left\" data-style=\"btn-primary btn-outline\" required name=\"call\" [(ngModel)]=\"data.country_code\">-->\n                            <!--<ng-container *ngFor=\"let list of all.code\">-->\n                                <!--<option [value]=\"list.code\">+{{list.callingCode}}</option>-->\n                            <!--</ng-container>-->\n                        <!--</select>-->\n                        <!--<input class=\"form-control\" style=\"width:75%;float:right\" type=\"number\" required name=\"mobile\" [(ngModel)]=\"data.mobile\" placeholder=\"Mobile\">-->\n                    <!--</div>-->\n                <!--</div>-->\n                <!--<div class=\"form-group \">-->\n                    <!--<div class=\"col-xs-12\">-->\n                        <!--<input class=\"form-control\" type=\"text\" name=\"email\" required pattern=\"^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+[.]([A-Za-z]{2,5}|[A-Za-z){2}[.][A-Za-z]{2})$\"[(ngModel)]=\"data.email1\" placeholder=\"Email\">-->\n                    <!--</div>-->\n                <!--</div>-->\n                <!--<div class=\"form-group \">-->\n                    <!--<div class=\"col-xs-12\">-->\n                        <!--<input class=\"form-control\" #repassword type=\"password\" required name=\"password\" [(ngModel)]=\"data.password1\" placeholder=\"Password\">-->\n                    <!--</div>-->\n                <!--</div>-->\n                <!--<div class=\"form-group\">-->\n                    <!--<div class=\"col-xs-12\">-->\n                        <!--<input class=\"form-control\" #newpassword type=\"password\" required name=\"newpassword\" [(ngModel)]=\"data.newpassword\" placeholder=\"Confirm Password\">-->\n                    <!--</div>-->\n                <!--</div>-->\n                <!--<div class=\"input-error\" [hidden]=\"newpassword.valid || newpassword.untouched\">-->\n                    <!--<div  *ngIf=\"(data.newpassword&&data.password1)&&data.newpassword != data.password1\">-->\n                        <!--Password does not match-->\n                    <!--</div>-->\n                <!--</div>-->\n\n\n\n                <!--<div class=\"form-group\">-->\n                    <!--<div class=\"col-md-12\">-->\n                        <!--<div class=\"checkbox checkbox-primary p-t-0\">-->\n                            <!--<input id=\"checkbox-register1\" type=\"checkbox\" required>-->\n                            <!--<label for=\"checkbox-register1\"> I agree to all <a href=\"javascript:void(0)\" (click)=\"terms('checkbox-register1')\">Terms</a></label>-->\n                        <!--</div>-->\n                    <!--</div>-->\n                <!--</div>-->\n                <!--<div class=\"form-group text-center m-t-20\">-->\n                    <!--<div class=\"col-xs-12\">-->\n                        <!--<button (click)=\"registerMeIn(registerForm)\" class=\"btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light\" type=\"submit\">Sign Up</button>-->\n                    <!--</div>-->\n                <!--</div>-->\n                <!--<div class=\"form-group m-b-0\">-->\n                    <!--<div class=\"col-sm-12 text-center\">-->\n                        <!--<p>Already have an account? <a href=\"javascript:void(0)\" onclick=\"flipCom('loginform','registerform')\" class=\"text-primary m-l-5\"><b>Sign In</b></a></p>-->\n                    <!--</div>-->\n                <!--</div>-->\n            <!--</form>-->\n        <!--</div>-->\n        <!--<div class=\"white-box\" style=\"display:none\" id=\"registerVForm\">-->\n            <!--<form class=\"form-horizontal form-material\"  #registerVForm=\"ngForm\" name=\"registerVForm\" >-->\n                <!--<h3 class=\"box-title m-b-20\">Sign In</h3>-->\n                <!--<div class=\"form-group\">-->\n                    <!--<div class=\"col-xs-12\">-->\n                        <!--<input class=\"form-control\" type=\"text\" required  name=\"name\" [(ngModel)]=\"data.name2\" placeholder=\"Company Name\">-->\n                    <!--</div>-->\n                <!--</div>-->\n                <!--<div class=\"form-group\">-->\n                    <!--<div class=\"col-xs-12\">-->\n                        <!--<input class=\"form-control\" type=\"text\"   pattern=\"https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)\" name=\"website_url2\" [(ngModel)]=\"data.website_url2\" placeholder=\"Website URL\">-->\n                    <!--</div>-->\n                <!--</div>-->\n                <!--<div class=\"form-group\">-->\n                    <!--<div class=\"col-xs-12\" *ngIf=\"!data.country2\">-->\n                        <!--<input class=\"form-control\" type=\"text\"  [(ngModel)]=\"all.search3\" placeholder=\"Search Country\" name=\"countrysearch3\"   />-->\n                        <!--<div class=\"select2-drop select2-drop-multi select2-display-none select2-drop-active\" style=\"left: 270px;  top: 403px; bottom: auto; display: block;\"  *ngIf=\"all.search3&&all.search3!=''\">-->\n                            <!--<ul class=\"select2-results\">-->\n                                <!--<ng-container *ngFor=\"let list of environment.random.countries | FilterPipe:'name':all.search3\">-->\n                                    <!--<li (click)=\"_getRegion(list.code,list.name);data.country2=list.name;data.country_code2=list.code;\" class=\"select2-results-dept-0 select2-result select2-result-unselectable select2-result-with-children ms-hover\" role=\"presentation\">-->\n                                        <!--<div class=\"select2-result-label\" role=\"option\">-->\n                                            <!--<span class=\"select2-match\"></span>{{list.name}}-->\n                                        <!--</div>-->\n                                    <!--</li>-->\n                                <!--</ng-container>-->\n                            <!--</ul>-->\n\n                        <!--</div>-->\n                    <!--</div>-->\n\n                    <!--<div class=\"col-xs-12\" *ngIf=\"data.country2\" (click)=\"data.country2=null;data.region2=null;data.city2=null;\">-->\n                        <!--<input disabled  class=\"form-control\" type=\"text\"  [(ngModel)]=\"data.country2\" placeholder=\"Select Country\" name=\"country\"   />-->\n                    <!--</div>-->\n                <!--</div>-->\n                <!--<div class=\"form-group\"  *ngIf=\"data.country2\">-->\n                    <!--<div class=\"col-xs-12\">-->\n                        <!--<div  *ngIf=\"!data.region2\" style=\"width:50%;float: left;\">-->\n                            <!--<input autocomplete=\"false\" class=\"form-control\" type=\"text\"  [(ngModel)]=\"all.search4\" placeholder=\"Search Region\" name=\"regioncountry2\"   />-->\n                            <!--<div class=\"select2-drop select2-drop-multi select2-display-none select2-drop-active\" style=\"left: 270px;  top: 403px; bottom: auto; display: block;\"  *ngIf=\"all.search4&&all.search4!=''\">-->\n                                <!--<ul class=\"select2-results\">-->\n                                    <!--<ng-container *ngFor=\"let list of regions | FilterPipe:'region':all.search4\">-->\n                                        <!--<li (click)=\"_getCity(data.country_code2,list.region);data.region2=list.region;\" class=\"select2-results-dept-0 select2-result select2-result-unselectable select2-result-with-children ms-hover\" role=\"presentation\">-->\n                                            <!--<div class=\"select2-result-label\"  role=\"option\">-->\n                                                <!--<span class=\"select2-match\"></span>{{list.region}}-->\n                                            <!--</div>-->\n                                        <!--</li>-->\n                                    <!--</ng-container>-->\n                                <!--</ul>-->\n\n                            <!--</div>-->\n                        <!--</div>-->\n                        <!--<div  style=\"width:50%;float: right;\" *ngIf=\"data.region2\" (click)=\"data.region2=null;data.city2=null;\">-->\n                            <!--<input disabled  class=\"form-control\" type=\"text\"  [(ngModel)]=\"data.region2\" placeholder=\"Select Region\" name=\"region\"   />-->\n                        <!--</div>-->\n\n                        <!--<div  *ngIf=\"data.region2&&!data.city2\" style=\"width:48%\">-->\n                            <!--<input autocomplete=\"false\" class=\"form-control\" type=\"text\"  [(ngModel)]=\"all.search5\" placeholder=\"Search City\" name=\"citysearch\"   />-->\n                            <!--<div class=\"select2-drop select2-drop-multi select2-display-none select2-drop-active\" style=\"left: 270px;  top: 403px; bottom: auto; display: block;\"  *ngIf=\"all.search5&&all.search5!=''\">-->\n                                <!--<ul class=\"select2-results\">-->\n                                    <!--<ng-container *ngFor=\"let list of cities | FilterPipe:'city':all.search5\">-->\n                                        <!--<li (click)=\"data.city2=list.city;\" class=\"select2-results-dept-0 select2-result select2-result-unselectable select2-result-with-children ms-hover\" role=\"presentation\">-->\n                                            <!--<div class=\"select2-result-label\"  role=\"option\">-->\n                                                <!--<span class=\"select2-match\"></span>{{list.city}}-->\n                                            <!--</div>-->\n                                        <!--</li>-->\n                                    <!--</ng-container>-->\n                                <!--</ul>-->\n\n                            <!--</div>-->\n                        <!--</div>-->\n                        <!--<div  *ngIf=\"data.city2\" style=\"width:48%\" (click)=\"data.city2=null;\">-->\n                            <!--<input disabled  class=\"form-control\" type=\"text\"  [(ngModel)]=\"data.city2\" placeholder=\"Select City\" name=\"city\"   />-->\n                        <!--</div>-->\n                    <!--</div>-->\n\n\n\n\n\n                <!--</div>-->\n\n\n                <!--<div class=\"form-group\">-->\n                    <!--<div class=\"col-xs-12\">-->\n                        <!--<select data-search=\"true\" class=\"custom-select sources\" style=\"width:20%;float:left\"  data-style=\"btn-primary btn-outline\" required name=\"country_code2\" [(ngModel)]=\"data.country_code2\" >-->\n                            <!--<ng-container *ngFor=\"let list of all.code\">-->\n                                <!--<option [value]=\"list.code\">+{{list.callingCode}}</option>-->\n                            <!--</ng-container>-->\n                        <!--</select>-->\n                        <!--<input class=\"form-control\" style=\"width:75%;float:right\" type=\"number\" required name=\"mobile\" [(ngModel)]=\"data.mobile2\" placeholder=\"Mobile\">-->\n                    <!--</div>-->\n                <!--</div>-->\n                <!--<div class=\"form-group \">-->\n                    <!--<div class=\"col-xs-12\">-->\n                        <!--<input class=\"form-control\" type=\"text\" name=\"email\" required pattern=\"^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+[.]([A-Za-z]{2,5}|[A-Za-z){2}[.][A-Za-z]{2})$\"[(ngModel)]=\"data.email2\" placeholder=\"Email\">-->\n                    <!--</div>-->\n                <!--</div>-->\n                <!--<div class=\"form-group \">-->\n                    <!--<div class=\"col-xs-12\">-->\n                        <!--<input class=\"form-control\" #repassword1 type=\"password\" required name=\"password\" [(ngModel)]=\"data.password2\" placeholder=\"Password\">-->\n                    <!--</div>-->\n                <!--</div>-->\n                <!--<div class=\"form-group\">-->\n                    <!--<div class=\"col-xs-12\">-->\n                        <!--<input class=\"form-control\" #newpassword1 type=\"password\" required name=\"password\" [(ngModel)]=\"data.newpassword1\" placeholder=\"Confirm Password\">-->\n                    <!--</div>-->\n                <!--</div>-->\n                <!--<div class=\"input-error\" [hidden]=\"newpassword1.valid || newpassword1.untouched\">-->\n                    <!--<div  *ngIf=\"data.newpassword1&&data.password2&&data.newpassword1 != data.password2\">-->\n                        <!--Password does not match-->\n                    <!--</div>-->\n                <!--</div>-->\n\n\n                <!--<div class=\"form-group\">-->\n                    <!--<div class=\"col-md-12\">-->\n                        <!--<div class=\"checkbox checkbox-primary p-t-0\">-->\n                            <!--<input id=\"checkbox-register\" type=\"checkbox\" required>-->\n                            <!--<label for=\"checkbox-register\"> I agree to all <a href=\"javascript:void(0)\" (click)=\"terms('checkbox-register')\">Terms</a></label>-->\n                        <!--</div>-->\n                    <!--</div>-->\n                <!--</div>-->\n                <!--<div class=\"form-group text-center m-t-20\">-->\n                    <!--<div class=\"col-xs-12\">-->\n                        <!--<button (click)=\"registerVendor(registerVForm)\" class=\"btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light\" type=\"submit\">Sign Up</button>-->\n                    <!--</div>-->\n                <!--</div>-->\n                <!--<div class=\"form-group m-b-0\">-->\n                    <!--<div class=\"col-sm-12 text-center\">-->\n                        <!--<p>Already have an account? <a href=\"javascript:void(0)\" onclick=\"flipCom('loginform','registerVForm')\" class=\"text-primary m-l-5\"><b>Sign In</b></a></p>-->\n                    <!--</div>-->\n                <!--</div>-->\n            <!--</form>-->\n        <!--</div>-->\n    <!--</div>-->\n\n<!--</section>-->\n\n<section id=\"wrapper\"  >\n    <div class=\"login-register\" style=\"display: none\" id=\"loginform\">\n        <div class=\"login-box card\">\n            <div class=\"card shadow-box p-t-20\" >\n                <div class=\"card-body\">\n                    <div class=\"text-center m-b-30\">\n                        <img src=\"http://www.hmbrowser.com/uploads/3/0/2/1/30213553/google-videos-logo_2.png\" height=\"60\" alt=\"\" />\n                    </div>\n\n                    <h4 class=\"card-title text-center\">Sign In Here!</h4>\n\n\n                   <form class=\"form p-t-20\"  #loginForm=\"ngForm\" name=\"loginForm\">\n                        <div class=\"form-group\">\n                            <label>Email Id</label><span class=\"text-danger\">*</span>\n                            <div class=\"controls\">\n                                <input  placeholder=\"username@mail.com\" class=\"form-control\" type=\"email\" name=\"email\" required #emailId=\"ngModel\" pattern=\"^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+[.]([A-Za-z]{2,5}|[A-Za-z){2}[.][A-Za-z]{2})$\" [(ngModel)]=\"data.email\" >\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label>Password</label><span class=\"text-danger\">*</span>\n                            <div class=\"controls\">\n                                <input  class=\"form-control\" type=\"password\" name=\"password\" required #userPass=\"ngModel\" minlength=\"6\" [(ngModel)]=\"data.password\" placeholder=\"Password\">\n                            </div>\n                        </div>\n                       <div class=\"input-error\" [hidden]=\"userPass.valid || userPass.untouched\" *ngIf=\"environment.random.isBrowser\">\n                           <div  *ngIf=\"userPass.errors && userPass.errors.required\">\n                               Password is required\n                           </div>\n                           <div  *ngIf=\"userPass.errors && userPass.errors.minlength\">\n                               Password need to be minimum 6 characters\n                           </div>\n                       </div>\n\n                        <div class=\"form-group\">\n                            <label class=\"pull-right\">\n                                <a href=\"\">Forgot Password?</a>\n                            </label>\n                        </div>\n\n                        <button type=\"submit\" (click)=\"loginMeIn(loginForm)\" class=\"btn btn-success btn-lg waves-effect waves-light m-r-10\">Submit</button>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"login-register\" id=\"registerform\" style=\"display: none\">\n        <div class=\"login-box card\">\n\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <div class=\"text-center m-b-30\">\n                        <img src=\"http://www.hmbrowser.com/uploads/3/0/2/1/30213553/google-videos-logo_2.png\" height=\"60\" alt=\"\" />\n                    </div>\n\n                    <h4 class=\"card-title text-center\">Sign Up Here!</h4>\n\n\n                    <form class=\"form p-t-20\"  #registerform=\"ngForm\" name=\"registerform\">\n                        <div class=\"form-group\">\n                            <label>Golf Course Name</label>\n                            <div>\n                                <input type=\"text\" placeholder=\"Enter name here\" required  name=\"name\" [(ngModel)]=\"data.name2\" class=\"form-control\">\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label>Country</label>\n                            <div>\n                                <select class=\"form-control\" [(ngModel)]=\"data.country\" name=\"country\">\n                                    <option>India</option>\n                                    <option>England</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label>City</label>\n                            <div>\n                                <select class=\"form-control\" [(ngModel)]=\"data.city\" name=\"city\">\n                                    <option>Noida</option>\n                                    <option>England</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label>Mobile</label>\n                            <div>\n                                <select style=\"max-width: 75px;\" name=\"code\" class=\"form-control\" [(ngModel)]=\"data.country_code\">\n                                    <option>+91</option>\n                                    <option>+92</option>\n                                </select>\n                                <input type=\"number\" [(ngModel)]=\"data.mobile\" placeholder=\"Enter mobile here\" name=\"mobile\" style=\"width:82%;\" class=\"form-control\">\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label>Email Id</label>\n                            <div>\n                                <input type=\"email\" name=\"email\" required pattern=\"^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+[.]([A-Za-z]{2,5}|[A-Za-z){2}[.][A-Za-z]{2})$\" [(ngModel)]=\"data.email1\" placeholder=\"Email\"  class=\"form-control\">\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label>Password</label>\n\n                            <input #repassword type=\"password\" required name=\"password\" [(ngModel)]=\"data.password1\"  placeholder=\"Enter password here\" class=\"form-control\">\n\n                        </div>\n\n\n                        <a href=\"javascript:void(0)\" (click)=\"registerMeIn(registerform)\" class=\"btn btn-success btn-lg waves-effect waves-light m-r-10\">\n                            Submit\n                        </a>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"login-register\" id=\"registerVForm\" style=\"display: none\">\n        <div class=\"login-box card\">\n\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <div class=\"text-center m-b-30\">\n                        <img src=\"http://www.hmbrowser.com/uploads/3/0/2/1/30213553/google-videos-logo_2.png\" height=\"60\" alt=\"\" />\n                    </div>\n\n                    <h4 class=\"card-title text-center\">Sign Up Here!</h4>\n\n\n                    <form class=\"form p-t-20\"  #registerVForm=\"ngForm\" name=\"registerVForm\">\n                        <div class=\"form-group\">\n                            <label>Golf Course Name</label>\n                            <div>\n                                <input type=\"text\" placeholder=\"Enter name here\" required  name=\"name\" [(ngModel)]=\"data.name2\" class=\"form-control\">\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label>Country</label>\n                            <div>\n                                <select class=\"form-control\" [(ngModel)]=\"data.country\" name=\"country\">\n                                    <option>India</option>\n                                    <option>England</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label>City</label>\n                            <div>\n                                <select class=\"form-control\" [(ngModel)]=\"data.city\" name=\"city\">\n                                    <option>Noida</option>\n                                    <option>England</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label>Mobile</label>\n                            <div>\n                                <select style=\"max-width: 75px;\" name=\"code\" class=\"form-control\" [(ngModel)]=\"data.country_code\">\n                                    <option>+91</option>\n                                    <option>+92</option>\n                                </select>\n                                <input type=\"number\" [(ngModel)]=\"data.mobile\" placeholder=\"Enter mobile here\" name=\"mobile\" style=\"width:82%;\" class=\"form-control\">\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label>Email Id</label>\n                            <div>\n                                <input type=\"email\" name=\"email\" required pattern=\"^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+[.]([A-Za-z]{2,5}|[A-Za-z){2}[.][A-Za-z]{2})$\" [(ngModel)]=\"data.email1\" placeholder=\"Email\"  class=\"form-control\">\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label>Password</label>\n\n                            <input #repassword type=\"password\" required name=\"password\" [(ngModel)]=\"data.password1\"  placeholder=\"Enter password here\" class=\"form-control\">\n\n                        </div>\n\n\n                        <a href=\"javascript:void(0)\" (click)=\"registerMeIn(registerVForm)\" class=\"btn btn-success btn-lg waves-effect waves-light m-r-10\">\n                            Submit\n                        </a>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</section>\n\n\n"

/***/ },

/***/ 762:
/***/ function(module, exports) {

module.exports = "/*\r\nTemplate Name: Admin Template\r\nAuthor: Wrappixel\r\n\r\nFile: scss\r\n*/\r\n@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700);\r\n/*Theme Colors*/\r\n/**\r\n * Table Of Content\r\n *\r\n * \t1. Color system\r\n *\t2. Options\r\n *\t3. Body\r\n *\t4. Typography\r\n *\t5. Breadcrumbs\r\n *\t6. Cards\r\n *\t7. Dropdowns\r\n *\t8. Buttons\r\n *\t9. Typography\r\n *\t10. Progress bars\r\n *\t11. Tables\r\n *\t12. Forms\r\n *\t14. Component\r\n */\r\n/*******************\r\nLogin register and recover password Page\r\n******************/\r\n.login-register {\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  height: 100%;\r\n  width: 100%;\r\n  padding: 6% 0;\r\n  position: relative; }\r\n\r\n.login-box {\r\n  width: 500px;\r\n  margin: 0 auto; }\r\n  .login-box .footer {\r\n    width: 100%;\r\n    left: 0px;\r\n    right: 0px; }\r\n  .login-box .social {\r\n    display: block;\r\n    margin-bottom: 30px; }\r\n\r\n#recoverform {\r\n  display: none; }\r\n\r\n.login-sidebar {\r\n  padding: 0px;\r\n  margin-top: 0px; }\r\n  .login-sidebar .login-box {\r\n    right: 0px;\r\n    position: absolute;\r\n    height: 100%; }\r\n"

/***/ }

});
//# sourceMappingURL=10.bundle.map