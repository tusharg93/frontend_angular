webpackJsonp([16,19],{

/***/ 237:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_core__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_universal__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_universal__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return StorageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StorageService = (function () {
    function StorageService(zone, router, _cookie) {
        this.zone = zone;
        this.router = router;
        this._cookie = _cookie;
        this.environment = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */];
    }
    StorageService.prototype.userChecker = function (update) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (__WEBPACK_IMPORTED_MODULE_5_angular2_universal__["isBrowser"]) {
                var cookies = _this._cookie.getAll();
                if (_this.environment.random.userInfo) {
                    _this.environment.random.source = _this.environment.random.userInfo.source;
                    resolve(_this.environment.random.userInfo);
                }
                else if (cookies['id'] && cookies['token'] && cookies['source']) {
                    _this.environment.random.userInfo = { id: cookies['id'], token: cookies['token'], source: cookies['source'] };
                    _this.environment.random.source = _this.environment.random.userInfo.source;
                    resolve(_this.environment.random.userInfo);
                }
                else {
                    resolve();
                }
            }
        });
    };
    StorageService.prototype.promLogIn = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (__WEBPACK_IMPORTED_MODULE_5_angular2_universal__["isBrowser"]) {
                var cookies = _this._cookie.getAll();
                if (_this.environment.random.userInfo) {
                    _this.environment.random.source = _this.environment.random.userInfo.source;
                    resolve(_this.environment.random.userInfo);
                }
                else if (cookies['id'] && cookies['token'] && cookies['source']) {
                    _this.environment.random.userInfo = { id: cookies['id'], token: cookies['token'], source: cookies['source'] };
                    _this.environment.random.source = _this.environment.random.userInfo.source;
                    resolve(_this.environment.random.userInfo);
                }
                else {
                    _this.router.navigateByUrl('/');
                    swal('Access Denied', 'You will need to sign in first', 'error');
                    resolve();
                }
            }
        });
    };
    StorageService.prototype.storeCookies = function (name, val, time) {
        document.cookie = name + "=" + val + "; expires=" + time + "; path=/";
    };
    StorageService.prototype.deleteStorage = function () {
        var expires = "Thu, 01 Jan 1970 00:00:01 GMT";
        var d = new Date();
        d.setTime(d.getTime() + (24 * 60 * 60 * 1000));
        var cookies = this._cookie.getAll();
        // if(isBrowser){
        //     deleteCookie();
        // }
        for (var i in cookies) {
            if (i.indexOf('CakeCookie') > -1) {
                this._cookie.remove(i, { path: '/' });
            }
        }
        this._cookie.remove("mc4kParentTokenId", { path: '/' });
        this._cookie.remove("apiUserId", { path: '/' });
        this._cookie.put("mc4kParentDTokenId", 'logout', { path: '/', expires: d.toUTCString() });
        this.environment.userInfo = [];
        this.environment.loggedIn = false;
        this.environment.langSelection = [];
        localStorage.removeItem('ngStorage-userInfo');
    };
    StorageService.prototype.showMessage = function (message, type) {
        if (type == 'error' || type == 'failure') {
            this.environment.random.errorImg = this.environment.cdnParentingPath + 'error_img';
            $('#errorMessage').text(message);
            $("#search-popup8").addClass('cmn_modal_active');
        }
        else if (type == 'success') {
            this.environment.random.successImg = this.environment.cdnParentingPath + 'success_img';
            $('#successMessage').text(message);
            $("#search-popup7").addClass('cmn_modal_active');
        }
    };
    StorageService.prototype.updateEnvironment = function (params) {
        var _this = this;
        for (var i in params) {
            this.environment.userInfo[i] = params[i];
        }
        this.zone.run(function () {
            _this.environment.userInfo = _this.environment.userInfo;
        });
        return this.environment.userInfo;
    };
    StorageService.prototype.userDetail = function (params) {
        this.environment.random.userDetail = this.environment.random.userDetail ? this.environment.random.userDetail : new Array();
        for (var i in params) {
            this.environment.random.userDetail[i] = params[i];
        }
    };
    StorageService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_core__["CookieService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_core__["CookieService"]) === 'function' && _c) || Object])
    ], StorageService);
    return StorageService;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/tee/src/storage.service.js.map

