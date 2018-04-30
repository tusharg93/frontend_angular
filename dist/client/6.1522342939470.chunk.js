webpackJsonp([6,19],{

/***/ 691:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__section_add_on_component__ = __webpack_require__(740);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__section_add_on_routing_module__ = __webpack_require__(756);
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
/* harmony export (binding) */ __webpack_require__.d(exports, "SectionAddOnModule", function() { return SectionAddOnModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var SectionAddOnModule = (function () {
    function SectionAddOnModule() {
    }
    SectionAddOnModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_1__section_add_on_routing_module__["a" /* SectionAddOnRoutingModule */],
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
                __WEBPACK_IMPORTED_MODULE_0__section_add_on_component__["a" /* SectionAddOnComponent */]
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], SectionAddOnModule);
    return SectionAddOnModule;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/tee/src/section-add-on.module.js.map

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

/***/ 740:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_services_api_service__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_services_storage_service__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_components_meta_component__ = __webpack_require__(698);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SectionAddOnComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SectionAddOnComponent = (function () {
    function SectionAddOnComponent(_storage, _router, ApiService) {
        this._storage = _storage;
        this._router = _router;
        this.ApiService = ApiService;
        this.environment = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */];
        this.environment.headerChild = [];
        this.data = new Array();
        this.commodities = new Array();
        var commodities = ['Green Fee', 'Taxes', 'Golf Cart', 'Caddy Fee', 'Range Balls', 'Insurance', 'Bottled Water', 'Member Guest', 'Driving Range Access', 'Other'];
        this.commodities = commodities;
        this.minGolf = new Array(1, 2, 3, 4);
        this.data.price_includes = new Array();
        var newcommodities = [{ name: 'Golf Cart', price: null }, { name: 'Caddy Fee', price: null }, { name: 'Golf Shoes', price: null }, { name: 'Golf Clubs', price: null }];
        this.data.pricecommodities = newcommodities;
        this.data.newcommodities = new Array();
        if (this._router.url == '/golf-course/section-add-on') {
            this.column = 'addon';
        }
        else {
            this.column = 'price';
        }
    }
    SectionAddOnComponent.prototype.ngOnInit = function () {
        this._storage.promLogIn().then(function (val) {
            switchMaker();
        });
    };
    SectionAddOnComponent.prototype.ngOnDestroy = function () {
    };
    SectionAddOnComponent.prototype.clickMulti = function (key) {
        var removed;
        for (var i in this.commodities) {
            if (key == this.data.price_includes[i]) {
                this.data.price_includes.splice(i, 1);
                this.others = key == 'Other' ? false : this.others;
                removed = true;
                break;
            }
        }
        if (!removed) {
            this.others = key == 'Other' ? true : false;
            this.data.price_includes.push(key);
        }
    };
    SectionAddOnComponent.prototype.addNew = function () {
        this.data.newcommodities.push({ name: null, price: null });
    };
    SectionAddOnComponent.prototype.save = function (form, update) {
        var _this = this;
        if (form.valid) {
            for (var i in this.data.price_includes) {
                if (this.data.price_includes[i] == 'Other') {
                    this.data.price_includes[this.data.price_includes.length] = 'Other:' + this.data.others;
                    break;
                }
            }
            var params = { price_includes: this.data.price_includes, cancel_policy: this.data.cancel_policy, tnc: this.data.tnc, min_weekdays: this.data.min_weekdays, min_weekends: this.data.min_weekends };
            if (update) {
                this.ApiService.putApiMc4k('api/v1/forms/8', params, 0).then(function (value) {
                    if (value && value.msg == 'success') {
                        _this.ApiService.userDetail('golf-course/price');
                    }
                });
            }
            else {
                this.ApiService.postApiMc4k('api/v1/forms/8', params, false, true).then(function (value) {
                    if (value && value.msg == 'success') {
                        _this.ApiService.userDetail('golf-course/price');
                    }
                });
            }
        }
    };
    SectionAddOnComponent.prototype.saverental = function (form, update) {
        var _this = this;
        var params = [];
        if (form.valid) {
            for (var i in this.data.pricecommodities) {
                if (this.data.pricecommodities[i].price) {
                    params.push({ name: this.data.pricecommodities[i].name, price: this.data.pricecommodities[i].price.toString() });
                }
            }
            for (var i in this.data.newcommodities) {
                if (this.data.newcommodities[i].price) {
                    params.push({ name: this.data.newcommodities[i].name, price: this.data.newcommodities[i].price.toString() });
                }
            }
            if (update) {
                this.ApiService.putApiMc4k('api/v1/forms/rentals', { rentals: params }, 0).then(function (value) {
                    if (value && value.msg && value.msg == "success") {
                        // this._router.navigateByUrl('golf-course/public-holiday');
                        _this.ApiService.userDetail('golf-course/public-holiday');
                    }
                });
            }
            else {
                this.ApiService.postApiMc4k('api/v1/forms/rentals', { rentals: params }, false, true).then(function (value) {
                    if (value && value.msg && value.msg == "success") {
                        // this._router.navigateByUrl('golf-course/public-holiday');
                        _this.ApiService.userDetail('golf-course/public-holiday');
                    }
                });
            }
        }
    };
    SectionAddOnComponent.prototype.setValue = function () {
        var data = this.environment.random.userDetail;
        var defaultArr = [];
        for (var i in data.extras_info) {
            var defaultVal = false;
            for (var j in this.data.pricecommodities) {
                if (this.data.pricecommodities[j].name == data.extras_info[i].name) {
                    this.data.pricecommodities[j].price = data.extras_info[i].price;
                    defaultVal = true;
                    break;
                }
            }
            if (!defaultVal) {
                defaultVal = false;
                defaultArr.push(data.extras_info[i]);
            }
        }
        this.data.tnc = data.gc_basic_info.tnc;
        this.data.cancel_policy = data.gc_basic_info.cancel_policy;
        var price_includes = data.gc_basic_info.price_includes ? data.gc_basic_info.price_includes : [];
        var _self = this;
        for (var i in price_includes) {
            for (var j in _self.commodities) {
                _self.others = _self.others ? _self.others : price_includes[i] == 'Other';
                if (price_includes[i] == _self.commodities[j]) {
                    $('#ck' + j).click();
                }
            }
        }
        if (this.others) {
            this.data.others = this.data.price_includes.pop();
            this.data.others = this.data.others ? this.data.others.replace('Others:', '') : null;
        }
        this.data.min_weekdays = data.gc_basic_info.min_golfers_weekdays;
        this.data.min_weekends = data.gc_basic_info.min_golfers_weekends;
        this.data.newcommodities = defaultArr;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__common_components_meta_component__["a" /* MetaComponent */]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__common_components_meta_component__["a" /* MetaComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__common_components_meta_component__["a" /* MetaComponent */]) === 'function' && _a) || Object)
    ], SectionAddOnComponent.prototype, "metaComp", void 0);
    SectionAddOnComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            selector: 'golf',
            template: __webpack_require__(772),
            providers: [__WEBPACK_IMPORTED_MODULE_1__common_services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_2__common_services_storage_service__["a" /* StorageService */]],
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__common_services_storage_service__["a" /* StorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__common_services_storage_service__["a" /* StorageService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__common_services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__common_services_api_service__["a" /* ApiService */]) === 'function' && _d) || Object])
    ], SectionAddOnComponent);
    return SectionAddOnComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/tee/src/section-add-on.component.js.map

