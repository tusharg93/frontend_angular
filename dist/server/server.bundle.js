module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 55);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("@angular/core");

/***/ },
/* 1 */
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

/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports = require("@angular/router");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_universal__ = __webpack_require__(4);
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
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_core__["CookieService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_core__["CookieService"]) === 'function' && _c) || Object])
    ], StorageService);
    return StorageService;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/tee/src/storage.service.js.map

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("angular2-universal");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angular_router__);
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
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]) === 'function' && _c) || Object])
    ], ApiService);
    return ApiService;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/tee/src/api.service.js.map

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_services_storage_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_router__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(_storage, _router) {
        this._storage = _storage;
        this._router = _router;
        this.environment = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._storage.userChecker(false).then(function (val) {
            if (val && _this.environment.random.source == 'golf_course') {
                _this._router.navigateByUrl('golf-course/dashboard');
            }
            else if (val && _this.environment.random.source == 'vendor') {
                _this._router.navigateByUrl('vendor/dashboard');
            }
        });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            selector: 'home',
            template: __webpack_require__(30),
            styles: [__webpack_require__(57)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__common_services_storage_service__["a" /* StorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__common_services_storage_service__["a" /* StorageService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === 'function' && _b) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/tee/src/home.component.js.map

/***/ },
/* 7 */
/***/ function(module, exports) {

module.exports = require("@angular/http");

/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = require("angular2-cookie/core");

/***/ },
/* 9 */
/***/ function(module, exports) {

module.exports = require("rxjs/add/operator/toPromise");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_compression__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_compression___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_compression__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_express_engine__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_express_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_express_engine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_app_node_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_environment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__server_routes__ = __webpack_require__(27);










// App
var app = __WEBPACK_IMPORTED_MODULE_3_express__();
var ROOT = __WEBPACK_IMPORTED_MODULE_2_path__["join"](__WEBPACK_IMPORTED_MODULE_2_path__["resolve"](__dirname, '..'));
var port = process.env.PORT || 5000;
/**
 * enable prod mode for production environments
 */
if (__WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["enableProdMode"])();
}
/**
 * Express View
 */
app.engine('.html', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_angular2_express_engine__["createEngine"])({}));
app.set('views', __WEBPACK_IMPORTED_MODULE_2_path__["join"](ROOT, 'client'));
app.set('view engine', 'html');
/**
 * Enable compression
 */
app.use(__WEBPACK_IMPORTED_MODULE_4_compression__());
/**
* Put all 301 redirect urls
*/
/**
 * serve static files
 */
app.use('/', __WEBPACK_IMPORTED_MODULE_3_express__["static"](__WEBPACK_IMPORTED_MODULE_2_path__["join"](ROOT, 'client'), { index: false, setHeaders: setHeaders }));
function setHeaders(res) {
    res.setHeader("Cache-Control", "public, max-age=2592000");
    res.setHeader("Expires", new Date(Date.now() + 2592000000).toUTCString());
}
/**
 * place your api routes here
 */
// app.use('/api', api);
/**
 * bootstrap universal app
 * @param req
 * @param res
 */
function ngApp(req, res) {
    res.render('index', {
        req: req,
        res: res,
        ngModule: __WEBPACK_IMPORTED_MODULE_7__app_app_node_module__["a" /* AppModule */],
        preboot: false,
        baseUrl: '/',
        requestUrl: req.originalUrl,
        originUrl: req.hostname
    });
}
/**
 * use universal for specific routes
 */
app.get('/', ngApp);
__WEBPACK_IMPORTED_MODULE_9__server_routes__["a" /* routes */].forEach(function (route) {
    app.get("/" + route, ngApp);
    app.get("/" + route + "/*", ngApp);
});
/**
 * if you want to use universal for all routes, you can use the '*' wildcard
 */
app.get('*', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    var pojo = { status: 404, message: 'No Content' };
    var json = JSON.stringify(pojo, null, 2);
    res.status(404).send(json);
});
app.listen(port, function () {
    console.log("Listening on port " + port);
});
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/tee/src/server.js.map

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

/*
 * THIS IS TEMPORARY TO PATCH 2.1.1+ Core bugs
 */
/* tslint:disable */
var __compiler__ = __webpack_require__(31);
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
var __universal__ = __webpack_require__(35);
if (patch) {
    __universal__.ViewUtils = __core_private__.view_utils;
    __universal__.CssSelector = __compiler__.CssSelector;
    __universal__.SelectorMatcher = __compiler__.SelectorMatcher;
}
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/tee/src/__2.1.1.workaround.js.map

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_universal__ = __webpack_require__(4);
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
            template: __webpack_require__(28),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/tee/src/app.component.js.map

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__typescripts_home_home_component__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_cookie_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__typescripts_header_header_component__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__typescripts_directive_modules_server_combine_module__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__typescripts_common_services_storage_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__typescripts_common_services_api_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__server_routing_module__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
/**
 * Created by maphishaphanbuh on 02/05/17.
 */
/**
 * This file and `main.browser.ts` are identical, at the moment(!)
 * By splitting these, you're able to create logic, imports, etc that are "Platform" specific.
 * If you want your code to be completely Universal and don't need that
 * You can also just have 1 file, that is imported into both
 * client.ts and server.ts
 */
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__index__["a" /* AppComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_angular2_universal__["UniversalModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_10__server_routing_module__["a" /* ServerRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__typescripts_directive_modules_server_combine_module__["a" /* ServerCombineDirectiveModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__index__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_4__typescripts_home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_6__typescripts_header_header_component__["a" /* HeaderComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__typescripts_common_services_storage_service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_9__typescripts_common_services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_5_angular2_cookie_core__["CookieService"]],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/tee/src/app.node.module.js.map

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(12);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_component__["a"]; });

//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/tee/src/index.js.map

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__typescripts_home_home_component__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_router__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ServerRoutingModule; });


var routes = [
    //home
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__typescripts_home_home_component__["a" /* HomeComponent */], data: { name: 'Home', type: 'Page' }, pathMatch: 'full' },
    { path: 'verify-email/:token', component: __WEBPACK_IMPORTED_MODULE_0__typescripts_home_home_component__["a" /* HomeComponent */], data: { name: 'Email', type: 'Verification' }, pathMatch: 'full' },
    { path: 'golf-course/section-1', loadChildren: './typescripts/section-one/section-one.module#SectionOneModule', data: { name: 'Golf', type: 'One' }, pathMatch: 'full' },
    { path: 'golf-course/section-2', loadChildren: './typescripts/section-two/section-two.module#SectionTwoModule', data: { name: 'Golf', type: 'Two' }, pathMatch: 'full' },
    { path: 'golf-course/section-3', loadChildren: './typescripts/section-three/section-three.module#SectionThreeModule', data: { name: 'Golf', type: 'Three' }, pathMatch: 'full' },
    { path: 'golf-course/section-4', loadChildren: './typescripts/section-four/section-four.module#SectionFourModule', data: { name: 'Golf', type: 'Four' }, pathMatch: 'full' },
    { path: 'golf-course/section-add-on', loadChildren: './typescripts/section-add-on/section-add-on.module#SectionAddOnModule', data: { name: 'Golf', type: 'AddOn' }, pathMatch: 'full' },
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
var ServerRoutingModule = __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forRoot(routes);
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/tee/src/server-routing.module.js.map

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directive_date_convertor_directive__ = __webpack_require__(20);
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directive_ng_init_directive__ = __webpack_require__(21);
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__date_convertor_module__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_init_module__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipe_modules_key_module__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__spl_char_module__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ServerCombineDirectiveModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ServerCombineDirectiveModule = (function () {
    function ServerCombineDirectiveModule() {
    }
    ServerCombineDirectiveModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__date_convertor_module__["a" /* DateConvertorDirectiveModule */], __WEBPACK_IMPORTED_MODULE_2__ng_init_module__["a" /* NgInitDirectiveModule */], __WEBPACK_IMPORTED_MODULE_4__spl_char_module__["a" /* NoSpecialCharDirectiveModule */], __WEBPACK_IMPORTED_MODULE_3__pipe_modules_key_module__["a" /* KeysPipeModule */]
            ],
            declarations: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__date_convertor_module__["a" /* DateConvertorDirectiveModule */], __WEBPACK_IMPORTED_MODULE_2__ng_init_module__["a" /* NgInitDirectiveModule */], __WEBPACK_IMPORTED_MODULE_4__spl_char_module__["a" /* NoSpecialCharDirectiveModule */], __WEBPACK_IMPORTED_MODULE_3__pipe_modules_key_module__["a" /* KeysPipeModule */]],
        }), 
        __metadata('design:paramtypes', [])
    ], ServerCombineDirectiveModule);
    return ServerCombineDirectiveModule;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/tee/src/server-combine.module.js.map

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directive_no_special_char_directive__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NoSpecialCharDirectiveModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NoSpecialCharDirectiveModule = (function () {
    function NoSpecialCharDirectiveModule() {
    }
    NoSpecialCharDirectiveModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__directive_no_special_char_directive__["a" /* NoSpecialCharDirective */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__directive_no_special_char_directive__["a" /* NoSpecialCharDirective */]],
        }), 
        __metadata('design:paramtypes', [])
    ], NoSpecialCharDirectiveModule);
    return NoSpecialCharDirectiveModule;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/tee/src/spl-char.module.js.map

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NoSpecialCharDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NoSpecialCharDirective = (function () {
    function NoSpecialCharDirective() {
    }
    NoSpecialCharDirective.prototype.onKeyPress = function (event) {
        var pattern = /[0-9A-Za-z ]/; // Only alphanumeric and space allowed
        var inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            // invalid character, prevent input
            event.preventDefault();
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('keypress', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], NoSpecialCharDirective.prototype, "onKeyPress", null);
    NoSpecialCharDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[noSpecialChar]'
        }), 
        __metadata('design:paramtypes', [])
    ], NoSpecialCharDirective);
    return NoSpecialCharDirective;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/tee/src/no-special-char.directive.js.map

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_services_api_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_services_storage_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angular_router__);
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
            template: __webpack_require__(29),
            providers: [__WEBPACK_IMPORTED_MODULE_2__common_services_api_service__["a" /* ApiService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__common_services_api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__common_services_api_service__["a" /* ApiService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__common_services_storage_service__["a" /* StorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__common_services_storage_service__["a" /* StorageService */]) === 'function' && _c) || Object])
    ], HeaderComponent);
    return HeaderComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/tee/src/header.component.js.map

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipe_key_pipe__ = __webpack_require__(25);
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__);
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
/* 26 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_object__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_function__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_number__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_math__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_string__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_date__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_array__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_map__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_set__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/tee/src/polyfills.js.map

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return routes; });
/**
 * Server-side routes. Only the listed routes support html5pushstate.
 * Has to match client side routes.
 *
 * Index (/) route does not have to be listed here.
 *
 * @example
 * export const routes: string[] = [
 * 'home', 'about'
 * ];
 **/
var routes = [
    '*'
];
//# sourceMappingURL=/Applications/XAMPP/xamppfiles/htdocs/tee/src/server.routes.js.map