/***/ },

/***/ 238:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ApiService = (function () {
    function ApiService(zone, http, router) {
        this.zone = zone;
        this.http = http;
        this.router = router;
        this.environment = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */];
        var url = ['http://13.57.212.193:8000/', ''];
        this.urlList = url;
        this.userInfo = '';
    }
    ApiService.prototype.getApiMc4k = function (url, baseUrl, header) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        if (this.environment.random.userInfo && header) {
            headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'id': this.environment.random.userInfo.id, 'token': this.environment.random.userInfo.token, 'source': this.environment.random.source });
        }
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        var urlReq = baseUrl ? this.urlList[baseUrl] : this.urlList[0];
        urlReq = urlReq + url;
        urlReq = baseUrl == 0 ? urlReq + this.userInfo : urlReq;
        return this.http.get(urlReq, options)
            .toPromise()
            .then(this.returnData)
            .catch(this.handleError);
    };
    ApiService.prototype.postApiMc4k = function (url, params, formdata, header, baseUrl) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json', 'source': this.environment.random.source });
        if (this.environment.random.userInfo && header) {
            headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'id': this.environment.random.userInfo.id, 'token': this.environment.random.userInfo.token, 'source': this.environment.random.source });
        }
        if (formdata) {
            headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/x-www-form-urlencoded', 'source': this.environment.random.source });
        }
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        var urlReq = baseUrl ? this.urlList[baseUrl] : this.urlList[0];
        urlReq = urlReq + url + this.userInfo;
        return this.http.post(urlReq, params, options)
            .toPromise()
            .then(this.returnData)
            .catch(this.handleError);
    };
    ApiService.prototype.putApiMc4k = function (url, params, baseUrl) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        if (this.environment.random.userInfo) {
            headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'id': this.environment.random.userInfo.id, 'token': this.environment.random.userInfo.token, 'source': this.environment.random.source });
        }
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        var urlReq = baseUrl ? this.urlList[baseUrl] : this.urlList[0];
        urlReq = urlReq + url + this.userInfo;
        return this.http.put(urlReq, params, options)
            .toPromise()
            .then(this.returnData)
            .catch(this.handleError);
    };
    ApiService.prototype.deleteApiMc4k = function (url, baseUrl) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        if (this.environment.loggedIn) {
            headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'id': this.environment.userInfo.id, 'mc4kToken': this.environment.userInfo.mc4kToken });
        }
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        var urlReq = baseUrl ? this.urlList[baseUrl] : this.urlList[0];
        urlReq = urlReq + url;
        return this.http.delete(urlReq, options)
            .toPromise()
            .then(this.returnData)
            .catch(this.handleError);
    };
    ApiService.prototype.imageApi = function (url, fileData, baseUrl) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'id': this.environment.random.userInfo.id, 'token': this.environment.random.userInfo.token, 'source': this.environment.random.source });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        var urlReq = baseUrl ? this.urlList[baseUrl] : this.urlList[0];
        urlReq = urlReq + url + this.userInfo;
        return this.http.post(urlReq, fileData, options)
            .toPromise()
            .then(this.returnData)
            .catch(this.handleError);
    };
    ApiService.prototype.returnData = function (res) {
        var body = res.json();
        return body || {};
    };
    ApiService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Response"]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        return Promise.reject(errMsg);
    };
    ApiService.prototype.JsNewPromise = function (url, id) {
        var _self = this;
        return new Promise(function (resolve, reject) {
            (function () {
                if (document.getElementById(id)) {
                    resolve(true);
                }
                else {
                    var po = document.createElement('script');
                    po.type = 'text/javascript';
                    po.id = id;
                    po.async = true;
                    po.src = url;
                    var head = document.getElementsByTagName('head')[0];
                    head.appendChild(po);
                    po.onload = function () {
                        resolve(true);
                    };
                }
            })();
        });
    };
    ApiService.prototype.userDetail = function (link) {
        var _this = this;
        this.getApiMc4k('api/v1/forms/dashboard', 0, true).then(function (value) {
            if (value && value.data) {
                _this.environment.random.userDetail = value.data;
                _this.default(value.data.defaults);
                if (link) {
                    _this.router.navigateByUrl(link);
                }
                else if (_this.environment.random.userDetail && _this.environment.random.userDetail.gc_basic_info && !_this.environment.random.userDetail.gc_basic_info.time_zone) {
                    _this.router.navigateByUrl('golf-course/section-one');
                }
                else if (_this.environment.random.userDetail && !(_this.environment.random.userDetail.weekends || _this.environment.random.userDetail.gc_basic_info.weekdays)) {
                    _this.router.navigateByUrl('golf-course/section-two');
                }
                else if (_this.environment.random.userDetail && _this.environment.random.userDetail.seasons_info && _this.environment.random.userDetail.seasons_info.length == 0) {
                    _this.router.navigateByUrl('golf-course/section-three');
                }
                else if (_this.environment.random.userDetail && _this.environment.random.userDetail.rates_info && _this.environment.random.userDetail.rates_info.length == 0) {
                    _this.router.navigateByUrl('golf-course/section-four');
                }
                else if (_this.router.url == '/' || _this.router.url.indexOf('login') > -1 || _this.router.url.indexOf('register') > -1) {
                    _this.router.navigateByUrl('golf-course/dashboard');
                }
                else {
                    _this.router.navigateByUrl(_this.router.url);
                }
            }
        });
    };
    ApiService.prototype.userDetailVendor = function (link) {
        var _this = this;
        this.getApiMc4k('api/v1/vendors/dashboard', 0, true).then(function (value) {
            if (value && value.data) {
                _this.environment.random.userDetail = value.data;
                if (link) {
                    _this.router.navigateByUrl(link);
                }
                _this.default(value.data.defaults);
            }
        });
    };
    ApiService.prototype.default = function (value) {
        this.environment.random.keys = value;
        this.environment.random.keys['others'] = new Array();
        var param = [];
        for (var i in this.environment.random.keys) {
            for (var j in this.environment.random.keys[i]) {
                param[this.environment.random.keys[i][j].name] = this.environment.random.keys[i][j].id;
                param[this.environment.random.keys[i][j].id] = this.environment.random.keys[i][j].name;
            }
        }
        this.environment.random.keys['others'] = param;
    };
    ApiService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === 'function' && _c) || Object])
    ], ApiService);
    return ApiService;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/tee/src/api.service.js.map