/***/ },

/***/ 756:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_add_on_component__ = __webpack_require__(740);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SectionAddOnRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SectionAddOnRoutingModule = (function () {
    function SectionAddOnRoutingModule() {
    }
    SectionAddOnRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__section_add_on_component__["a" /* SectionAddOnComponent */] },
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SectionAddOnRoutingModule);
    return SectionAddOnRoutingModule;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/tee/src/section-add-on-routing.module.js.map

/***/ },

/***/ 772:
/***/ function(module, exports) {

module.exports = "\n<!--<div class=\"container-fluid\">-->\n    <!--<div class=\"row bg-title\">-->\n        <!--<div class=\"col-lg-3 col-md-4 col-sm-4 col-xs-12\">-->\n            <!--<h4 class=\"page-title\">ADDON AND RENTALS</h4>-->\n        <!--</div>-->\n\n    <!--</div>-->\n    <!--<div class=\"row\" id=\"add-on-section\" style=\"display: block;\">-->\n        <!--<div class=\"col-sm-12\">-->\n            <!--<div class=\"white-box p-l-20 p-r-20\">-->\n\n                <!--<div class=\"row\">-->\n                    <!--<div class=\"col-md-12\">-->\n                        <!--<form class=\"floating-labels \" #section=\"ngForm\" name=\"section\" id=\"section\">-->\n                            <!--<div style=\"height:330px\">-->\n                                <!--<div class=\"form-group m-b-5\" style=\"width: 45%;float: left;\">-->\n                                    <!--<h4 class=\"box-title\">Price include</h4>-->\n                                    <!--<p class=\"text-muted  font-13\"></p>-->\n                                    <!--<div class=\"switchery-demo m-b-30\">-->\n                                        <!--<ng-container *ngFor=\"let list of commodities;let i=index\">-->\n                                            <!--<ng-container *ngIf=\"i<5\">-->\n                                                <!--<div>{{list}}</div> <input  type=\"checkbox\" (change)=\"clickMulti(list)\" [value]=\"list\" name=\"ck{{i}}\" id=\"ck{{i}}\" class=\"js-switch\" data-color=\"#3d3b3b\" />-->\n\n                                            <!--</ng-container>-->\n                                        <!--</ng-container>-->\n                                    <!--</div>-->\n\n                                    <!--<span class=\"bar\"></span>-->\n                                    <!--<small class=\"form-text text-muted\"></small>-->\n                                <!--</div>-->\n                                <!--<div class=\"form-group m-b-5\" style=\"    width: 45%;float: right;\">-->\n                                    <!--<p class=\"text-muted  font-13\"></p>-->\n                                    <!--<div class=\"switchery-demo m-b-30\">-->\n                                        <!--<ng-container *ngFor=\"let list of commodities;let i=index\">-->\n                                            <!--<ng-container *ngIf=\"i>=5\">-->\n                                                <!--<div>{{list}}</div> <input  type=\"checkbox\" (change)=\"clickMulti(list)\" [value]=\"list\" name=\"ck{{i}}\" id=\"ck{{i}}\" class=\"js-switch\" data-color=\"#3d3b3b\" />-->\n                                            <!--</ng-container>-->\n                                        <!--</ng-container>-->\n                                    <!--</div>-->\n                                    <!--<span class=\"bar\"></span>-->\n                                    <!--<small class=\"form-text text-muted\"></small>-->\n                                <!--</div>-->\n                            <!--</div>-->\n\n                            <!--<div class=\"form-group m-b-40\" *ngIf=\"others\">-->\n\n\n\n\n                                    <!--<input type=\"text\" [(ngModel)]=\"data.others\" class=\"form-control\" id=\"hole_9_price_other\" required=\"\" name=\"hole_9_price_other\">-->\n                                    <!--<span class=\"highlight\"></span>-->\n                                    <!--<span class=\"bar\"></span>-->\n                                    <!--<label for=\"hole_9_price\">Others</label>-->\n\n\n                                <!--<small class=\"form-text text-muted\">Seperate by comma </small>-->\n                            <!--</div>-->\n                            <!--<div style=\"height:50px\"></div>-->\n                            <!--<div class=\"form-group m-b-5\">-->\n                                <!--<textarea class=\"form-control\" [(ngModel)]=\"data.cancel_policy\" name=\"cancel_policy\" rows=\"4\" id=\"cancel_policy\" required></textarea><span class=\"highlight\"></span> <span class=\"bar\"></span>-->\n                                <!--<label for=\"cancel_policy\">Cancellation Policy</label>-->\n                                <!--<span class=\"bar\"></span>-->\n                                <!--<small class=\"form-text text-muted\"></small>-->\n                            <!--</div>-->\n                            <!--<div style=\"height:50px\"></div>-->\n                            <!--<div class=\"form-group m-b-5\">-->\n                                <!--<textarea class=\"form-control\" [(ngModel)]=\"data.tnc\" name=\"tnc\" rows=\"4\" id=\"tnc\" required></textarea><span class=\"highlight\"></span> <span class=\"bar\"></span>-->\n                                <!--<label for=\"tnc\">Any Other TNC</label>-->\n                                <!--<span class=\"bar\"></span>-->\n                                <!--<small class=\"form-text text-muted\"></small>-->\n                            <!--</div>-->\n                            <!--<div class=\"form-group m-b-40\">-->\n                                <!--<h4 class=\"box-title\">Booking Condition</h4>-->\n                                <!--<p class=\"text-muted  font-13\"></p>-->\n                                <!--<span style=\"width: 45%;float: left;\">-->\n                                     <!--Minimum Golfer Weekdays-->\n                                <!--<select class=\"form-control p-0\"   [(ngModel)]=\"data.min_weekdays\" name=\"min_weekdays\" required>-->\n                                    <!--<ng-container *ngFor=\"let list of minGolf;let j=index\">-->\n                                        <!--<option value=\"{{list}}\">{{list}}</option>-->\n                                    <!--</ng-container>-->\n                                <!--</select>-->\n                                <!--</span>-->\n                               <!--<span style=\"width: 45%;float: left;\">-->\n                                   <!--Minimum Golfer Weekend-->\n                                <!--<select class=\"form-control p-0\"   [(ngModel)]=\"data.min_weekends\" name=\"min_weekends\" required>-->\n                                    <!--<ng-container *ngFor=\"let list of minGolf;let j=index\">-->\n                                        <!--<option value=\"{{list}}\">{{list}}</option>-->\n                                    <!--</ng-container>-->\n                                <!--</select>-->\n                               <!--</span>-->\n\n                            <!--</div>-->\n\n                            <!--<div style=\"height:100px\"></div>-->\n\n\n                            <!--<div class=\"form-group\">-->\n                                <!--<button type=\"submit\" class=\"btn btn-success waves-effect waves-light m-r-10\"><a routerLink=\"/golf-course/section-4\">Back</a></button>-->\n                                <!--<button style=\"    float: right;\" type=\"submit\" (click)=\"save(section,true)\" class=\"btn btn-success waves-effect waves-light m-r-10\"  *ngIf=\"environment.random.userDetail&&environment.random.userDetail.gc_basic_info.cancel_policy\">Update & Continue</button>-->\n\n                                <!--<button style=\"    float: right;\" type=\"submit\" (click)=\"save(section)\" class=\"btn btn-success waves-effect waves-light m-r-10\"  *ngIf=\"environment.random.userDetail&&environment.random.userDetail.gc_basic_info&&!environment.random.userDetail.gc_basic_info.cancel_policy\">Submit & Continue</button>-->\n                            <!--</div>-->\n                        <!--</form>-->\n                    <!--</div>-->\n                <!--</div>-->\n            <!--</div>-->\n        <!--</div>-->\n    <!--</div>-->\n    <!--<div class=\"row\" id=\"rental-section\" style=\"display: none;\">-->\n        <!--<div class=\"col-sm-12\">-->\n            <!--<div class=\"white-box p-l-20 p-r-20\">-->\n                <!--<h3 class=\"box-title m-b-0\">Rentals<button style=\"    float: right;\"  class=\"btn btn-success waves-effect waves-light m-r-10\" (click)=\"addNew()\">Add New</button></h3>-->\n                <!--<p class=\"text-muted m-b-30 font-13\"></p>-->\n                <!--<div class=\"row\">-->\n                    <!--<div class=\"col-md-12\">-->\n                        <!--<form class=\"floating-labels \" #section1=\"ngForm\" name=\"section1\" id=\"section1\">-->\n\n\n                            <!--<h3 class=\"box-title\"></h3>-->\n                            <!--<div style=\"height:200px\">-->\n                                <!--<ng-container *ngFor=\"let list of data.pricecommodities;let k=index\">-->\n                                    <!--<div class=\"form-group m-b-5\" style=\"    background-color: white;\">-->\n                                        <!--<input type=\"text\" class=\"form-control\" disabled style=\"float: left;width:45%;background-color: white;\" placeholder=\"Name\" value=\"{{list.name}}\" name=\"listdities_id{{k}}\" id=\"listdities_id{{k}}\">-->\n                                        <!--<span class=\"highlight\"></span> <span class=\"bar\"></span>-->\n                                    <!--</div>-->\n                                    <!--<div class=\"form-group m-b-5\" >-->\n                                        <!--<input type=\"number\" class=\"form-control\" style=\"float: right;width:45%;\" placeholder=\"Price\" [(ngModel)]=\"data.pricecommodities[k].price\" name=\"pricecommoditiesprice{{k}}\"  id=\"pricecommoditiesprice{{k}}\">-->\n                                        <!--&lt;!&ndash;<span class=\"highlight\"></span> <span class=\"bar\"></span>&ndash;&gt;-->\n                                    <!--</div>-->\n\n\n                                <!--</ng-container>-->\n\n\n\n\n                            <!--</div>-->\n                            <!--<ng-container *ngFor=\"let list of data.newcommodities;let i=index\">-->\n                                <!--<div class=\"form-group m-b-5\" >-->\n                                    <!--<input type=\"text\" class=\"form-control\" style=\"float: left;width:45%;\"  placeholder=\"Name\" [(ngModel)]=\"data.newcommodities[i].name\" name=\"newcommodities_name{{i}}\" id=\"newcommodities_name{{i}}\">-->\n                                <!--</div>-->\n                                <!--<div class=\"form-group m-b-5\" >-->\n                                    <!--<input type=\"number\" class=\"form-control\" style=\"float: right;width:45%;\"  placeholder=\"Price\" [(ngModel)]=\"data.newcommodities[i].price\" name=\"newcommodities_price{{i}}\"  id=\"newcommodities_price{{i}}\">-->\n                                <!--</div>-->\n\n                                <!--<div style=\"height:60px\"></div>-->\n                            <!--</ng-container>-->\n\n\n\n\n                            <!--<div class=\"form-group bk\">-->\n                                <!--<button type=\"submit\" class=\"btn btn-success waves-effect waves-light m-r-10\"><a href=\"javascript:void(0)\" onclick=\"$('#add-on-section').css('display','block');$('#rental-section').css('display','none');\">Back</a></button>-->\n                                <!--<button style=\"    float: right;\" type=\"submit\" (click)=\"saverental(section1,true)\" class=\"btn btn-success waves-effect waves-light m-r-10\" [hidden]=\"environment.random.userDetail&&environment.random.userDetail.extras_info&&environment.random.userDetail.extras_info.length==0\">Update & Continue</button>-->\n                                <!--<button style=\"    float: right;\" type=\"submit\" (click)=\"saverental(section1,false)\" class=\"btn btn-success waves-effect waves-light m-r-10\" [hidden]=\"environment.random.userDetail&&environment.random.userDetail.extras_info&&environment.random.userDetail.extras_info.length>0\">Submit & Continue</button>-->\n                            <!--</div>-->\n                        <!--</form>-->\n                    <!--</div>-->\n                <!--</div>-->\n            <!--</div>-->\n        <!--</div>-->\n    <!--</div>-->\n\n<!--</div>-->\n\n<div (ngInit)=\"setValue()\" *ngIf=\"environment.random.userDetail\"></div>\n\n\n<div *ngIf=\"column=='addon'\">\n    <form class=\"floating-labels \" #section2=\"ngForm\" name=\"section2\" id=\"section2\">\n        <div>\n\n            <div style=\"float:left;width:50%\">\n                <div class=\"pad_20\">\n                    <div class=\"add-events-top-section-text wid_90\">Price Includes </div>\n                    <ng-container *ngFor=\"let list of commodities;let i=index\">\n                        <ng-container *ngIf=\"i<5\">\n                                <div class=\"switchery-demo m-b-10\">\n\n                                    <div class=\"lft_chk wid_32\"> {{list}} </div><div class=\"center_t\"> <input type=\"checkbox\"  (change)=\"clickMulti(list)\" [value]=\"list\" name=\"ck{{i}}\" id=\"ck{{i}}\" class=\"js-switch\" data-color=\"#3d3b3b\" /></div>\n\n                                </div>\n                        </ng-container>\n                    </ng-container>\n\n                </div>\n            </div>\n\n\n            <div style=\"float:left;width:50%\">\n                <div class=\"pad_20\">\n                    <div class=\"add-events-top-section-text wid_90\"> &nbsp;</div>\n                    <ng-container *ngFor=\"let list of commodities;let i=index\">\n                        <ng-container *ngIf=\"i>=5\">\n                            <div class=\"switchery-demo m-b-10\">\n\n                                <div class=\"lft_chk wid_32\"> {{list}} </div><div class=\"center_t\"> <input type=\"checkbox\"  (change)=\"clickMulti(list)\" [value]=\"list\" name=\"ck{{i}}\" id=\"ck{{i}}\" class=\"js-switch\" data-color=\"#3d3b3b\" /></div>\n\n                            </div>\n                        </ng-container>\n                    </ng-container>\n                    <!--<span class=\"event-supporting-text\">(price would include following items)</span>-->\n                </div>\n            </div>\n\n        </div>\n        <span class=\"event-supporting-text\">(price would include following items)</span>\n\n\n        <div *ngIf=\"others\">\n            <div >\n                <div class=\"add-events-top-section-text \"> Others </div>\n                <div class=\"event_left mrng_btm_date wid100\">\n                    <input  type=\"text\" [(ngModel)]=\"data.others\"  class=\"event_input wid100\"  placeholder=\"Enter items seperated by commas\"  name=\"others\"  >\n                </div>\n            </div>\n            <span class=\"event-supporting-text\">(Enter items seperated by commas)</span>\n        </div>\n        <div >\n            <div >\n                <div class=\"add-events-top-section-text \"> Cancellation Policy </div>\n                <div class=\"event_left mrng_btm_date wid100\">\n                    <input  type=\"text\" [(ngModel)]=\"data.cancel_policy\"  class=\"event_input wid100\"  placeholder=\"Cancellation Policy\"  name=\"cancellation\"  >\n                </div>\n            </div>\n            <span class=\"event-supporting-text\">(Do you have any cancellation policy)</span>\n        </div>\n\n        <div >\n            <div >\n                <div class=\"add-events-top-section-text \"> Terms & Condition </div>\n                <div class=\"event_left mrng_btm_date wid100\">\n                    <input  type=\"text\" [(ngModel)]=\"data.tnc\" class=\"event_input wid100\"  placeholder=\"Cancellation Policy\"  name=\"tc\"  >\n                </div>\n            </div>\n            <span class=\"event-supporting-text\">(Do you have any terms & conditiony)</span>\n        </div>\n        <div >\n            <div style=\"float:left;width:50%\">\n                <div class=\"pad_20\">\n                    <div class=\"add-events-top-section-text wid_90\">Minimum Weekdays Golfers</div>\n\n                    <div class=\"event_lft_mrgn wid_90\">\n                        <div class=\"wid_90 nice-select nice-select-evnt \" tabindex=\"0\" id=\"weekgolf\" onclick=\"$('#weekgolf').toggleClass('open')\" >\n                            <span class=\"current\">{{data.min_weekdays?data.min_weekdays:'Minimum Weekdays Golfers'}}</span>\n                            <ul class=\"list\">\n                                <ng-container *ngFor=\"let list of minGolf\">\n                                    <li (click)=\"data.min_weekdays=list\" [class]=\"data.min_weekdays==list?'option selected focus':'option'\" >{{list}}</li>\n\n                                </ng-container>\n                            </ul>\n\n\n                        </div>\n                    </div>\n                    <span class=\"event-supporting-text\">(Minimum Weekdays Golfers allowed)</span>\n                </div>\n            </div>\n            <div style=\"float:left;width:50%\">\n                <div class=\"pad_20\">\n                    <div class=\"add-events-top-section-text wid_90\">Minimum Weekend Golfers</div>\n\n                    <div class=\"event_lft_mrgn wid_90\">\n                        <div class=\"wid_90 nice-select nice-select-evnt \" tabindex=\"0\" id=\"weekegolf\" onclick=\"$('#weekegolf').toggleClass('open')\" >\n                            <span class=\"current\">{{data.min_weekends?data.min_weekends:'Minimum Weekend Golfers'}}</span>\n                            <ul class=\"list\">\n                                <ng-container *ngFor=\"let list of minGolf\">\n                                    <li (click)=\"data.min_weekends=list\" [class]=\"data.min_weekends==list?'option selected focus':'option'\" >{{list}}</li>\n\n                                </ng-container>\n                            </ul>\n                        </div>\n                    </div>\n                    <span class=\"event-supporting-text\">(Minimum Weekend Golfers allowed)</span>\n                </div>\n            </div>\n\n        </div>\n\n        <div class=\"add_gray_full_wrapper\">\n            <div class=\"content_container\">\n                <!--<div class=\"cl_height_15\"></div>-->\n                <button type=\"button\" class=\"event-preview\"><a routerLink=\"/golf-course/section-four\">Back</a></button>\n                <button type=\"button\" (click)=\"save(section2,true)\" class=\"event-filled_button\"  *ngIf=\"environment.random.userDetail&&environment.random.userDetail.gc_basic_info.cancel_policy\">Update & Continue</button>\n\n                <button type=\"button\" (click)=\"save(section2)\" class=\"event-filled_button\"  *ngIf=\"environment.random.userDetail&&environment.random.userDetail.gc_basic_info&&!environment.random.userDetail.gc_basic_info.cancel_policy\">Submit & Continue</button>\n\n            </div>\n        </div>\n    </form>\n</div>\n\n\n<div *ngIf=\"column=='price'\">\n<form class=\"floating-labels \" #section3=\"ngForm\" name=\"section2\" id=\"section3\">\n    <div>\n\n        <div style=\"float:left;width:50%\">\n            <div class=\"pad_20\">\n                <div class=\"add-events-top-section-text wid_90\">Price of Commodities </div>\n                <ng-container *ngFor=\"let list of data.pricecommodities;let k=index\">\n                    <ng-container *ngIf=\"k<2\">\n                        <div class=\"event_left mrng_btm_date wid_90\">\n\n                            <div class=\"lft_chk wid_40\" style=\"margin-top: 35px;\"> {{list.name}} </div><div class=\"center_t\" > <input  type=\"number\"  placeholder=\"Enter a price\" [(ngModel)]=\"data.pricecommodities[k].price\" name=\"pricecommoditiesprice{{k}}\"  id=\"pricecommoditiesprice{{k}}\" class=\"event_input wid_40\"  /></div>\n\n                        </div>\n                    </ng-container>\n                </ng-container>\n\n            </div>\n        </div>\n\n\n        <div style=\"float:left;width:50%\">\n            <div class=\"pad_20\">\n                <div class=\"add-events-top-section-text wid_90\"> &nbsp;</div>\n                <ng-container *ngFor=\"let list of data.pricecommodities;let k=index\">\n                    <ng-container *ngIf=\"k>=2\">\n                        <div class=\"event_left mrng_btm_date wid_90\">\n\n                            <div class=\"lft_chk wid_40\" style=\"margin-top: 35px;\"> {{list.name}}</div><div class=\"center_t\"> <input  type=\"number\"  [(ngModel)]=\"data.pricecommodities[k].price\" placeholder=\"Enter a price\" name=\"pricecommoditiesprice{{k}}\"  id=\"pricecommoditiesprice{{k}}\" class=\"event_input wid_40\"  /></div>\n\n                        </div>\n                    </ng-container>\n                </ng-container>\n\n            </div>\n        </div>\n\n    </div>\n    <span class=\"event-supporting-text\">(add prices for the following)</span>\n    <div>\n\n        <div style=\"float:left;width:50%\">\n            <div class=\"pad_20\">\n                <div class=\"add-events-top-section-text wid_90\">Price of New Commodities </div>\n                <ng-container *ngFor=\"let list of data.newcommodities;let i=index\">\n                    <ng-container *ngIf=\"i%2==0\">\n                        <div class=\"event_left mrng_btm_date wid_90\">\n\n                            <div class=\"lft_chk wid_40\"> <input type=\"text\"  [(ngModel)]=\"data.newcommodities[i].name\" name=\"newcommodities_name{{i}}\"  id=\"newcommodities_name{{i}}\" class=\"event_input wid_90\" placeholder=\"Enter a name\" /> </div><div class=\"center_t\"> <input type=\"number\"  style=\"margin-top: 10px;\" placeholder=\"Enter a price\"  [(ngModel)]=\"data.newcommodities[i].price\" name=\"newcommodities_price{{i}}\"  id=\"newcommodities_price{{i}}\" class=\"event_input wid_40\"  /></div>\n\n                        </div>\n                    </ng-container>\n                </ng-container>\n\n            </div>\n        </div>\n\n\n        <div style=\"float:left;width:50%\">\n            <div class=\"pad_20\">\n                <div class=\"add-events-top-section-text wid_90\"> &nbsp;</div>\n                <ng-container *ngFor=\"let list of data.newcommodities;let i=index\">\n                    <ng-container *ngIf=\"i%2!=0\">\n                        <div class=\"event_left mrng_btm_date wid_90\">\n\n                            <div class=\"lft_chk wid_40\"> <input type=\"text\"  [(ngModel)]=\"data.newcommodities[i].name\"  name=\"newcommodities_name{{i}}\"  id=\"newcommodities_name{{i}}\" class=\"event_input wid_90\"  placeholder=\"Enter a name\" /> </div><div class=\"center_t\"> <input type=\"number\"  style=\"margin-top: 10px;\"  placeholder=\"Enter a price\"  [(ngModel)]=\"data.newcommodities[i].price\" name=\"newcommodities_price{{i}}\"  id=\"newcommodities_price{{i}}\" class=\"event_input wid_40\"  /></div>\n\n                        </div>\n                    </ng-container>\n                </ng-container>\n\n            </div>\n        </div>\n\n    </div>\n    <span class=\"event-supporting-text\" *ngIf=\"data.newcommodities.length>0\">(add prices for the following)</span>\n    <div class=\"cl_height_15\"></div>\n\n\n    <div class=\"add_gray_full_wrapper\">\n        <div class=\"content_container\">\n\n            <button type=\"button\" class=\"event-preview\"><a href=\"javascript:void(0)\" routerLink=\"/golf-course/section-add-on\">Back</a></button>\n            <button type=\"button\" (click)=\"saverental(section3,true)\" class=\"event-filled_button\" [hidden]=\"environment.random.userDetail&&environment.random.userDetail.extras_info&&environment.random.userDetail.extras_info.length==0\">Update & Continue</button>\n            <button type=\"button\" (click)=\"saverental(section3,false)\" class=\"event-filled_button\" [hidden]=\"environment.random.userDetail&&environment.random.userDetail.extras_info&&environment.random.userDetail.extras_info.length>0\">Submit & Continue</button>\n            <button type=\"button\" (click)=\"addNew()\" class=\"event-save-continue\" >Add New</button>\n\n\n        </div>\n    </div>\n</form>\n\n</div>"

/***/ }

});
//# sourceMappingURL=6.bundle.map