/***/ },
/* 28 */
/***/ function(module, exports) {

module.exports = "\n<tee-header></tee-header>\n<router-outlet></router-outlet>\n<!--<footer class=\"footer text-center\"> 2018 &copy; The PUTT </footer>-->\n\n\n"

/***/ },
/* 29 */
/***/ function(module, exports) {

module.exports = "\n\n<!--<div style=\"background-color: #e9ebee;height: 100px;\">-->\n    <!--<div style=\"-->\n    <!--font-size: 24px;-->\n    <!--/*margin-top: 10px;*/-->\n    <!--padding-top: 15px;-->\n    <!--color: white;-->\n    <!--padding-left: 30px;-->\n    <!--\">-->\n        <!--<h1 style=\"text-shadow:#ffffff 3px 3px 0px, rgba(0, 0, 0, 0.2) 6px 6px 0px;margin-left: 20px;color:brown;\">THE PUTT</h1>-->\n\n    <!--</div>-->\n    <!--<div onclick=\"$('#menu').css('display','block')\"   style=\"-->\n    <!--float: right;-->\n    <!--margin-top: -49px;-->\n    <!--margin-right: 40px;-->\n    <!--background-color: brown;-->\n\n    <!--\" >-->\n        <!--<img *ngIf=\"environment.random.userInfo&&environment.random.source\" src=\"/assets/image/hamburger.svg\">-->\n    <!--</div>-->\n<!--</div>-->\n<!--<div id=\"menu\" style=\"display: none;-->\n    <!--position: fixed;-->\n    <!--top: 0;-->\n    <!--left: 0;-->\n    <!--z-index: 5000;-->\n    <!--width: 100%;-->\n    <!--height: 100%;-->\n    <!--background: darkolivegreen;-->\n    <!--overflow-x: scroll;\">-->\n\n    <!--<div onclick=\"$('#menu').css('display','none')\" style=\"color: white;-->\n    <!--float: right;-->\n    <!--font-size: 24px;-->\n    <!--margin-top: 50px;-->\n    <!--margin-right: 50px;\">X</div>-->\n    <!--<ng-container *ngIf=\"environment.random.userInfo&&environment.random.source == 'vendor'\">-->\n        <!--<div>-->\n            <!--<div style=\"margin-top: 10%;-->\n    <!--margin-left: 10%;-->\n    <!--color: white;-->\n    <!--width: 20%;float:left;\">-->\n                <!--<ul>-->\n                    <!--<li>-->\n                        <!--<a style=\"    color: beige;-->\n    <!--font-size: 16px;\" routerLink=\"/vendor/dashboard\">DASHBOARD</a>-->\n                    <!--</li>-->\n                    <!--<li>-->\n                        <!--<a style=\"    color: beige;-->\n    <!--font-size: 16px;\" routerLink=\"/vendor/manage-golf-course\">MANAGE GOLF COURSE</a>-->\n                    <!--</li>-->\n                    <!--<li>-->\n                        <!--<a style=\"    color: beige;-->\n    <!--font-size: 16px;\" routerLink=\"/vendor/update-profile\">UPDATE PROFILE</a>-->\n                    <!--</li>-->\n\n                    <!--<li>-->\n                        <!--<a style=\"    color: beige;-->\n    <!--font-size: 26px;\" (click)=\"logout()\">LOGOUT</a>-->\n                    <!--</li>-->\n                <!--</ul>-->\n            <!--</div>-->\n        <!--</div>-->\n    <!--</ng-container>-->\n    <!--<ng-container *ngIf=\"environment.random.userInfo&&environment.random.source == 'golf_course'\">-->\n     <!--<div onclick=\"$('#menu').css('display','none');\">-->\n         <!--<div style=\"    margin-top: 10%;-->\n    <!--margin-left: 10%;-->\n    <!--color: white;-->\n    <!--width: 20%;float:left;\">-->\n             <!--<ul>-->\n                 <!--<li>-->\n                     <!--<a style=\"    color: beige;-->\n    <!--font-size: 16px;\" routerLink=\"/golf-course/section-one\">SECTION ONE</a>-->\n                 <!--</li>-->\n                 <!--<li>-->\n                     <!--<a style=\"    color: beige;-->\n    <!--font-size: 16px;\" routerLink=\"/golf-course/section-two\">SECTION TWO</a>-->\n                 <!--</li>-->\n                 <!--<li>-->\n                     <!--<a style=\"    color: beige;-->\n    <!--font-size: 16px;\" routerLink=\"/golf-course/section-three\">SECTION THREE</a>-->\n                 <!--</li>-->\n                 <!--<li>-->\n                     <!--<a style=\"    color: beige;-->\n    <!--font-size: 16px;\" routerLink=\"/golf-course/section-four\">SECTION FOUR</a>-->\n                 <!--</li>-->\n             <!--</ul>-->\n         <!--</div>-->\n         <!--<div style=\"    margin-top: 10%;-->\n    <!--margin-left: 10%;-->\n    <!--color: white;-->\n    <!--width: 20%;float:left;\">-->\n             <!--<ul>-->\n                 <!--<li>-->\n                     <!--<a style=\"    color: beige;-->\n    <!--font-size: 16px;\" routerLink=\"/golf-course/closed-days\">CLOSED DAYS</a>-->\n                 <!--</li>-->\n                 <!--<li>-->\n                     <!--<a style=\"    color: beige;-->\n    <!--font-size: 16px;\" routerLink=\"/golf-course/public-holiday\">HOLIDAYS</a>-->\n                 <!--</li>-->\n                 <!--<li>-->\n                     <!--<a style=\"    color: beige;-->\n    <!--font-size: 16px;\" routerLink=\"/golf-course/section-add-on\">ADD ON/RENTALS</a>-->\n                 <!--</li>-->\n                 <!--<li>-->\n                     <!--<a style=\"display:block;color: beige;-->\n    <!--font-size: 26px;\" (click)=\"logout()\">LOGOUT</a>-->\n                 <!--</li>-->\n\n             <!--</ul>-->\n         <!--</div>-->\n         <!--<div style=\"    margin-top: 10%;-->\n    <!--margin-left: 10%;-->\n    <!--color: white;-->\n    <!--width: 20%;float:left;\">-->\n             <!--<ul>-->\n                 <!--<li>-->\n                     <!--<a style=\"    color: beige;-->\n    <!--font-size: 16px;\" routerLink=\"/golf-course/dashboard\">DASHBOARD</a>-->\n                 <!--</li>-->\n                 <!--<li>-->\n                     <!--<a style=\"    color: beige;-->\n    <!--font-size: 16px;\" routerLink=\"/golf-course/update-profile\">UPDATE PROFILE</a>-->\n                 <!--</li>-->\n                 <!--<li>-->\n                     <!--<a style=\"    color: beige;-->\n    <!--font-size: 16px;\" routerLink=\"/golf-course/manage-slot\">MANAGE SLOTS</a>-->\n                 <!--</li>-->\n                 <!--<li>-->\n                     <!--<a style=\"    color: beige;-->\n    <!--font-size: 16px;\" routerLink=\"/golf-course/manage-vendors\">MANAGE VENDORS</a>-->\n                 <!--</li>-->\n             <!--</ul>-->\n         <!--</div>-->\n     <!--</div>-->\n\n    <!--</ng-container>-->\n\n<!--</div>-->\n<div (ngInit)=\"vdahboard()\" *ngIf=\"environment.random.source == 'vendor'&&environment.random.userInfo\"></div>\n<div (ngInit)=\"dashboard()\" *ngIf=\"environment.random.source == 'golf_course'&&environment.random.userInfo\"></div>"

/***/ },
/* 30 */
/***/ function(module, exports) {

module.exports = "<div class=\"left-container main-container\">\n\n    <div class=\"absolute-bottom-content content-bg\">\n        <h1 class=\"card-title\">Golf Course</h1>\n        <h4 class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>\n        <a routerLink=\"login/golf_course\" class=\"btn btn-lg btn-success mt-5\">Login</a> &nbsp; &nbsp;\n        <a routerLink=\"register/golf_course\" class=\"btn btn-lg btn-outline-success mt-5\">Register</a>\n    </div>\n\n</div>\n\n<div class=\"right-container main-container\">\n    <div class=\"absolute-bottom-content content-bg\">\n        <h1 class=\"card-title\">Tee Time Sellers</h1>\n        <h4 class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>\n\n        <a routerLink=\"login/vendor\" class=\"btn btn-lg btn-success mt-5\">Login</a> &nbsp; &nbsp;\n        <a routerLink=\"register/vendor\" class=\"btn btn-lg btn-outline-success mt-5\">Register</a>\n    </div>\n</div>\n\n<div class=\"centered-box\">\n    <img src=\"http://www.hmbrowser.com/uploads/3/0/2/1/30213553/google-videos-logo_2.png\" alt=\"logo\" class=\"\">\n</div>\n\n"

/***/ },
/* 31 */
/***/ function(module, exports) {

module.exports = require("@angular/compiler");

/***/ },
/* 32 */
/***/ function(module, exports) {

module.exports = require("@angular/forms");

/***/ },
/* 33 */
/***/ function(module, exports) {

module.exports = require("@angular/platform-browser");

/***/ },
/* 34 */
/***/ function(module, exports) {

module.exports = require("angular2-express-engine");

/***/ },
/* 35 */
/***/ function(module, exports) {

module.exports = require("angular2-platform-node/__private_imports__");

/***/ },
/* 36 */
/***/ function(module, exports) {

module.exports = require("angular2-universal-polyfills");

/***/ },
/* 37 */
/***/ function(module, exports) {

module.exports = require("compression");

/***/ },
/* 38 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/array");

/***/ },
/* 39 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/date");

/***/ },
/* 40 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/function");

/***/ },
/* 41 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/map");

/***/ },
/* 42 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/math");

/***/ },
/* 43 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/number");

/***/ },
/* 44 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/object");

/***/ },
/* 45 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/parse-float");

/***/ },
/* 46 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/parse-int");

/***/ },
/* 47 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/reflect");

/***/ },
/* 48 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/regexp");

/***/ },
/* 49 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/set");

/***/ },
/* 50 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/string");

/***/ },
/* 51 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/symbol");

/***/ },
/* 52 */
/***/ function(module, exports) {

module.exports = require("core-js/es7/reflect");

/***/ },
/* 53 */
/***/ function(module, exports) {

module.exports = require("express");

/***/ },
/* 54 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ },
/* 56 */,
/* 57 */
/***/ function(module, exports) {

module.exports = "/*\r\nTemplate Name: Admin Template\r\nAuthor: Wrappixel\r\n\r\nFile: scss\r\n*/\r\n@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700);\r\n/*Theme Colors*/\r\n/**\r\n * Table Of Content\r\n *\r\n * \t1. Color system\r\n *\t2. Options\r\n *\t3. Body\r\n *\t4. Typography\r\n *\t5. Breadcrumbs\r\n *\t6. Cards\r\n *\t7. Dropdowns\r\n *\t8. Buttons\r\n *\t9. Typography\r\n *\t10. Progress bars\r\n *\t11. Tables\r\n *\t12. Forms\r\n *\t14. Component\r\n */\r\n/*******************\r\nLogin register and recover password Page\r\n******************/\r\n.login-register {\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  height: 100%;\r\n  width: 100%;\r\n  padding: 6% 0;\r\n  position: relative; }\r\n\r\n.login-box {\r\n  width: 500px;\r\n  margin: 0 auto; }\r\n  .login-box .footer {\r\n    width: 100%;\r\n    left: 0px;\r\n    right: 0px; }\r\n  .login-box .social {\r\n    display: block;\r\n    margin-bottom: 30px; }\r\n\r\n#recoverform {\r\n  display: none; }\r\n\r\n.login-sidebar {\r\n  padding: 0px;\r\n  margin-top: 0px; }\r\n  .login-sidebar .login-box {\r\n    right: 0px;\r\n    position: absolute;\r\n    height: 100%; }\r\n"

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGY2ZTVmYmJjNTFjMjczN2Q4YTYiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy8uL3NyYy9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQuZGV2LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiIiwid2VicGFjazovLy8uL3NyYy9hcHAvdHlwZXNjcmlwdHMvY29tbW9uL3NlcnZpY2VzL3N0b3JhZ2Uuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWxcIiIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3R5cGVzY3JpcHRzL2NvbW1vbi9zZXJ2aWNlcy9hcGkuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3R5cGVzY3JpcHRzL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvaHR0cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLWNvb2tpZS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX18yLjEuMS53b3JrYXJvdW5kLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FwcC5ub2RlLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc2VydmVyLXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvdHlwZXNjcmlwdHMvZGlyZWN0aXZlLW1vZHVsZXMvZGF0ZS1jb252ZXJ0b3IubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvdHlwZXNjcmlwdHMvZGlyZWN0aXZlLW1vZHVsZXMvbmctaW5pdC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC90eXBlc2NyaXB0cy9kaXJlY3RpdmUtbW9kdWxlcy9zZXJ2ZXItY29tYmluZS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC90eXBlc2NyaXB0cy9kaXJlY3RpdmUtbW9kdWxlcy9zcGwtY2hhci5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC90eXBlc2NyaXB0cy9kaXJlY3RpdmUvZGF0ZS1jb252ZXJ0b3IuZGlyZWN0aXZlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvdHlwZXNjcmlwdHMvZGlyZWN0aXZlL25nLWluaXQuZGlyZWN0aXZlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvdHlwZXNjcmlwdHMvZGlyZWN0aXZlL25vLXNwZWNpYWwtY2hhci5kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC90eXBlc2NyaXB0cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3R5cGVzY3JpcHRzL3BpcGUtbW9kdWxlcy9rZXkubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvdHlwZXNjcmlwdHMvcGlwZS9rZXkucGlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9seWZpbGxzLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIucm91dGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvbWFpbi5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvdHlwZXNjcmlwdHMvaGVhZGVyL2hlYWRlci5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvdHlwZXNjcmlwdHMvaG9tZS9ob21lLmh0bWwiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29tcGlsZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyMi1leHByZXNzLWVuZ2luZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXBsYXRmb3JtLW5vZGUvX19wcml2YXRlX2ltcG9ydHNfX1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb21wcmVzc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L2FycmF5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvZGF0ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L2Z1bmN0aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvbWFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvbWF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L251bWJlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L29iamVjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L3BhcnNlLWZsb2F0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvcGFyc2UtaW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvcmVmbGVjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L3JlZ2V4cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L3NldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L3N0cmluZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L3N5bWJvbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM3L3JlZmxlY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvY3NzL25ldy9sb2dpbi1yZWdpc3Rlci1sb2NrLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzlEQSwwQzs7Ozs7OztBQ0FBO0FBQUEsbUZBQW1GO0FBQ25GLDhGQUE4RjtBQUM5RiwwRUFBMEU7QUFDMUUsK0VBQStFO0FBR3hFLElBQU0sV0FBVyxHQUFHO0lBQ3pCLFVBQVUsRUFBRSxJQUFJO0lBQ2QsT0FBTyxFQUFDLHVCQUF1QjtJQUMvQixNQUFNLEVBQUMsRUFBRTtJQUNULE1BQU0sRUFBQyw0QkFBNEI7SUFDckMsY0FBYyxFQUFFO1FBQ2QsWUFBWSxFQUFFLGdGQUFnRjtRQUMxRixjQUFjLEVBQUUsRUFBRTtRQUNsQixjQUFjLEVBQUUsQ0FBQztRQUNqQixnQkFBZ0IsRUFBRSxFQUFFO1FBQ3BCLGdCQUFnQixFQUFFLEVBQUU7UUFDcEIsWUFBWSxFQUFFLENBQUM7UUFDZixjQUFjLEVBQUUsa0RBQWtEO1FBQ2xFLGVBQWUsRUFBRSxtREFBbUQ7UUFDcEUsaUJBQWlCLEVB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QUFFLElBQUksRUFBRSxFQUFFLElBQUksRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLEtBQUssRUFBRSxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUM7SUFFcEssRUFBRSxJQUFJLEVBQUUsdUJBQXVCLEVBQUUsWUFBWSxFQUFFLCtEQUErRCxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLEtBQUssRUFBRSxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUM7SUFFcEssRUFBRSxJQUFJLEVBQUUsdUJBQXVCLEVBQUUsWUFBWSxFQUFFLHFFQUFxRSxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLE9BQU8sRUFBRSxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUM7SUFFNUssRUFBRSxJQUFJLEVBQUUsdUJBQXVCLEVBQUUsWUFBWSxFQUFFLGtFQUFrRSxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLE1BQU0sRUFBRSxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUM7SUFFeEssRUFBRSxJQUFJLEVBQUUsNEJBQTRCLEVBQUUsWUFBWSxFQUFFLHVFQUF1RSxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLE9BQU8sRUFBRSxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUM7SUFFbkwsRUFBRSxJQUFJLEVBQUUsdUJBQXVCLEVBQUUsWUFBWSxFQUFFLDBEQUEwRCxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLE9BQU8sRUFBRSxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUM7SUFFakssRUFBRSxJQUFJLEVBQUUsNEJBQTRCLEVBQUUsWUFBWSxFQUFFLHdFQUF3RSxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLFFBQVEsRUFBRSxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUM7SUFFckwsRUFBRSxJQUFJLEVBQUUsNEJBQTRCLEVBQUUsWUFBWSxFQUFFLHdFQUF3RSxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLFFBQVEsRUFBRSxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUM7SUFFckwsRUFBRSxJQUFJLEVBQUUsd0JBQXdCLEVBQUUsWUFBWSxFQUFFLDREQUE0RCxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLFFBQVEsRUFBRSxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUM7SUFFckssRUFBRSxJQUFJLEVBQUUseUJBQXlCLEVBQUUsWUFBWSxFQUFFLCtEQUErRCxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLFFBQVEsRUFBRSxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUM7SUFFekssRUFBRSxJQUFJLEVBQUUsNEJBQTRCLEVBQUUsWUFBWSxFQUFFLHdFQUF3RSxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLFFBQVEsRUFBRSxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUM7SUFFckwsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxFQUFFLDREQUE0RCxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLFdBQVcsRUFBRSxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUM7SUFFbEssRUFBRSxJQUFJLEVBQUUsdUJBQXVCLEVBQUUsWUFBWSxFQUFFLDBFQUEwRSxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLFdBQVcsRUFBRSxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUM7SUFFckwsRUFBRSxJQUFJLEVBQUUsMkJBQTJCLEVBQUUsWUFBWSxFQUFFLG1GQUFtRixFQUFFLElBQUksRUFBRSxFQUFFLElBQUksRUFBQyxNQUFNLEVBQUUsSUFBSSxF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TUFBaU0sOEJBQThCLDBCQUEwQix3QkFBd0IsV0FBVyxxSEFBcUgsNkJBQTZCLGlMQUFpTCw2QkFBNkIsaUxBQWlMLDZCQUE2QixvTEFBb0wsYUFBYSw2QkFBNkIseUtBQXlLLDhCQUE4QiwwQkFBMEIsd0JBQXdCLFdBQVcscUhBQXFILDZCQUE2Qiw2S0FBNkssNkJBQTZCLHVMQUF1TCw2QkFBNkIsa0xBQWtMLDZCQUE2QixvYzs7Ozs7O0FDQXJsTCxnWEFBZ1gsT0FBTyxvZUFBb2UsT0FBTyw2Ujs7Ozs7O0FDQWwyQiw4Qzs7Ozs7O0FDQUEsMkM7Ozs7OztBQ0FBLHNEOzs7Ozs7QUNBQSxvRDs7Ozs7O0FDQUEsdUU7Ozs7OztBQ0FBLHlEOzs7Ozs7QUNBQSx3Qzs7Ozs7O0FDQUEsOEM7Ozs7OztBQ0FBLDZDOzs7Ozs7QUNBQSxpRDs7Ozs7O0FDQUEsNEM7Ozs7OztBQ0FBLDZDOzs7Ozs7QUNBQSwrQzs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLG9EOzs7Ozs7QUNBQSxrRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQSw0Qzs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsb0M7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7Ozs7OztBQ0FBLHVMQUF1TCwrYUFBK2EsNkJBQTZCLG1DQUFtQyx5Q0FBeUMsbUJBQW1CLGtCQUFrQixvQkFBb0IseUJBQXlCLEVBQUUsb0JBQW9CLG1CQUFtQixxQkFBcUIsRUFBRSwwQkFBMEIsb0JBQW9CLGtCQUFrQixtQkFBbUIsRUFBRSwwQkFBMEIsdUJBQXVCLDRCQUE0QixFQUFFLHNCQUFzQixvQkFBb0IsRUFBRSx3QkFBd0IsbUJBQW1CLHNCQUFzQixFQUFFLGlDQUFpQyxtQkFBbUIsMkJBQTJCLHFCQUFxQixFQUFFLEsiLCJmaWxlIjoic2VydmVyLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb3J5IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vcnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1NSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMGY2ZTVmYmJjNTFjMjczN2Q4YTYiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIFRoZSBmaWxlIGNvbnRlbnRzIGZvciB0aGUgY3VycmVudCBlbnZpcm9ubWVudCB3aWxsIG92ZXJ3cml0ZSB0aGVzZSBkdXJpbmcgYnVpbGQuXG4vLyBUaGUgYnVpbGQgc3lzdGVtIGRlZmF1bHRzIHRvIHRoZSBkZXYgZW52aXJvbm1lbnQgd2hpY2ggdXNlcyBgZW52aXJvbm1lbnQudHNgLCBidXQgaWYgeW91IGRvXG4vLyBgdW5nIGJ1aWxkIC0tZW52PXByb2RgIHRoZW4gYGVudmlyb25tZW50LnByb2QudHNgIHdpbGwgYmUgdXNlZCBpbnN0ZWFkLlxuLy8gVGhlIGxpc3Qgb2Ygd2hpY2ggZW52IG1hcHMgdG8gd2hpY2ggZmlsZSBjYW4gYmUgZm91bmQgaW4gYGFuZ3VsYXItY2xpLmpzb25gLlxuXG5cbmV4cG9ydCBjb25zdCBlbnZpcm9ubWVudCA9IHtcbiAgcHJvZHVjdGlvbjogdHJ1ZSxcbiAgICBiYXNlVXJsOidodHRwOi8vbG9jYWxob3N0OjQyMDAnLFxuICAgIHJhbmRvbTpbXSxcbiAgICBhcGlVcmw6J2h0dHA6Ly8xMy41OS4xMjguMjM4OjgwMDAvJyxcbiAgZm9ybVZhbGlkYXRpb246IHtcbiAgICBlbWFpbFBhdHRlcm46IFwiXltBLVphLXowLTkuXyUrLV0rQFtBLVphLXowLTkuLV0rWy5dKFtBLVphLXpdezIsNX18W0EtWmEteil7Mn1bLl1bQS1aYS16XXsyfSkkXCIsXG4gICAgICAgIGVtYWlsTWF4bGVuZ3RoOiA1MCxcbiAgICAgICAgZW1haWxNaW5sZW5ndGg6IDYsXG4gICAgICAgIHBob25lTm9NaW5sZW5ndGg6IDEwLFxuICAgICAgICBwaG9uZU5vTWF4bGVuZ3RoOiAxNCxcbiAgICAgICAgb3RwTWlubGVuZ3RoOiA2LFxuICAgICAgICB0d2l0dGVyUGF0dGVybjogJyheaHR0cHM6Ly93d3cudHdpdHRlci5jb20vW0EtWmEtejAtOS5fJSstXSskfFwiXCIpJyxcbiAgICAgICAgZmFjZWJvb2tQYXR0ZXJuOiAnKF5odHRwczovL3d3dy5mYWNlYm9vay5jb20vW0EtWmEtejAtOS5fJSstXSskfFwiXCIpJyxcbiAgICAgICAgZ29vZ2xlUGx1c1BhdHRlcm46ICcoXmh0dHBzOi8vcGx1cy5nb29nbGUuY29tL1swLTldKyR8XCJcIiknLFxuICAgICAgICBwYXNzV29yZExlbmd0aDogNixcbiAgICAgICAgdXNlckJpbzogMjAwXG4gIH0sXG4gIFxuICBcbn07XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQuZGV2LnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvcm91dGVyXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xuaW1wb3J0IHtDb29raWVTZXJ2aWNlfSBmcm9tICdhbmd1bGFyMi1jb29raWUvY29yZSc7XG5pbXBvcnQgeyBpc0Jyb3dzZXIgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuXG5kZWNsYXJlIHZhciBzd2FsOmFueTtcbmRlY2xhcmUgdmFyIGhpZGVJZDphbnk7XG5kZWNsYXJlIHZhciAkOmFueTtcblxuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdG9yYWdlU2VydmljZSB7XG4gIGVudmlyb25tZW50OmFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHpvbmU6Tmdab25lLCBwcml2YXRlIHJvdXRlcjpSb3V0ZXIsIHByaXZhdGUgX2Nvb2tpZTpDb29raWVTZXJ2aWNlKSB7XG4gICAgdGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xuICB9XG4gIFxuXG5cblxuICB1c2VyQ2hlY2tlcih1cGRhdGUpe1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZihpc0Jyb3dzZXIpIHtcbiAgICAgICAgbGV0IGNvb2tpZXMgPSB0aGlzLl9jb29raWUuZ2V0QWxsKCk7XG4gICAgICAgIGlmICh0aGlzLmVudmlyb25tZW50LnJhbmRvbS51c2VySW5mbykge1xuICAgICAgICAgIHRoaXMuZW52aXJvbm1lbnQucmFuZG9tLnNvdXJjZSA9IHRoaXMuZW52aXJvbm1lbnQucmFuZG9tLnVzZXJJbmZvLnNvdXJjZTtcbiAgICAgICAgICByZXNvbHZlKHRoaXMuZW52aXJvbm1lbnQucmFuZG9tLnVzZXJJbmZvKTtcbiAgICAgICAgfSBlbHNlIGlmIChjb29raWVzWydpZCddICYmIGNvb2tpZXNbJ3Rva2VuJ10gJiYgY29va2llc1snc291cmNlJ10pIHtcbiAgICAgICAgICB0aGlzLmVudmlyb25tZW50LnJhbmRvbS51c2VySW5mbyA9IHtpZDpjb29raWVzWydpZCddLHRva2VuOmNvb2tpZXNbJ3Rva2VuJ10sc291cmNlOmNvb2tpZXNbJ3NvdXJjZSddfTtcbiAgICAgICAgICB0aGlzLmVudmlyb25tZW50LnJhbmRvbS5zb3VyY2UgPSB0aGlzLmVudmlyb25tZW50LnJhbmRvbS51c2VySW5mby5zb3VyY2U7XG4gICAgICAgICAgcmVzb2x2ZSh0aGlzLmVudmlyb25tZW50LnJhbmRvbS51c2VySW5mbyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9KTtcbiAgfVxuXG5cbiAgXG5cbiAgcHJvbUxvZ0luKCl7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmKGlzQnJvd3Nlcikge1xuICAgICAgICBsZXQgY29va2llcyA9IHRoaXMuX2Nvb2tpZS5nZXRBbGwoKTtcbiAgICAgICAgaWYgKHRoaXMuZW52aXJvbm1lbnQucmFuZG9tLnVzZXJJbmZvKSB7XG4gICAgICAgICAgdGhpcy5lbnZpcm9ubWVudC5yYW5kb20uc291cmNlID0gdGhpcy5lbnZpcm9ubWVudC5yYW5kb20udXNlckluZm8uc291cmNlO1xuICAgICAgICAgIHJlc29sdmUodGhpcy5lbnZpcm9ubWVudC5yYW5kb20udXNlckluZm8pO1xuICAgICAgICB9IGVsc2UgaWYgKGNvb2tpZXNbJ2lkJ10gJiYgY29va2llc1sndG9rZW4nXSAmJiBjb29raWVzWydzb3VyY2UnXSkge1xuICAgICAgICAgIHRoaXMuZW52aXJvbm1lbnQucmFuZG9tLnVzZXJJbmZvID0ge2lkOmNvb2tpZXNbJ2lkJ10sdG9rZW46Y29va2llc1sndG9rZW4nXSxzb3VyY2U6Y29va2llc1snc291cmNlJ119O1xuICAgICAgICAgIHRoaXMuZW52aXJvbm1lbnQucmFuZG9tLnNvdXJjZSA9IHRoaXMuZW52aXJvbm1lbnQucmFuZG9tLnVzZXJJbmZvLnNvdXJjZTtcbiAgICAgICAgICByZXNvbHZlKHRoaXMuZW52aXJvbm1lbnQucmFuZG9tLnVzZXJJbmZvKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJyk7XG4gICAgICAgICAgc3dhbCgnQWNjZXNzIERlbmllZCcsJ1lvdSB3aWxsIG5lZWQgdG8gc2lnbiBpbiBmaXJzdCcsJ2Vycm9yJyk7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9KTtcbiAgfVxuXG4gIHN0b3JlQ29va2llcyhuYW1lLHZhbCx0aW1lKXtcbiAgICBkb2N1bWVudC5jb29raWU9bmFtZStcIj1cIit2YWwrXCI7IGV4cGlyZXM9XCIrdGltZStcIjsgcGF0aD0vXCI7XG4gICB9XG4gIFxuXG4gIGRlbGV0ZVN0b3JhZ2UoKXtcblxuICAgIGxldCBleHBpcmVzID0gXCJUaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAxIEdNVFwiO1xuICAgIGxldCBkID0gbmV3IERhdGUoKTtcbiAgICBkLnNldFRpbWUoZC5nZXRUaW1lKCkgKyAoMjQqNjAqNjAqMTAwMCkpO1xuICAgIGxldCBjb29raWVzID0gdGhpcy5fY29va2llLmdldEFsbCgpO1xuICAgIC8vIGlmKGlzQnJvd3Nlcil7XG4gICAgLy8gICAgIGRlbGV0ZUNvb2tpZSgpO1xuICAgIC8vIH1cbiAgICBmb3IodmFyIGkgaW4gY29va2llcyl7XG4gICAgICBpZihpLmluZGV4T2YoJ0Nha2VDb29raWUnKSA+IC0xKXtcbiAgICAgICAgdGhpcy5fY29va2llLnJlbW92ZShpLHtwYXRoOicvJ30pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9jb29raWUucmVtb3ZlKFwibWM0a1BhcmVudFRva2VuSWRcIix7cGF0aDonLyd9KTtcbiAgICB0aGlzLl9jb29raWUucmVtb3ZlKFwiYXBpVXNlcklkXCIse3BhdGg6Jy8nfSk7XG4gICAgdGhpcy5fY29va2llLnB1dChcIm1jNGtQYXJlbnREVG9rZW5JZFwiLCdsb2dvdXQnICx7cGF0aDonLycsZXhwaXJlczpkLnRvVVRDU3RyaW5nKCl9KTtcbiAgICB0aGlzLmVudmlyb25tZW50LnVzZXJJbmZvID0gW107XG4gICAgdGhpcy5lbnZpcm9ubWVudC5sb2dnZWRJbiA9IGZhbHNlO1xuICAgIHRoaXMuZW52aXJvbm1lbnQubGFuZ1NlbGVjdGlvbiA9IFtdO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCduZ1N0b3JhZ2UtdXNlckluZm8nKTtcblxuXG4gIH1cblxuXG5cblxuXG5cblxuICBzaG93TWVzc2FnZShtZXNzYWdlLHR5cGUpe1xuICAgICAgaWYodHlwZSA9PSAnZXJyb3InIHx8IHR5cGUgPT0gJ2ZhaWx1cmUnKXtcbiAgICAgICAgdGhpcy5lbnZpcm9ubWVudC5yYW5kb20uZXJyb3JJbWcgPSB0aGlzLmVudmlyb25tZW50LmNkblBhcmVudGluZ1BhdGgrJ2Vycm9yX2ltZyc7XG4gICAgICAgJCgnI2Vycm9yTWVzc2FnZScpLnRleHQobWVzc2FnZSk7XG4gICAgICAgICQoXCIjc2VhcmNoLXBvcHVwOFwiKS5hZGRDbGFzcygnY21uX21vZGFsX2FjdGl2ZScpO1xuICAgICAgfWVsc2UgaWYodHlwZSA9PSAnc3VjY2Vzcycpe1xuICAgICAgICB0aGlzLmVudmlyb25tZW50LnJhbmRvbS5zdWNjZXNzSW1nID0gdGhpcy5lbnZpcm9ubWVudC5jZG5QYXJlbnRpbmdQYXRoKydzdWNjZXNzX2ltZyc7XG4gICAgICAgICQoJyNzdWNjZXNzTWVzc2FnZScpLnRleHQobWVzc2FnZSk7XG4gICAgICAgICQoXCIjc2VhcmNoLXBvcHVwN1wiKS5hZGRDbGFzcygnY21uX21vZGFsX2FjdGl2ZScpO1xuICAgICAgfVxuICB9XG5cbiAgdXBkYXRlRW52aXJvbm1lbnQocGFyYW1zKXtcbiAgXG4gICAgICAgIGZvcihsZXQgaSBpbiBwYXJhbXMpe1xuICAgICAgICAgICAgdGhpcy5lbnZpcm9ubWVudC51c2VySW5mb1tpXSA9IHBhcmFtc1tpXTtcbiAgICAgICAgfVxuICAgICAgICAgXG4gICAgICAgIHRoaXMuem9uZS5ydW4oKCk9PntcbiAgICAgICAgICAgIHRoaXMuZW52aXJvbm1lbnQudXNlckluZm8gPSAgdGhpcy5lbnZpcm9ubWVudC51c2VySW5mbztcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLmVudmlyb25tZW50LnVzZXJJbmZvO1xuICAgIH1cblxuXG5cblxuICB1c2VyRGV0YWlsKHBhcmFtcyl7XG4gICAgdGhpcy5lbnZpcm9ubWVudC5yYW5kb20udXNlckRldGFpbCA9IHRoaXMuZW52aXJvbm1lbnQucmFuZG9tLnVzZXJEZXRhaWw/dGhpcy5lbnZpcm9ubWVudC5yYW5kb20udXNlckRldGFpbDpuZXcgQXJyYXkoKTtcbiAgICBmb3IodmFyIGkgaW4gcGFyYW1zKXtcbiAgICAgIHRoaXMuZW52aXJvbm1lbnQucmFuZG9tLnVzZXJEZXRhaWxbaV0gPSBwYXJhbXNbaV07XG4gICAgfVxuICB9XG5cbiBcbiAgXG4gICAgXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3R5cGVzY3JpcHRzL2NvbW1vbi9zZXJ2aWNlcy9zdG9yYWdlLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWxcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnO1xuaW1wb3J0IHsgVGVlUmVzcG9uc2UgfSBmcm9tICcuL3Jlc3BvbnNlJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlJztcbmltcG9ydCB7IFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9zdG9yYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyLEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5kZWNsYXJlIHZhciAkOmFueTtcbmRlY2xhcmUgdmFyIHNldFNlbGVjdDphbnk7XG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBpU2VydmljZSB7XG4gIHVzZXJJbmZvOmFueTt1cmxMaXN0OmFueTtlbnZpcm9ubWVudDphbnk7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgem9uZTpOZ1pvbmUsIHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSByb3V0ZXI6Um91dGVyKSB7XG4gICAgdGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xuICAgIGxldCB1cmwgPSBbJ2h0dHA6Ly8xMy41Ny4yMTIuMTkzOjgwMDAvJywnJ107XG4gICAgdGhpcy51cmxMaXN0ID0gdXJsO1xuICAgIHRoaXMudXNlckluZm8gPSAnJ1xuICB9XG5cblxuXG5cbiAgZ2V0QXBpTWM0ayAodXJsLCBiYXNlVXJsPyxoZWFkZXI/KTogUHJvbWlzZTxUZWVSZXNwb25zZT57XG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIGlmKHRoaXMuZW52aXJvbm1lbnQucmFuZG9tLnVzZXJJbmZvJiZoZWFkZXIpe1xuICAgICAgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnaWQnIDp0aGlzLmVudmlyb25tZW50LnJhbmRvbS51c2VySW5mby5pZCwndG9rZW4nOnRoaXMuZW52aXJvbm1lbnQucmFuZG9tLnVzZXJJbmZvLnRva2VuLCdzb3VyY2UnOnRoaXMuZW52aXJvbm1lbnQucmFuZG9tLnNvdXJjZX0pO1xuICAgIH1cbiAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XG4gICAgdmFyIHVybFJlcSA9IGJhc2VVcmw/dGhpcy51cmxMaXN0W2Jhc2VVcmxdOnRoaXMudXJsTGlzdFswXTtcbiAgICB1cmxSZXEgPSB1cmxSZXErdXJsO1xuICAgIHVybFJlcSA9IGJhc2VVcmw9PTA/dXJsUmVxK3RoaXMudXNlckluZm86dXJsUmVxO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybFJlcSxvcHRpb25zKVxuICAgICAgICAudG9Qcm9taXNlKClcbiAgICAgICAgLnRoZW4odGhpcy5yZXR1cm5EYXRhKVxuICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuXG5cblxuICBwb3N0QXBpTWM0ayAodXJsLHBhcmFtcyxmb3JtZGF0YT8saGVhZGVyPyxiYXNlVXJsPyk6IFByb21pc2U8VGVlUmVzcG9uc2U+e1xuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLCdzb3VyY2UnOnRoaXMuZW52aXJvbm1lbnQucmFuZG9tLnNvdXJjZX0pO1xuICAgIGlmKHRoaXMuZW52aXJvbm1lbnQucmFuZG9tLnVzZXJJbmZvJiZoZWFkZXIpe1xuICAgICAgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnaWQnIDp0aGlzLmVudmlyb25tZW50LnJhbmRvbS51c2VySW5mby5pZCwndG9rZW4nOnRoaXMuZW52aXJvbm1lbnQucmFuZG9tLnVzZXJJbmZvLnRva2VuLCdzb3VyY2UnOnRoaXMuZW52aXJvbm1lbnQucmFuZG9tLnNvdXJjZX0pO1xuICAgIH1cbiAgICBpZihmb3JtZGF0YSl7XG4gICAgICBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsJ3NvdXJjZSc6dGhpcy5lbnZpcm9ubWVudC5yYW5kb20uc291cmNlfSk7XG4gICAgfVxuICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcbiAgICB2YXIgdXJsUmVxID0gYmFzZVVybD90aGlzLnVybExpc3RbYmFzZVVybF06dGhpcy51cmxMaXN0WzBdO1xuICAgIHVybFJlcSA9IHVybFJlcSt1cmwrdGhpcy51c2VySW5mbztcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsUmVxLCBwYXJhbXMsIG9wdGlvbnMpXG4gICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAudGhlbih0aGlzLnJldHVybkRhdGEpXG4gICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuICBcblxuICBcblxuICBwdXRBcGlNYzRrICh1cmwscGFyYW1zLGJhc2VVcmw/KTogUHJvbWlzZTxUZWVSZXNwb25zZT57XG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XG4gICAgaWYodGhpcy5lbnZpcm9ubWVudC5yYW5kb20udXNlckluZm8pe1xuICAgICAgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnaWQnIDp0aGlzLmVudmlyb25tZW50LnJhbmRvbS51c2VySW5mby5pZCwndG9rZW4nOnRoaXMuZW52aXJvbm1lbnQucmFuZG9tLnVzZXJJbmZvLnRva2VuLCdzb3VyY2UnOnRoaXMuZW52aXJvbm1lbnQucmFuZG9tLnNvdXJjZX0pO1xuICAgIH1cbiAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XG4gICAgdmFyIHVybFJlcSA9IGJhc2VVcmw/dGhpcy51cmxMaXN0W2Jhc2VVcmxdOnRoaXMudXJsTGlzdFswXTtcbiAgICB1cmxSZXEgPSB1cmxSZXErdXJsK3RoaXMudXNlckluZm87XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodXJsUmVxLCBwYXJhbXMsIG9wdGlvbnMpXG4gICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAudGhlbih0aGlzLnJldHVybkRhdGEpXG4gICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG5cbiAgXG5cbiAgZGVsZXRlQXBpTWM0ayAodXJsLGJhc2VVcmwpOiBQcm9taXNlPFRlZVJlc3BvbnNlPntcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcbiAgICBpZih0aGlzLmVudmlyb25tZW50LmxvZ2dlZEluKXtcbiAgICAgIGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J2lkJyA6dGhpcy5lbnZpcm9ubWVudC51c2VySW5mby5pZCwnbWM0a1Rva2VuJzp0aGlzLmVudmlyb25tZW50LnVzZXJJbmZvLm1jNGtUb2tlbn0pO1xuICAgIH1cbiAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XG4gICAgdmFyIHVybFJlcSA9IGJhc2VVcmw/dGhpcy51cmxMaXN0W2Jhc2VVcmxdOnRoaXMudXJsTGlzdFswXTtcbiAgICB1cmxSZXEgPSB1cmxSZXErdXJsO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHVybFJlcSwgb3B0aW9ucylcbiAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAgIC50aGVuKHRoaXMucmV0dXJuRGF0YSlcbiAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgaW1hZ2VBcGkodXJsLGZpbGVEYXRhLGJhc2VVcmw/KTogUHJvbWlzZTxUZWVSZXNwb25zZT57XG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J2lkJyA6dGhpcy5lbnZpcm9ubWVudC5yYW5kb20udXNlckluZm8uaWQsJ3Rva2VuJzp0aGlzLmVudmlyb25tZW50LnJhbmRvbS51c2VySW5mby50b2tlbiwnc291cmNlJzp0aGlzLmVudmlyb25tZW50LnJhbmRvbS5zb3VyY2V9KTtcbiAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XG4gICAgdmFyIHVybFJlcSA9IGJhc2VVcmw/dGhpcy51cmxMaXN0W2Jhc2VVcmxdOnRoaXMudXJsTGlzdFswXTtcbiAgICB1cmxSZXEgPSB1cmxSZXErdXJsK3RoaXMudXNlckluZm87XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybFJlcSwgZmlsZURhdGEsIG9wdGlvbnMpXG4gICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAudGhlbih0aGlzLnJldHVybkRhdGEpXG4gICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG5cbiAgcHJpdmF0ZSByZXR1cm5EYXRhKHJlczogUmVzcG9uc2UpIHtcbiAgICBsZXQgYm9keSA9IHJlcy5qc29uKCk7XG4gICAgcmV0dXJuIGJvZHkgfHwgeyB9O1xuICB9XG5cblxuICBwcml2YXRlIGhhbmRsZUVycm9yIChlcnJvcjogUmVzcG9uc2UgfCBhbnkpIHtcbiAgICBsZXQgZXJyTXNnOiBzdHJpbmc7XG4gICAgaWYgKGVycm9yIGluc3RhbmNlb2YgUmVzcG9uc2UpIHtcbiAgICAgIGNvbnN0IGJvZHkgPSBlcnJvci5qc29uKCkgfHwgJyc7XG4gICAgICBjb25zdCBlcnIgPSBib2R5LmVycm9yIHx8IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xuICAgICAgZXJyTXNnID0gYCR7ZXJyb3Iuc3RhdHVzfSAtICR7ZXJyb3Iuc3RhdHVzVGV4dCB8fCAnJ30gJHtlcnJ9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgZXJyTXNnID0gZXJyb3IubWVzc2FnZSA/IGVycm9yLm1lc3NhZ2UgOiBlcnJvci50b1N0cmluZygpO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyTXNnKTtcbiAgfVxuXG4gXG4gIFxuICBcbiAgSnNOZXdQcm9taXNlKHVybCxpZCl7XG4gICAgdmFyIF9zZWxmID0gdGhpcztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpKSB7XG4gICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgdmFyIHBvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgICAgcG8udHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgICAgICAgIHBvLmlkID0gaWQ7XG4gICAgICAgICAgcG8uYXN5bmMgPSB0cnVlO1xuICAgICAgICAgIHBvLnNyYyA9IHVybDtcbiAgICAgICAgICB2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gICAgICAgICAgaGVhZC5hcHBlbmRDaGlsZChwbyk7XG4gICAgICAgICAgcG8ub25sb2FkID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfSkoKTtcbiAgICB9KTtcbiAgfVxuXG4gXG5cblxuICBcbiAgdXNlckRldGFpbChsaW5rKXtcbiAgICB0aGlzLmdldEFwaU1jNGsoJ2FwaS92MS9mb3Jtcy9kYXNoYm9hcmQnLDAsdHJ1ZSkudGhlbigodmFsdWUpPT57XG4gICAgICBpZih2YWx1ZSYmdmFsdWUuZGF0YSl7XG4gICAgICAgIHRoaXMuZW52aXJvbm1lbnQucmFuZG9tLnVzZXJEZXRhaWwgPSB2YWx1ZS5kYXRhO1xuICAgICAgICB0aGlzLmRlZmF1bHQodmFsdWUuZGF0YS5kZWZhdWx0cyk7XG4gICAgICAgIGlmKGxpbmspe1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwobGluayk7XG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmVudmlyb25tZW50LnJhbmRvbS51c2VyRGV0YWlsJiZ0aGlzLmVudmlyb25tZW50LnJhbmRvbS51c2VyRGV0YWlsLmdjX2Jhc2ljX2luZm8mJiF0aGlzLmVudmlyb25tZW50LnJhbmRvbS51c2VyRGV0YWlsLmdjX2Jhc2ljX2luZm8udGltZV96b25lKXtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCdnb2xmLWNvdXJzZS9zZWN0aW9uLW9uZScpO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLmVudmlyb25tZW50LnJhbmRvbS51c2VyRGV0YWlsJiYhKHRoaXMuZW52aXJvbm1lbnQucmFuZG9tLnVzZXJEZXRhaWwud2Vla2VuZHMgfHwgdGhpcy5lbnZpcm9ubWVudC5yYW5kb20udXNlckRldGFpbC5nY19iYXNpY19pbmZvLndlZWtkYXlzKSl7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnZ29sZi1jb3Vyc2Uvc2VjdGlvbi10d28nKTtcbiAgICAgICAgfWVsc2UgaWYodGhpcy5lbnZpcm9ubWVudC5yYW5kb20udXNlckRldGFpbCYmdGhpcy5lbnZpcm9ubWVudC5yYW5kb20udXNlckRldGFpbC5zZWFzb25zX2luZm8mJnRoaXMuZW52aXJvbm1lbnQucmFuZG9tLnVzZXJEZXRhaWwuc2Vhc29uc19pbmZvLmxlbmd0aCA9PSAwKXtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCdnb2xmLWNvdXJzZS9zZWN0aW9uLXRocmVlJyk7XG4gICAgICAgIH1lbHNlIGlmKHRoaXMuZW52aXJvbm1lbnQucmFuZG9tLnVzZXJEZXRhaWwmJnRoaXMuZW52aXJvbm1lbnQucmFuZG9tLnVzZXJEZXRhaWwucmF0ZXNfaW5mbyYmdGhpcy5lbnZpcm9ubWVudC5yYW5kb20udXNlckRldGFpbC5yYXRlc19pbmZvLmxlbmd0aCA9PSAwKXtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCdnb2xmLWNvdXJzZS9zZWN0aW9uLWZvdXInKTtcbiAgICAgICAgfWVsc2UgaWYodGhpcy5yb3V0ZXIudXJsID09ICcvJyB8fCB0aGlzLnJvdXRlci51cmwuaW5kZXhPZignbG9naW4nKSA+LSAxIHx8IHRoaXMucm91dGVyLnVybC5pbmRleE9mKCdyZWdpc3RlcicpID4tIDEpe1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJ2dvbGYtY291cnNlL2Rhc2hib2FyZCcpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRoaXMucm91dGVyLnVybCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIFxuICB1c2VyRGV0YWlsVmVuZG9yKGxpbmspe1xuICAgIHRoaXMuZ2V0QXBpTWM0aygnYXBpL3YxL3ZlbmRvcnMvZGFzaGJvYXJkJywwLHRydWUpLnRoZW4oKHZhbHVlKT0+e1xuICAgICAgaWYodmFsdWUmJnZhbHVlLmRhdGEpe1xuICAgICAgICB0aGlzLmVudmlyb25tZW50LnJhbmRvbS51c2VyRGV0YWlsID0gdmFsdWUuZGF0YTtcbiAgICAgICAgaWYobGluayl7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChsaW5rKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlZmF1bHQodmFsdWUuZGF0YS5kZWZhdWx0cyk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGRlZmF1bHQodmFsdWUpe1xuICAgIHRoaXMuZW52aXJvbm1lbnQucmFuZG9tLmtleXMgPSB2YWx1ZTtcbiAgICB0aGlzLmVudmlyb25tZW50LnJhbmRvbS5rZXlzWydvdGhlcnMnXSA9IG5ldyBBcnJheSgpO1xuICAgIGxldCBwYXJhbSA9IFtdO1xuICAgIGZvcih2YXIgaSBpbiB0aGlzLmVudmlyb25tZW50LnJhbmRvbS5rZXlzKXtcbiAgICAgIGZvcih2YXIgaiBpbiB0aGlzLmVudmlyb25tZW50LnJhbmRvbS5rZXlzW2ldKXtcbiAgICAgICAgcGFyYW1bdGhpcy5lbnZpcm9ubWVudC5yYW5kb20ua2V5c1tpXVtqXS5uYW1lXSA9IHRoaXMuZW52aXJvbm1lbnQucmFuZG9tLmtleXNbaV1bal0uaWQ7XG4gICAgICAgIHBhcmFtW3RoaXMuZW52aXJvbm1lbnQucmFuZG9tLmtleXNbaV1bal0uaWRdID0gdGhpcy5lbnZpcm9ubWVudC5yYW5kb20ua2V5c1tpXVtqXS5uYW1lO1xuICAgICAgfVxuXG4gICAgfVxuICAgIHRoaXMuZW52aXJvbm1lbnQucmFuZG9tLmtleXNbJ290aGVycyddICA9IHBhcmFtO1xuICB9XG4gIFxuICAgXG4gIFxufVxuXG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC90eXBlc2NyaXB0cy9jb21tb24vc2VydmljZXMvYXBpLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLy4uL2NvbW1vbi9zZXJ2aWNlcy9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSB9IGZyb20gJy4vLi4vY29tbW9uL3NlcnZpY2VzL3N0b3JhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4uLy4uLy4uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuXG5kZWNsYXJlIHZhciAkOmFueTtcblxuQENvbXBvbmVudCh7XG4gIGVuY2Fwc3VsYXRpb246Vmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc2VsZWN0b3I6J2hvbWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vaG9tZS5odG1sJyxcbiAgc3R5bGVVcmxzOlsnLi4vLi4vLi4vYXNzZXRzL2Nzcy9uZXcvbG9naW4tcmVnaXN0ZXItbG9jay5jc3MnXVxufSlcblxuXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gXG4gICAgXG4gIGVudmlyb25tZW50OmFueTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc3RvcmFnZTpTdG9yYWdlU2VydmljZSxwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge1xuICAgIHRoaXMuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgICAgdGhpcy5fc3RvcmFnZS51c2VyQ2hlY2tlcihmYWxzZSkudGhlbigodmFsKT0+e1xuICAgICAgICAgIGlmKHZhbCYmdGhpcy5lbnZpcm9ubWVudC5yYW5kb20uc291cmNlID09ICdnb2xmX2NvdXJzZScpe1xuICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoJ2dvbGYtY291cnNlL2Rhc2hib2FyZCcpO1xuICAgICAgICAgIH1lbHNlIGlmICh2YWwmJnRoaXMuZW52aXJvbm1lbnQucmFuZG9tLnNvdXJjZSA9PSd2ZW5kb3InKXtcbiAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKCd2ZW5kb3IvZGFzaGJvYXJkJyk7XG4gICAgICAgICAgfVxuICAgICAgfSlcbiAgIFxuXG4gICBcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgICBcbiAgIFxuICB9XG4gICAgXG4gXG5cblxuICBcblxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3R5cGVzY3JpcHRzL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9odHRwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvaHR0cFwiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLWNvb2tpZS9jb3JlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItY29va2llL2NvcmVcIlxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2VcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2VcIlxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIHRoZSBwb2x5ZmlsbHMgbXVzdCBiZSB0aGUgZmlyc3QgdGhpbmcgaW1wb3J0ZWRcbiAqL1xuaW1wb3J0ICcuL3BvbHlmaWxscy50cyc7XG5pbXBvcnQgJy4vX18yLjEuMS53b3JrYXJvdW5kLnRzJzsgLy8gdGVtcG9yYXJ5IHVudGlsIDIuMS4xIHRoaW5ncyBhcmUgcGF0Y2hlZCBpbiBDb3JlXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCAqIGFzIGNvbXByZXNzaW9uIGZyb20gJ2NvbXByZXNzaW9uJztcbmltcG9ydCB7IGNyZWF0ZUVuZ2luZSB9IGZyb20gJ2FuZ3VsYXIyLWV4cHJlc3MtZW5naW5lJztcbmltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC9hcHAubm9kZS5tb2R1bGUnO1xuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XG5pbXBvcnQgeyByb3V0ZXMgfSBmcm9tICcuL3NlcnZlci5yb3V0ZXMnO1xuXG4vLyBBcHBcblxuY29uc3QgYXBwICA9IGV4cHJlc3MoKTtcbmNvbnN0IFJPT1QgPSBwYXRoLmpvaW4ocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uJykpO1xuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgNTAwMDtcblxuLyoqXG4gKiBlbmFibGUgcHJvZCBtb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50c1xuICovXG5pZiAoZW52aXJvbm1lbnQucHJvZHVjdGlvbikge1xuICBlbmFibGVQcm9kTW9kZSgpO1xufVxuXG4vKipcbiAqIEV4cHJlc3MgVmlld1xuICovXG5hcHAuZW5naW5lKCcuaHRtbCcsIGNyZWF0ZUVuZ2luZSh7fSkpO1xuYXBwLnNldCgndmlld3MnLCBwYXRoLmpvaW4oUk9PVCwgJ2NsaWVudCcpKTtcbmFwcC5zZXQoJ3ZpZXcgZW5naW5lJywgJ2h0bWwnKTtcblxuLyoqXG4gKiBFbmFibGUgY29tcHJlc3Npb25cbiAqL1xuYXBwLnVzZShjb21wcmVzc2lvbigpKTsgXG4vKipcbiogUHV0IGFsbCAzMDEgcmVkaXJlY3QgdXJsc1xuKi9cblxuXG4vKipcbiAqIHNlcnZlIHN0YXRpYyBmaWxlc1xuICovXG5hcHAudXNlKCcvJywgZXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKFJPT1QsICdjbGllbnQnKSwge2luZGV4OiBmYWxzZSxzZXRIZWFkZXJzOiBzZXRIZWFkZXJzfSkpO1xuXG5cbmZ1bmN0aW9uIHNldEhlYWRlcnMocmVzKSB7XG4gICByZXMuc2V0SGVhZGVyKFwiQ2FjaGUtQ29udHJvbFwiLCBcInB1YmxpYywgbWF4LWFnZT0yNTkyMDAwXCIpO1xuICAgIHJlcy5zZXRIZWFkZXIoXCJFeHBpcmVzXCIsIG5ldyBEYXRlKERhdGUubm93KCkgKyAyNTkyMDAwMDAwKS50b1VUQ1N0cmluZygpKTtcbiBcbn1cbi8qKlxuICogcGxhY2UgeW91ciBhcGkgcm91dGVzIGhlcmVcbiAqL1xuLy8gYXBwLnVzZSgnL2FwaScsIGFwaSk7XG5cbi8qKlxuICogYm9vdHN0cmFwIHVuaXZlcnNhbCBhcHBcbiAqIEBwYXJhbSByZXFcbiAqIEBwYXJhbSByZXNcbiAqL1xuZnVuY3Rpb24gbmdBcHAocmVxOiBhbnksIHJlczogYW55KSB7XG4gIHJlcy5yZW5kZXIoJ2luZGV4Jywge1xuICAgIHJlcSxcbiAgICByZXMsXG4gICAgbmdNb2R1bGU6IEFwcE1vZHVsZSxcbiAgICBwcmVib290OiBmYWxzZSxcbiAgICBiYXNlVXJsOiAnLycsXG4gICAgcmVxdWVzdFVybDogcmVxLm9yaWdpbmFsVXJsLFxuICAgIG9yaWdpblVybDogcmVxLmhvc3RuYW1lXG4gIH0pO1xufVxuXG4vKipcbiAqIHVzZSB1bml2ZXJzYWwgZm9yIHNwZWNpZmljIHJvdXRlc1xuICovXG5hcHAuZ2V0KCcvJywgbmdBcHApO1xucm91dGVzLmZvckVhY2gocm91dGUgPT4ge1xuICBhcHAuZ2V0KGAvJHtyb3V0ZX1gLCBuZ0FwcCk7XG4gIGFwcC5nZXQoYC8ke3JvdXRlfS8qYCwgbmdBcHApO1xufSk7XG5cblxuIFxuIFxuXG4vKipcbiAqIGlmIHlvdSB3YW50IHRvIHVzZSB1bml2ZXJzYWwgZm9yIGFsbCByb3V0ZXMsIHlvdSBjYW4gdXNlIHRoZSAnKicgd2lsZGNhcmRcbiAqL1xuXG5hcHAuZ2V0KCcqJywgZnVuY3Rpb24gKHJlcTogYW55LCByZXM6IGFueSkge1xuICByZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICBjb25zdCBwb2pvID0ge3N0YXR1czogNDA0LCBtZXNzYWdlOiAnTm8gQ29udGVudCd9O1xuICBjb25zdCBqc29uID0gSlNPTi5zdHJpbmdpZnkocG9qbywgbnVsbCwgMik7XG4gIHJlcy5zdGF0dXMoNDA0KS5zZW5kKGpzb24pO1xufSk7XG5cbmFwcC5saXN0ZW4ocG9ydCwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhgTGlzdGVuaW5nIG9uIHBvcnQgJHtwb3J0fWApO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyLnRzIiwiLypcbiAqIFRISVMgSVMgVEVNUE9SQVJZIFRPIFBBVENIIDIuMS4xKyBDb3JlIGJ1Z3NcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xubGV0IF9fY29tcGlsZXJfXzogYW55ID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29tcGlsZXInKTtcbmltcG9ydCB7IF9fcGxhdGZvcm1fYnJvd3Nlcl9wcml2YXRlX18gfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbnZhciBfX2NvcmVfcHJpdmF0ZV9fOiBhbnkgPSByZXF1aXJlKCdAYW5ndWxhci9jb3JlJyk7XG5sZXQgcGF0Y2g6IEJvb2xlYW4gPSBmYWxzZTtcblxuaWYgKCFfX2NvcmVfcHJpdmF0ZV9fLmhhc093blByb3BlcnR5KCdWaWV3VXRpbHMnKSkge1xuICAgIHBhdGNoID0gdHJ1ZTtcbiAgICBfX2NvcmVfcHJpdmF0ZV9fLlZpZXdVdGlscyA9IF9fY29yZV9wcml2YXRlX18udmlld191dGlscztcbn1cblxuaWYgKCFfX2NvbXBpbGVyX18uX19jb21waWxlcl9wcml2YXRlX18pIHtcbiAgICBwYXRjaCA9IHRydWU7XG4gICAgKF9fY29tcGlsZXJfXykuX19jb21waWxlcl9wcml2YXRlX18gPSB7XG4gICAgICAgIFNlbGVjdG9yTWF0Y2hlcjogX19jb21waWxlcl9fLlNlbGVjdG9yTWF0Y2hlcixcbiAgICAgICAgQ3NzU2VsZWN0b3I6IF9fY29tcGlsZXJfXy5Dc3NTZWxlY3RvclxuICAgIH1cbn1cblxudmFyIF9fdW5pdmVyc2FsX186IGFueSA9IHJlcXVpcmUoJ2FuZ3VsYXIyLXBsYXRmb3JtLW5vZGUvX19wcml2YXRlX2ltcG9ydHNfXycpO1xuaWYgKHBhdGNoKSB7XG4gICAgX191bml2ZXJzYWxfXy5WaWV3VXRpbHMgPSBfX2NvcmVfcHJpdmF0ZV9fLnZpZXdfdXRpbHM7XG4gICAgX191bml2ZXJzYWxfXy5Dc3NTZWxlY3RvciA9IF9fY29tcGlsZXJfXy5Dc3NTZWxlY3RvclxuICAgIF9fdW5pdmVyc2FsX18uU2VsZWN0b3JNYXRjaGVyID0gX19jb21waWxlcl9fLlNlbGVjdG9yTWF0Y2hlclxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL19fMi4xLjEud29ya2Fyb3VuZC50cyIsImltcG9ydCB7IENvbXBvbmVudCxIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4vLi4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcbmltcG9ydCB7IGlzQnJvd3NlciB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1yb290JyxcbiAgdGVtcGxhdGVVcmw6Jy4vbWFpbi5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgZW52aXJvbm1lbnQ6YW55O1xuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6bG9hZCcsIFsnJGV2ZW50J10pXG4gICAgb25sb2FkSGFuZGxlcigkZXZlbnQpIHtcbiAgICB0aGlzLmVudmlyb25tZW50LnJhbmRvbS5vbmxvYWQgPSB0cnVlO1xuICAgIH1cbiAgXG4gIFxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjpSb3V0ZXIpIHtcbiAgICB0aGlzLmVudmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XG4gICAgaWYoaXNCcm93c2VyKXtcbiAgICAgIHRoaXMuZW52aXJvbm1lbnQucmFuZG9tLmlzQnJvd3NlciA9IHRydWU7XG4gICAgfWVsc2V7XG4gICAgICB0aGlzLmVudmlyb25tZW50LnJhbmRvbS5pc1NlcnZlciA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMuZW52aXJvbm1lbnQucmFuZG9tLkJhdHR1dGEgPSAnZmE3NWU5MzNkZjg5ZDg2MGMwMjk5NDU1ODNjZGRlZjMnO1xuICB9XG5cblxuICBuZ09uSW5pdCgpIHtcbiAgICBcbiAgICB0aGlzLnJvdXRlci5ldmVudHMuc3Vic2NyaWJlKChldnQpID0+IHtcbiAgICAgIHRoaXMuZW52aXJvbm1lbnQucmFuZG9tLmV2dElkID0gZXZ0LmlkO1xuICAgICAgdGhpcy5lbnZpcm9ubWVudC5yYW5kb20uY3VycmVudFVybCA9IGV2dC51cmw7XG4gICAgICBcbiAgICB9KTtcbiAgfVxuXG5cbiAgXG5cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9hcHAuY29tcG9uZW50LnRzIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IG1hcGhpc2hhcGhhbmJ1aCBvbiAwMi8wNS8xNy5cbiAqL1xuLyoqXG4gKiBUaGlzIGZpbGUgYW5kIGBtYWluLmJyb3dzZXIudHNgIGFyZSBpZGVudGljYWwsIGF0IHRoZSBtb21lbnQoISlcbiAqIEJ5IHNwbGl0dGluZyB0aGVzZSwgeW91J3JlIGFibGUgdG8gY3JlYXRlIGxvZ2ljLCBpbXBvcnRzLCBldGMgdGhhdCBhcmUgXCJQbGF0Zm9ybVwiIHNwZWNpZmljLlxuICogSWYgeW91IHdhbnQgeW91ciBjb2RlIHRvIGJlIGNvbXBsZXRlbHkgVW5pdmVyc2FsIGFuZCBkb24ndCBuZWVkIHRoYXRcbiAqIFlvdSBjYW4gYWxzbyBqdXN0IGhhdmUgMSBmaWxlLCB0aGF0IGlzIGltcG9ydGVkIGludG8gYm90aFxuICogY2xpZW50LnRzIGFuZCBzZXJ2ZXIudHNcbiAqL1xuXG5pbXBvcnQgeyBOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVW5pdmVyc2FsTW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi90eXBlc2NyaXB0cy9ob21lL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7IENvb2tpZVNlcnZpY2UgfSBmcm9tICdhbmd1bGFyMi1jb29raWUvY29yZSc7XG5pbXBvcnQgeyBIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL3R5cGVzY3JpcHRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFNlcnZlckNvbWJpbmVEaXJlY3RpdmVNb2R1bGV9IGZyb20gJy4vdHlwZXNjcmlwdHMvZGlyZWN0aXZlLW1vZHVsZXMvc2VydmVyLWNvbWJpbmUubW9kdWxlJztcblxuaW1wb3J0IHsgU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuL3R5cGVzY3JpcHRzL2NvbW1vbi9zZXJ2aWNlcy9zdG9yYWdlLnNlcnZpY2UnO1xuXG5cblxuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4vdHlwZXNjcmlwdHMvY29tbW9uL3NlcnZpY2VzL2FwaS5zZXJ2aWNlJztcblxuXG5pbXBvcnQgeyBTZXJ2ZXJSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9zZXJ2ZXItcm91dGluZy5tb2R1bGUnO1xuXG5cblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFsgQXBwQ29tcG9uZW50XSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIFVuaXZlcnNhbE1vZHVsZSwgICBcbiAgICAgICAgRm9ybXNNb2R1bGUsXG4gICAgICAgIFNlcnZlclJvdXRpbmdNb2R1bGUsXG4gICAgICAgIFNlcnZlckNvbWJpbmVEaXJlY3RpdmVNb2R1bGUsXG4gICAgICAgIFxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCwgSG9tZUNvbXBvbmVudCxIZWFkZXJDb21wb25lbnRcblxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbU3RvcmFnZVNlcnZpY2UsIEFwaVNlcnZpY2UsIENvb2tpZVNlcnZpY2VdLFxuICAgIHNjaGVtYXM6ICAgICAgW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2FwcC5ub2RlLm1vZHVsZS50cyIsImV4cG9ydCAqIGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2luZGV4LnRzIiwiXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi90eXBlc2NyaXB0cy9ob21lL2hvbWUuY29tcG9uZW50JztcblxuXG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5jb25zdCByb3V0ZXM6Um91dGVzID0gW1xuICAgIC8vaG9tZVxuICAgIHsgcGF0aDogJycsIGNvbXBvbmVudDpIb21lQ29tcG9uZW50LCBkYXRhOiB7IG5hbWU6J0hvbWUnLCB0eXBlOidQYWdlJyB9LHBhdGhNYXRjaDogJ2Z1bGwnfSxcbiAgICB7IHBhdGg6ICd2ZXJpZnktZW1haWwvOnRva2VuJywgY29tcG9uZW50OkhvbWVDb21wb25lbnQsIGRhdGE6IHsgbmFtZTonRW1haWwnLCB0eXBlOidWZXJpZmljYXRpb24nIH0scGF0aE1hdGNoOiAnZnVsbCd9LFxuICAgIHsgcGF0aDogJ2dvbGYtY291cnNlL3NlY3Rpb24tMScsIGxvYWRDaGlsZHJlbjogJy4vdHlwZXNjcmlwdHMvc2VjdGlvbi1vbmUvc2VjdGlvbi1vbmUubW9kdWxlI1NlY3Rpb25PbmVNb2R1bGUnLCBkYXRhOiB7IG5hbWU6J0dvbGYnLCB0eXBlOidPbmUnIH0scGF0aE1hdGNoOiAnZnVsbCd9LFxuXG4gICAgeyBwYXRoOiAnZ29sZi1jb3Vyc2Uvc2VjdGlvbi0yJywgbG9hZENoaWxkcmVuOiAnLi90eXBlc2NyaXB0cy9zZWN0aW9uLXR3by9zZWN0aW9uLXR3by5tb2R1bGUjU2VjdGlvblR3b01vZHVsZScsIGRhdGE6IHsgbmFtZTonR29sZicsIHR5cGU6J1R3bycgfSxwYXRoTWF0Y2g6ICdmdWxsJ30sXG5cbiAgICB7IHBhdGg6ICdnb2xmLWNvdXJzZS9zZWN0aW9uLTMnLCBsb2FkQ2hpbGRyZW46ICcuL3R5cGVzY3JpcHRzL3NlY3Rpb24tdGhyZWUvc2VjdGlvbi10aHJlZS5tb2R1bGUjU2VjdGlvblRocmVlTW9kdWxlJywgZGF0YTogeyBuYW1lOidHb2xmJywgdHlwZTonVGhyZWUnIH0scGF0aE1hdGNoOiAnZnVsbCd9LFxuXG4gICAgeyBwYXRoOiAnZ29sZi1jb3Vyc2Uvc2VjdGlvbi00JywgbG9hZENoaWxkcmVuOiAnLi90eXBlc2NyaXB0cy9zZWN0aW9uLWZvdXIvc2VjdGlvbi1mb3VyLm1vZHVsZSNTZWN0aW9uRm91ck1vZHVsZScsIGRhdGE6IHsgbmFtZTonR29sZicsIHR5cGU6J0ZvdXInIH0scGF0aE1hdGNoOiAnZnVsbCd9LFxuXG4gICAgeyBwYXRoOiAnZ29sZi1jb3Vyc2Uvc2VjdGlvbi1hZGQtb24nLCBsb2FkQ2hpbGRyZW46ICcuL3R5cGVzY3JpcHRzL3NlY3Rpb24tYWRkLW9uL3NlY3Rpb24tYWRkLW9uLm1vZHVsZSNTZWN0aW9uQWRkT25Nb2R1bGUnLCBkYXRhOiB7IG5hbWU6J0dvbGYnLCB0eXBlOidBZGRPbicgfSxwYXRoTWF0Y2g6ICdmdWxsJ30sXG5cbiAgICB7IHBhdGg6ICdnb2xmLWNvdXJzZS9kYXNoYm9hcmQnLCBsb2FkQ2hpbGRyZW46ICcuL3R5cGVzY3JpcHRzL2Rhc2hib2FyZC9kYXNoYm9hcmQubW9kdWxlI0Rhc2hib2FyZE1vZHVsZScsIGRhdGE6IHsgbmFtZTonR29sZicsIHR5cGU6J0FkZE9uJyB9LHBhdGhNYXRjaDogJ2Z1bGwnfSxcblxuICAgIHsgcGF0aDogJ2dvbGYtY291cnNlL3VwZGF0ZS1wcm9maWxlJywgbG9hZENoaWxkcmVuOiAnLi90eXBlc2NyaXB0cy91cGRhdGUtcHJvZmlsZS91cGRhdGUtcHJvZmlsZS5tb2R1bGUjVXBkYXRlUHJvZmlsZU1vZHVsZScsIGRhdGE6IHsgbmFtZTonR29sZicsIHR5cGU6J1VwZGF0ZScgfSxwYXRoTWF0Y2g6ICdmdWxsJ30sXG5cbiAgICB7IHBhdGg6ICdnb2xmLWNvdXJzZS9wdWJsaWMtaG9saWRheScsIGxvYWRDaGlsZHJlbjogJy4vdHlwZXNjcmlwdHMvcHVibGljLWhvbGlkYXkvcHVibGljLWhvbGlkYXkubW9kdWxlI1B1YmxpY0hvbGlkYXlNb2R1bGUnLCBkYXRhOiB7IG5hbWU6J0dvbGYnLCB0eXBlOidVcGRhdGUnIH0scGF0aE1hdGNoOiAnZnVsbCd9LFxuXG4gICAgeyBwYXRoOiAnZ29sZi1jb3Vyc2UvY2xvc2UtZGF5cycsIGxvYWRDaGlsZHJlbjogJy4vdHlwZXNjcmlwdHMvY2xvc2UtZGF5cy9jbG9zZS1kYXlzLm1vZHVsZSNDbG9zZURheXNNb2R1bGUnLCBkYXRhOiB7IG5hbWU6J0dvbGYnLCB0eXBlOidVcGRhdGUnIH0scGF0aE1hdGNoOiAnZnVsbCd9LFxuXG4gICAgeyBwYXRoOiAnZ29sZi1jb3Vyc2UvbWFuYWdlLXNsb3QnLCBsb2FkQ2hpbGRyZW46ICcuL3R5cGVzY3JpcHRzL21hbmFnZS1zbG90L21hbmFnZS1zbG90Lm1vZHVsZSNNYW5hZ2VTbG90TW9kdWxlJywgZGF0YTogeyBuYW1lOidHb2xmJywgdHlwZTonVXBkYXRlJyB9LHBhdGhNYXRjaDogJ2Z1bGwnfSxcblxuICAgIHsgcGF0aDogJ2dvbGYtY291cnNlL21hbmFnZS12ZW5kb3JzJywgbG9hZENoaWxkcmVuOiAnLi90eXBlc2NyaXB0cy9tYW5hZ2UtdmVuZG9ycy9tYW5hZ2UtdmVuZG9ycy5tb2R1bGUjTWFuYWdlVmVuZG9yc01vZHVsZScsIGRhdGE6IHsgbmFtZTonR29sZicsIHR5cGU6J1VwZGF0ZScgfSxwYXRoTWF0Y2g6ICdmdWxsJ30sXG5cbiAgICB7IHBhdGg6ICd2ZW5kb3IvZGFzaGJvYXJkJywgbG9hZENoaWxkcmVuOiAnLi90eXBlc2NyaXB0cy9kYXNoYm9hcmQtdi9kYXNoYm9hcmQubW9kdWxlI0Rhc2hib2FyZE1vZHVsZScsIGRhdGE6IHsgbmFtZTonR29sZicsIHR5cGU6J2Rhc2hib2FyZCcgfSxwYXRoTWF0Y2g6ICdmdWxsJ30sXG5cbiAgICB7IHBhdGg6ICd2ZW5kb3IvdXBkYXRlLXByb2ZpbGUnLCBsb2FkQ2hpbGRyZW46ICcuL3R5cGVzY3JpcHRzL3VwZGF0ZS1wcm9maWxlLXYvdXBkYXRlLXByb2ZpbGUubW9kdWxlI1VwZGF0ZVByb2ZpbGVNb2R1bGUnLCBkYXRhOiB7IG5hbWU6J0dvbGYnLCB0eXBlOidkYXNoYm9hcmQnIH0scGF0aE1hdGNoOiAnZnVsbCd9LFxuXG4gICAgeyBwYXRoOiAndmVuZG9yL21hbmFnZS1nb2xmLWNvdXJzZScsIGxvYWRDaGlsZHJlbjogJy4vdHlwZXNjcmlwdHMvbWFuYWdlLWdvbGYtY291cnNlL21hbmFnZS1nb2xmLWNvdXJzZS5tb2R1bGUjTWFuYWdlR29sZkNvdXJzZU1vZHVsZScsIGRhdGE6IHsgbmFtZTonR29sZicsIHR5cGU6J2Rhc2hib2FyZCcgfSxwYXRoTWF0Y2g6ICdmdWxsJ30sXG5cbl07XG5cblxuZXhwb3J0IGNvbnN0IFNlcnZlclJvdXRpbmdNb2R1bGUgOk1vZHVsZVdpdGhQcm92aWRlcnM9IFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3NlcnZlci1yb3V0aW5nLm1vZHVsZS50cyIsIi8qKlxuICogQ3JlYXRlZCBieSBtYXBoaXNoYXBoYW5idWggb24gMTUvMDUvMTcuXG4gKi9cbmltcG9ydCB7IE5nTW9kdWxlICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZUNvbnZlcnRvckRpcmVjdGl2ZSB9IGZyb20gJy4vLi4vZGlyZWN0aXZlL2RhdGUtY29udmVydG9yLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIERhdGVDb252ZXJ0b3JEaXJlY3RpdmVcbiAgICBdLFxuICAgIFxuICAgIGV4cG9ydHM6W0RhdGVDb252ZXJ0b3JEaXJlY3RpdmVdLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlQ29udmVydG9yRGlyZWN0aXZlTW9kdWxleyB9XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvdHlwZXNjcmlwdHMvZGlyZWN0aXZlLW1vZHVsZXMvZGF0ZS1jb252ZXJ0b3IubW9kdWxlLnRzIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IG1hcGhpc2hhcGhhbmJ1aCBvbiAxNS8wNS8xNy5cbiAqL1xuaW1wb3J0IHsgTmdNb2R1bGUgIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0luaXREaXJlY3RpdmUgfSBmcm9tICcuLy4uL2RpcmVjdGl2ZS9uZy1pbml0LmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIE5nSW5pdERpcmVjdGl2ZVxuICAgIF0sXG4gICAgXG4gICAgZXhwb3J0czpbTmdJbml0RGlyZWN0aXZlXSxcbn0pXG5leHBvcnQgY2xhc3MgTmdJbml0RGlyZWN0aXZlTW9kdWxleyB9XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvdHlwZXNjcmlwdHMvZGlyZWN0aXZlLW1vZHVsZXMvbmctaW5pdC5tb2R1bGUudHMiLCIvKipcbiAqIENyZWF0ZWQgYnkgbWFwaGlzaGFwaGFuYnVoIG9uIDE1LzA1LzE3LlxuICovXG5pbXBvcnQgeyBOZ01vZHVsZSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVDb252ZXJ0b3JEaXJlY3RpdmVNb2R1bGUgfSBmcm9tICcuL2RhdGUtY29udmVydG9yLm1vZHVsZSc7XG5pbXBvcnQgeyBOZ0luaXREaXJlY3RpdmVNb2R1bGUgfSBmcm9tICcuL25nLWluaXQubW9kdWxlJztcbmltcG9ydCB7S2V5c1BpcGVNb2R1bGV9IGZyb20gJy4vLi4vcGlwZS1tb2R1bGVzL2tleS5tb2R1bGUnO1xuaW1wb3J0IHsgTm9TcGVjaWFsQ2hhckRpcmVjdGl2ZU1vZHVsZSB9IGZyb20gJy4vc3BsLWNoYXIubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIERhdGVDb252ZXJ0b3JEaXJlY3RpdmVNb2R1bGUsTmdJbml0RGlyZWN0aXZlTW9kdWxlLE5vU3BlY2lhbENoYXJEaXJlY3RpdmVNb2R1bGUsS2V5c1BpcGVNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBcbiAgICBdLFxuICAgIFxuICAgIGV4cG9ydHM6W0RhdGVDb252ZXJ0b3JEaXJlY3RpdmVNb2R1bGUsTmdJbml0RGlyZWN0aXZlTW9kdWxlLE5vU3BlY2lhbENoYXJEaXJlY3RpdmVNb2R1bGUsS2V5c1BpcGVNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBTZXJ2ZXJDb21iaW5lRGlyZWN0aXZlTW9kdWxleyB9XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvdHlwZXNjcmlwdHMvZGlyZWN0aXZlLW1vZHVsZXMvc2VydmVyLWNvbWJpbmUubW9kdWxlLnRzIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IG1hcGhpc2hhcGhhbmJ1aCBvbiAxNS8wNS8xNy5cbiAqL1xuaW1wb3J0IHsgTmdNb2R1bGUgIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOb1NwZWNpYWxDaGFyRGlyZWN0aXZlIH0gZnJvbSAnLi8uLi9kaXJlY3RpdmUvbm8tc3BlY2lhbC1jaGFyLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIE5vU3BlY2lhbENoYXJEaXJlY3RpdmVcbiAgICBdLFxuICAgIFxuICAgIGV4cG9ydHM6W05vU3BlY2lhbENoYXJEaXJlY3RpdmVdLFxufSlcbmV4cG9ydCBjbGFzcyBOb1NwZWNpYWxDaGFyRGlyZWN0aXZlTW9kdWxleyB9XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvdHlwZXNjcmlwdHMvZGlyZWN0aXZlLW1vZHVsZXMvc3BsLWNoYXIubW9kdWxlLnRzIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgSG9zdEJpbmRpbmd9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgXG4gIHNlbGVjdG9yOiAnW3RlZURhdGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBEYXRlQ29udmVydG9yRGlyZWN0aXZlIHtcbiAgQElucHV0KCkgY3VyckRhdGU6YW55O1xuICBASW5wdXQoKSB0eXBlOnN0cmluZztcbiAgQEhvc3RCaW5kaW5nKCdpbm5lckhUTUwnKSBpbm5lckhUTUw7XG4gIFxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG4gIG5nT25Jbml0KCkge1xuICAgIGxldCB0aGVEYXRlID0gdGhpcy5jdXJyRGF0ZTtcbiAgICBsZXQgZGF0YTtcbiAgICBpZih0aGVEYXRlKXtcbiAgICAgIHRyeXtcbiAgICAgICAgaWYodGhlRGF0ZS5pbmRleE9mKCctJykgPiAtMSl7XG4gICAgICAgICAgdGhlRGF0ZSA9IHRoZURhdGUuc3BsaXQoXCItXCIpO1xuICAgICAgICAgIGxldCBuZXdEYXRlID0gdGhlRGF0ZVsxXStcIi9cIit0aGVEYXRlWzJdK1wiL1wiK3RoZURhdGVbMF07XG4gICAgICAgICAgZGF0YSA9IG5ld0RhdGU7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIGRhdGEgPSBwYXJzZUludCh0aGVEYXRlKVxuICAgICAgICB9XG4gICAgICB9Y2F0Y2goZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICB9XG4gICAgICBcbiAgICAgIGxldCBkO1xuICAgICAgaWYodGhpcy50eXBlKXtcbiAgICAgICAgZD0gbmV3IERhdGUoZGF0YSAqIDEwMDApO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGQ9IG5ldyBEYXRlKGRhdGEpO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coZClcbiAgICAgIGlmKGQgIT0gJ0ludmFsaWQgRGF0ZScpIHtcbiAgICAgICAgbGV0IG91cmRhdGUgPSBkLnRvU3RyaW5nKCkuc2xpY2UoMywxNSk7XG4gICAgICAgIGxldCBvdXRwdXQgPSBbb3VyZGF0ZS5zbGljZSgwLCA3KSwgJywnLCBvdXJkYXRlLnNsaWNlKDcpXS5qb2luKCcnKTtcbiAgICAgICAgY29uc29sZS5sb2cob3V0cHV0KVxuICAgICAgICB0aGlzLmlubmVySFRNTCA9IG91dHB1dDtcbiAgICAgIH1cblxuICAgIH1cblxuICB9XG4gIFxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3R5cGVzY3JpcHRzL2RpcmVjdGl2ZS9kYXRlLWNvbnZlcnRvci5kaXJlY3RpdmUudHMiLCIvL2ltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vXG4vL0BEaXJlY3RpdmUoe1xuLy8gIHNlbGVjdG9yOiAnW25nSW5pdF0nXG4vL30pXG4vL2V4cG9ydCBjbGFzcyBOZ0luaXREaXJlY3RpdmUge1xuLy9cbi8vICBASW5wdXQoKSBuZ0luaXQ7XG4vLyAgICBuZ09uSW5pdCgpIHtcbi8vICAgICAgICBpZiAodGhpcy5uZ0luaXQpIHtcbi8vICAgICAgICAgICAgdGhpcy5uZ0luaXQoKTtcbi8vICAgICAgICB9XG4vLyAgfVxuLy9cbi8vfVxuXG5pbXBvcnQgeyBEaXJlY3RpdmUsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vY29uc29sZS5hc3NlcnQoU2ltcGxlQ2hhbmdlLCBcIlVob2gsIFNvbWV0aGluZyB3YXMgbm90IGRlZmluZWQsIGxpa2VseSBwYXJ0IG9mIGEgY2lyY3VsYXIgcmVmZXJlbmNlIGxvb3BcIik7XG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmdJbml0XSdcbn0pXG5leHBvcnQgY2xhc3MgTmdJbml0RGlyZWN0aXZlIHtcblxuICBAT3V0cHV0KCkgbmdJbml0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBjb25zdHJ1Y3RvcigpIHt9XG4gIG5nT25Jbml0KCkgeyAgIFxuICAgICB0aGlzLm5nSW5pdC5lbWl0KCdkdW1teScpO1xuICAgICAvL3NldFRpbWVvdXQoKCkgPT4gdGhpcy5uZ0luaXQuZW1pdCgnZHVtbXknKSwgMCk7XG4gIH0gXG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvdHlwZXNjcmlwdHMvZGlyZWN0aXZlL25nLWluaXQuZGlyZWN0aXZlLnRzIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25vU3BlY2lhbENoYXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBOb1NwZWNpYWxDaGFyRGlyZWN0aXZlIHtcblxuICBASG9zdExpc3RlbmVyKCdrZXlwcmVzcycsIFsnJGV2ZW50J10pXG4gIG9uS2V5UHJlc3MoZXZlbnQ6IGFueSkge1xuICAgIGNvbnN0IHBhdHRlcm4gPSAvWzAtOUEtWmEteiBdLzsgLy8gT25seSBhbHBoYW51bWVyaWMgYW5kIHNwYWNlIGFsbG93ZWRcbiAgICBsZXQgaW5wdXRDaGFyID0gU3RyaW5nLmZyb21DaGFyQ29kZShldmVudC5jaGFyQ29kZSk7XG5cbiAgICBpZiAoIXBhdHRlcm4udGVzdChpbnB1dENoYXIpKSB7XG4gICAgICAvLyBpbnZhbGlkIGNoYXJhY3RlciwgcHJldmVudCBpbnB1dFxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgIFxuICAgIH1cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3R5cGVzY3JpcHRzL2RpcmVjdGl2ZS9uby1zcGVjaWFsLWNoYXIuZGlyZWN0aXZlLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgUmVuZGVyZXIgLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuLi8uLi8uLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4vLi4vY29tbW9uL3NlcnZpY2VzL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi8uLi9jb21tb24vc2VydmljZXMvc3RvcmFnZS5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlcixBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgaXNCcm93c2VyLCBpc05vZGUgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuXG5kZWNsYXJlIHZhciAkOmFueTtcbkBDb21wb25lbnQoe1xuICBlbmNhcHN1bGF0aW9uOlZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHNlbGVjdG9yOiAndGVlLWhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9oZWFkZXIuaHRtbCcsXG4gIHByb3ZpZGVyczogW0FwaVNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGVudmlyb25tZW50OmFueTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBBcGlTZXJ2aWNlOkFwaVNlcnZpY2UsICBwcml2YXRlIHJvdXRlcjogUm91dGVyLHByaXZhdGUgX3N0b3JhZ2U6U3RvcmFnZVNlcnZpY2UpIHtcbiAgICB0aGlzLmVudmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3N0b3JhZ2UudXNlckNoZWNrZXIoZmFsc2UpLnRoZW4oKHZhbCk9PntcbiAgICAgICAgaWYodmFsKXtcbiAgICAgICAgICB0aGlzLmVudmlyb25tZW50LnJhbmRvbS51c2VySW5mbyA9IHtpZDp2YWxbJ2lkJ10sdG9rZW46dmFsWyd0b2tlbiddLHNvdXJjZTp2YWxbJ3NvdXJjZSddfTtcbiAgICAgICAgICB0aGlzLmVudmlyb25tZW50LnJhbmRvbS5zb3VyY2UgPSB2YWxbJ3NvdXJjZSddO1xuICAgICAgICAgIGxldCBkID0gbmV3IERhdGUoKTtcbiAgICAgICAgICBkLnNldFRpbWUoZC5nZXRUaW1lKCkgKyAoMTIqMzAqMjQqNjAqNjAqMTAwMCkpO1xuICAgICAgICAgIHRoaXMuX3N0b3JhZ2Uuc3RvcmVDb29raWVzKCdpZCcsdGhpcy5lbnZpcm9ubWVudC5yYW5kb20udXNlckluZm8uaWQsZC50b1VUQ1N0cmluZygpKTtcbiAgICAgICAgICB0aGlzLl9zdG9yYWdlLnN0b3JlQ29va2llcygndG9rZW4nLHRoaXMuZW52aXJvbm1lbnQucmFuZG9tLnVzZXJJbmZvLnRva2VuLGQudG9VVENTdHJpbmcoKSk7XG4gICAgICAgICAgdGhpcy5fc3RvcmFnZS5zdG9yZUNvb2tpZXMoJ3NvdXJjZScsdGhpcy5lbnZpcm9ubWVudC5yYW5kb20udXNlckluZm8uc291cmNlLGQudG9VVENTdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gIH1cblxuICBkYXNoYm9hcmQoKXtcbiAgICAvLyAkKCcjcGFnZS13cmFwcGVyJykuYWRkQ2xhc3MoJ2xvZ2dlZEluJyk7XG4gICAgaWYodGhpcy5lbnZpcm9ubWVudC5yYW5kb20udXNlckluZm8uYWN0aXZhdGVkKXtcbiAgICAgIHRoaXMuQXBpU2VydmljZS51c2VyRGV0YWlsKCdnb2xmLWNvdXJzZS9kYXNoYm9hcmQnKTtcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMuQXBpU2VydmljZS51c2VyRGV0YWlsKGZhbHNlKTtcbiAgICB9XG5cblxuICB9XG5cbiAgdmRhaGJvYXJkKCl7XG4gICAgLy8gJCgnI3BhZ2Utd3JhcHBlcicpLmFkZENsYXNzKCdsb2dnZWRJbicpO1xuICAgIHRoaXMuQXBpU2VydmljZS51c2VyRGV0YWlsVmVuZG9yKCd2ZW5kb3IvZGFzaGJvYXJkJyk7XG4gIH1cblxuXG4gIGxvZ291dCgpe1xuICAgIGxldCBkYXRlMSA9ICdUaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAxIEdNVDsnO1xuICAgIHRoaXMuX3N0b3JhZ2Uuc3RvcmVDb29raWVzKCdpZCcsZmFsc2UsZGF0ZTEpO1xuICAgIHRoaXMuX3N0b3JhZ2Uuc3RvcmVDb29raWVzKCd0b2tlbicsZmFsc2UsZGF0ZTEpO1xuICAgIHRoaXMuX3N0b3JhZ2Uuc3RvcmVDb29raWVzKCdzb3VyY2UnLGZhbHNlLGRhdGUxKTtcbiAgICB0aGlzLmVudmlyb25tZW50LnJhbmRvbS51c2VyRGV0YWlsID0gbmV3IEFycmF5KCk7XG4gICAgdGhpcy5lbnZpcm9ubWVudC5yYW5kb20udXNlckluZm8gPSBuZXcgQXJyYXkoKTtcbiAgICB2YXIgX3NlbGYgPSB0aGlzO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIC8vICQoJyNwYWdlLXdyYXBwZXInKS5yZW1vdmVDbGFzcygnbG9nZ2VkSW4nKTtcbiAgICAgIF9zZWxmLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJyk7XG4gICAgfSw1MDApXG5cbiAgfVxuICAgIFxuICAgXG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvdHlwZXNjcmlwdHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHMiLCIvKipcbiAqIENyZWF0ZWQgYnkgbWFwaGlzaGFwaGFuYnVoIG9uIDE1LzA1LzE3LlxuICovXG5pbXBvcnQgeyBOZ01vZHVsZSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEtleXNQaXBlLEZvcktleVBpcGUsRmlsdGVyUGlwZSB9IGZyb20gJy4vLi4vcGlwZS9rZXkucGlwZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEtleXNQaXBlLEZvcktleVBpcGUsRmlsdGVyUGlwZVxuICAgIF0sXG4gICAgXG4gICAgZXhwb3J0czpbS2V5c1BpcGUsRm9yS2V5UGlwZSxGaWx0ZXJQaXBlXSxcbn0pXG5leHBvcnQgY2xhc3MgS2V5c1BpcGVNb2R1bGV7IH1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC90eXBlc2NyaXB0cy9waXBlLW1vZHVsZXMva2V5Lm1vZHVsZS50cyIsIi8qKlxuICogQ3JlYXRlZCBieSBtYXBoaXNoYXBoYW5idWggb24gMTkvMDUvMTcuXG4gKi9cbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXJ9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG4vL2NvbnZlcnQgdXJsIHRvIHNhZmUgdXJsXG5AUGlwZSh7bmFtZTogJ2tleXMnfSlcbmV4cG9ydCBjbGFzcyBLZXlzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge31cbiAgICB0cmFuc2Zvcm0odXJsKTphbnkge1xuICAgICAgICBsZXQgcmVnZXggPSAvKGh0dHBzPzopPyhcXC9cXC8pPyh3d3dcXC58bVxcLik/KHlvdXR1XFwuYmVcXC98eW91dHViZVxcLmNvbVxcLyhlbWJlZFxcL3x2XFwvfHdhdGNoXFw/dj18d2F0Y2hcXD8uKyZ2PSkpKChcXHd8LSl7MTF9KShbXlxcXCJdKikvaTtcbiAgICAgICAgbGV0IG1hdGNoZXMgPSB1cmwubWF0Y2gocmVnZXgpO1xuICAgICAgICBsZXQgZW1iZWRMaW5rPScnO1xuICAgICAgICBpZihtYXRjaGVzWzZdKSB7XG4gICAgICAgICAgICBlbWJlZExpbmsgPSBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1wiK21hdGNoZXNbNl0rJz9hdXRvcGxheT0xJnJlbD0wJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKGVtYmVkTGluayk7XG4gICAgfVxufVxuXG4vL2dpdmVzIGtleSBhbmQgdmFsdWVcbkBQaXBlKHtuYW1lOiAnZm9ya2V5J30pXG5leHBvcnQgY2xhc3MgRm9yS2V5UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odmFsdWUsIGFyZ3M6c3RyaW5nW10pIDogYW55IHtcbiAgICBsZXQga2V5cyA9IFtdO1xuICAgIGZvciAobGV0IGtleSBpbiB2YWx1ZSkge1xuICAgICAga2V5cy5wdXNoKHtrZXk6IGtleSwgdmFsdWU6IHZhbHVlW2tleV19KTtcbiAgICB9XG4gICAgcmV0dXJuIGtleXM7XG4gIH1cbn1cblxuXG5AUGlwZSh7bmFtZTogJ0ZpbHRlclBpcGUnfSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gICAgdHJhbnNmb3JtKGl0ZW1zOiBhbnlbXSwgZmllbGQ6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IGFueVtdIHtcbiAgICAgICAgdmFyIGFsbExpc3QgPSBbXTtcbiAgICAgICBpZih2YWx1ZSAmJiB2YWx1ZS50cmltKCkgJiYgdmFsdWUubGVuZ3RoID4wKXtcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgICAgIHZhbHVlID0gdmFsdWUudHJpbSgpO1xuICAgICAgICAgIGlmICghaXRlbXMpIHJldHVybiBhbGxMaXN0O1xuICAgICAgICAgIGZvcih2YXIgaSBpbiBpdGVtcyl7XG4gICAgICAgICAgICAgIGxldCBpdCA9IGl0ZW1zW2ldO1xuICAgICAgICAgICAgICBpZihpdFtmaWVsZF0udG9Mb2NhbGVMb3dlckNhc2UoKS5pbmRleE9mKHZhbHVlKSA+IC0xICl7XG4gICAgICAgICAgICAgICAgICBhbGxMaXN0LnB1c2goaXQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBhbGxMaXN0O1xuICAgICAgIH1lbHNle1xuICAgICAgICAgIHJldHVybiBpdGVtcztcbiAgICAgICB9XG4gICAgICAgXG4gICAgfVxuICAgICAgXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3R5cGVzY3JpcHRzL3BpcGUva2V5LnBpcGUudHMiLCIvLyBUaGlzIGZpbGUgaW5jbHVkZXMgcG9seWZpbGxzIG5lZWRlZCBieSBBbmd1bGFyIDIgYW5kIGlzIGxvYWRlZCBiZWZvcmVcbi8vIHRoZSBhcHAuIFlvdSBjYW4gYWRkIHlvdXIgb3duIGV4dHJhIHBvbHlmaWxscyB0byB0aGlzIGZpbGUuXG5cbmltcG9ydCAnYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxscyc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L3N5bWJvbCc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L29iamVjdCc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L2Z1bmN0aW9uJztcbmltcG9ydCAnY29yZS1qcy9lczYvcGFyc2UtaW50JztcbmltcG9ydCAnY29yZS1qcy9lczYvcGFyc2UtZmxvYXQnO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9udW1iZXInO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9tYXRoJztcbmltcG9ydCAnY29yZS1qcy9lczYvc3RyaW5nJztcbmltcG9ydCAnY29yZS1qcy9lczYvZGF0ZSc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L2FycmF5JztcbmltcG9ydCAnY29yZS1qcy9lczYvcmVnZXhwJztcbmltcG9ydCAnY29yZS1qcy9lczYvbWFwJztcbmltcG9ydCAnY29yZS1qcy9lczYvc2V0JztcbmltcG9ydCAnY29yZS1qcy9lczYvcmVmbGVjdCc7XG5cbmltcG9ydCAnY29yZS1qcy9lczcvcmVmbGVjdCc7XG5cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcG9seWZpbGxzLnRzIiwiLyoqXG4gKiBTZXJ2ZXItc2lkZSByb3V0ZXMuIE9ubHkgdGhlIGxpc3RlZCByb3V0ZXMgc3VwcG9ydCBodG1sNXB1c2hzdGF0ZS5cbiAqIEhhcyB0byBtYXRjaCBjbGllbnQgc2lkZSByb3V0ZXMuXG4gKlxuICogSW5kZXggKC8pIHJvdXRlIGRvZXMgbm90IGhhdmUgdG8gYmUgbGlzdGVkIGhlcmUuXG4gKlxuICogQGV4YW1wbGVcbiAqIGV4cG9ydCBjb25zdCByb3V0ZXM6IHN0cmluZ1tdID0gW1xuICogJ2hvbWUnLCAnYWJvdXQnXG4gKiBdO1xuICoqL1xuZXhwb3J0IGNvbnN0IHJvdXRlczogc3RyaW5nW10gPSBbXG4gICAgJyonXG5dO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci5yb3V0ZXMudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxuPHRlZS1oZWFkZXI+PC90ZWUtaGVhZGVyPlxcbjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cXG48IS0tPGZvb3RlciBjbGFzcz1cXFwiZm9vdGVyIHRleHQtY2VudGVyXFxcIj4gMjAxOCAmY29weTsgVGhlIFBVVFQgPC9mb290ZXI+LS0+XFxuXFxuXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvbWFpbi5odG1sXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxuXFxuPCEtLTxkaXYgc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6ICNlOWViZWU7aGVpZ2h0OiAxMDBweDtcXFwiPi0tPlxcbiAgICA8IS0tPGRpdiBzdHlsZT1cXFwiLS0+XFxuICAgIDwhLS1mb250LXNpemU6IDI0cHg7LS0+XFxuICAgIDwhLS0vKm1hcmdpbi10b3A6IDEwcHg7Ki8tLT5cXG4gICAgPCEtLXBhZGRpbmctdG9wOiAxNXB4Oy0tPlxcbiAgICA8IS0tY29sb3I6IHdoaXRlOy0tPlxcbiAgICA8IS0tcGFkZGluZy1sZWZ0OiAzMHB4Oy0tPlxcbiAgICA8IS0tXFxcIj4tLT5cXG4gICAgICAgIDwhLS08aDEgc3R5bGU9XFxcInRleHQtc2hhZG93OiNmZmZmZmYgM3B4IDNweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4yKSA2cHggNnB4IDBweDttYXJnaW4tbGVmdDogMjBweDtjb2xvcjpicm93bjtcXFwiPlRIRSBQVVRUPC9oMT4tLT5cXG5cXG4gICAgPCEtLTwvZGl2Pi0tPlxcbiAgICA8IS0tPGRpdiBvbmNsaWNrPVxcXCIkKCcjbWVudScpLmNzcygnZGlzcGxheScsJ2Jsb2NrJylcXFwiICAgc3R5bGU9XFxcIi0tPlxcbiAgICA8IS0tZmxvYXQ6IHJpZ2h0Oy0tPlxcbiAgICA8IS0tbWFyZ2luLXRvcDogLTQ5cHg7LS0+XFxuICAgIDwhLS1tYXJnaW4tcmlnaHQ6IDQwcHg7LS0+XFxuICAgIDwhLS1iYWNrZ3JvdW5kLWNvbG9yOiBicm93bjstLT5cXG5cXG4gICAgPCEtLVxcXCIgPi0tPlxcbiAgICAgICAgPCEtLTxpbWcgKm5nSWY9XFxcImVudmlyb25tZW50LnJhbmRvbS51c2VySW5mbyYmZW52aXJvbm1lbnQucmFuZG9tLnNvdXJjZVxcXCIgc3JjPVxcXCIvYXNzZXRzL2ltYWdlL2hhbWJ1cmdlci5zdmdcXFwiPi0tPlxcbiAgICA8IS0tPC9kaXY+LS0+XFxuPCEtLTwvZGl2Pi0tPlxcbjwhLS08ZGl2IGlkPVxcXCJtZW51XFxcIiBzdHlsZT1cXFwiZGlzcGxheTogbm9uZTstLT5cXG4gICAgPCEtLXBvc2l0aW9uOiBmaXhlZDstLT5cXG4gICAgPCEtLXRvcDogMDstLT5cXG4gICAgPCEtLWxlZnQ6IDA7LS0+XFxuICAgIDwhLS16LWluZGV4OiA1MDAwOy0tPlxcbiAgICA8IS0td2lkdGg6IDEwMCU7LS0+XFxuICAgIDwhLS1oZWlnaHQ6IDEwMCU7LS0+XFxuICAgIDwhLS1iYWNrZ3JvdW5kOiBkYXJrb2xpdmVncmVlbjstLT5cXG4gICAgPCEtLW92ZXJmbG93LXg6IHNjcm9sbDtcXFwiPi0tPlxcblxcbiAgICA8IS0tPGRpdiBvbmNsaWNrPVxcXCIkKCcjbWVudScpLmNzcygnZGlzcGxheScsJ25vbmUnKVxcXCIgc3R5bGU9XFxcImNvbG9yOiB3aGl0ZTstLT5cXG4gICAgPCEtLWZsb2F0OiByaWdodDstLT5cXG4gICAgPCEtLWZvbnQtc2l6ZTogMjRweDstLT5cXG4gICAgPCEtLW1hcmdpbi10b3A6IDUwcHg7LS0+XFxuICAgIDwhLS1tYXJnaW4tcmlnaHQ6IDUwcHg7XFxcIj5YPC9kaXY+LS0+XFxuICAgIDwhLS08bmctY29udGFpbmVyICpuZ0lmPVxcXCJlbnZpcm9ubWVudC5yYW5kb20udXNlckluZm8mJmVudmlyb25tZW50LnJhbmRvbS5zb3VyY2UgPT0gJ3ZlbmRvcidcXFwiPi0tPlxcbiAgICAgICAgPCEtLTxkaXY+LS0+XFxuICAgICAgICAgICAgPCEtLTxkaXYgc3R5bGU9XFxcIm1hcmdpbi10b3A6IDEwJTstLT5cXG4gICAgPCEtLW1hcmdpbi1sZWZ0OiAxMCU7LS0+XFxuICAgIDwhLS1jb2xvcjogd2hpdGU7LS0+XFxuICAgIDwhLS13aWR0aDogMjAlO2Zsb2F0OmxlZnQ7XFxcIj4tLT5cXG4gICAgICAgICAgICAgICAgPCEtLTx1bD4tLT5cXG4gICAgICAgICAgICAgICAgICAgIDwhLS08bGk+LS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxhIHN0eWxlPVxcXCIgICAgY29sb3I6IGJlaWdlOy0tPlxcbiAgICA8IS0tZm9udC1zaXplOiAxNnB4O1xcXCIgcm91dGVyTGluaz1cXFwiL3ZlbmRvci9kYXNoYm9hcmRcXFwiPkRBU0hCT0FSRDwvYT4tLT5cXG4gICAgICAgICAgICAgICAgICAgIDwhLS08L2xpPi0tPlxcbiAgICAgICAgICAgICAgICAgICAgPCEtLTxsaT4tLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tPGEgc3R5bGU9XFxcIiAgICBjb2xvcjogYmVpZ2U7LS0+XFxuICAgIDwhLS1mb250LXNpemU6IDE2cHg7XFxcIiByb3V0ZXJMaW5rPVxcXCIvdmVuZG9yL21hbmFnZS1nb2xmLWNvdXJzZVxcXCI+TUFOQUdFIEdPTEYgQ09VUlNFPC9hPi0tPlxcbiAgICAgICAgICAgICAgICAgICAgPCEtLTwvbGk+LS0+XFxuICAgICAgICAgICAgICAgICAgICA8IS0tPGxpPi0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08YSBzdHlsZT1cXFwiICAgIGNvbG9yOiBiZWlnZTstLT5cXG4gICAgPCEtLWZvbnQtc2l6ZTogMTZweDtcXFwiIHJvdXRlckxpbms9XFxcIi92ZW5kb3IvdXBkYXRlLXByb2ZpbGVcXFwiPlVQREFURSBQUk9GSUxFPC9hPi0tPlxcbiAgICAgICAgICAgICAgICAgICAgPCEtLTwvbGk+LS0+XFxuXFxuICAgICAgICAgICAgICAgICAgICA8IS0tPGxpPi0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08YSBzdHlsZT1cXFwiICAgIGNvbG9yOiBiZWlnZTstLT5cXG4gICAgPCEtLWZvbnQtc2l6ZTogMjZweDtcXFwiIChjbGljayk9XFxcImxvZ291dCgpXFxcIj5MT0dPVVQ8L2E+LS0+XFxuICAgICAgICAgICAgICAgICAgICA8IS0tPC9saT4tLT5cXG4gICAgICAgICAgICAgICAgPCEtLTwvdWw+LS0+XFxuICAgICAgICAgICAgPCEtLTwvZGl2Pi0tPlxcbiAgICAgICAgPCEtLTwvZGl2Pi0tPlxcbiAgICA8IS0tPC9uZy1jb250YWluZXI+LS0+XFxuICAgIDwhLS08bmctY29udGFpbmVyICpuZ0lmPVxcXCJlbnZpcm9ubWVudC5yYW5kb20udXNlckluZm8mJmVudmlyb25tZW50LnJhbmRvbS5zb3VyY2UgPT0gJ2dvbGZfY291cnNlJ1xcXCI+LS0+XFxuICAgICA8IS0tPGRpdiBvbmNsaWNrPVxcXCIkKCcjbWVudScpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcXFwiPi0tPlxcbiAgICAgICAgIDwhLS08ZGl2IHN0eWxlPVxcXCIgICAgbWFyZ2luLXRvcDogMTAlOy0tPlxcbiAgICA8IS0tbWFyZ2luLWxlZnQ6IDEwJTstLT5cXG4gICAgPCEtLWNvbG9yOiB3aGl0ZTstLT5cXG4gICAgPCEtLXdpZHRoOiAyMCU7ZmxvYXQ6bGVmdDtcXFwiPi0tPlxcbiAgICAgICAgICAgICA8IS0tPHVsPi0tPlxcbiAgICAgICAgICAgICAgICAgPCEtLTxsaT4tLT5cXG4gICAgICAgICAgICAgICAgICAgICA8IS0tPGEgc3R5bGU9XFxcIiAgICBjb2xvcjogYmVpZ2U7LS0+XFxuICAgIDwhLS1mb250LXNpemU6IDE2cHg7XFxcIiByb3V0ZXJMaW5rPVxcXCIvZ29sZi1jb3Vyc2Uvc2VjdGlvbi1vbmVcXFwiPlNFQ1RJT04gT05FPC9hPi0tPlxcbiAgICAgICAgICAgICAgICAgPCEtLTwvbGk+LS0+XFxuICAgICAgICAgICAgICAgICA8IS0tPGxpPi0tPlxcbiAgICAgICAgICAgICAgICAgICAgIDwhLS08YSBzdHlsZT1cXFwiICAgIGNvbG9yOiBiZWlnZTstLT5cXG4gICAgPCEtLWZvbnQtc2l6ZTogMTZweDtcXFwiIHJvdXRlckxpbms9XFxcIi9nb2xmLWNvdXJzZS9zZWN0aW9uLXR3b1xcXCI+U0VDVElPTiBUV088L2E+LS0+XFxuICAgICAgICAgICAgICAgICA8IS0tPC9saT4tLT5cXG4gICAgICAgICAgICAgICAgIDwhLS08bGk+LS0+XFxuICAgICAgICAgICAgICAgICAgICAgPCEtLTxhIHN0eWxlPVxcXCIgICAgY29sb3I6IGJlaWdlOy0tPlxcbiAgICA8IS0tZm9udC1zaXplOiAxNnB4O1xcXCIgcm91dGVyTGluaz1cXFwiL2dvbGYtY291cnNlL3NlY3Rpb24tdGhyZWVcXFwiPlNFQ1RJT04gVEhSRUU8L2E+LS0+XFxuICAgICAgICAgICAgICAgICA8IS0tPC9saT4tLT5cXG4gICAgICAgICAgICAgICAgIDwhLS08bGk+LS0+XFxuICAgICAgICAgICAgICAgICAgICAgPCEtLTxhIHN0eWxlPVxcXCIgICAgY29sb3I6IGJlaWdlOy0tPlxcbiAgICA8IS0tZm9udC1zaXplOiAxNnB4O1xcXCIgcm91dGVyTGluaz1cXFwiL2dvbGYtY291cnNlL3NlY3Rpb24tZm91clxcXCI+U0VDVElPTiBGT1VSPC9hPi0tPlxcbiAgICAgICAgICAgICAgICAgPCEtLTwvbGk+LS0+XFxuICAgICAgICAgICAgIDwhLS08L3VsPi0tPlxcbiAgICAgICAgIDwhLS08L2Rpdj4tLT5cXG4gICAgICAgICA8IS0tPGRpdiBzdHlsZT1cXFwiICAgIG1hcmdpbi10b3A6IDEwJTstLT5cXG4gICAgPCEtLW1hcmdpbi1sZWZ0OiAxMCU7LS0+XFxuICAgIDwhLS1jb2xvcjogd2hpdGU7LS0+XFxuICAgIDwhLS13aWR0aDogMjAlO2Zsb2F0OmxlZnQ7XFxcIj4tLT5cXG4gICAgICAgICAgICAgPCEtLTx1bD4tLT5cXG4gICAgICAgICAgICAgICAgIDwhLS08bGk+LS0+XFxuICAgICAgICAgICAgICAgICAgICAgPCEtLTxhIHN0eWxlPVxcXCIgICAgY29sb3I6IGJlaWdlOy0tPlxcbiAgICA8IS0tZm9udC1zaXplOiAxNnB4O1xcXCIgcm91dGVyTGluaz1cXFwiL2dvbGYtY291cnNlL2Nsb3NlZC1kYXlzXFxcIj5DTE9TRUQgREFZUzwvYT4tLT5cXG4gICAgICAgICAgICAgICAgIDwhLS08L2xpPi0tPlxcbiAgICAgICAgICAgICAgICAgPCEtLTxsaT4tLT5cXG4gICAgICAgICAgICAgICAgICAgICA8IS0tPGEgc3R5bGU9XFxcIiAgICBjb2xvcjogYmVpZ2U7LS0+XFxuICAgIDwhLS1mb250LXNpemU6IDE2cHg7XFxcIiByb3V0ZXJMaW5rPVxcXCIvZ29sZi1jb3Vyc2UvcHVibGljLWhvbGlkYXlcXFwiPkhPTElEQVlTPC9hPi0tPlxcbiAgICAgICAgICAgICAgICAgPCEtLTwvbGk+LS0+XFxuICAgICAgICAgICAgICAgICA8IS0tPGxpPi0tPlxcbiAgICAgICAgICAgICAgICAgICAgIDwhLS08YSBzdHlsZT1cXFwiICAgIGNvbG9yOiBiZWlnZTstLT5cXG4gICAgPCEtLWZvbnQtc2l6ZTogMTZweDtcXFwiIHJvdXRlckxpbms9XFxcIi9nb2xmLWNvdXJzZS9zZWN0aW9uLWFkZC1vblxcXCI+QUREIE9OL1JFTlRBTFM8L2E+LS0+XFxuICAgICAgICAgICAgICAgICA8IS0tPC9saT4tLT5cXG4gICAgICAgICAgICAgICAgIDwhLS08bGk+LS0+XFxuICAgICAgICAgICAgICAgICAgICAgPCEtLTxhIHN0eWxlPVxcXCJkaXNwbGF5OmJsb2NrO2NvbG9yOiBiZWlnZTstLT5cXG4gICAgPCEtLWZvbnQtc2l6ZTogMjZweDtcXFwiIChjbGljayk9XFxcImxvZ291dCgpXFxcIj5MT0dPVVQ8L2E+LS0+XFxuICAgICAgICAgICAgICAgICA8IS0tPC9saT4tLT5cXG5cXG4gICAgICAgICAgICAgPCEtLTwvdWw+LS0+XFxuICAgICAgICAgPCEtLTwvZGl2Pi0tPlxcbiAgICAgICAgIDwhLS08ZGl2IHN0eWxlPVxcXCIgICAgbWFyZ2luLXRvcDogMTAlOy0tPlxcbiAgICA8IS0tbWFyZ2luLWxlZnQ6IDEwJTstLT5cXG4gICAgPCEtLWNvbG9yOiB3aGl0ZTstLT5cXG4gICAgPCEtLXdpZHRoOiAyMCU7ZmxvYXQ6bGVmdDtcXFwiPi0tPlxcbiAgICAgICAgICAgICA8IS0tPHVsPi0tPlxcbiAgICAgICAgICAgICAgICAgPCEtLTxsaT4tLT5cXG4gICAgICAgICAgICAgICAgICAgICA8IS0tPGEgc3R5bGU9XFxcIiAgICBjb2xvcjogYmVpZ2U7LS0+XFxuICAgIDwhLS1mb250LXNpemU6IDE2cHg7XFxcIiByb3V0ZXJMaW5rPVxcXCIvZ29sZi1jb3Vyc2UvZGFzaGJvYXJkXFxcIj5EQVNIQk9BUkQ8L2E+LS0+XFxuICAgICAgICAgICAgICAgICA8IS0tPC9saT4tLT5cXG4gICAgICAgICAgICAgICAgIDwhLS08bGk+LS0+XFxuICAgICAgICAgICAgICAgICAgICAgPCEtLTxhIHN0eWxlPVxcXCIgICAgY29sb3I6IGJlaWdlOy0tPlxcbiAgICA8IS0tZm9udC1zaXplOiAxNnB4O1xcXCIgcm91dGVyTGluaz1cXFwiL2dvbGYtY291cnNlL3VwZGF0ZS1wcm9maWxlXFxcIj5VUERBVEUgUFJPRklMRTwvYT4tLT5cXG4gICAgICAgICAgICAgICAgIDwhLS08L2xpPi0tPlxcbiAgICAgICAgICAgICAgICAgPCEtLTxsaT4tLT5cXG4gICAgICAgICAgICAgICAgICAgICA8IS0tPGEgc3R5bGU9XFxcIiAgICBjb2xvcjogYmVpZ2U7LS0+XFxuICAgIDwhLS1mb250LXNpemU6IDE2cHg7XFxcIiByb3V0ZXJMaW5rPVxcXCIvZ29sZi1jb3Vyc2UvbWFuYWdlLXNsb3RcXFwiPk1BTkFHRSBTTE9UUzwvYT4tLT5cXG4gICAgICAgICAgICAgICAgIDwhLS08L2xpPi0tPlxcbiAgICAgICAgICAgICAgICAgPCEtLTxsaT4tLT5cXG4gICAgICAgICAgICAgICAgICAgICA8IS0tPGEgc3R5bGU9XFxcIiAgICBjb2xvcjogYmVpZ2U7LS0+XFxuICAgIDwhLS1mb250LXNpemU6IDE2cHg7XFxcIiByb3V0ZXJMaW5rPVxcXCIvZ29sZi1jb3Vyc2UvbWFuYWdlLXZlbmRvcnNcXFwiPk1BTkFHRSBWRU5ET1JTPC9hPi0tPlxcbiAgICAgICAgICAgICAgICAgPCEtLTwvbGk+LS0+XFxuICAgICAgICAgICAgIDwhLS08L3VsPi0tPlxcbiAgICAgICAgIDwhLS08L2Rpdj4tLT5cXG4gICAgIDwhLS08L2Rpdj4tLT5cXG5cXG4gICAgPCEtLTwvbmctY29udGFpbmVyPi0tPlxcblxcbjwhLS08L2Rpdj4tLT5cXG48ZGl2IChuZ0luaXQpPVxcXCJ2ZGFoYm9hcmQoKVxcXCIgKm5nSWY9XFxcImVudmlyb25tZW50LnJhbmRvbS5zb3VyY2UgPT0gJ3ZlbmRvcicmJmVudmlyb25tZW50LnJhbmRvbS51c2VySW5mb1xcXCI+PC9kaXY+XFxuPGRpdiAobmdJbml0KT1cXFwiZGFzaGJvYXJkKClcXFwiICpuZ0lmPVxcXCJlbnZpcm9ubWVudC5yYW5kb20uc291cmNlID09ICdnb2xmX2NvdXJzZScmJmVudmlyb25tZW50LnJhbmRvbS51c2VySW5mb1xcXCI+PC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvdHlwZXNjcmlwdHMvaGVhZGVyL2hlYWRlci5odG1sXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwibGVmdC1jb250YWluZXIgbWFpbi1jb250YWluZXJcXFwiPlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhYnNvbHV0ZS1ib3R0b20tY29udGVudCBjb250ZW50LWJnXFxcIj5cXG4gICAgICAgIDxoMSBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+R29sZiBDb3Vyc2U8L2gxPlxcbiAgICAgICAgPGg0IGNsYXNzPVxcXCJjYXJkLXRleHRcXFwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LjwvaDQ+XFxuICAgICAgICA8YSByb3V0ZXJMaW5rPVxcXCJsb2dpbi9nb2xmX2NvdXJzZVxcXCIgY2xhc3M9XFxcImJ0biBidG4tbGcgYnRuLXN1Y2Nlc3MgbXQtNVxcXCI+TG9naW48L2E+ICZuYnNwOyAmbmJzcDtcXG4gICAgICAgIDxhIHJvdXRlckxpbms9XFxcInJlZ2lzdGVyL2dvbGZfY291cnNlXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1sZyBidG4tb3V0bGluZS1zdWNjZXNzIG10LTVcXFwiPlJlZ2lzdGVyPC9hPlxcbiAgICA8L2Rpdj5cXG5cXG48L2Rpdj5cXG5cXG48ZGl2IGNsYXNzPVxcXCJyaWdodC1jb250YWluZXIgbWFpbi1jb250YWluZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhYnNvbHV0ZS1ib3R0b20tY29udGVudCBjb250ZW50LWJnXFxcIj5cXG4gICAgICAgIDxoMSBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+VGVlIFRpbWUgU2VsbGVyczwvaDE+XFxuICAgICAgICA8aDQgY2xhc3M9XFxcImNhcmQtdGV4dFxcXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuPC9oND5cXG5cXG4gICAgICAgIDxhIHJvdXRlckxpbms9XFxcImxvZ2luL3ZlbmRvclxcXCIgY2xhc3M9XFxcImJ0biBidG4tbGcgYnRuLXN1Y2Nlc3MgbXQtNVxcXCI+TG9naW48L2E+ICZuYnNwOyAmbmJzcDtcXG4gICAgICAgIDxhIHJvdXRlckxpbms9XFxcInJlZ2lzdGVyL3ZlbmRvclxcXCIgY2xhc3M9XFxcImJ0biBidG4tbGcgYnRuLW91dGxpbmUtc3VjY2VzcyBtdC01XFxcIj5SZWdpc3RlcjwvYT5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XFxuXFxuPGRpdiBjbGFzcz1cXFwiY2VudGVyZWQtYm94XFxcIj5cXG4gICAgPGltZyBzcmM9XFxcImh0dHA6Ly93d3cuaG1icm93c2VyLmNvbS91cGxvYWRzLzMvMC8yLzEvMzAyMTM1NTMvZ29vZ2xlLXZpZGVvcy1sb2dvXzIucG5nXFxcIiBhbHQ9XFxcImxvZ29cXFwiIGNsYXNzPVxcXCJcXFwiPlxcbjwvZGl2PlxcblxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3R5cGVzY3JpcHRzL2hvbWUvaG9tZS5odG1sXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb21waWxlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvbXBpbGVyXCJcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIlxuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIlxuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItZXhwcmVzcy1lbmdpbmVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi1leHByZXNzLWVuZ2luZVwiXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi1wbGF0Zm9ybS1ub2RlL19fcHJpdmF0ZV9pbXBvcnRzX19cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi1wbGF0Zm9ybS1ub2RlL19fcHJpdmF0ZV9pbXBvcnRzX19cIlxuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIlxuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29tcHJlc3Npb25cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb21wcmVzc2lvblwiXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9hcnJheVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L2FycmF5XCJcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L2RhdGVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9kYXRlXCJcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L2Z1bmN0aW9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvZnVuY3Rpb25cIlxuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvbWFwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvbWFwXCJcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L21hdGhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9tYXRoXCJcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L251bWJlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L251bWJlclwiXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9vYmplY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9vYmplY3RcIlxuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvcGFyc2UtZmxvYXRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9wYXJzZS1mbG9hdFwiXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9wYXJzZS1pbnRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9wYXJzZS1pbnRcIlxuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvcmVmbGVjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L3JlZmxlY3RcIlxuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvcmVnZXhwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvcmVnZXhwXCJcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L3NldFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L3NldFwiXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9zdHJpbmdcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9zdHJpbmdcIlxuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvc3ltYm9sXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvc3ltYm9sXCJcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM3L3JlZmxlY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNy9yZWZsZWN0XCJcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJleHByZXNzXCJcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwYXRoXCJcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIvKlxcclxcblRlbXBsYXRlIE5hbWU6IEFkbWluIFRlbXBsYXRlXFxyXFxuQXV0aG9yOiBXcmFwcGl4ZWxcXHJcXG5cXHJcXG5GaWxlOiBzY3NzXFxyXFxuKi9cXHJcXG5AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczozMDAsNDAwLDUwMCw2MDAsNzAwKTtcXHJcXG4vKlRoZW1lIENvbG9ycyovXFxyXFxuLyoqXFxyXFxuICogVGFibGUgT2YgQ29udGVudFxcclxcbiAqXFxyXFxuICogXFx0MS4gQ29sb3Igc3lzdGVtXFxyXFxuICpcXHQyLiBPcHRpb25zXFxyXFxuICpcXHQzLiBCb2R5XFxyXFxuICpcXHQ0LiBUeXBvZ3JhcGh5XFxyXFxuICpcXHQ1LiBCcmVhZGNydW1ic1xcclxcbiAqXFx0Ni4gQ2FyZHNcXHJcXG4gKlxcdDcuIERyb3Bkb3duc1xcclxcbiAqXFx0OC4gQnV0dG9uc1xcclxcbiAqXFx0OS4gVHlwb2dyYXBoeVxcclxcbiAqXFx0MTAuIFByb2dyZXNzIGJhcnNcXHJcXG4gKlxcdDExLiBUYWJsZXNcXHJcXG4gKlxcdDEyLiBGb3Jtc1xcclxcbiAqXFx0MTQuIENvbXBvbmVudFxcclxcbiAqL1xcclxcbi8qKioqKioqKioqKioqKioqKioqXFxyXFxuTG9naW4gcmVnaXN0ZXIgYW5kIHJlY292ZXIgcGFzc3dvcmQgUGFnZVxcclxcbioqKioqKioqKioqKioqKioqKi9cXHJcXG4ubG9naW4tcmVnaXN0ZXIge1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiA2JSAwO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxyXFxuXFxyXFxuLmxvZ2luLWJveCB7XFxyXFxuICB3aWR0aDogNTAwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bzsgfVxcclxcbiAgLmxvZ2luLWJveCAuZm9vdGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGxlZnQ6IDBweDtcXHJcXG4gICAgcmlnaHQ6IDBweDsgfVxcclxcbiAgLmxvZ2luLWJveCAuc29jaWFsIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7IH1cXHJcXG5cXHJcXG4jcmVjb3ZlcmZvcm0ge1xcclxcbiAgZGlzcGxheTogbm9uZTsgfVxcclxcblxcclxcbi5sb2dpbi1zaWRlYmFyIHtcXHJcXG4gIHBhZGRpbmc6IDBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDBweDsgfVxcclxcbiAgLmxvZ2luLXNpZGViYXIgLmxvZ2luLWJveCB7XFxyXFxuICAgIHJpZ2h0OiAwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlOyB9XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hc3NldHMvY3NzL25ldy9sb2dpbi1yZWdpc3Rlci1sb2NrLmNzc1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==