/***/ },

/***/ 379:
/***/ function(module, exports, __webpack_require__) {

var map = {
	"./typescripts/close-days/close-days.module": [
		682,
		15
	],
	"./typescripts/dashboard-v/dashboard.module": [
		683,
		14
	],
	"./typescripts/dashboard/dashboard.module": [
		684,
		13
	],
	"./typescripts/home/home.module": [
		685,
		12
	],
	"./typescripts/login/login.module": [
		686,
		11
	],
	"./typescripts/manage-golf-course/manage-golf-course.module": [
		687,
		10
	],
	"./typescripts/manage-slot/manage-slot.module": [
		688,
		9
	],
	"./typescripts/manage-vendors/manage-vendors.module": [
		689,
		8
	],
	"./typescripts/public-holiday/public-holiday.module": [
		690,
		7
	],
	"./typescripts/section-add-on/section-add-on.module": [
		691,
		6
	],
	"./typescripts/section-four/section-four.module": [
		692,
		5
	],
	"./typescripts/section-one/section-one.module": [
		693,
		4
	],
	"./typescripts/section-three/section-three.module": [
		694,
		3
	],
	"./typescripts/section-two/section-two.module": [
		695,
		2
	],
	"./typescripts/update-profile-v/update-profile.module": [
		696,
		0
	],
	"./typescripts/update-profile/update-profile.module": [
		697,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 379;


/***/ },

/***/ 380:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_universal__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_browser_module__ = __webpack_require__(488);






/**
 * enable prod mode for production environments
 */
if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
var platformRef = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_angular2_universal__["platformUniversalDynamic"])();
platformRef.bootstrapModule(__WEBPACK_IMPORTED_MODULE_5__app_app_browser_module__["a" /* AppModule */]);
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/tee/src/client.js.map

/***/ },

/***/ 382:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_universal__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_universal__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Meta; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



/**
 * A service that can be used to get and add meta tags.
 *
 * @experimental
 */
var Meta = (function () {
    function Meta(_document) {
        this._document = _document;
        this._dom = __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["__platform_browser_private__"].getDOM();
    }
    /**
     * Sets the title of the page
     */
    Meta.prototype.setTitle = function (title) {
        this._document.title = title;
    };
    /**
    * Sets the canonical url of the page
    */
    Meta.prototype.setCanonicalUrl = function (title) {
        var link = this._dom.createElement('link');
        this._dom.setAttribute(link, 'rel', 'canonical');
        this._dom.setAttribute(link, 'href', title);
        var head = this._document.head;
        this._dom.appendChild(head, link);
    };
    Meta.prototype.setElement = function (element, attributes) {
        var link = this._dom.createElement(element);
        for (var key in attributes) {
            this._dom.setAttribute(link, key, attributes[key]);
        }
        var head = this._document.head;
        this._dom.appendChild(head, link);
    };
    /* Set Head Attribute */
    Meta.prototype.setHeadAttribute = function (attribute, value) {
        var head = this._document.head;
        //this._dom.setAttribute(head, 'prefix',"og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#");
        this._dom.setAttribute(head, attribute, value);
    };
    /**
     * Adds a new meta tag to the dom.
     *
     *  ### Example
     *
     * ```ts
     * const name: MetaDefinition = {name: 'application-name', content: 'Name of my application'};
     * const desc: MetaDefinition = {name: 'description', content: 'A description of the page'};
     * const tags: HTMLMetaElement[] = this.meta.addTags([name, desc]);
     * ```
     *
     * @param tags
     * @returns {HTMLMetaElement[]}
     */
    Meta.prototype.addTags = function () {
        var _this = this;
        var tags = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            tags[_i - 0] = arguments[_i];
        }
        if (__WEBPACK_IMPORTED_MODULE_2_angular2_universal__["isNode"]) {
            var presentTags = this._flattenArray(tags);
            if (presentTags.length === 0)
                return [];
            return presentTags.map(function (tag) { return _this._addInternal(tag); });
        }
    };
    Meta.prototype._addInternal = function (tag) {
        var meta = this._createMetaElement();
        this._prepareMetaElement(tag, meta);
        this._appendMetaElement(meta);
        return meta;
    };
    Meta.prototype._createMetaElement = function () {
        return this._dom.createElement('meta');
    };
    Meta.prototype._prepareMetaElement = function (tag, el) {
        var _this = this;
        Object.keys(tag).forEach(function (prop) { return _this._dom.setAttribute(el, prop, tag[prop]); });
        return el;
    };
    Meta.prototype._appendMetaElement = function (meta) {
        var head = this._document.head;
        this._dom.appendChild(head, meta);
    };
    Meta.prototype._flattenArray = function (input, out) {
        if (out === void 0) { out = []; }
        if (input) {
            for (var i = 0; i < input.length; i++) {
                var item = input[i];
                if (Array.isArray(item)) {
                    this._flattenArray(item, out);
                }
                else if (item) {
                    out.push(item);
                }
            }
        }
        return out;
    };
    Meta = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DOCUMENT"])), 
        __metadata('design:paramtypes', [Object])
    ], Meta);
    return Meta;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/tee/src/meta.service.js.map

/***/ },

/***/ 383:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directive_ng_init_directive__ = __webpack_require__(492);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NgInitDirectiveModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgInitDirectiveModule = (function () {
    function NgInitDirectiveModule() {
    }
    NgInitDirectiveModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__directive_ng_init_directive__["a" /* NgInitDirective */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__directive_ng_init_directive__["a" /* NgInitDirective */]],
        }), 
        __metadata('design:paramtypes', [])
    ], NgInitDirectiveModule);
    return NgInitDirectiveModule;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/tee/src/ng-init.module.js.map

/***/ },

/***/ 487:
/***/ function(module, exports, __webpack_require__) {

/*
 * THIS IS TEMPORARY TO PATCH 2.1.1+ Core bugs
 */
/* tslint:disable */
var __compiler__ = __webpack_require__(64);
var __core_private__ = __webpack_require__(0);
var patch = false;
if (!__core_private__.hasOwnProperty('ViewUtils')) {
    patch = true;
    __core_private__.ViewUtils = __core_private__.view_utils;
}
if (!__compiler__.__compiler_private__) {
    patch = true;
    (__compiler__).__compiler_private__ = {
        SelectorMatcher: __compiler__.SelectorMatcher,
        CssSelector: __compiler__.CssSelector
    };
}
var __universal__ = __webpack_require__(496);
if (patch) {
    __universal__.ViewUtils = __core_private__.view_utils;
    __universal__.CssSelector = __compiler__.CssSelector;
    __universal__.SelectorMatcher = __compiler__.SelectorMatcher;
}
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/tee/src/__2.1.1.workaround.js.map

/***/ },

/***/ 488:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__typescripts_directive_modules_ng_init_module__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_universal__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__typescripts_common_services_storage_service__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__typescripts_common_services_api_service__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_cookie_core__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__typescripts_header_header_component__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__browser_routing_module__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__typescripts_common_services_meta_service__ = __webpack_require__(382);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__index__["a" /* AppComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_angular2_universal__["UniversalModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__browser_routing_module__["a" /* BrowserRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_0__typescripts_directive_modules_ng_init_module__["a" /* NgInitDirectiveModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__index__["a" /* AppComponent */],
                // HomeComponent,
                __WEBPACK_IMPORTED_MODULE_8__typescripts_header_header_component__["a" /* HeaderComponent */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__typescripts_common_services_storage_service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_6__typescripts_common_services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_10__typescripts_common_services_meta_service__["a" /* Meta */], __WEBPACK_IMPORTED_MODULE_7_angular2_cookie_core__["CookieService"]],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/tee/src/app.browser.module.js.map

/***/ },

/***/ 489:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_universal__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_universal__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.environment = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */];
        if (__WEBPACK_IMPORTED_MODULE_3_angular2_universal__["isBrowser"]) {
            this.environment.random.isBrowser = true;
        }
        else {
            this.environment.random.isServer = true;
        }
        this.environment.random.Battuta = 'fa75e933df89d860c029945583cddef3';
    }
    AppComponent.prototype.onloadHandler = function ($event) {
        this.environment.random.onload = true;
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (evt) {
            _this.environment.random.evtId = evt.id;
            _this.environment.random.currentUrl = evt.url;
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:load', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], AppComponent.prototype, "onloadHandler", null);
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(658),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/tee/src/app.component.js.map

/***/ },

/***/ 490:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BrowserRoutingModule; });

var routes = [
    //home
    { path: '', loadChildren: './typescripts/home/home.module#HomeModule', data: { name: 'Home', type: 'Page' }, pathMatch: 'full' },
    { path: 'login/:type', loadChildren: './typescripts/login/login.module#LoginModule', data: { name: 'LoginModule', type: 'Page' }, pathMatch: 'full' },
    { path: 'register/:type', loadChildren: './typescripts/login/login.module#LoginModule', data: { name: 'LoginModule', type: 'Page' }, pathMatch: 'full' },
    { path: 'verify/:token', loadChildren: './typescripts/home/home.module#HomeModule', data: { name: 'Email', type: 'Verification' }, pathMatch: 'full' },
    { path: 'golf-course/section-one', loadChildren: './typescripts/section-one/section-one.module#SectionOneModule', data: { name: 'Golf', type: 'One' }, pathMatch: 'full' },
    { path: 'golf-course/section-two', loadChildren: './typescripts/section-two/section-two.module#SectionTwoModule', data: { name: 'Golf', type: 'Two' }, pathMatch: 'full' },
    { path: 'golf-course/section-three', loadChildren: './typescripts/section-three/section-three.module#SectionThreeModule', data: { name: 'Golf', type: 'Three' }, pathMatch: 'full' },
    { path: 'golf-course/section-four', loadChildren: './typescripts/section-four/section-four.module#SectionFourModule', data: { name: 'Golf', type: 'Four' }, pathMatch: 'full' },
    { path: 'golf-course/section-add-on', loadChildren: './typescripts/section-add-on/section-add-on.module#SectionAddOnModule', data: { name: 'Golf', type: 'AddOn' }, pathMatch: 'full' },
    { path: 'golf-course/price', loadChildren: './typescripts/section-add-on/section-add-on.module#SectionAddOnModule', data: { name: 'Golf', type: 'Price' }, pathMatch: 'full' },
    { path: 'golf-course/dashboard', loadChildren: './typescripts/dashboard/dashboard.module#DashboardModule', data: { name: 'Golf', type: 'AddOn' }, pathMatch: 'full' },
    { path: 'golf-course/update-profile', loadChildren: './typescripts/update-profile/update-profile.module#UpdateProfileModule', data: { name: 'Golf', type: 'Update' }, pathMatch: 'full' },
    { path: 'golf-course/public-holiday', loadChildren: './typescripts/public-holiday/public-holiday.module#PublicHolidayModule', data: { name: 'Golf', type: 'Update' }, pathMatch: 'full' },
    { path: 'golf-course/close-days', loadChildren: './typescripts/close-days/close-days.module#CloseDaysModule', data: { name: 'Golf', type: 'Update' }, pathMatch: 'full' },
    { path: 'golf-course/manage-slot', loadChildren: './typescripts/manage-slot/manage-slot.module#ManageSlotModule', data: { name: 'Golf', type: 'Update' }, pathMatch: 'full' },
    { path: 'golf-course/manage-vendors', loadChildren: './typescripts/manage-vendors/manage-vendors.module#ManageVendorsModule', data: { name: 'Golf', type: 'Update' }, pathMatch: 'full' },
    { path: 'vendor/dashboard', loadChildren: './typescripts/dashboard-v/dashboard.module#DashboardModule', data: { name: 'Golf', type: 'dashboard' }, pathMatch: 'full' },
    { path: 'vendor/update-profile', loadChildren: './typescripts/update-profile-v/update-profile.module#UpdateProfileModule', data: { name: 'Golf', type: 'dashboard' }, pathMatch: 'full' },
    { path: 'vendor/manage-golf-course', loadChildren: './typescripts/manage-golf-course/manage-golf-course.module#ManageGolfCourseModule', data: { name: 'Golf', type: 'dashboard' }, pathMatch: 'full' },
];
var BrowserRoutingModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/tee/src/browser-routing.module.js.map

/***/ },

/***/ 491:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(489);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_component__["a"]; });

//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/tee/src/index.js.map

/***/ },

/***/ 492:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NgInitDirective; });
//import { Directive, Input } from '@angular/core';
//
//@Directive({
//  selector: '[ngInit]'
//})
//export class NgInitDirective {
//
//  @Input() ngInit;
//    ngOnInit() {
//        if (this.ngInit) {
//            this.ngInit();
//        }
//  }
//
//}
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//console.assert(SimpleChange, "Uhoh, Something was not defined, likely part of a circular reference loop");
var NgInitDirective = (function () {
    function NgInitDirective() {
        this.ngInit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    NgInitDirective.prototype.ngOnInit = function () {
        this.ngInit.emit('dummy');
        //setTimeout(() => this.ngInit.emit('dummy'), 0);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], NgInitDirective.prototype, "ngInit", void 0);
    NgInitDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[ngInit]'
        }), 
        __metadata('design:paramtypes', [])
    ], NgInitDirective);
    return NgInitDirective;
    var _a;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/tee/src/ng-init.directive.js.map

/***/ },

/***/ 493:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_services_api_service__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_services_storage_service__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeaderComponent = (function () {
    function HeaderComponent(ApiService, router, _storage) {
        this.ApiService = ApiService;
        this.router = router;
        this._storage = _storage;
        this.environment = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._storage.userChecker(false).then(function (val) {
            if (val) {
                _this.environment.random.userInfo = { id: val['id'], token: val['token'], source: val['source'] };
                _this.environment.random.source = val['source'];
                var d = new Date();
                d.setTime(d.getTime() + (12 * 30 * 24 * 60 * 60 * 1000));
                _this._storage.storeCookies('id', _this.environment.random.userInfo.id, d.toUTCString());
                _this._storage.storeCookies('token', _this.environment.random.userInfo.token, d.toUTCString());
                _this._storage.storeCookies('source', _this.environment.random.userInfo.source, d.toUTCString());
            }
        });
    };
    HeaderComponent.prototype.dashboard = function () {
        // $('#page-wrapper').addClass('loggedIn');
        if (this.environment.random.userInfo.activated) {
            this.ApiService.userDetail('golf-course/dashboard');
        }
        else {
            this.ApiService.userDetail(false);
        }
    };
    HeaderComponent.prototype.vdahboard = function () {
        // $('#page-wrapper').addClass('loggedIn');
        this.ApiService.userDetailVendor('vendor/dashboard');
    };
    HeaderComponent.prototype.logout = function () {
        var date1 = 'Thu, 01 Jan 1970 00:00:01 GMT;';
        this._storage.storeCookies('id', false, date1);
        this._storage.storeCookies('token', false, date1);
        this._storage.storeCookies('source', false, date1);
        this.environment.random.userDetail = new Array();
        this.environment.random.userInfo = new Array();
        var _self = this;
        setTimeout(function () {
            // $('#page-wrapper').removeClass('loggedIn');
            _self.router.navigateByUrl('/');
        }, 500);
    };
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            selector: 'tee-header',
            template: __webpack_require__(659),
            providers: [__WEBPACK_IMPORTED_MODULE_2__common_services_api_service__["a" /* ApiService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__common_services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__common_services_api_service__["a" /* ApiService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__common_services_storage_service__["a" /* StorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__common_services_storage_service__["a" /* StorageService */]) === 'function' && _c) || Object])
    ], HeaderComponent);
    return HeaderComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/tee/src/header.component.js.map

/***/ },

/***/ 494:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_object__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_function__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_number__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_math__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_string__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_date__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_array__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_map__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_set__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/tee/src/polyfills.js.map

/***/ },

/***/ 658:
/***/ function(module, exports) {

module.exports = "\n<tee-header></tee-header>\n<div style=\"\n    background-color: white;\n    /*height: 100%;overflow-y:scroll;*/\n\">\n    <div class=\"loader_ww lds-roller\" hidden=\"{{!environment.random.showLoader}}\"></div>\n    <router-outlet></router-outlet>\n\n</div>\n<!--<footer class=\"footer text-center\"> 2018 &copy; The PUTT </footer>-->\n\n\n"

/***/ },

/***/ 659:
/***/ function(module, exports) {

module.exports = "\n\n<div style=\"background-color: #e9ebee;height: 100px;\">\n    <div style=\"\n    font-size: 24px;\n    /*margin-top: 10px;*/\n    padding-top: 15px;\n    color: white;\n    padding-left: 30px;\n    \">\n        <h1 style=\"text-shadow:#ffffff 3px 3px 0px, rgba(0, 0, 0, 0.2) 6px 6px 0px;margin-left: 20px;color:brown;\">THE PUTT</h1>\n\n    </div>\n    <div onclick=\"$('#menu').css('display','block')\" style=\"\n    float: right;\n    margin-top: -49px;\n    margin-right: 40px;\n    background-color: brown;\n\n    \">\n        <img src=\"/assets/image/hamburger.svg\">\n    </div>\n</div>\n<div id=\"menu\" style=\"display: none;\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 5000;\n    width: 100%;\n    height: 100%;\n    background: darkolivegreen;\n    overflow-x: scroll;\">\n\n    <div onclick=\"$('#menu').css('display','none')\" style=\"color: white;\n    float: right;\n    font-size: 24px;\n    margin-top: 50px;\n    margin-right: 50px;\">X</div>\n    <ng-container *ngIf=\"environment.random.userInfo&&environment.random.source == 'vendor'\">\n        <div>\n            <div style=\"margin-top: 10%;\n    margin-left: 10%;\n    color: white;\n    width: 20%;float:left;\">\n                <ul>\n                    <li>\n                        <a style=\"    color: beige;\n    font-size: 16px;\" routerLink=\"/vendor/dashboard\">DASHBOARD</a>\n                    </li>\n                    <li>\n                        <a style=\"    color: beige;\n    font-size: 16px;\" routerLink=\"/vendor/manage-golf-course\">MANAGE GOLF COURSE</a>\n                    </li>\n                    <li>\n                        <a style=\"    color: beige;\n    font-size: 16px;\" routerLink=\"/vendor/update-profile\">UPDATE PROFILE</a>\n                    </li>\n\n                    <li>\n                        <a style=\"    color: beige;\n    font-size: 26px;\" (click)=\"logout()\">LOGOUT</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </ng-container>\n    <ng-container *ngIf=\"environment.random.userInfo&&environment.random.source == 'golf_course'\">\n     <div onclick=\"$('#menu').css('display','none');\">\n         <div style=\"    margin-top: 10%;\n    margin-left: 10%;\n    color: white;\n    width: 20%;float:left;\">\n             <ul>\n                 <li>\n                     <a style=\"    color: beige;\n    font-size: 16px;\" routerLink=\"/golf-course/section-one\">SECTION ONE</a>\n                 </li>\n                 <li>\n                     <a style=\"    color: beige;\n    font-size: 16px;\" routerLink=\"/golf-course/section-two\">SECTION TWO</a>\n                 </li>\n                 <li>\n                     <a style=\"    color: beige;\n    font-size: 16px;\" routerLink=\"/golf-course/section-three\">SECTION THREE</a>\n                 </li>\n                 <li>\n                     <a style=\"    color: beige;\n    font-size: 16px;\" routerLink=\"/golf-course/section-four\">SECTION FOUR</a>\n                 </li>\n             </ul>\n         </div>\n         <div style=\"    margin-top: 10%;\n    margin-left: 10%;\n    color: white;\n    width: 20%;float:left;\">\n             <ul>\n                 <li>\n                     <a style=\"    color: beige;\n    font-size: 16px;\" routerLink=\"/golf-course/closed-days\">CLOSED DAYS</a>\n                 </li>\n                 <li>\n                     <a style=\"    color: beige;\n    font-size: 16px;\" routerLink=\"/golf-course/public-holiday\">HOLIDAYS</a>\n                 </li>\n                 <li>\n                     <a style=\"    color: beige;\n    font-size: 16px;\" routerLink=\"/golf-course/section-add-on\">ADD ON/RENTALS</a>\n                 </li>\n                 <li>\n                     <a style=\"display:block;color: beige;\n    font-size: 26px;\" (click)=\"logout()\">LOGOUT</a>\n                 </li>\n\n             </ul>\n         </div>\n         <div style=\"    margin-top: 10%;\n    margin-left: 10%;\n    color: white;\n    width: 20%;float:left;\">\n             <ul>\n                 <li>\n                     <a style=\"    color: beige;\n    font-size: 16px;\" routerLink=\"/golf-course/dashboard\">DASHBOARD</a>\n                 </li>\n                 <li>\n                     <a style=\"    color: beige;\n    font-size: 16px;\" routerLink=\"/golf-course/update-profile\">UPDATE PROFILE</a>\n                 </li>\n                 <li>\n                     <a style=\"    color: beige;\n    font-size: 16px;\" routerLink=\"/golf-course/manage-slot\">MANAGE SLOTS</a>\n                 </li>\n                 <li>\n                     <a style=\"    color: beige;\n    font-size: 16px;\" routerLink=\"/golf-course/manage-vendors\">MANAGE VENDORS</a>\n                 </li>\n             </ul>\n         </div>\n     </div>\n\n    </ng-container>\n\n</div>\n<div (ngInit)=\"vdahboard()\" *ngIf=\"environment.random.source == 'vendor'&&environment.random.userInfo\"></div>\n<div (ngInit)=\"dashboard()\" *ngIf=\"environment.random.source == 'golf_course'&&environment.random.userInfo\"></div>"

/***/ },

/***/ 679:
/***/ function(module, exports) {

/* (ignored) */

/***/ },

/***/ 680:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(380);


/***/ },

/***/ 81:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ung build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: true,
    baseUrl: 'http://localhost:4200',
    random: [],
    apiUrl: 'http://13.59.128.238:8000/',
    formValidation: {
        emailPattern: "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+[.]([A-Za-z]{2,5}|[A-Za-z){2}[.][A-Za-z]{2})$",
        emailMaxlength: 50,
        emailMinlength: 6,
        phoneNoMinlength: 10,
        phoneNoMaxlength: 14,
        otpMinlength: 6,
        twitterPattern: '(^https://www.twitter.com/[A-Za-z0-9._%+-]+$|"")',
        facebookPattern: '(^https://www.facebook.com/[A-Za-z0-9._%+-]+$|"")',
        googlePlusPattern: '(^https://plus.google.com/[0-9]+$|"")',
        passWordLength: 6,
        userBio: 200
    },
};
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/tee/src/environment.dev.js.map

/***/ }

},[680]);
//# sourceMappingURL=client.bundle.map