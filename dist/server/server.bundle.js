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

module.exports = "\n<!--<div class=\"tee_menu\"></div>-->\n<!--<div style=\"    position: absolute;-->\n    <!--width: 45%;-->\n    <!--height: 700px;-->\n    <!--border: 1px solid white;-->\n\n    <!--margin-top: -60%;-->\n    <!--margin-left: 5%;-->\n    <!--color: beige;-->\n    <!--float: left;-->\n<!--\">-->\n\n<!--</div>-->\n<!--<div style=\"position: absolute;-->\n    <!--width: 40%;-->\n    <!--height: 300px;-->\n    <!--border: 1px solid white;-->\n    <!--/* background-color: white; */-->\n\n    <!--margin-top: -60%;-->\n    <!--margin-left: 55%;-->\n    <!--float: right;-->\n    <!--color: beige;\">-->\n    <!--<h2 class=\"txt_centre\" style=\"padding-top: 100px;\">GOLF COURSE</h2>-->\n    <!--<div >-->\n        <!--<a  routerLink=\"login/golf_course\"><div class=\" txt_centre\">LOGIN</div></a>-->\n    <!--</div>-->\n    <!--<div >-->\n        <!--<a routerLink=\"register/golf_course\">  <div class=\"  txt_centre\">REGISTER</div></a>-->\n    <!--</div>-->\n<!--</div>-->\n<!--<div style=\"position: absolute;-->\n    <!--width: 40%;-->\n    <!--height: 300px;-->\n    <!--border: 1px solid white;-->\n    <!--/* background-color: white; */-->\n\n    <!--margin-top: -29%;-->\n    <!--margin-left: 55%;-->\n    <!--float: right;-->\n    <!--color: beige;\">-->\n    <!--<h2 class=\"txt_centre\" style=\"padding-top: 100px;\">VENDOR</h2>-->\n    <!--<div >-->\n        <!--<a  routerLink=\"login/vendor\"><div class=\" txt_centre\">LOGIN</div></a>-->\n    <!--</div>-->\n    <!--<div >-->\n        <!--<a routerLink=\"register/vendor\"> <div class=\" txt_centre\">REGISTER</div></a>-->\n    <!--</div>-->\n<!--</div>-->\n\n\n<div class=\"hero\" data-module=\"hero\" style=\"background-image:url('//logmeincdn.azureedge.net/sc-logmeinmedia/-/media/15755bb40eb644379f9512b4840f7af2.jpg');\">\n    <div class=\"belt bi-content\">\n        <div class=\"content\">\n            <div class=\"half\">\n                <h4>Golf Course</h4>\n                <div>\n                    <a class=\"log-reg-btn\" routerLink=\"login/golf_course\">\n                        <button style=\"min-width: 150px;\" type=\"button\" class=\"btn btn-block btn-lg btn-info\">Login</button>\n                    </a>\n                </div>\n                <div>\n                    <a class=\"log-reg-btn\" routerLink=\"register/golf_course\">\n                        <button  style=\"min-width: 200px;\" type=\"button\" class=\"btn btn-block btn-lg btn-success\">Register</button>\n                    </a>\n                </div>\n            </div>\n            <div class=\"half\">\n                <h4>Tee Time Sellers</h4>\n                <div>\n                    <a class=\"log-reg-btn\" routerLink=\"login/vendor\">\n                        <button  style=\"min-width: 150px;\" type=\"button\" class=\"btn btn-block btn-lg btn-info\">Login</button>\n                    </a>\n                </div>\n                <div>\n                    <a class=\"log-reg-btn\" routerLink=\"register/vendor\">\n                        <button  style=\"min-width: 200px;\" type=\"button\" class=\"btn btn-block btn-lg btn-success\">Register</button>\n                    </a>\n                </div>\n            </div>\n\n\n        </div>\n    </div>\n</div>\n"

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


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTRiNTg5MGEzM2NlNGIzZjlhMmIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy8uL3NyYy9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQuZGV2LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiIiwid2VicGFjazovLy8uL3NyYy9hcHAvdHlwZXNjcmlwdHMvY29tbW9uL3NlcnZpY2VzL3N0b3JhZ2Uuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWxcIiIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3R5cGVzY3JpcHRzL2NvbW1vbi9zZXJ2aWNlcy9hcGkuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3R5cGVzY3JpcHRzL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvaHR0cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLWNvb2tpZS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX18yLjEuMS53b3JrYXJvdW5kLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FwcC5ub2RlLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc2VydmVyLXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvdHlwZXNjcmlwdHMvZGlyZWN0aXZlLW1vZHVsZXMvZGF0ZS1jb252ZXJ0b3IubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvdHlwZXNjcmlwdHMvZGlyZWN0aXZlLW1vZHVsZXMvbmctaW5pdC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC90eXBlc2NyaXB0cy9kaXJlY3RpdmUtbW9kdWxlcy9zZXJ2ZXItY29tYmluZS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC90eXBlc2NyaXB0cy9kaXJlY3RpdmUtbW9kdWxlcy9zcGwtY2hhci5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC90eXBlc2NyaXB0cy9kaXJlY3RpdmUvZGF0ZS1jb252ZXJ0b3IuZGlyZWN0aXZlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvdHlwZXNjcmlwdHMvZGlyZWN0aXZlL25nLWluaXQuZGlyZWN0aXZlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvdHlwZXNjcmlwdHMvZGlyZWN0aXZlL25vLXNwZWNpYWwtY2hhci5kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC90eXBlc2NyaXB0cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3R5cGVzY3JpcHRzL3BpcGUtbW9kdWxlcy9rZXkubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvdHlwZXNjcmlwdHMvcGlwZS9rZXkucGlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9seWZpbGxzLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIucm91dGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvbWFpbi5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvdHlwZXNjcmlwdHMvaGVhZGVyL2hlYWRlci5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvdHlwZXNjcmlwdHMvaG9tZS9ob21lLmh0bWwiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29tcGlsZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyMi1leHByZXNzLWVuZ2luZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXBsYXRmb3JtLW5vZGUvX19wcml2YXRlX2ltcG9ydHNfX1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb21wcmVzc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L2FycmF5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvZGF0ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L2Z1bmN0aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvbWFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvbWF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L251bWJlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L29iamVjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L3BhcnNlLWZsb2F0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvcGFyc2UtaW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvcmVmbGVjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L3JlZ2V4cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L3NldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L3N0cmluZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L3N5bWJvbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM3L3JlZmxlY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDOURBLDBDOzs7Ozs7O0FDQUE7QUFBQSxtRkFBbUY7QUFDbkYsOEZBQThGO0FBQzlGLDBFQUEwRTtBQUMxRSwrRUFBK0U7QUFHeEUsSUFBTSxXQUFXLEdBQUc7SUFDekIsVUFBVSxFQUFFLElBQUk7SUFDZCxPQUFPLEVBQUMsdUJBQXVCO0lBQy9CLE1BQU0sRUFBQyxFQUFFO0lBQ1QsTUFBTSxFQUFDLDRCQUE0QjtJQUNyQyxjQUFjLEVBQUU7UUFDZCxZQUFZLEVBQUUsZ0ZBQWdGO1FBQzFGLGNBQWMsRUFBRSxFQUFFO1FBQ2xCLGNBQWMsRUFBRSxDQUFDO1FBQ2pCLGdCQUFnQixFQUFFLEVBQUU7UUFDcEIsZ0JBQWdCLEVBQUUsRUFBRTtRQUNwQixZQUFZLEVBQUUsQ0FBQztRQUNmLGNBQWMsRUFBRSxrREFBa0Q7UUFDbEUsZUFBZSxFQUFFLG1EQUFtRDtRQUNwRSxpQkFBaUIsRUFBRSx1Q0FBdUM7UUFDMUQsY0FBYyxFQUFFLENBQUM7UUFDakIsT0FBTyxFQUFFLEdBQUc7S0FDakI7Q0FHRixDQUFDOzs7Ozs7O0FDMUJGLDRDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWtEO0FBQ1Y7QUFDMEI7QUFDOUI7QUFDYztBQUNKO0FBUzlDO0lBR0Usd0JBQW9CLElBQVcsRUFBVSxNQUFhLEVBQVUsT0FBcUI7UUFBakUsU0FBSSxHQUFKLElBQUksQ0FBTztRQUFVLFdBQU0sR0FBTixNQUFNLENBQU87UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFjO1FBQ25GLElBQUksQ0FBQyxXQUFXLEdBQUcsOEVBQVcsQ0FBQztJQUNqQyxDQUFDO0lBS0Qsb0NBQVcsR0FBWCxVQUFZLE1BQU07UUFBbEIsaUJBaUJDO1FBaEJDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLEVBQUUsRUFBQyw2REFBUyxDQUFDLENBQUMsQ0FBQztnQkFDYixJQUFJLE9BQU8sR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNwQyxFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUNyQyxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztvQkFDekUsT0FBTyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUM1QyxDQUFDO2dCQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2xFLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxFQUFDLEVBQUUsRUFBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBQyxNQUFNLEVBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFDLENBQUM7b0JBQ3RHLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO29CQUN6RSxPQUFPLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzVDLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUM7Z0JBQ1osQ0FBQztZQUNILENBQUM7UUFFSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFLRCxrQ0FBUyxHQUFUO1FBQUEsaUJBbUJDO1FBbEJDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLEVBQUUsRUFBQyw2REFBUyxDQUFDLENBQUMsQ0FBQztnQkFDYixJQUFJLE9BQU8sR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNwQyxFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUNyQyxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztvQkFDekUsT0FBTyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUM1QyxDQUFDO2dCQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2xFLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxFQUFDLEVBQUUsRUFBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBQyxNQUFNLEVBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFDLENBQUM7b0JBQ3RHLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO29CQUN6RSxPQUFPLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzVDLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQy9CLElBQUksQ0FBQyxlQUFlLEVBQUMsZ0NBQWdDLEVBQUMsT0FBTyxDQUFDLENBQUM7b0JBQy9ELE9BQU8sRUFBRSxDQUFDO2dCQUNaLENBQUM7WUFDSCxDQUFDO1FBRUgsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQscUNBQVksR0FBWixVQUFhLElBQUksRUFBQyxHQUFHLEVBQUMsSUFBSTtRQUN4QixRQUFRLENBQUMsTUFBTSxHQUFDLElBQUksR0FBQyxHQUFHLEdBQUMsR0FBRyxHQUFDLFlBQVksR0FBQyxJQUFJLEdBQUMsVUFBVSxDQUFDO0lBQzNELENBQUM7SUFHRixzQ0FBYSxHQUFiO1FBRUUsSUFBSSxPQUFPLEdBQUcsK0JBQStCLENBQUM7UUFDOUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBQyxFQUFFLEdBQUMsRUFBRSxHQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDekMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNwQyxpQkFBaUI7UUFDakIsc0JBQXNCO1FBQ3RCLElBQUk7UUFDSixHQUFHLEVBQUMsSUFBSSxDQUFDLElBQUksT0FBTyxDQUFDLEVBQUM7WUFDcEIsRUFBRSxFQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBQztnQkFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFDLEVBQUMsSUFBSSxFQUFDLEdBQUcsRUFBQyxDQUFDLENBQUM7WUFDcEMsQ0FBQztRQUNILENBQUM7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsRUFBQyxFQUFDLElBQUksRUFBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBQyxFQUFDLElBQUksRUFBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFDLFFBQVEsRUFBRSxFQUFDLElBQUksRUFBQyxHQUFHLEVBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUNsQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDcEMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBR2hELENBQUM7SUFRRCxvQ0FBVyxHQUFYLFVBQVksT0FBTyxFQUFDLElBQUk7UUFDcEIsRUFBRSxFQUFDLElBQUksSUFBSSxPQUFPLElBQUksSUFBSSxJQUFJLFNBQVMsQ0FBQyxFQUFDO1lBQ3ZDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixHQUFDLFdBQVcsQ0FBQztZQUNsRixDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2hDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25ELENBQUM7UUFBQSxJQUFJLENBQUMsRUFBRSxFQUFDLElBQUksSUFBSSxTQUFTLENBQUMsRUFBQztZQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsR0FBQyxhQUFhLENBQUM7WUFDckYsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ25DLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25ELENBQUM7SUFDTCxDQUFDO0lBRUQsMENBQWlCLEdBQWpCLFVBQWtCLE1BQU07UUFBeEIsaUJBVUc7UUFSRyxHQUFHLEVBQUMsSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDLEVBQUM7WUFDakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdDLENBQUM7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUNWLEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFJLEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO1FBQzNELENBQUMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFLSCxtQ0FBVSxHQUFWLFVBQVcsTUFBTTtRQUNmLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFDLElBQUksS0FBSyxFQUFFLENBQUM7UUFDdkgsR0FBRyxFQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxFQUFDO1lBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEQsQ0FBQztJQUNILENBQUM7SUExSEg7UUFBQyxnRkFBVSxFQUFFOztzQkFBQTtJQStIYixxQkFBQzs7QUFBRCxDQUFDOzs7Ozs7O0FDNUlELCtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FrRDtBQUNKO0FBQ1M7QUFDVztBQUU5QjtBQUUyQjtBQUsvRDtJQUVFLG9CQUFvQixJQUFXLEVBQVUsSUFBVSxFQUFVLE1BQWE7UUFBdEQsU0FBSSxHQUFKLElBQUksQ0FBTztRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFPO1FBQ3hFLElBQUksQ0FBQyxXQUFXLEdBQUcsOEVBQVcsQ0FBQztRQUMvQixJQUFJLEdBQUcsR0FBRyxDQUFDLDRCQUE0QixFQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRTtJQUNwQixDQUFDO0lBS0QsK0JBQVUsR0FBVixVQUFZLEdBQUcsRUFBRSxPQUFRLEVBQUMsTUFBTztRQUMvQixJQUFJLE9BQU8sR0FBRyxJQUFJLHNEQUFPLEVBQUUsQ0FBQztRQUM1QixFQUFFLEVBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFFLE1BQU0sQ0FBQyxFQUFDO1lBQzNDLE9BQU8sR0FBRyxJQUFJLHNEQUFPLENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztRQUM1SixDQUFDO1FBQ0QsSUFBSSxPQUFPLEdBQUcsSUFBSSw2REFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDdkQsSUFBSSxNQUFNLEdBQUcsT0FBTyxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRCxNQUFNLEdBQUcsTUFBTSxHQUFDLEdBQUcsQ0FBQztRQUNwQixNQUFNLEdBQUcsT0FBTyxJQUFFLENBQUMsR0FBQyxNQUFNLEdBQUMsSUFBSSxDQUFDLFFBQVEsR0FBQyxNQUFNLENBQUM7UUFDaEQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxPQUFPLENBQUM7YUFDL0IsU0FBUyxFQUFFO2FBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDckIsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBS0QsZ0NBQVcsR0FBWCxVQUFhLEdBQUcsRUFBQyxNQUFNLEVBQUMsUUFBUyxFQUFDLE1BQU8sRUFBQyxPQUFRO1FBQ2hELElBQUksT0FBTyxHQUFHLElBQUksc0RBQU8sQ0FBQyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztRQUN6RyxFQUFFLEVBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFFLE1BQU0sQ0FBQyxFQUFDO1lBQzNDLE9BQU8sR0FBRyxJQUFJLHNEQUFPLENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztRQUM1SixDQUFDO1FBQ0QsRUFBRSxFQUFDLFFBQVEsQ0FBQyxFQUFDO1lBQ1gsT0FBTyxHQUFHLElBQUksc0RBQU8sQ0FBQyxFQUFFLGNBQWMsRUFBRSxtQ0FBbUMsRUFBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztRQUN4SCxDQUFDO1FBQ0QsSUFBSSxPQUFPLEdBQUcsSUFBSSw2REFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDdkQsSUFBSSxNQUFNLEdBQUcsT0FBTyxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRCxNQUFNLEdBQUcsTUFBTSxHQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQzthQUN6QyxTQUFTLEVBQUU7YUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQzthQUNyQixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFLRCwrQkFBVSxHQUFWLFVBQVksR0FBRyxFQUFDLE1BQU0sRUFBQyxPQUFRO1FBQzdCLElBQUksT0FBTyxHQUFHLElBQUksc0RBQU8sQ0FBQyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUM7UUFDbEUsRUFBRSxFQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFDO1lBQ25DLE9BQU8sR0FBRyxJQUFJLHNEQUFPLENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztRQUM1SixDQUFDO1FBQ0QsSUFBSSxPQUFPLEdBQUcsSUFBSSw2REFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDdkQsSUFBSSxNQUFNLEdBQUcsT0FBTyxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRCxNQUFNLEdBQUcsTUFBTSxHQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQzthQUN4QyxTQUFTLEVBQUU7YUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQzthQUNyQixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFLRCxrQ0FBYSxHQUFiLFVBQWUsR0FBRyxFQUFDLE9BQU87UUFDeEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxzREFBTyxDQUFDLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQztRQUNsRSxFQUFFLEVBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsRUFBQztZQUM1QixPQUFPLEdBQUcsSUFBSSxzREFBTyxDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBQyxXQUFXLEVBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQztRQUM5RyxDQUFDO1FBQ0QsSUFBSSxPQUFPLEdBQUcsSUFBSSw2REFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDdkQsSUFBSSxNQUFNLEdBQUcsT0FBTyxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRCxNQUFNLEdBQUcsTUFBTSxHQUFDLEdBQUcsQ0FBQztRQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQzthQUNuQyxTQUFTLEVBQUU7YUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQzthQUNyQixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCw2QkFBUSxHQUFSLFVBQVMsR0FBRyxFQUFDLFFBQVEsRUFBQyxPQUFRO1FBQzVCLElBQUksT0FBTyxHQUFHLElBQUksc0RBQU8sQ0FBQyxFQUFDLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFDLE9BQU8sRUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDO1FBQzlKLElBQUksT0FBTyxHQUFHLElBQUksNkRBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELElBQUksTUFBTSxHQUFHLE9BQU8sR0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0QsTUFBTSxHQUFHLE1BQU0sR0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUM7YUFDM0MsU0FBUyxFQUFFO2FBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDckIsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBR08sK0JBQVUsR0FBbEIsVUFBbUIsR0FBYTtRQUM5QixJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFHLENBQUM7SUFDckIsQ0FBQztJQUdPLGdDQUFXLEdBQW5CLFVBQXFCLEtBQXFCO1FBQ3hDLElBQUksTUFBYyxDQUFDO1FBQ25CLEVBQUUsQ0FBQyxDQUFDLEtBQUssWUFBWSx1REFBUSxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO1lBQ2hDLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQyxNQUFNLEdBQU0sS0FBSyxDQUFDLE1BQU0sWUFBTSxLQUFLLENBQUMsVUFBVSxJQUFJLEVBQUUsVUFBSSxHQUFLLENBQUM7UUFDaEUsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUQsQ0FBQztRQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFLRCxpQ0FBWSxHQUFaLFVBQWEsR0FBRyxFQUFDLEVBQUU7UUFDakIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLENBQUM7Z0JBQ0MsRUFBRSxFQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMvQixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2hCLENBQUM7Z0JBQUEsSUFBSSxFQUFDO29CQUNKLElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQzFDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsaUJBQWlCLENBQUM7b0JBQzVCLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO29CQUNYLEVBQUUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO29CQUNoQixFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztvQkFDYixJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3BELElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ3JCLEVBQUUsQ0FBQyxNQUFNLEdBQUc7d0JBQ1YsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNoQixDQUFDLENBQUM7Z0JBQ0osQ0FBQztZQUNILENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFNRCwrQkFBVSxHQUFWLFVBQVcsSUFBSTtRQUFmLGlCQXNCQztRQXJCQyxJQUFJLENBQUMsVUFBVSxDQUFDLHdCQUF3QixFQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxLQUFLO1lBQzFELEVBQUUsRUFBQyxLQUFLLElBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFDO2dCQUNwQixLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDaEQsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNsQyxFQUFFLEVBQUMsSUFBSSxDQUFDLEVBQUM7b0JBQ1AsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2xDLENBQUM7Z0JBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFVLElBQUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLGFBQWEsSUFBRSxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEVBQUM7b0JBQzNKLEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLHlCQUF5QixDQUFDLENBQUM7Z0JBQ3ZELENBQUM7Z0JBQUEsSUFBSSxDQUFDLEVBQUUsRUFBQyxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFVLElBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLElBQUksS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDO29CQUN4SixLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO2dCQUN2RCxDQUFDO2dCQUFBLElBQUksQ0FBQyxFQUFFLEVBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsVUFBVSxJQUFFLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxZQUFZLElBQUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLEVBQUM7b0JBQ3pKLEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLDJCQUEyQixDQUFDLENBQUM7Z0JBQ3pELENBQUM7Z0JBQUEsSUFBSSxDQUFDLEVBQUUsRUFBQyxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFVLElBQUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFVBQVUsSUFBRSxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsRUFBQztvQkFDckosS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsMEJBQTBCLENBQUMsQ0FBQztnQkFDeEQsQ0FBQztnQkFBQSxJQUFJLENBQUMsRUFBRSxFQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUUsQ0FBRSxDQUFDLElBQUksS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFFLENBQUUsQ0FBQyxDQUFDLEVBQUM7b0JBQ3BILEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLHVCQUF1QixDQUFDLENBQUM7Z0JBQ3JELENBQUM7Z0JBQUEsSUFBSSxFQUFDO29CQUNKLEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzdDLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELHFDQUFnQixHQUFoQixVQUFpQixJQUFJO1FBQXJCLGlCQVVDO1FBVEMsSUFBSSxDQUFDLFVBQVUsQ0FBQywwQkFBMEIsRUFBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsS0FBSztZQUM1RCxFQUFFLEVBQUMsS0FBSyxJQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQztnQkFDcEIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQ2hELEVBQUUsRUFBQyxJQUFJLENBQUMsRUFBQztvQkFDUCxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEMsQ0FBQztnQkFDRCxLQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEMsQ0FBQztRQUNILENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCw0QkFBTyxHQUFQLFVBQVEsS0FBSztRQUNYLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDckMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7UUFDckQsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2YsR0FBRyxFQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDO1lBQ3pDLEdBQUcsRUFBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQztnQkFDNUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUN2RixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDekYsQ0FBQztRQUVILENBQUM7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUksS0FBSyxDQUFDO0lBQ2xELENBQUM7SUE3TEg7UUFBQyxnRkFBVSxFQUFFOztrQkFBQTtJQWlNYixpQkFBQzs7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1TW1FO0FBRUM7QUFDTjtBQUN6QjtBQVl0QztJQUlFLHVCQUFvQixRQUF1QixFQUFTLE9BQWU7UUFBL0MsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQUFTLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDakUsSUFBSSxDQUFDLFdBQVcsR0FBRyw4RUFBVyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQUEsaUJBV0M7UUFWRyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFHO1lBQ3RDLEVBQUUsRUFBQyxHQUFHLElBQUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLGFBQWEsQ0FBQyxFQUFDO2dCQUN2RCxLQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBQ3RELENBQUM7WUFBQSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFFLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBRyxRQUFRLENBQUMsRUFBQztnQkFDeEQsS0FBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUNqRCxDQUFDO1FBQ0wsQ0FBQyxDQUFDO0lBSU4sQ0FBQztJQUVELG1DQUFXLEdBQVg7SUFHQSxDQUFDO0lBL0JIO1FBQUMsK0VBQVMsQ0FBQztZQUNULGFBQWEsRUFBQyxnRUFBaUIsQ0FBQyxJQUFJO1lBQ3BDLFFBQVEsRUFBQyxNQUFNO1lBQ2YsaUNBQTBCO1NBQzNCLENBQUM7O3FCQUFBO0lBbUNGLG9CQUFDOztBQUFELENBQUM7Ozs7Ozs7QUNoREQsMEM7Ozs7OztBQ0FBLGlEOzs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDR3VCO0FBQ1M7QUFDSjtBQUNNO0FBQ1E7QUFDWTtBQUNSO0FBQ0c7QUFDTztBQUNoQjtBQUV4QyxNQUFNO0FBRU4sSUFBTSxHQUFHLEdBQUkscUNBQU8sRUFBRSxDQUFDO0FBQ3ZCLElBQU0sSUFBSSxHQUFHLDBDQUFTLENBQUMsNkNBQVksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUN0RCxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUM7QUFFdEM7O0dBRUc7QUFDSCxFQUFFLENBQUMsQ0FBQyw4RUFBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDM0Isb0ZBQWMsRUFBRSxDQUFDO0FBQ25CLENBQUM7QUFFRDs7R0FFRztBQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLDRGQUFZLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN0QyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSwwQ0FBUyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBQzVDLEdBQUcsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBRS9COztHQUVHO0FBQ0gsR0FBRyxDQUFDLEdBQUcsQ0FBQyx5Q0FBVyxFQUFFLENBQUMsQ0FBQztBQUN2Qjs7RUFFRTtBQUdGOztHQUVHO0FBQ0gsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsK0NBQWMsQ0FBQywwQ0FBUyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsRUFBRSxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUMsVUFBVSxFQUFFLFVBQVUsRUFBQyxDQUFDLENBQUMsQ0FBQztBQUcvRixvQkFBb0IsR0FBRztJQUNwQixHQUFHLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO0lBQ3pELEdBQUcsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxVQUFVLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0FBRTlFLENBQUM7QUFDRDs7R0FFRztBQUNILHdCQUF3QjtBQUV4Qjs7OztHQUlHO0FBQ0gsZUFBZSxHQUFRLEVBQUUsR0FBUTtJQUMvQixHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtRQUNsQixRQUFHO1FBQ0gsUUFBRztRQUNILFFBQVEsRUFBRSx1RUFBUztRQUNuQixPQUFPLEVBQUUsS0FBSztRQUNkLE9BQU8sRUFBRSxHQUFHO1FBQ1osVUFBVSxFQUFFLEdBQUcsQ0FBQyxXQUFXO1FBQzNCLFNBQVMsRUFBRSxHQUFHLENBQUMsUUFBUTtLQUN4QixDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNwQiw4REFBTSxDQUFDLE9BQU8sQ0FBQyxlQUFLO0lBQ2xCLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBSSxLQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDNUIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFJLEtBQUssT0FBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2hDLENBQUMsQ0FBQyxDQUFDO0FBTUg7O0dBRUc7QUFFSCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFVLEdBQVEsRUFBRSxHQUFRO0lBQ3ZDLEdBQUcsQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDbEQsSUFBTSxJQUFJLEdBQUcsRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUMsQ0FBQztJQUNsRCxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDM0MsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDN0IsQ0FBQyxDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtJQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXFCLElBQU0sQ0FBQyxDQUFDO0FBQzNDLENBQUMsQ0FBQyxDQUFDOzs7Ozs7O0FDdEdIOztHQUVHO0FBRUgsb0JBQW9CO0FBQ3BCLElBQUksWUFBWSxHQUFRLG1CQUFPLENBQUMsRUFBbUIsQ0FBQyxDQUFDO0FBRXJELElBQUksZ0JBQWdCLEdBQVEsbUJBQU8sQ0FBQyxDQUFlLENBQUMsQ0FBQztBQUNyRCxJQUFJLEtBQUssR0FBWSxLQUFLLENBQUM7QUFFM0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hELEtBQUssR0FBRyxJQUFJLENBQUM7SUFDYixnQkFBZ0IsQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQUMsVUFBVSxDQUFDO0FBQzdELENBQUM7QUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7SUFDckMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUNiLENBQUMsWUFBWSxDQUFDLENBQUMsb0JBQW9CLEdBQUc7UUFDbEMsZUFBZSxFQUFFLFlBQVksQ0FBQyxlQUFlO1FBQzdDLFdBQVcsRUFBRSxZQUFZLENBQUMsV0FBVztLQUN4QztBQUNMLENBQUM7QUFFRCxJQUFJLGFBQWEsR0FBUSxtQkFBTyxDQUFDLEVBQTRDLENBQUMsQ0FBQztBQUMvRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ1IsYUFBYSxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUM7SUFDdEQsYUFBYSxDQUFDLFdBQVcsR0FBRyxZQUFZLENBQUMsV0FBVztJQUNwRCxhQUFhLENBQUMsZUFBZSxHQUFHLFlBQVksQ0FBQyxlQUFlO0FBQ2hFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QnFEO0FBQ2Q7QUFDbUI7QUFDYjtBQU05QztJQVFFLHNCQUFvQixNQUFhO1FBQWIsV0FBTSxHQUFOLE1BQU0sQ0FBTztRQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLDhFQUFXLENBQUM7UUFDL0IsRUFBRSxFQUFDLDZEQUFTLENBQUMsRUFBQztZQUNaLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDM0MsQ0FBQztRQUFBLElBQUksRUFBQztZQUNKLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDMUMsQ0FBQztRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxrQ0FBa0MsQ0FBQztJQUN2RSxDQUFDO0lBYkMsb0NBQWEsR0FBYixVQUFjLE1BQU07UUFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUN0QyxDQUFDO0lBY0gsK0JBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUMsR0FBRztZQUMvQixLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUN2QyxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUUvQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUF4QkQ7UUFBQyxrRkFBWSxDQUFDLGFBQWEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7O3FEQUFBO0lBTjFDO1FBQUMsK0VBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLGlDQUF5QjtTQUMxQixDQUFDOztvQkFBQTtJQWlDRixtQkFBQzs7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDRDtBQUFBOztHQUVHO0FBQ0g7Ozs7OztHQU1HOzs7Ozs7Ozs7O0FBRTZEO0FBQ1o7QUFDUjtBQUNOO0FBQzJCO0FBQ2I7QUFDbUI7QUFDNEI7QUFFckI7QUFJUjtBQUdUO0FBb0I3RDtJQUFBO0lBRUEsQ0FBQztJQWxCRDtRQUFDLDhFQUFRLENBQUM7WUFDTixTQUFTLEVBQUUsQ0FBRSw0REFBWSxDQUFDO1lBQzFCLE9BQU8sRUFBRTtnQkFDTCxtRUFBZTtnQkFDZiwyREFBVztnQkFDWCxvRkFBbUI7Z0JBQ25CLDBIQUE0QjthQUUvQjtZQUNELFlBQVksRUFBRTtnQkFDViw0REFBWSxFQUFFLHVGQUFhLEVBQUMsNkZBQWU7YUFFOUM7WUFDRCxTQUFTLEVBQUUsQ0FBQyxvR0FBYyxFQUFFLDRGQUFVLEVBQUUsbUVBQWEsQ0FBQztZQUN0RCxPQUFPLEVBQU8sQ0FBQyxxRUFBc0IsQ0FBQztTQUN6QyxDQUFDOztpQkFBQTtJQUdGLGdCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7OztBQ2pEK0I7Ozs7Ozs7Ozs7OztBQ0NpQztBQUtYO0FBRXRELElBQU0sTUFBTSxHQUFVO0lBQ2xCLE1BQU07SUFDTixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFDLHVGQUFhLEVBQUUsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMsTUFBTSxFQUFFLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBQztJQUMxRixFQUFFLElBQUksRUFBRSxxQkFBcUIsRUFBRSxTQUFTLEVBQUMsdUZBQWEsRUFBRSxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBQyxjQUFjLEVBQUUsRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFDO0lBQ3RILEVBQUUsSUFBSSxFQUFFLHVCQUF1QixFQUFFLFlBQVksRUFBRSwrREFBK0QsRUFBRSxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyxLQUFLLEVBQUUsRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFDO0lBRXBLLEVBQUUsSUFBSSxFQUFFLHVCQUF1QixFQUFFLFlBQVksRUFBRSwrREFBK0QsRUFBRSxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyxLQUFLLEVBQUUsRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFDO0lBRXBLLEVBQUUsSUFBSSxFQUFFLHVCQUF1QixFQUFFLFlBQVksRUFBRSxxRUFBcUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyxPQUFPLEVBQUUsRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFDO0lBRTVLLEVBQUUsSUFBSSxFQUFFLHVCQUF1QixFQUFFLFlBQVksRUFBRSxrRUFBa0UsRUFBRSxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyxNQUFNLEVBQUUsRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFDO0lBRXhLLEVBQUUsSUFBSSxFQUFFLDRCQUE0QixFQUFFLFlBQVksRUFBRSx1RUFBdUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyxPQUFPLEVBQUUsRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFDO0lBRW5MLEVBQUUsSUFBSSxFQUFFLHVCQUF1QixFQUFFLFlBQVksRUFBRSwwREFBMEQsRUFBRSxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyxPQUFPLEVBQUUsRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFDO0lBRWpLLEVBQUUsSUFBSSxFQUFFLDRCQUE0QixFQUFFLFlBQVksRUFBRSx3RUFBd0UsRUFBRSxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyxRQUFRLEVBQUUsRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFDO0lBRXJMLEVBQUUsSUFBSSxFQUFFLDRCQUE0QixFQUFFLFlBQVksRUFBRSx3RUFBd0UsRUFBRSxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyxRQUFRLEVBQUUsRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFDO0lBRXJMLEVBQUUsSUFBSSxFQUFFLHdCQUF3QixFQUFFLFlBQVksRUFBRSw0REFBNEQsRUFBRSxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyxRQUFRLEVBQUUsRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFDO0lBRXJLLEVBQUUsSUFBSSxFQUFFLHlCQUF5QixFQUFFLFlBQVksRUFBRSwrREFBK0QsRUFBRSxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyxRQUFRLEVBQUUsRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFDO0lBRXpLLEVBQUUsSUFBSSxFQUFFLDRCQUE0QixFQUFFLFlBQVksRUFBRSx3RUFBd0UsRUFBRSxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyxRQUFRLEVBQUUsRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFDO0lBRXJMLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFLFlBQVksRUFBRSw0REFBNEQsRUFBRSxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyxXQUFXLEVBQUUsRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFDO0lBRWxLLEVBQUUsSUFBSSxFQUFFLHVCQUF1QixFQUFFLFlBQVksRUFBRSwwRUFBMEUsRUFBRSxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyxXQUFXLEVBQUUsRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFDO0lBRXJMLEVBQUUsSUFBSSxFQUFFLDJCQUEyQixFQUFFLFlBQVksRUFBRSxtRkFBbUYsRUFBRSxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyxXQUFXLEVBQUUsRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFDO0NBRXJNLENBQUM7QUFHSyxJQUFNLG1CQUFtQixHQUF1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NkIsb0xBQW9MLGFBQWEsNkJBQTZCLHlLQUF5Syw4QkFBOEIsMEJBQTBCLHdCQUF3QixXQUFXLHFIQUFxSCw2QkFBNkIsNktBQTZLLDZCQUE2Qix1TEFBdUwsNkJBQTZCLGtMQUFrTCw2QkFBNkIsb2M7Ozs7OztBQ0FybEwsbUdBQW1HLHdCQUF3QiwyQkFBMkIscUNBQXFDLGdDQUFnQyw2QkFBNkIsMEJBQTBCLHlCQUF5QixzRUFBc0Usd0JBQXdCLDJCQUEyQixxQ0FBcUMsd0NBQXdDLG1DQUFtQyw4QkFBOEIsMEJBQTBCLDBCQUEwQixvRUFBb0UsK1ZBQStWLHdCQUF3QiwyQkFBMkIscUNBQXFDLHdDQUF3QyxtQ0FBbUMsOEJBQThCLDBCQUEwQiwwQkFBMEIsb0VBQW9FLCtjQUErYyxtVEFBbVQsaVNBQWlTLGdZQUFnWSw0UkFBNFIsZ007Ozs7OztBQ0FqZ0csOEM7Ozs7OztBQ0FBLDJDOzs7Ozs7QUNBQSxzRDs7Ozs7O0FDQUEsb0Q7Ozs7OztBQ0FBLHVFOzs7Ozs7QUNBQSx5RDs7Ozs7O0FDQUEsd0M7Ozs7OztBQ0FBLDhDOzs7Ozs7QUNBQSw2Qzs7Ozs7O0FDQUEsaUQ7Ozs7OztBQ0FBLDRDOzs7Ozs7QUNBQSw2Qzs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQSxvRDs7Ozs7O0FDQUEsa0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSwrQzs7Ozs7O0FDQUEsNEM7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQSwrQzs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLG9DOzs7Ozs7QUNBQSxpQyIsImZpbGUiOiJzZXJ2ZXIuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vcnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9yeSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0fSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDU1KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxNGI1ODkwYTMzY2U0YjNmOWEyYiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gVGhlIGZpbGUgY29udGVudHMgZm9yIHRoZSBjdXJyZW50IGVudmlyb25tZW50IHdpbGwgb3ZlcndyaXRlIHRoZXNlIGR1cmluZyBidWlsZC5cbi8vIFRoZSBidWlsZCBzeXN0ZW0gZGVmYXVsdHMgdG8gdGhlIGRldiBlbnZpcm9ubWVudCB3aGljaCB1c2VzIGBlbnZpcm9ubWVudC50c2AsIGJ1dCBpZiB5b3UgZG9cbi8vIGB1bmcgYnVpbGQgLS1lbnY9cHJvZGAgdGhlbiBgZW52aXJvbm1lbnQucHJvZC50c2Agd2lsbCBiZSB1c2VkIGluc3RlYWQuXG4vLyBUaGUgbGlzdCBvZiB3aGljaCBlbnYgbWFwcyB0byB3aGljaCBmaWxlIGNhbiBiZSBmb3VuZCBpbiBgYW5ndWxhci1jbGkuanNvbmAuXG5cblxuZXhwb3J0IGNvbnN0IGVudmlyb25tZW50ID0ge1xuICBwcm9kdWN0aW9uOiB0cnVlLFxuICAgIGJhc2VVcmw6J2h0dHA6Ly9sb2NhbGhvc3Q6NDIwMCcsXG4gICAgcmFuZG9tOltdLFxuICAgIGFwaVVybDonaHR0cDovLzEzLjU5LjEyOC4yMzg6ODAwMC8nLFxuICBmb3JtVmFsaWRhdGlvbjoge1xuICAgIGVtYWlsUGF0dGVybjogXCJeW0EtWmEtejAtOS5fJSstXStAW0EtWmEtejAtOS4tXStbLl0oW0EtWmEtel17Miw1fXxbQS1aYS16KXsyfVsuXVtBLVphLXpdezJ9KSRcIixcbiAgICAgICAgZW1haWxNYXhsZW5ndGg6IDUwLFxuICAgICAgICBlbWFpbE1pbmxlbmd0aDogNixcbiAgICAgICAgcGhvbmVOb01pbmxlbmd0aDogMTAsXG4gICAgICAgIHBob25lTm9NYXhsZW5ndGg6IDE0LFxuICAgICAgICBvdHBNaW5sZW5ndGg6IDYsXG4gICAgICAgIHR3aXR0ZXJQYXR0ZXJuOiAnKF5odHRwczovL3d3dy50d2l0dGVyLmNvbS9bQS1aYS16MC05Ll8lKy1dKyR8XCJcIiknLFxuICAgICAgICBmYWNlYm9va1BhdHRlcm46ICcoXmh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9bQS1aYS16MC05Ll8lKy1dKyR8XCJcIiknLFxuICAgICAgICBnb29nbGVQbHVzUGF0dGVybjogJyheaHR0cHM6Ly9wbHVzLmdvb2dsZS5jb20vWzAtOV0rJHxcIlwiKScsXG4gICAgICAgIHBhc3NXb3JkTGVuZ3RoOiA2LFxuICAgICAgICB1c2VyQmlvOiAyMDBcbiAgfSxcbiAgXG4gIFxufTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudC5kZXYudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9yb3V0ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XG5pbXBvcnQge0Nvb2tpZVNlcnZpY2V9IGZyb20gJ2FuZ3VsYXIyLWNvb2tpZS9jb3JlJztcbmltcG9ydCB7IGlzQnJvd3NlciB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XG5cbmRlY2xhcmUgdmFyIHN3YWw6YW55O1xuZGVjbGFyZSB2YXIgaGlkZUlkOmFueTtcbmRlY2xhcmUgdmFyICQ6YW55O1xuXG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0b3JhZ2VTZXJ2aWNlIHtcbiAgZW52aXJvbm1lbnQ6YW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgem9uZTpOZ1pvbmUsIHByaXZhdGUgcm91dGVyOlJvdXRlciwgcHJpdmF0ZSBfY29va2llOkNvb2tpZVNlcnZpY2UpIHtcbiAgICB0aGlzLmVudmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XG4gIH1cbiAgXG5cblxuXG4gIHVzZXJDaGVja2VyKHVwZGF0ZSl7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmKGlzQnJvd3Nlcikge1xuICAgICAgICBsZXQgY29va2llcyA9IHRoaXMuX2Nvb2tpZS5nZXRBbGwoKTtcbiAgICAgICAgaWYgKHRoaXMuZW52aXJvbm1lbnQucmFuZG9tLnVzZXJJbmZvKSB7XG4gICAgICAgICAgdGhpcy5lbnZpcm9ubWVudC5yYW5kb20uc291cmNlID0gdGhpcy5lbnZpcm9ubWVudC5yYW5kb20udXNlckluZm8uc291cmNlO1xuICAgICAgICAgIHJlc29sdmUodGhpcy5lbnZpcm9ubWVudC5yYW5kb20udXNlckluZm8pO1xuICAgICAgICB9IGVsc2UgaWYgKGNvb2tpZXNbJ2lkJ10gJiYgY29va2llc1sndG9rZW4nXSAmJiBjb29raWVzWydzb3VyY2UnXSkge1xuICAgICAgICAgIHRoaXMuZW52aXJvbm1lbnQucmFuZG9tLnVzZXJJbmZvID0ge2lkOmNvb2tpZXNbJ2lkJ10sdG9rZW46Y29va2llc1sndG9rZW4nXSxzb3VyY2U6Y29va2llc1snc291cmNlJ119O1xuICAgICAgICAgIHRoaXMuZW52aXJvbm1lbnQucmFuZG9tLnNvdXJjZSA9IHRoaXMuZW52aXJvbm1lbnQucmFuZG9tLnVzZXJJbmZvLnNvdXJjZTtcbiAgICAgICAgICByZXNvbHZlKHRoaXMuZW52aXJvbm1lbnQucmFuZG9tLnVzZXJJbmZvKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH0pO1xuICB9XG5cblxuICBcblxuICBwcm9tTG9nSW4oKXtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYoaXNCcm93c2VyKSB7XG4gICAgICAgIGxldCBjb29raWVzID0gdGhpcy5fY29va2llLmdldEFsbCgpO1xuICAgICAgICBpZiAodGhpcy5lbnZpcm9ubWVudC5yYW5kb20udXNlckluZm8pIHtcbiAgICAgICAgICB0aGlzLmVudmlyb25tZW50LnJhbmRvbS5zb3VyY2UgPSB0aGlzLmVudmlyb25tZW50LnJhbmRvbS51c2VySW5mby5zb3VyY2U7XG4gICAgICAgICAgcmVzb2x2ZSh0aGlzLmVudmlyb25tZW50LnJhbmRvbS51c2VySW5mbyk7XG4gICAgICAgIH0gZWxzZSBpZiAoY29va2llc1snaWQnXSAmJiBjb29raWVzWyd0b2tlbiddICYmIGNvb2tpZXNbJ3NvdXJjZSddKSB7XG4gICAgICAgICAgdGhpcy5lbnZpcm9ubWVudC5yYW5kb20udXNlckluZm8gPSB7aWQ6Y29va2llc1snaWQnXSx0b2tlbjpjb29raWVzWyd0b2tlbiddLHNvdXJjZTpjb29raWVzWydzb3VyY2UnXX07XG4gICAgICAgICAgdGhpcy5lbnZpcm9ubWVudC5yYW5kb20uc291cmNlID0gdGhpcy5lbnZpcm9ubWVudC5yYW5kb20udXNlckluZm8uc291cmNlO1xuICAgICAgICAgIHJlc29sdmUodGhpcy5lbnZpcm9ubWVudC5yYW5kb20udXNlckluZm8pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nKTtcbiAgICAgICAgICBzd2FsKCdBY2Nlc3MgRGVuaWVkJywnWW91IHdpbGwgbmVlZCB0byBzaWduIGluIGZpcnN0JywnZXJyb3InKTtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH0pO1xuICB9XG5cbiAgc3RvcmVDb29raWVzKG5hbWUsdmFsLHRpbWUpe1xuICAgIGRvY3VtZW50LmNvb2tpZT1uYW1lK1wiPVwiK3ZhbCtcIjsgZXhwaXJlcz1cIit0aW1lK1wiOyBwYXRoPS9cIjtcbiAgIH1cbiAgXG5cbiAgZGVsZXRlU3RvcmFnZSgpe1xuXG4gICAgbGV0IGV4cGlyZXMgPSBcIlRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDEgR01UXCI7XG4gICAgbGV0IGQgPSBuZXcgRGF0ZSgpO1xuICAgIGQuc2V0VGltZShkLmdldFRpbWUoKSArICgyNCo2MCo2MCoxMDAwKSk7XG4gICAgbGV0IGNvb2tpZXMgPSB0aGlzLl9jb29raWUuZ2V0QWxsKCk7XG4gICAgLy8gaWYoaXNCcm93c2VyKXtcbiAgICAvLyAgICAgZGVsZXRlQ29va2llKCk7XG4gICAgLy8gfVxuICAgIGZvcih2YXIgaSBpbiBjb29raWVzKXtcbiAgICAgIGlmKGkuaW5kZXhPZignQ2FrZUNvb2tpZScpID4gLTEpe1xuICAgICAgICB0aGlzLl9jb29raWUucmVtb3ZlKGkse3BhdGg6Jy8nfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2Nvb2tpZS5yZW1vdmUoXCJtYzRrUGFyZW50VG9rZW5JZFwiLHtwYXRoOicvJ30pO1xuICAgIHRoaXMuX2Nvb2tpZS5yZW1vdmUoXCJhcGlVc2VySWRcIix7cGF0aDonLyd9KTtcbiAgICB0aGlzLl9jb29raWUucHV0KFwibWM0a1BhcmVudERUb2tlbklkXCIsJ2xvZ291dCcgLHtwYXRoOicvJyxleHBpcmVzOmQudG9VVENTdHJpbmcoKX0pO1xuICAgIHRoaXMuZW52aXJvbm1lbnQudXNlckluZm8gPSBbXTtcbiAgICB0aGlzLmVudmlyb25tZW50LmxvZ2dlZEluID0gZmFsc2U7XG4gICAgdGhpcy5lbnZpcm9ubWVudC5sYW5nU2VsZWN0aW9uID0gW107XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ25nU3RvcmFnZS11c2VySW5mbycpO1xuXG5cbiAgfVxuXG5cblxuXG5cblxuXG4gIHNob3dNZXNzYWdlKG1lc3NhZ2UsdHlwZSl7XG4gICAgICBpZih0eXBlID09ICdlcnJvcicgfHwgdHlwZSA9PSAnZmFpbHVyZScpe1xuICAgICAgICB0aGlzLmVudmlyb25tZW50LnJhbmRvbS5lcnJvckltZyA9IHRoaXMuZW52aXJvbm1lbnQuY2RuUGFyZW50aW5nUGF0aCsnZXJyb3JfaW1nJztcbiAgICAgICAkKCcjZXJyb3JNZXNzYWdlJykudGV4dChtZXNzYWdlKTtcbiAgICAgICAgJChcIiNzZWFyY2gtcG9wdXA4XCIpLmFkZENsYXNzKCdjbW5fbW9kYWxfYWN0aXZlJyk7XG4gICAgICB9ZWxzZSBpZih0eXBlID09ICdzdWNjZXNzJyl7XG4gICAgICAgIHRoaXMuZW52aXJvbm1lbnQucmFuZG9tLnN1Y2Nlc3NJbWcgPSB0aGlzLmVudmlyb25tZW50LmNkblBhcmVudGluZ1BhdGgrJ3N1Y2Nlc3NfaW1nJztcbiAgICAgICAgJCgnI3N1Y2Nlc3NNZXNzYWdlJykudGV4dChtZXNzYWdlKTtcbiAgICAgICAgJChcIiNzZWFyY2gtcG9wdXA3XCIpLmFkZENsYXNzKCdjbW5fbW9kYWxfYWN0aXZlJyk7XG4gICAgICB9XG4gIH1cblxuICB1cGRhdGVFbnZpcm9ubWVudChwYXJhbXMpe1xuICBcbiAgICAgICAgZm9yKGxldCBpIGluIHBhcmFtcyl7XG4gICAgICAgICAgICB0aGlzLmVudmlyb25tZW50LnVzZXJJbmZvW2ldID0gcGFyYW1zW2ldO1xuICAgICAgICB9XG4gICAgICAgICBcbiAgICAgICAgdGhpcy56b25lLnJ1bigoKT0+e1xuICAgICAgICAgICAgdGhpcy5lbnZpcm9ubWVudC51c2VySW5mbyA9ICB0aGlzLmVudmlyb25tZW50LnVzZXJJbmZvO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW52aXJvbm1lbnQudXNlckluZm87XG4gICAgfVxuXG5cblxuXG4gIHVzZXJEZXRhaWwocGFyYW1zKXtcbiAgICB0aGlzLmVudmlyb25tZW50LnJhbmRvbS51c2VyRGV0YWlsID0gdGhpcy5lbnZpcm9ubWVudC5yYW5kb20udXNlckRldGFpbD90aGlzLmVudmlyb25tZW50LnJhbmRvbS51c2VyRGV0YWlsOm5ldyBBcnJheSgpO1xuICAgIGZvcih2YXIgaSBpbiBwYXJhbXMpe1xuICAgICAgdGhpcy5lbnZpcm9ubWVudC5yYW5kb20udXNlckRldGFpbFtpXSA9IHBhcmFtc1tpXTtcbiAgICB9XG4gIH1cblxuIFxuICBcbiAgICBcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvdHlwZXNjcmlwdHMvY29tbW9uL3NlcnZpY2VzL3N0b3JhZ2Uuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XG5pbXBvcnQgeyBUZWVSZXNwb25zZSB9IGZyb20gJy4vcmVzcG9uc2UnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2UnO1xuaW1wb3J0IHsgU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuL3N0b3JhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBSb3V0ZXIsQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmRlY2xhcmUgdmFyICQ6YW55O1xuZGVjbGFyZSB2YXIgc2V0U2VsZWN0OmFueTtcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcGlTZXJ2aWNlIHtcbiAgdXNlckluZm86YW55O3VybExpc3Q6YW55O2Vudmlyb25tZW50OmFueTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB6b25lOk5nWm9uZSwgcHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIHJvdXRlcjpSb3V0ZXIpIHtcbiAgICB0aGlzLmVudmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XG4gICAgbGV0IHVybCA9IFsnaHR0cDovLzEzLjU3LjIxMi4xOTM6ODAwMC8nLCcnXTtcbiAgICB0aGlzLnVybExpc3QgPSB1cmw7XG4gICAgdGhpcy51c2VySW5mbyA9ICcnXG4gIH1cblxuXG5cblxuICBnZXRBcGlNYzRrICh1cmwsIGJhc2VVcmw/LGhlYWRlcj8pOiBQcm9taXNlPFRlZVJlc3BvbnNlPntcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgaWYodGhpcy5lbnZpcm9ubWVudC5yYW5kb20udXNlckluZm8mJmhlYWRlcil7XG4gICAgICBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydpZCcgOnRoaXMuZW52aXJvbm1lbnQucmFuZG9tLnVzZXJJbmZvLmlkLCd0b2tlbic6dGhpcy5lbnZpcm9ubWVudC5yYW5kb20udXNlckluZm8udG9rZW4sJ3NvdXJjZSc6dGhpcy5lbnZpcm9ubWVudC5yYW5kb20uc291cmNlfSk7XG4gICAgfVxuICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcbiAgICB2YXIgdXJsUmVxID0gYmFzZVVybD90aGlzLnVybExpc3RbYmFzZVVybF06dGhpcy51cmxMaXN0WzBdO1xuICAgIHVybFJlcSA9IHVybFJlcSt1cmw7XG4gICAgdXJsUmVxID0gYmFzZVVybD09MD91cmxSZXErdGhpcy51c2VySW5mbzp1cmxSZXE7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsUmVxLG9wdGlvbnMpXG4gICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAudGhlbih0aGlzLnJldHVybkRhdGEpXG4gICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgfVxuXG5cblxuXG4gIHBvc3RBcGlNYzRrICh1cmwscGFyYW1zLGZvcm1kYXRhPyxoZWFkZXI/LGJhc2VVcmw/KTogUHJvbWlzZTxUZWVSZXNwb25zZT57XG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsJ3NvdXJjZSc6dGhpcy5lbnZpcm9ubWVudC5yYW5kb20uc291cmNlfSk7XG4gICAgaWYodGhpcy5lbnZpcm9ubWVudC5yYW5kb20udXNlckluZm8mJmhlYWRlcil7XG4gICAgICBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydpZCcgOnRoaXMuZW52aXJvbm1lbnQucmFuZG9tLnVzZXJJbmZvLmlkLCd0b2tlbic6dGhpcy5lbnZpcm9ubWVudC5yYW5kb20udXNlckluZm8udG9rZW4sJ3NvdXJjZSc6dGhpcy5lbnZpcm9ubWVudC5yYW5kb20uc291cmNlfSk7XG4gICAgfVxuICAgIGlmKGZvcm1kYXRhKXtcbiAgICAgIGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJywnc291cmNlJzp0aGlzLmVudmlyb25tZW50LnJhbmRvbS5zb3VyY2V9KTtcbiAgICB9XG4gICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xuICAgIHZhciB1cmxSZXEgPSBiYXNlVXJsP3RoaXMudXJsTGlzdFtiYXNlVXJsXTp0aGlzLnVybExpc3RbMF07XG4gICAgdXJsUmVxID0gdXJsUmVxK3VybCt0aGlzLnVzZXJJbmZvO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh1cmxSZXEsIHBhcmFtcywgb3B0aW9ucylcbiAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAgIC50aGVuKHRoaXMucmV0dXJuRGF0YSlcbiAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG4gIFxuXG4gIFxuXG4gIHB1dEFwaU1jNGsgKHVybCxwYXJhbXMsYmFzZVVybD8pOiBQcm9taXNlPFRlZVJlc3BvbnNlPntcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcbiAgICBpZih0aGlzLmVudmlyb25tZW50LnJhbmRvbS51c2VySW5mbyl7XG4gICAgICBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydpZCcgOnRoaXMuZW52aXJvbm1lbnQucmFuZG9tLnVzZXJJbmZvLmlkLCd0b2tlbic6dGhpcy5lbnZpcm9ubWVudC5yYW5kb20udXNlckluZm8udG9rZW4sJ3NvdXJjZSc6dGhpcy5lbnZpcm9ubWVudC5yYW5kb20uc291cmNlfSk7XG4gICAgfVxuICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcbiAgICB2YXIgdXJsUmVxID0gYmFzZVVybD90aGlzLnVybExpc3RbYmFzZVVybF06dGhpcy51cmxMaXN0WzBdO1xuICAgIHVybFJlcSA9IHVybFJlcSt1cmwrdGhpcy51c2VySW5mbztcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh1cmxSZXEsIHBhcmFtcywgb3B0aW9ucylcbiAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAgIC50aGVuKHRoaXMucmV0dXJuRGF0YSlcbiAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cblxuICBcblxuICBkZWxldGVBcGlNYzRrICh1cmwsYmFzZVVybCk6IFByb21pc2U8VGVlUmVzcG9uc2U+e1xuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgIGlmKHRoaXMuZW52aXJvbm1lbnQubG9nZ2VkSW4pe1xuICAgICAgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnaWQnIDp0aGlzLmVudmlyb25tZW50LnVzZXJJbmZvLmlkLCdtYzRrVG9rZW4nOnRoaXMuZW52aXJvbm1lbnQudXNlckluZm8ubWM0a1Rva2VufSk7XG4gICAgfVxuICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcbiAgICB2YXIgdXJsUmVxID0gYmFzZVVybD90aGlzLnVybExpc3RbYmFzZVVybF06dGhpcy51cmxMaXN0WzBdO1xuICAgIHVybFJlcSA9IHVybFJlcSt1cmw7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodXJsUmVxLCBvcHRpb25zKVxuICAgICAgICAudG9Qcm9taXNlKClcbiAgICAgICAgLnRoZW4odGhpcy5yZXR1cm5EYXRhKVxuICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBpbWFnZUFwaSh1cmwsZmlsZURhdGEsYmFzZVVybD8pOiBQcm9taXNlPFRlZVJlc3BvbnNlPntcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnaWQnIDp0aGlzLmVudmlyb25tZW50LnJhbmRvbS51c2VySW5mby5pZCwndG9rZW4nOnRoaXMuZW52aXJvbm1lbnQucmFuZG9tLnVzZXJJbmZvLnRva2VuLCdzb3VyY2UnOnRoaXMuZW52aXJvbm1lbnQucmFuZG9tLnNvdXJjZX0pO1xuICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcbiAgICB2YXIgdXJsUmVxID0gYmFzZVVybD90aGlzLnVybExpc3RbYmFzZVVybF06dGhpcy51cmxMaXN0WzBdO1xuICAgIHVybFJlcSA9IHVybFJlcSt1cmwrdGhpcy51c2VySW5mbztcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsUmVxLCBmaWxlRGF0YSwgb3B0aW9ucylcbiAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAgIC50aGVuKHRoaXMucmV0dXJuRGF0YSlcbiAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cblxuICBwcml2YXRlIHJldHVybkRhdGEocmVzOiBSZXNwb25zZSkge1xuICAgIGxldCBib2R5ID0gcmVzLmpzb24oKTtcbiAgICByZXR1cm4gYm9keSB8fCB7IH07XG4gIH1cblxuXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IgKGVycm9yOiBSZXNwb25zZSB8IGFueSkge1xuICAgIGxldCBlcnJNc2c6IHN0cmluZztcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBSZXNwb25zZSkge1xuICAgICAgY29uc3QgYm9keSA9IGVycm9yLmpzb24oKSB8fCAnJztcbiAgICAgIGNvbnN0IGVyciA9IGJvZHkuZXJyb3IgfHwgSlNPTi5zdHJpbmdpZnkoYm9keSk7XG4gICAgICBlcnJNc2cgPSBgJHtlcnJvci5zdGF0dXN9IC0gJHtlcnJvci5zdGF0dXNUZXh0IHx8ICcnfSAke2Vycn1gO1xuICAgIH0gZWxzZSB7XG4gICAgICBlcnJNc2cgPSBlcnJvci5tZXNzYWdlID8gZXJyb3IubWVzc2FnZSA6IGVycm9yLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJNc2cpO1xuICB9XG5cbiBcbiAgXG4gIFxuICBKc05ld1Byb21pc2UodXJsLGlkKXtcbiAgICB2YXIgX3NlbGYgPSB0aGlzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkpIHtcbiAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICB2YXIgcG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgICBwby50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgICAgICAgcG8uaWQgPSBpZDtcbiAgICAgICAgICBwby5hc3luYyA9IHRydWU7XG4gICAgICAgICAgcG8uc3JjID0gdXJsO1xuICAgICAgICAgIHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgICAgICAgICBoZWFkLmFwcGVuZENoaWxkKHBvKTtcbiAgICAgICAgICBwby5vbmxvYWQgPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9KSgpO1xuICAgIH0pO1xuICB9XG5cbiBcblxuXG4gIFxuICB1c2VyRGV0YWlsKGxpbmspe1xuICAgIHRoaXMuZ2V0QXBpTWM0aygnYXBpL3YxL2Zvcm1zL2Rhc2hib2FyZCcsMCx0cnVlKS50aGVuKCh2YWx1ZSk9PntcbiAgICAgIGlmKHZhbHVlJiZ2YWx1ZS5kYXRhKXtcbiAgICAgICAgdGhpcy5lbnZpcm9ubWVudC5yYW5kb20udXNlckRldGFpbCA9IHZhbHVlLmRhdGE7XG4gICAgICAgIHRoaXMuZGVmYXVsdCh2YWx1ZS5kYXRhLmRlZmF1bHRzKTtcbiAgICAgICAgaWYobGluayl7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChsaW5rKTtcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuZW52aXJvbm1lbnQucmFuZG9tLnVzZXJEZXRhaWwmJnRoaXMuZW52aXJvbm1lbnQucmFuZG9tLnVzZXJEZXRhaWwuZ2NfYmFzaWNfaW5mbyYmIXRoaXMuZW52aXJvbm1lbnQucmFuZG9tLnVzZXJEZXRhaWwuZ2NfYmFzaWNfaW5mby50aW1lX3pvbmUpe1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJ2dvbGYtY291cnNlL3NlY3Rpb24tb25lJyk7XG4gICAgICAgIH1lbHNlIGlmKHRoaXMuZW52aXJvbm1lbnQucmFuZG9tLnVzZXJEZXRhaWwmJiEodGhpcy5lbnZpcm9ubWVudC5yYW5kb20udXNlckRldGFpbC53ZWVrZW5kcyB8fCB0aGlzLmVudmlyb25tZW50LnJhbmRvbS51c2VyRGV0YWlsLmdjX2Jhc2ljX2luZm8ud2Vla2RheXMpKXtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCdnb2xmLWNvdXJzZS9zZWN0aW9uLXR3bycpO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLmVudmlyb25tZW50LnJhbmRvbS51c2VyRGV0YWlsJiZ0aGlzLmVudmlyb25tZW50LnJhbmRvbS51c2VyRGV0YWlsLnNlYXNvbnNfaW5mbyYmdGhpcy5lbnZpcm9ubWVudC5yYW5kb20udXNlckRldGFpbC5zZWFzb25zX2luZm8ubGVuZ3RoID09IDApe1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJ2dvbGYtY291cnNlL3NlY3Rpb24tdGhyZWUnKTtcbiAgICAgICAgfWVsc2UgaWYodGhpcy5lbnZpcm9ubWVudC5yYW5kb20udXNlckRldGFpbCYmdGhpcy5lbnZpcm9ubWVudC5yYW5kb20udXNlckRldGFpbC5yYXRlc19pbmZvJiZ0aGlzLmVudmlyb25tZW50LnJhbmRvbS51c2VyRGV0YWlsLnJhdGVzX2luZm8ubGVuZ3RoID09IDApe1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJ2dvbGYtY291cnNlL3NlY3Rpb24tZm91cicpO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLnJvdXRlci51cmwgPT0gJy8nIHx8IHRoaXMucm91dGVyLnVybC5pbmRleE9mKCdsb2dpbicpID4tIDEgfHwgdGhpcy5yb3V0ZXIudXJsLmluZGV4T2YoJ3JlZ2lzdGVyJykgPi0gMSl7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnZ29sZi1jb3Vyc2UvZGFzaGJvYXJkJyk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodGhpcy5yb3V0ZXIudXJsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgXG4gIHVzZXJEZXRhaWxWZW5kb3IobGluayl7XG4gICAgdGhpcy5nZXRBcGlNYzRrKCdhcGkvdjEvdmVuZG9ycy9kYXNoYm9hcmQnLDAsdHJ1ZSkudGhlbigodmFsdWUpPT57XG4gICAgICBpZih2YWx1ZSYmdmFsdWUuZGF0YSl7XG4gICAgICAgIHRoaXMuZW52aXJvbm1lbnQucmFuZG9tLnVzZXJEZXRhaWwgPSB2YWx1ZS5kYXRhO1xuICAgICAgICBpZihsaW5rKXtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKGxpbmspO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVmYXVsdCh2YWx1ZS5kYXRhLmRlZmF1bHRzKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgZGVmYXVsdCh2YWx1ZSl7XG4gICAgdGhpcy5lbnZpcm9ubWVudC5yYW5kb20ua2V5cyA9IHZhbHVlO1xuICAgIHRoaXMuZW52aXJvbm1lbnQucmFuZG9tLmtleXNbJ290aGVycyddID0gbmV3IEFycmF5KCk7XG4gICAgbGV0IHBhcmFtID0gW107XG4gICAgZm9yKHZhciBpIGluIHRoaXMuZW52aXJvbm1lbnQucmFuZG9tLmtleXMpe1xuICAgICAgZm9yKHZhciBqIGluIHRoaXMuZW52aXJvbm1lbnQucmFuZG9tLmtleXNbaV0pe1xuICAgICAgICBwYXJhbVt0aGlzLmVudmlyb25tZW50LnJhbmRvbS5rZXlzW2ldW2pdLm5hbWVdID0gdGhpcy5lbnZpcm9ubWVudC5yYW5kb20ua2V5c1tpXVtqXS5pZDtcbiAgICAgICAgcGFyYW1bdGhpcy5lbnZpcm9ubWVudC5yYW5kb20ua2V5c1tpXVtqXS5pZF0gPSB0aGlzLmVudmlyb25tZW50LnJhbmRvbS5rZXlzW2ldW2pdLm5hbWU7XG4gICAgICB9XG5cbiAgICB9XG4gICAgdGhpcy5lbnZpcm9ubWVudC5yYW5kb20ua2V5c1snb3RoZXJzJ10gID0gcGFyYW07XG4gIH1cbiAgXG4gICBcbiAgXG59XG5cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3R5cGVzY3JpcHRzL2NvbW1vbi9zZXJ2aWNlcy9hcGkuc2VydmljZS50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4vLi4vY29tbW9uL3NlcnZpY2VzL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi8uLi9jb21tb24vc2VydmljZXMvc3RvcmFnZS5zZXJ2aWNlJztcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi4vLi4vLi4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5cbmRlY2xhcmUgdmFyICQ6YW55O1xuXG5AQ29tcG9uZW50KHtcbiAgZW5jYXBzdWxhdGlvbjpWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzZWxlY3RvcjonaG9tZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9ob21lLmh0bWwnLFxufSlcblxuXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gXG4gICAgXG4gIGVudmlyb25tZW50OmFueTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc3RvcmFnZTpTdG9yYWdlU2VydmljZSxwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge1xuICAgIHRoaXMuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgICAgdGhpcy5fc3RvcmFnZS51c2VyQ2hlY2tlcihmYWxzZSkudGhlbigodmFsKT0+e1xuICAgICAgICAgIGlmKHZhbCYmdGhpcy5lbnZpcm9ubWVudC5yYW5kb20uc291cmNlID09ICdnb2xmX2NvdXJzZScpe1xuICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoJ2dvbGYtY291cnNlL2Rhc2hib2FyZCcpO1xuICAgICAgICAgIH1lbHNlIGlmICh2YWwmJnRoaXMuZW52aXJvbm1lbnQucmFuZG9tLnNvdXJjZSA9PSd2ZW5kb3InKXtcbiAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKCd2ZW5kb3IvZGFzaGJvYXJkJyk7XG4gICAgICAgICAgfVxuICAgICAgfSlcbiAgIFxuXG4gICBcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgICBcbiAgIFxuICB9XG4gICAgXG4gXG5cblxuICBcblxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3R5cGVzY3JpcHRzL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9odHRwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvaHR0cFwiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLWNvb2tpZS9jb3JlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItY29va2llL2NvcmVcIlxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2VcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2VcIlxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIHRoZSBwb2x5ZmlsbHMgbXVzdCBiZSB0aGUgZmlyc3QgdGhpbmcgaW1wb3J0ZWRcbiAqL1xuaW1wb3J0ICcuL3BvbHlmaWxscy50cyc7XG5pbXBvcnQgJy4vX18yLjEuMS53b3JrYXJvdW5kLnRzJzsgLy8gdGVtcG9yYXJ5IHVudGlsIDIuMS4xIHRoaW5ncyBhcmUgcGF0Y2hlZCBpbiBDb3JlXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCAqIGFzIGNvbXByZXNzaW9uIGZyb20gJ2NvbXByZXNzaW9uJztcbmltcG9ydCB7IGNyZWF0ZUVuZ2luZSB9IGZyb20gJ2FuZ3VsYXIyLWV4cHJlc3MtZW5naW5lJztcbmltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC9hcHAubm9kZS5tb2R1bGUnO1xuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XG5pbXBvcnQgeyByb3V0ZXMgfSBmcm9tICcuL3NlcnZlci5yb3V0ZXMnO1xuXG4vLyBBcHBcblxuY29uc3QgYXBwICA9IGV4cHJlc3MoKTtcbmNvbnN0IFJPT1QgPSBwYXRoLmpvaW4ocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uJykpO1xuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgNTAwMDtcblxuLyoqXG4gKiBlbmFibGUgcHJvZCBtb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50c1xuICovXG5pZiAoZW52aXJvbm1lbnQucHJvZHVjdGlvbikge1xuICBlbmFibGVQcm9kTW9kZSgpO1xufVxuXG4vKipcbiAqIEV4cHJlc3MgVmlld1xuICovXG5hcHAuZW5naW5lKCcuaHRtbCcsIGNyZWF0ZUVuZ2luZSh7fSkpO1xuYXBwLnNldCgndmlld3MnLCBwYXRoLmpvaW4oUk9PVCwgJ2NsaWVudCcpKTtcbmFwcC5zZXQoJ3ZpZXcgZW5naW5lJywgJ2h0bWwnKTtcblxuLyoqXG4gKiBFbmFibGUgY29tcHJlc3Npb25cbiAqL1xuYXBwLnVzZShjb21wcmVzc2lvbigpKTsgXG4vKipcbiogUHV0IGFsbCAzMDEgcmVkaXJlY3QgdXJsc1xuKi9cblxuXG4vKipcbiAqIHNlcnZlIHN0YXRpYyBmaWxlc1xuICovXG5hcHAudXNlKCcvJywgZXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKFJPT1QsICdjbGllbnQnKSwge2luZGV4OiBmYWxzZSxzZXRIZWFkZXJzOiBzZXRIZWFkZXJzfSkpO1xuXG5cbmZ1bmN0aW9uIHNldEhlYWRlcnMocmVzKSB7XG4gICByZXMuc2V0SGVhZGVyKFwiQ2FjaGUtQ29udHJvbFwiLCBcInB1YmxpYywgbWF4LWFnZT0yNTkyMDAwXCIpO1xuICAgIHJlcy5zZXRIZWFkZXIoXCJFeHBpcmVzXCIsIG5ldyBEYXRlKERhdGUubm93KCkgKyAyNTkyMDAwMDAwKS50b1VUQ1N0cmluZygpKTtcbiBcbn1cbi8qKlxuICogcGxhY2UgeW91ciBhcGkgcm91dGVzIGhlcmVcbiAqL1xuLy8gYXBwLnVzZSgnL2FwaScsIGFwaSk7XG5cbi8qKlxuICogYm9vdHN0cmFwIHVuaXZlcnNhbCBhcHBcbiAqIEBwYXJhbSByZXFcbiAqIEBwYXJhbSByZXNcbiAqL1xuZnVuY3Rpb24gbmdBcHAocmVxOiBhbnksIHJlczogYW55KSB7XG4gIHJlcy5yZW5kZXIoJ2luZGV4Jywge1xuICAgIHJlcSxcbiAgICByZXMsXG4gICAgbmdNb2R1bGU6IEFwcE1vZHVsZSxcbiAgICBwcmVib290OiBmYWxzZSxcbiAgICBiYXNlVXJsOiAnLycsXG4gICAgcmVxdWVzdFVybDogcmVxLm9yaWdpbmFsVXJsLFxuICAgIG9yaWdpblVybDogcmVxLmhvc3RuYW1lXG4gIH0pO1xufVxuXG4vKipcbiAqIHVzZSB1bml2ZXJzYWwgZm9yIHNwZWNpZmljIHJvdXRlc1xuICovXG5hcHAuZ2V0KCcvJywgbmdBcHApO1xucm91dGVzLmZvckVhY2gocm91dGUgPT4ge1xuICBhcHAuZ2V0KGAvJHtyb3V0ZX1gLCBuZ0FwcCk7XG4gIGFwcC5nZXQoYC8ke3JvdXRlfS8qYCwgbmdBcHApO1xufSk7XG5cblxuIFxuIFxuXG4vKipcbiAqIGlmIHlvdSB3YW50IHRvIHVzZSB1bml2ZXJzYWwgZm9yIGFsbCByb3V0ZXMsIHlvdSBjYW4gdXNlIHRoZSAnKicgd2lsZGNhcmRcbiAqL1xuXG5hcHAuZ2V0KCcqJywgZnVuY3Rpb24gKHJlcTogYW55LCByZXM6IGFueSkge1xuICByZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICBjb25zdCBwb2pvID0ge3N0YXR1czogNDA0LCBtZXNzYWdlOiAnTm8gQ29udGVudCd9O1xuICBjb25zdCBqc29uID0gSlNPTi5zdHJpbmdpZnkocG9qbywgbnVsbCwgMik7XG4gIHJlcy5zdGF0dXMoNDA0KS5zZW5kKGpzb24pO1xufSk7XG5cbmFwcC5saXN0ZW4ocG9ydCwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhgTGlzdGVuaW5nIG9uIHBvcnQgJHtwb3J0fWApO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyLnRzIiwiLypcbiAqIFRISVMgSVMgVEVNUE9SQVJZIFRPIFBBVENIIDIuMS4xKyBDb3JlIGJ1Z3NcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xubGV0IF9fY29tcGlsZXJfXzogYW55ID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29tcGlsZXInKTtcbmltcG9ydCB7IF9fcGxhdGZvcm1fYnJvd3Nlcl9wcml2YXRlX18gfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbnZhciBfX2NvcmVfcHJpdmF0ZV9fOiBhbnkgPSByZXF1aXJlKCdAYW5ndWxhci9jb3JlJyk7XG5sZXQgcGF0Y2g6IEJvb2xlYW4gPSBmYWxzZTtcblxuaWYgKCFfX2NvcmVfcHJpdmF0ZV9fLmhhc093blByb3BlcnR5KCdWaWV3VXRpbHMnKSkge1xuICAgIHBhdGNoID0gdHJ1ZTtcbiAgICBfX2NvcmVfcHJpdmF0ZV9fLlZpZXdVdGlscyA9IF9fY29yZV9wcml2YXRlX18udmlld191dGlscztcbn1cblxuaWYgKCFfX2NvbXBpbGVyX18uX19jb21waWxlcl9wcml2YXRlX18pIHtcbiAgICBwYXRjaCA9IHRydWU7XG4gICAgKF9fY29tcGlsZXJfXykuX19jb21waWxlcl9wcml2YXRlX18gPSB7XG4gICAgICAgIFNlbGVjdG9yTWF0Y2hlcjogX19jb21waWxlcl9fLlNlbGVjdG9yTWF0Y2hlcixcbiAgICAgICAgQ3NzU2VsZWN0b3I6IF9fY29tcGlsZXJfXy5Dc3NTZWxlY3RvclxuICAgIH1cbn1cblxudmFyIF9fdW5pdmVyc2FsX186IGFueSA9IHJlcXVpcmUoJ2FuZ3VsYXIyLXBsYXRmb3JtLW5vZGUvX19wcml2YXRlX2ltcG9ydHNfXycpO1xuaWYgKHBhdGNoKSB7XG4gICAgX191bml2ZXJzYWxfXy5WaWV3VXRpbHMgPSBfX2NvcmVfcHJpdmF0ZV9fLnZpZXdfdXRpbHM7XG4gICAgX191bml2ZXJzYWxfXy5Dc3NTZWxlY3RvciA9IF9fY29tcGlsZXJfXy5Dc3NTZWxlY3RvclxuICAgIF9fdW5pdmVyc2FsX18uU2VsZWN0b3JNYXRjaGVyID0gX19jb21waWxlcl9fLlNlbGVjdG9yTWF0Y2hlclxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL19fMi4xLjEud29ya2Fyb3VuZC50cyIsImltcG9ydCB7IENvbXBvbmVudCxIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4vLi4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcbmltcG9ydCB7IGlzQnJvd3NlciB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1yb290JyxcbiAgdGVtcGxhdGVVcmw6Jy4vbWFpbi5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgZW52aXJvbm1lbnQ6YW55O1xuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6bG9hZCcsIFsnJGV2ZW50J10pXG4gICAgb25sb2FkSGFuZGxlcigkZXZlbnQpIHtcbiAgICB0aGlzLmVudmlyb25tZW50LnJhbmRvbS5vbmxvYWQgPSB0cnVlO1xuICAgIH1cbiAgXG4gIFxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjpSb3V0ZXIpIHtcbiAgICB0aGlzLmVudmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XG4gICAgaWYoaXNCcm93c2VyKXtcbiAgICAgIHRoaXMuZW52aXJvbm1lbnQucmFuZG9tLmlzQnJvd3NlciA9IHRydWU7XG4gICAgfWVsc2V7XG4gICAgICB0aGlzLmVudmlyb25tZW50LnJhbmRvbS5pc1NlcnZlciA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMuZW52aXJvbm1lbnQucmFuZG9tLkJhdHR1dGEgPSAnZmE3NWU5MzNkZjg5ZDg2MGMwMjk5NDU1ODNjZGRlZjMnO1xuICB9XG5cblxuICBuZ09uSW5pdCgpIHtcbiAgICBcbiAgICB0aGlzLnJvdXRlci5ldmVudHMuc3Vic2NyaWJlKChldnQpID0+IHtcbiAgICAgIHRoaXMuZW52aXJvbm1lbnQucmFuZG9tLmV2dElkID0gZXZ0LmlkO1xuICAgICAgdGhpcy5lbnZpcm9ubWVudC5yYW5kb20uY3VycmVudFVybCA9IGV2dC51cmw7XG4gICAgICBcbiAgICB9KTtcbiAgfVxuXG5cbiAgXG5cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9hcHAuY29tcG9uZW50LnRzIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IG1hcGhpc2hhcGhhbmJ1aCBvbiAwMi8wNS8xNy5cbiAqL1xuLyoqXG4gKiBUaGlzIGZpbGUgYW5kIGBtYWluLmJyb3dzZXIudHNgIGFyZSBpZGVudGljYWwsIGF0IHRoZSBtb21lbnQoISlcbiAqIEJ5IHNwbGl0dGluZyB0aGVzZSwgeW91J3JlIGFibGUgdG8gY3JlYXRlIGxvZ2ljLCBpbXBvcnRzLCBldGMgdGhhdCBhcmUgXCJQbGF0Zm9ybVwiIHNwZWNpZmljLlxuICogSWYgeW91IHdhbnQgeW91ciBjb2RlIHRvIGJlIGNvbXBsZXRlbHkgVW5pdmVyc2FsIGFuZCBkb24ndCBuZWVkIHRoYXRcbiAqIFlvdSBjYW4gYWxzbyBqdXN0IGhhdmUgMSBmaWxlLCB0aGF0IGlzIGltcG9ydGVkIGludG8gYm90aFxuICogY2xpZW50LnRzIGFuZCBzZXJ2ZXIudHNcbiAqL1xuXG5pbXBvcnQgeyBOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVW5pdmVyc2FsTW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi90eXBlc2NyaXB0cy9ob21lL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7IENvb2tpZVNlcnZpY2UgfSBmcm9tICdhbmd1bGFyMi1jb29raWUvY29yZSc7XG5pbXBvcnQgeyBIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL3R5cGVzY3JpcHRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFNlcnZlckNvbWJpbmVEaXJlY3RpdmVNb2R1bGV9IGZyb20gJy4vdHlwZXNjcmlwdHMvZGlyZWN0aXZlLW1vZHVsZXMvc2VydmVyLWNvbWJpbmUubW9kdWxlJztcblxuaW1wb3J0IHsgU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuL3R5cGVzY3JpcHRzL2NvbW1vbi9zZXJ2aWNlcy9zdG9yYWdlLnNlcnZpY2UnO1xuXG5cblxuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4vdHlwZXNjcmlwdHMvY29tbW9uL3NlcnZpY2VzL2FwaS5zZXJ2aWNlJztcblxuXG5pbXBvcnQgeyBTZXJ2ZXJSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9zZXJ2ZXItcm91dGluZy5tb2R1bGUnO1xuXG5cblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFsgQXBwQ29tcG9uZW50XSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIFVuaXZlcnNhbE1vZHVsZSwgICBcbiAgICAgICAgRm9ybXNNb2R1bGUsXG4gICAgICAgIFNlcnZlclJvdXRpbmdNb2R1bGUsXG4gICAgICAgIFNlcnZlckNvbWJpbmVEaXJlY3RpdmVNb2R1bGUsXG4gICAgICAgIFxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCwgSG9tZUNvbXBvbmVudCxIZWFkZXJDb21wb25lbnRcblxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbU3RvcmFnZVNlcnZpY2UsIEFwaVNlcnZpY2UsIENvb2tpZVNlcnZpY2VdLFxuICAgIHNjaGVtYXM6ICAgICAgW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2FwcC5ub2RlLm1vZHVsZS50cyIsImV4cG9ydCAqIGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2luZGV4LnRzIiwiXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi90eXBlc2NyaXB0cy9ob21lL2hvbWUuY29tcG9uZW50JztcblxuXG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5jb25zdCByb3V0ZXM6Um91dGVzID0gW1xuICAgIC8vaG9tZVxuICAgIHsgcGF0aDogJycsIGNvbXBvbmVudDpIb21lQ29tcG9uZW50LCBkYXRhOiB7IG5hbWU6J0hvbWUnLCB0eXBlOidQYWdlJyB9LHBhdGhNYXRjaDogJ2Z1bGwnfSxcbiAgICB7IHBhdGg6ICd2ZXJpZnktZW1haWwvOnRva2VuJywgY29tcG9uZW50OkhvbWVDb21wb25lbnQsIGRhdGE6IHsgbmFtZTonRW1haWwnLCB0eXBlOidWZXJpZmljYXRpb24nIH0scGF0aE1hdGNoOiAnZnVsbCd9LFxuICAgIHsgcGF0aDogJ2dvbGYtY291cnNlL3NlY3Rpb24tMScsIGxvYWRDaGlsZHJlbjogJy4vdHlwZXNjcmlwdHMvc2VjdGlvbi1vbmUvc2VjdGlvbi1vbmUubW9kdWxlI1NlY3Rpb25PbmVNb2R1bGUnLCBkYXRhOiB7IG5hbWU6J0dvbGYnLCB0eXBlOidPbmUnIH0scGF0aE1hdGNoOiAnZnVsbCd9LFxuXG4gICAgeyBwYXRoOiAnZ29sZi1jb3Vyc2Uvc2VjdGlvbi0yJywgbG9hZENoaWxkcmVuOiAnLi90eXBlc2NyaXB0cy9zZWN0aW9uLXR3by9zZWN0aW9uLXR3by5tb2R1bGUjU2VjdGlvblR3b01vZHVsZScsIGRhdGE6IHsgbmFtZTonR29sZicsIHR5cGU6J1R3bycgfSxwYXRoTWF0Y2g6ICdmdWxsJ30sXG5cbiAgICB7IHBhdGg6ICdnb2xmLWNvdXJzZS9zZWN0aW9uLTMnLCBsb2FkQ2hpbGRyZW46ICcuL3R5cGVzY3JpcHRzL3NlY3Rpb24tdGhyZWUvc2VjdGlvbi10aHJlZS5tb2R1bGUjU2VjdGlvblRocmVlTW9kdWxlJywgZGF0YTogeyBuYW1lOidHb2xmJywgdHlwZTonVGhyZWUnIH0scGF0aE1hdGNoOiAnZnVsbCd9LFxuXG4gICAgeyBwYXRoOiAnZ29sZi1jb3Vyc2Uvc2VjdGlvbi00JywgbG9hZENoaWxkcmVuOiAnLi90eXBlc2NyaXB0cy9zZWN0aW9uLWZvdXIvc2VjdGlvbi1mb3VyLm1vZHVsZSNTZWN0aW9uRm91ck1vZHVsZScsIGRhdGE6IHsgbmFtZTonR29sZicsIHR5cGU6J0ZvdXInIH0scGF0aE1hdGNoOiAnZnVsbCd9LFxuXG4gICAgeyBwYXRoOiAnZ29sZi1jb3Vyc2Uvc2VjdGlvbi1hZGQtb24nLCBsb2FkQ2hpbGRyZW46ICcuL3R5cGVzY3JpcHRzL3NlY3Rpb24tYWRkLW9uL3NlY3Rpb24tYWRkLW9uLm1vZHVsZSNTZWN0aW9uQWRkT25Nb2R1bGUnLCBkYXRhOiB7IG5hbWU6J0dvbGYnLCB0eXBlOidBZGRPbicgfSxwYXRoTWF0Y2g6ICdmdWxsJ30sXG5cbiAgICB7IHBhdGg6ICdnb2xmLWNvdXJzZS9kYXNoYm9hcmQnLCBsb2FkQ2hpbGRyZW46ICcuL3R5cGVzY3JpcHRzL2Rhc2hib2FyZC9kYXNoYm9hcmQubW9kdWxlI0Rhc2hib2FyZE1vZHVsZScsIGRhdGE6IHsgbmFtZTonR29sZicsIHR5cGU6J0FkZE9uJyB9LHBhdGhNYXRjaDogJ2Z1bGwnfSxcblxuICAgIHsgcGF0aDogJ2dvbGYtY291cnNlL3VwZGF0ZS1wcm9maWxlJywgbG9hZENoaWxkcmVuOiAnLi90eXBlc2NyaXB0cy91cGRhdGUtcHJvZmlsZS91cGRhdGUtcHJvZmlsZS5tb2R1bGUjVXBkYXRlUHJvZmlsZU1vZHVsZScsIGRhdGE6IHsgbmFtZTonR29sZicsIHR5cGU6J1VwZGF0ZScgfSxwYXRoTWF0Y2g6ICdmdWxsJ30sXG5cbiAgICB7IHBhdGg6ICdnb2xmLWNvdXJzZS9wdWJsaWMtaG9saWRheScsIGxvYWRDaGlsZHJlbjogJy4vdHlwZXNjcmlwdHMvcHVibGljLWhvbGlkYXkvcHVibGljLWhvbGlkYXkubW9kdWxlI1B1YmxpY0hvbGlkYXlNb2R1bGUnLCBkYXRhOiB7IG5hbWU6J0dvbGYnLCB0eXBlOidVcGRhdGUnIH0scGF0aE1hdGNoOiAnZnVsbCd9LFxuXG4gICAgeyBwYXRoOiAnZ29sZi1jb3Vyc2UvY2xvc2UtZGF5cycsIGxvYWRDaGlsZHJlbjogJy4vdHlwZXNjcmlwdHMvY2xvc2UtZGF5cy9jbG9zZS1kYXlzLm1vZHVsZSNDbG9zZURheXNNb2R1bGUnLCBkYXRhOiB7IG5hbWU6J0dvbGYnLCB0eXBlOidVcGRhdGUnIH0scGF0aE1hdGNoOiAnZnVsbCd9LFxuXG4gICAgeyBwYXRoOiAnZ29sZi1jb3Vyc2UvbWFuYWdlLXNsb3QnLCBsb2FkQ2hpbGRyZW46ICcuL3R5cGVzY3JpcHRzL21hbmFnZS1zbG90L21hbmFnZS1zbG90Lm1vZHVsZSNNYW5hZ2VTbG90TW9kdWxlJywgZGF0YTogeyBuYW1lOidHb2xmJywgdHlwZTonVXBkYXRlJyB9LHBhdGhNYXRjaDogJ2Z1bGwnfSxcblxuICAgIHsgcGF0aDogJ2dvbGYtY291cnNlL21hbmFnZS12ZW5kb3JzJywgbG9hZENoaWxkcmVuOiAnLi90eXBlc2NyaXB0cy9tYW5hZ2UtdmVuZG9ycy9tYW5hZ2UtdmVuZG9ycy5tb2R1bGUjTWFuYWdlVmVuZG9yc01vZHVsZScsIGRhdGE6IHsgbmFtZTonR29sZicsIHR5cGU6J1VwZGF0ZScgfSxwYXRoTWF0Y2g6ICdmdWxsJ30sXG5cbiAgICB7IHBhdGg6ICd2ZW5kb3IvZGFzaGJvYXJkJywgbG9hZENoaWxkcmVuOiAnLi90eXBlc2NyaXB0cy9kYXNoYm9hcmQtdi9kYXNoYm9hcmQubW9kdWxlI0Rhc2hib2FyZE1vZHVsZScsIGRhdGE6IHsgbmFtZTonR29sZicsIHR5cGU6J2Rhc2hib2FyZCcgfSxwYXRoTWF0Y2g6ICdmdWxsJ30sXG5cbiAgICB7IHBhdGg6ICd2ZW5kb3IvdXBkYXRlLXByb2ZpbGUnLCBsb2FkQ2hpbGRyZW46ICcuL3R5cGVzY3JpcHRzL3VwZGF0ZS1wcm9maWxlLXYvdXBkYXRlLXByb2ZpbGUubW9kdWxlI1VwZGF0ZVByb2ZpbGVNb2R1bGUnLCBkYXRhOiB7IG5hbWU6J0dvbGYnLCB0eXBlOidkYXNoYm9hcmQnIH0scGF0aE1hdGNoOiAnZnVsbCd9LFxuXG4gICAgeyBwYXRoOiAndmVuZG9yL21hbmFnZS1nb2xmLWNvdXJzZScsIGxvYWRDaGlsZHJlbjogJy4vdHlwZXNjcmlwdHMvbWFuYWdlLWdvbGYtY291cnNlL21hbmFnZS1nb2xmLWNvdXJzZS5tb2R1bGUjTWFuYWdlR29sZkNvdXJzZU1vZHVsZScsIGRhdGE6IHsgbmFtZTonR29sZicsIHR5cGU6J2Rhc2hib2FyZCcgfSxwYXRoTWF0Y2g6ICdmdWxsJ30sXG5cbl07XG5cblxuZXhwb3J0IGNvbnN0IFNlcnZlclJvdXRpbmdNb2R1bGUgOk1vZHVsZVdpdGhQcm92aWRlcnM9IFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3NlcnZlci1yb3V0aW5nLm1vZHVsZS50cyIsIi8qKlxuICogQ3JlYXRlZCBieSBtYXBoaXNoYXBoYW5idWggb24gMTUvMDUvMTcuXG4gKi9cbmltcG9ydCB7IE5nTW9kdWxlICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZUNvbnZlcnRvckRpcmVjdGl2ZSB9IGZyb20gJy4vLi4vZGlyZWN0aXZlL2RhdGUtY29udmVydG9yLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIERhdGVDb252ZXJ0b3JEaXJlY3RpdmVcbiAgICBdLFxuICAgIFxuICAgIGV4cG9ydHM6W0RhdGVDb252ZXJ0b3JEaXJlY3RpdmVdLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlQ29udmVydG9yRGlyZWN0aXZlTW9kdWxleyB9XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvdHlwZXNjcmlwdHMvZGlyZWN0aXZlLW1vZHVsZXMvZGF0ZS1jb252ZXJ0b3IubW9kdWxlLnRzIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IG1hcGhpc2hhcGhhbmJ1aCBvbiAxNS8wNS8xNy5cbiAqL1xuaW1wb3J0IHsgTmdNb2R1bGUgIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0luaXREaXJlY3RpdmUgfSBmcm9tICcuLy4uL2RpcmVjdGl2ZS9uZy1pbml0LmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIE5nSW5pdERpcmVjdGl2ZVxuICAgIF0sXG4gICAgXG4gICAgZXhwb3J0czpbTmdJbml0RGlyZWN0aXZlXSxcbn0pXG5leHBvcnQgY2xhc3MgTmdJbml0RGlyZWN0aXZlTW9kdWxleyB9XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvdHlwZXNjcmlwdHMvZGlyZWN0aXZlLW1vZHVsZXMvbmctaW5pdC5tb2R1bGUudHMiLCIvKipcbiAqIENyZWF0ZWQgYnkgbWFwaGlzaGFwaGFuYnVoIG9uIDE1LzA1LzE3LlxuICovXG5pbXBvcnQgeyBOZ01vZHVsZSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVDb252ZXJ0b3JEaXJlY3RpdmVNb2R1bGUgfSBmcm9tICcuL2RhdGUtY29udmVydG9yLm1vZHVsZSc7XG5pbXBvcnQgeyBOZ0luaXREaXJlY3RpdmVNb2R1bGUgfSBmcm9tICcuL25nLWluaXQubW9kdWxlJztcbmltcG9ydCB7S2V5c1BpcGVNb2R1bGV9IGZyb20gJy4vLi4vcGlwZS1tb2R1bGVzL2tleS5tb2R1bGUnO1xuaW1wb3J0IHsgTm9TcGVjaWFsQ2hhckRpcmVjdGl2ZU1vZHVsZSB9IGZyb20gJy4vc3BsLWNoYXIubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIERhdGVDb252ZXJ0b3JEaXJlY3RpdmVNb2R1bGUsTmdJbml0RGlyZWN0aXZlTW9kdWxlLE5vU3BlY2lhbENoYXJEaXJlY3RpdmVNb2R1bGUsS2V5c1BpcGVNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBcbiAgICBdLFxuICAgIFxuICAgIGV4cG9ydHM6W0RhdGVDb252ZXJ0b3JEaXJlY3RpdmVNb2R1bGUsTmdJbml0RGlyZWN0aXZlTW9kdWxlLE5vU3BlY2lhbENoYXJEaXJlY3RpdmVNb2R1bGUsS2V5c1BpcGVNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBTZXJ2ZXJDb21iaW5lRGlyZWN0aXZlTW9kdWxleyB9XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvdHlwZXNjcmlwdHMvZGlyZWN0aXZlLW1vZHVsZXMvc2VydmVyLWNvbWJpbmUubW9kdWxlLnRzIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IG1hcGhpc2hhcGhhbmJ1aCBvbiAxNS8wNS8xNy5cbiAqL1xuaW1wb3J0IHsgTmdNb2R1bGUgIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOb1NwZWNpYWxDaGFyRGlyZWN0aXZlIH0gZnJvbSAnLi8uLi9kaXJlY3RpdmUvbm8tc3BlY2lhbC1jaGFyLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIE5vU3BlY2lhbENoYXJEaXJlY3RpdmVcbiAgICBdLFxuICAgIFxuICAgIGV4cG9ydHM6W05vU3BlY2lhbENoYXJEaXJlY3RpdmVdLFxufSlcbmV4cG9ydCBjbGFzcyBOb1NwZWNpYWxDaGFyRGlyZWN0aXZlTW9kdWxleyB9XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvdHlwZXNjcmlwdHMvZGlyZWN0aXZlLW1vZHVsZXMvc3BsLWNoYXIubW9kdWxlLnRzIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgSG9zdEJpbmRpbmd9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgXG4gIHNlbGVjdG9yOiAnW3RlZURhdGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBEYXRlQ29udmVydG9yRGlyZWN0aXZlIHtcbiAgQElucHV0KCkgY3VyckRhdGU6YW55O1xuICBASW5wdXQoKSB0eXBlOnN0cmluZztcbiAgQEhvc3RCaW5kaW5nKCdpbm5lckhUTUwnKSBpbm5lckhUTUw7XG4gIFxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG4gIG5nT25Jbml0KCkge1xuICAgIGxldCB0aGVEYXRlID0gdGhpcy5jdXJyRGF0ZTtcbiAgICBsZXQgZGF0YTtcbiAgICBpZih0aGVEYXRlKXtcbiAgICAgIHRyeXtcbiAgICAgICAgaWYodGhlRGF0ZS5pbmRleE9mKCctJykgPiAtMSl7XG4gICAgICAgICAgdGhlRGF0ZSA9IHRoZURhdGUuc3BsaXQoXCItXCIpO1xuICAgICAgICAgIGxldCBuZXdEYXRlID0gdGhlRGF0ZVsxXStcIi9cIit0aGVEYXRlWzJdK1wiL1wiK3RoZURhdGVbMF07XG4gICAgICAgICAgZGF0YSA9IG5ld0RhdGU7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIGRhdGEgPSBwYXJzZUludCh0aGVEYXRlKVxuICAgICAgICB9XG4gICAgICB9Y2F0Y2goZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICB9XG4gICAgICBcbiAgICAgIGxldCBkO1xuICAgICAgaWYodGhpcy50eXBlKXtcbiAgICAgICAgZD0gbmV3IERhdGUoZGF0YSAqIDEwMDApO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGQ9IG5ldyBEYXRlKGRhdGEpO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coZClcbiAgICAgIGlmKGQgIT0gJ0ludmFsaWQgRGF0ZScpIHtcbiAgICAgICAgbGV0IG91cmRhdGUgPSBkLnRvU3RyaW5nKCkuc2xpY2UoMywxNSk7XG4gICAgICAgIGxldCBvdXRwdXQgPSBbb3VyZGF0ZS5zbGljZSgwLCA3KSwgJywnLCBvdXJkYXRlLnNsaWNlKDcpXS5qb2luKCcnKTtcbiAgICAgICAgY29uc29sZS5sb2cob3V0cHV0KVxuICAgICAgICB0aGlzLmlubmVySFRNTCA9IG91dHB1dDtcbiAgICAgIH1cblxuICAgIH1cblxuICB9XG4gIFxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3R5cGVzY3JpcHRzL2RpcmVjdGl2ZS9kYXRlLWNvbnZlcnRvci5kaXJlY3RpdmUudHMiLCIvL2ltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vXG4vL0BEaXJlY3RpdmUoe1xuLy8gIHNlbGVjdG9yOiAnW25nSW5pdF0nXG4vL30pXG4vL2V4cG9ydCBjbGFzcyBOZ0luaXREaXJlY3RpdmUge1xuLy9cbi8vICBASW5wdXQoKSBuZ0luaXQ7XG4vLyAgICBuZ09uSW5pdCgpIHtcbi8vICAgICAgICBpZiAodGhpcy5uZ0luaXQpIHtcbi8vICAgICAgICAgICAgdGhpcy5uZ0luaXQoKTtcbi8vICAgICAgICB9XG4vLyAgfVxuLy9cbi8vfVxuXG5pbXBvcnQgeyBEaXJlY3RpdmUsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vY29uc29sZS5hc3NlcnQoU2ltcGxlQ2hhbmdlLCBcIlVob2gsIFNvbWV0aGluZyB3YXMgbm90IGRlZmluZWQsIGxpa2VseSBwYXJ0IG9mIGEgY2lyY3VsYXIgcmVmZXJlbmNlIGxvb3BcIik7XG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmdJbml0XSdcbn0pXG5leHBvcnQgY2xhc3MgTmdJbml0RGlyZWN0aXZlIHtcblxuICBAT3V0cHV0KCkgbmdJbml0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBjb25zdHJ1Y3RvcigpIHt9XG4gIG5nT25Jbml0KCkgeyAgIFxuICAgICB0aGlzLm5nSW5pdC5lbWl0KCdkdW1teScpO1xuICAgICAvL3NldFRpbWVvdXQoKCkgPT4gdGhpcy5uZ0luaXQuZW1pdCgnZHVtbXknKSwgMCk7XG4gIH0gXG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvdHlwZXNjcmlwdHMvZGlyZWN0aXZlL25nLWluaXQuZGlyZWN0aXZlLnRzIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25vU3BlY2lhbENoYXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBOb1NwZWNpYWxDaGFyRGlyZWN0aXZlIHtcblxuICBASG9zdExpc3RlbmVyKCdrZXlwcmVzcycsIFsnJGV2ZW50J10pXG4gIG9uS2V5UHJlc3MoZXZlbnQ6IGFueSkge1xuICAgIGNvbnN0IHBhdHRlcm4gPSAvWzAtOUEtWmEteiBdLzsgLy8gT25seSBhbHBoYW51bWVyaWMgYW5kIHNwYWNlIGFsbG93ZWRcbiAgICBsZXQgaW5wdXRDaGFyID0gU3RyaW5nLmZyb21DaGFyQ29kZShldmVudC5jaGFyQ29kZSk7XG5cbiAgICBpZiAoIXBhdHRlcm4udGVzdChpbnB1dENoYXIpKSB7XG4gICAgICAvLyBpbnZhbGlkIGNoYXJhY3RlciwgcHJldmVudCBpbnB1dFxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgIFxuICAgIH1cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3R5cGVzY3JpcHRzL2RpcmVjdGl2ZS9uby1zcGVjaWFsLWNoYXIuZGlyZWN0aXZlLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgUmVuZGVyZXIgLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuLi8uLi8uLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4vLi4vY29tbW9uL3NlcnZpY2VzL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi8uLi9jb21tb24vc2VydmljZXMvc3RvcmFnZS5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlcixBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgaXNCcm93c2VyLCBpc05vZGUgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuXG5kZWNsYXJlIHZhciAkOmFueTtcbkBDb21wb25lbnQoe1xuICBlbmNhcHN1bGF0aW9uOlZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHNlbGVjdG9yOiAndGVlLWhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9oZWFkZXIuaHRtbCcsXG4gIHByb3ZpZGVyczogW0FwaVNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGVudmlyb25tZW50OmFueTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBBcGlTZXJ2aWNlOkFwaVNlcnZpY2UsICBwcml2YXRlIHJvdXRlcjogUm91dGVyLHByaXZhdGUgX3N0b3JhZ2U6U3RvcmFnZVNlcnZpY2UpIHtcbiAgICB0aGlzLmVudmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3N0b3JhZ2UudXNlckNoZWNrZXIoZmFsc2UpLnRoZW4oKHZhbCk9PntcbiAgICAgICAgaWYodmFsKXtcbiAgICAgICAgICB0aGlzLmVudmlyb25tZW50LnJhbmRvbS51c2VySW5mbyA9IHtpZDp2YWxbJ2lkJ10sdG9rZW46dmFsWyd0b2tlbiddLHNvdXJjZTp2YWxbJ3NvdXJjZSddfTtcbiAgICAgICAgICB0aGlzLmVudmlyb25tZW50LnJhbmRvbS5zb3VyY2UgPSB2YWxbJ3NvdXJjZSddO1xuICAgICAgICAgIGxldCBkID0gbmV3IERhdGUoKTtcbiAgICAgICAgICBkLnNldFRpbWUoZC5nZXRUaW1lKCkgKyAoMTIqMzAqMjQqNjAqNjAqMTAwMCkpO1xuICAgICAgICAgIHRoaXMuX3N0b3JhZ2Uuc3RvcmVDb29raWVzKCdpZCcsdGhpcy5lbnZpcm9ubWVudC5yYW5kb20udXNlckluZm8uaWQsZC50b1VUQ1N0cmluZygpKTtcbiAgICAgICAgICB0aGlzLl9zdG9yYWdlLnN0b3JlQ29va2llcygndG9rZW4nLHRoaXMuZW52aXJvbm1lbnQucmFuZG9tLnVzZXJJbmZvLnRva2VuLGQudG9VVENTdHJpbmcoKSk7XG4gICAgICAgICAgdGhpcy5fc3RvcmFnZS5zdG9yZUNvb2tpZXMoJ3NvdXJjZScsdGhpcy5lbnZpcm9ubWVudC5yYW5kb20udXNlckluZm8uc291cmNlLGQudG9VVENTdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gIH1cblxuICBkYXNoYm9hcmQoKXtcbiAgICAvLyAkKCcjcGFnZS13cmFwcGVyJykuYWRkQ2xhc3MoJ2xvZ2dlZEluJyk7XG4gICAgaWYodGhpcy5lbnZpcm9ubWVudC5yYW5kb20udXNlckluZm8uYWN0aXZhdGVkKXtcbiAgICAgIHRoaXMuQXBpU2VydmljZS51c2VyRGV0YWlsKCdnb2xmLWNvdXJzZS9kYXNoYm9hcmQnKTtcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMuQXBpU2VydmljZS51c2VyRGV0YWlsKGZhbHNlKTtcbiAgICB9XG5cblxuICB9XG5cbiAgdmRhaGJvYXJkKCl7XG4gICAgLy8gJCgnI3BhZ2Utd3JhcHBlcicpLmFkZENsYXNzKCdsb2dnZWRJbicpO1xuICAgIHRoaXMuQXBpU2VydmljZS51c2VyRGV0YWlsVmVuZG9yKCd2ZW5kb3IvZGFzaGJvYXJkJyk7XG4gIH1cblxuXG4gIGxvZ291dCgpe1xuICAgIGxldCBkYXRlMSA9ICdUaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAxIEdNVDsnO1xuICAgIHRoaXMuX3N0b3JhZ2Uuc3RvcmVDb29raWVzKCdpZCcsZmFsc2UsZGF0ZTEpO1xuICAgIHRoaXMuX3N0b3JhZ2Uuc3RvcmVDb29raWVzKCd0b2tlbicsZmFsc2UsZGF0ZTEpO1xuICAgIHRoaXMuX3N0b3JhZ2Uuc3RvcmVDb29raWVzKCdzb3VyY2UnLGZhbHNlLGRhdGUxKTtcbiAgICB0aGlzLmVudmlyb25tZW50LnJhbmRvbS51c2VyRGV0YWlsID0gbmV3IEFycmF5KCk7XG4gICAgdGhpcy5lbnZpcm9ubWVudC5yYW5kb20udXNlckluZm8gPSBuZXcgQXJyYXkoKTtcbiAgICB2YXIgX3NlbGYgPSB0aGlzO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIC8vICQoJyNwYWdlLXdyYXBwZXInKS5yZW1vdmVDbGFzcygnbG9nZ2VkSW4nKTtcbiAgICAgIF9zZWxmLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJyk7XG4gICAgfSw1MDApXG5cbiAgfVxuICAgIFxuICAgXG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvdHlwZXNjcmlwdHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHMiLCIvKipcbiAqIENyZWF0ZWQgYnkgbWFwaGlzaGFwaGFuYnVoIG9uIDE1LzA1LzE3LlxuICovXG5pbXBvcnQgeyBOZ01vZHVsZSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEtleXNQaXBlLEZvcktleVBpcGUsRmlsdGVyUGlwZSB9IGZyb20gJy4vLi4vcGlwZS9rZXkucGlwZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEtleXNQaXBlLEZvcktleVBpcGUsRmlsdGVyUGlwZVxuICAgIF0sXG4gICAgXG4gICAgZXhwb3J0czpbS2V5c1BpcGUsRm9yS2V5UGlwZSxGaWx0ZXJQaXBlXSxcbn0pXG5leHBvcnQgY2xhc3MgS2V5c1BpcGVNb2R1bGV7IH1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC90eXBlc2NyaXB0cy9waXBlLW1vZHVsZXMva2V5Lm1vZHVsZS50cyIsIi8qKlxuICogQ3JlYXRlZCBieSBtYXBoaXNoYXBoYW5idWggb24gMTkvMDUvMTcuXG4gKi9cbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXJ9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG4vL2NvbnZlcnQgdXJsIHRvIHNhZmUgdXJsXG5AUGlwZSh7bmFtZTogJ2tleXMnfSlcbmV4cG9ydCBjbGFzcyBLZXlzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge31cbiAgICB0cmFuc2Zvcm0odXJsKTphbnkge1xuICAgICAgICBsZXQgcmVnZXggPSAvKGh0dHBzPzopPyhcXC9cXC8pPyh3d3dcXC58bVxcLik/KHlvdXR1XFwuYmVcXC98eW91dHViZVxcLmNvbVxcLyhlbWJlZFxcL3x2XFwvfHdhdGNoXFw/dj18d2F0Y2hcXD8uKyZ2PSkpKChcXHd8LSl7MTF9KShbXlxcXCJdKikvaTtcbiAgICAgICAgbGV0IG1hdGNoZXMgPSB1cmwubWF0Y2gocmVnZXgpO1xuICAgICAgICBsZXQgZW1iZWRMaW5rPScnO1xuICAgICAgICBpZihtYXRjaGVzWzZdKSB7XG4gICAgICAgICAgICBlbWJlZExpbmsgPSBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1wiK21hdGNoZXNbNl0rJz9hdXRvcGxheT0xJnJlbD0wJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKGVtYmVkTGluayk7XG4gICAgfVxufVxuXG4vL2dpdmVzIGtleSBhbmQgdmFsdWVcbkBQaXBlKHtuYW1lOiAnZm9ya2V5J30pXG5leHBvcnQgY2xhc3MgRm9yS2V5UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odmFsdWUsIGFyZ3M6c3RyaW5nW10pIDogYW55IHtcbiAgICBsZXQga2V5cyA9IFtdO1xuICAgIGZvciAobGV0IGtleSBpbiB2YWx1ZSkge1xuICAgICAga2V5cy5wdXNoKHtrZXk6IGtleSwgdmFsdWU6IHZhbHVlW2tleV19KTtcbiAgICB9XG4gICAgcmV0dXJuIGtleXM7XG4gIH1cbn1cblxuXG5AUGlwZSh7bmFtZTogJ0ZpbHRlclBpcGUnfSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gICAgdHJhbnNmb3JtKGl0ZW1zOiBhbnlbXSwgZmllbGQ6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IGFueVtdIHtcbiAgICAgICAgdmFyIGFsbExpc3QgPSBbXTtcbiAgICAgICBpZih2YWx1ZSAmJiB2YWx1ZS50cmltKCkgJiYgdmFsdWUubGVuZ3RoID4wKXtcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgICAgIHZhbHVlID0gdmFsdWUudHJpbSgpO1xuICAgICAgICAgIGlmICghaXRlbXMpIHJldHVybiBhbGxMaXN0O1xuICAgICAgICAgIGZvcih2YXIgaSBpbiBpdGVtcyl7XG4gICAgICAgICAgICAgIGxldCBpdCA9IGl0ZW1zW2ldO1xuICAgICAgICAgICAgICBpZihpdFtmaWVsZF0udG9Mb2NhbGVMb3dlckNhc2UoKS5pbmRleE9mKHZhbHVlKSA+IC0xICl7XG4gICAgICAgICAgICAgICAgICBhbGxMaXN0LnB1c2goaXQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBhbGxMaXN0O1xuICAgICAgIH1lbHNle1xuICAgICAgICAgIHJldHVybiBpdGVtcztcbiAgICAgICB9XG4gICAgICAgXG4gICAgfVxuICAgICAgXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3R5cGVzY3JpcHRzL3BpcGUva2V5LnBpcGUudHMiLCIvLyBUaGlzIGZpbGUgaW5jbHVkZXMgcG9seWZpbGxzIG5lZWRlZCBieSBBbmd1bGFyIDIgYW5kIGlzIGxvYWRlZCBiZWZvcmVcbi8vIHRoZSBhcHAuIFlvdSBjYW4gYWRkIHlvdXIgb3duIGV4dHJhIHBvbHlmaWxscyB0byB0aGlzIGZpbGUuXG5cbmltcG9ydCAnYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxscyc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L3N5bWJvbCc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L29iamVjdCc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L2Z1bmN0aW9uJztcbmltcG9ydCAnY29yZS1qcy9lczYvcGFyc2UtaW50JztcbmltcG9ydCAnY29yZS1qcy9lczYvcGFyc2UtZmxvYXQnO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9udW1iZXInO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9tYXRoJztcbmltcG9ydCAnY29yZS1qcy9lczYvc3RyaW5nJztcbmltcG9ydCAnY29yZS1qcy9lczYvZGF0ZSc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L2FycmF5JztcbmltcG9ydCAnY29yZS1qcy9lczYvcmVnZXhwJztcbmltcG9ydCAnY29yZS1qcy9lczYvbWFwJztcbmltcG9ydCAnY29yZS1qcy9lczYvc2V0JztcbmltcG9ydCAnY29yZS1qcy9lczYvcmVmbGVjdCc7XG5cbmltcG9ydCAnY29yZS1qcy9lczcvcmVmbGVjdCc7XG5cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcG9seWZpbGxzLnRzIiwiLyoqXG4gKiBTZXJ2ZXItc2lkZSByb3V0ZXMuIE9ubHkgdGhlIGxpc3RlZCByb3V0ZXMgc3VwcG9ydCBodG1sNXB1c2hzdGF0ZS5cbiAqIEhhcyB0byBtYXRjaCBjbGllbnQgc2lkZSByb3V0ZXMuXG4gKlxuICogSW5kZXggKC8pIHJvdXRlIGRvZXMgbm90IGhhdmUgdG8gYmUgbGlzdGVkIGhlcmUuXG4gKlxuICogQGV4YW1wbGVcbiAqIGV4cG9ydCBjb25zdCByb3V0ZXM6IHN0cmluZ1tdID0gW1xuICogJ2hvbWUnLCAnYWJvdXQnXG4gKiBdO1xuICoqL1xuZXhwb3J0IGNvbnN0IHJvdXRlczogc3RyaW5nW10gPSBbXG4gICAgJyonXG5dO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci5yb3V0ZXMudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxuPHRlZS1oZWFkZXI+PC90ZWUtaGVhZGVyPlxcbjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cXG48IS0tPGZvb3RlciBjbGFzcz1cXFwiZm9vdGVyIHRleHQtY2VudGVyXFxcIj4gMjAxOCAmY29weTsgVGhlIFBVVFQgPC9mb290ZXI+LS0+XFxuXFxuXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvbWFpbi5odG1sXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxuXFxuPCEtLTxkaXYgc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6ICNlOWViZWU7aGVpZ2h0OiAxMDBweDtcXFwiPi0tPlxcbiAgICA8IS0tPGRpdiBzdHlsZT1cXFwiLS0+XFxuICAgIDwhLS1mb250LXNpemU6IDI0cHg7LS0+XFxuICAgIDwhLS0vKm1hcmdpbi10b3A6IDEwcHg7Ki8tLT5cXG4gICAgPCEtLXBhZGRpbmctdG9wOiAxNXB4Oy0tPlxcbiAgICA8IS0tY29sb3I6IHdoaXRlOy0tPlxcbiAgICA8IS0tcGFkZGluZy1sZWZ0OiAzMHB4Oy0tPlxcbiAgICA8IS0tXFxcIj4tLT5cXG4gICAgICAgIDwhLS08aDEgc3R5bGU9XFxcInRleHQtc2hhZG93OiNmZmZmZmYgM3B4IDNweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4yKSA2cHggNnB4IDBweDttYXJnaW4tbGVmdDogMjBweDtjb2xvcjpicm93bjtcXFwiPlRIRSBQVVRUPC9oMT4tLT5cXG5cXG4gICAgPCEtLTwvZGl2Pi0tPlxcbiAgICA8IS0tPGRpdiBvbmNsaWNrPVxcXCIkKCcjbWVudScpLmNzcygnZGlzcGxheScsJ2Jsb2NrJylcXFwiICAgc3R5bGU9XFxcIi0tPlxcbiAgICA8IS0tZmxvYXQ6IHJpZ2h0Oy0tPlxcbiAgICA8IS0tbWFyZ2luLXRvcDogLTQ5cHg7LS0+XFxuICAgIDwhLS1tYXJnaW4tcmlnaHQ6IDQwcHg7LS0+XFxuICAgIDwhLS1iYWNrZ3JvdW5kLWNvbG9yOiBicm93bjstLT5cXG5cXG4gICAgPCEtLVxcXCIgPi0tPlxcbiAgICAgICAgPCEtLTxpbWcgKm5nSWY9XFxcImVudmlyb25tZW50LnJhbmRvbS51c2VySW5mbyYmZW52aXJvbm1lbnQucmFuZG9tLnNvdXJjZVxcXCIgc3JjPVxcXCIvYXNzZXRzL2ltYWdlL2hhbWJ1cmdlci5zdmdcXFwiPi0tPlxcbiAgICA8IS0tPC9kaXY+LS0+XFxuPCEtLTwvZGl2Pi0tPlxcbjwhLS08ZGl2IGlkPVxcXCJtZW51XFxcIiBzdHlsZT1cXFwiZGlzcGxheTogbm9uZTstLT5cXG4gICAgPCEtLXBvc2l0aW9uOiBmaXhlZDstLT5cXG4gICAgPCEtLXRvcDogMDstLT5cXG4gICAgPCEtLWxlZnQ6IDA7LS0+XFxuICAgIDwhLS16LWluZGV4OiA1MDAwOy0tPlxcbiAgICA8IS0td2lkdGg6IDEwMCU7LS0+XFxuICAgIDwhLS1oZWlnaHQ6IDEwMCU7LS0+XFxuICAgIDwhLS1iYWNrZ3JvdW5kOiBkYXJrb2xpdmVncmVlbjstLT5cXG4gICAgPCEtLW92ZXJmbG93LXg6IHNjcm9sbDtcXFwiPi0tPlxcblxcbiAgICA8IS0tPGRpdiBvbmNsaWNrPVxcXCIkKCcjbWVudScpLmNzcygnZGlzcGxheScsJ25vbmUnKVxcXCIgc3R5bGU9XFxcImNvbG9yOiB3aGl0ZTstLT5cXG4gICAgPCEtLWZsb2F0OiByaWdodDstLT5cXG4gICAgPCEtLWZvbnQtc2l6ZTogMjRweDstLT5cXG4gICAgPCEtLW1hcmdpbi10b3A6IDUwcHg7LS0+XFxuICAgIDwhLS1tYXJnaW4tcmlnaHQ6IDUwcHg7XFxcIj5YPC9kaXY+LS0+XFxuICAgIDwhLS08bmctY29udGFpbmVyICpuZ0lmPVxcXCJlbnZpcm9ubWVudC5yYW5kb20udXNlckluZm8mJmVudmlyb25tZW50LnJhbmRvbS5zb3VyY2UgPT0gJ3ZlbmRvcidcXFwiPi0tPlxcbiAgICAgICAgPCEtLTxkaXY+LS0+XFxuICAgICAgICAgICAgPCEtLTxkaXYgc3R5bGU9XFxcIm1hcmdpbi10b3A6IDEwJTstLT5cXG4gICAgPCEtLW1hcmdpbi1sZWZ0OiAxMCU7LS0+XFxuICAgIDwhLS1jb2xvcjogd2hpdGU7LS0+XFxuICAgIDwhLS13aWR0aDogMjAlO2Zsb2F0OmxlZnQ7XFxcIj4tLT5cXG4gICAgICAgICAgICAgICAgPCEtLTx1bD4tLT5cXG4gICAgICAgICAgICAgICAgICAgIDwhLS08bGk+LS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxhIHN0eWxlPVxcXCIgICAgY29sb3I6IGJlaWdlOy0tPlxcbiAgICA8IS0tZm9udC1zaXplOiAxNnB4O1xcXCIgcm91dGVyTGluaz1cXFwiL3ZlbmRvci9kYXNoYm9hcmRcXFwiPkRBU0hCT0FSRDwvYT4tLT5cXG4gICAgICAgICAgICAgICAgICAgIDwhLS08L2xpPi0tPlxcbiAgICAgICAgICAgICAgICAgICAgPCEtLTxsaT4tLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tPGEgc3R5bGU9XFxcIiAgICBjb2xvcjogYmVpZ2U7LS0+XFxuICAgIDwhLS1mb250LXNpemU6IDE2cHg7XFxcIiByb3V0ZXJMaW5rPVxcXCIvdmVuZG9yL21hbmFnZS1nb2xmLWNvdXJzZVxcXCI+TUFOQUdFIEdPTEYgQ09VUlNFPC9hPi0tPlxcbiAgICAgICAgICAgICAgICAgICAgPCEtLTwvbGk+LS0+XFxuICAgICAgICAgICAgICAgICAgICA8IS0tPGxpPi0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08YSBzdHlsZT1cXFwiICAgIGNvbG9yOiBiZWlnZTstLT5cXG4gICAgPCEtLWZvbnQtc2l6ZTogMTZweDtcXFwiIHJvdXRlckxpbms9XFxcIi92ZW5kb3IvdXBkYXRlLXByb2ZpbGVcXFwiPlVQREFURSBQUk9GSUxFPC9hPi0tPlxcbiAgICAgICAgICAgICAgICAgICAgPCEtLTwvbGk+LS0+XFxuXFxuICAgICAgICAgICAgICAgICAgICA8IS0tPGxpPi0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08YSBzdHlsZT1cXFwiICAgIGNvbG9yOiBiZWlnZTstLT5cXG4gICAgPCEtLWZvbnQtc2l6ZTogMjZweDtcXFwiIChjbGljayk9XFxcImxvZ291dCgpXFxcIj5MT0dPVVQ8L2E+LS0+XFxuICAgICAgICAgICAgICAgICAgICA8IS0tPC9saT4tLT5cXG4gICAgICAgICAgICAgICAgPCEtLTwvdWw+LS0+XFxuICAgICAgICAgICAgPCEtLTwvZGl2Pi0tPlxcbiAgICAgICAgPCEtLTwvZGl2Pi0tPlxcbiAgICA8IS0tPC9uZy1jb250YWluZXI+LS0+XFxuICAgIDwhLS08bmctY29udGFpbmVyICpuZ0lmPVxcXCJlbnZpcm9ubWVudC5yYW5kb20udXNlckluZm8mJmVudmlyb25tZW50LnJhbmRvbS5zb3VyY2UgPT0gJ2dvbGZfY291cnNlJ1xcXCI+LS0+XFxuICAgICA8IS0tPGRpdiBvbmNsaWNrPVxcXCIkKCcjbWVudScpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcXFwiPi0tPlxcbiAgICAgICAgIDwhLS08ZGl2IHN0eWxlPVxcXCIgICAgbWFyZ2luLXRvcDogMTAlOy0tPlxcbiAgICA8IS0tbWFyZ2luLWxlZnQ6IDEwJTstLT5cXG4gICAgPCEtLWNvbG9yOiB3aGl0ZTstLT5cXG4gICAgPCEtLXdpZHRoOiAyMCU7ZmxvYXQ6bGVmdDtcXFwiPi0tPlxcbiAgICAgICAgICAgICA8IS0tPHVsPi0tPlxcbiAgICAgICAgICAgICAgICAgPCEtLTxsaT4tLT5cXG4gICAgICAgICAgICAgICAgICAgICA8IS0tPGEgc3R5bGU9XFxcIiAgICBjb2xvcjogYmVpZ2U7LS0+XFxuICAgIDwhLS1mb250LXNpemU6IDE2cHg7XFxcIiByb3V0ZXJMaW5rPVxcXCIvZ29sZi1jb3Vyc2Uvc2VjdGlvbi1vbmVcXFwiPlNFQ1RJT04gT05FPC9hPi0tPlxcbiAgICAgICAgICAgICAgICAgPCEtLTwvbGk+LS0+XFxuICAgICAgICAgICAgICAgICA8IS0tPGxpPi0tPlxcbiAgICAgICAgICAgICAgICAgICAgIDwhLS08YSBzdHlsZT1cXFwiICAgIGNvbG9yOiBiZWlnZTstLT5cXG4gICAgPCEtLWZvbnQtc2l6ZTogMTZweDtcXFwiIHJvdXRlckxpbms9XFxcIi9nb2xmLWNvdXJzZS9zZWN0aW9uLXR3b1xcXCI+U0VDVElPTiBUV088L2E+LS0+XFxuICAgICAgICAgICAgICAgICA8IS0tPC9saT4tLT5cXG4gICAgICAgICAgICAgICAgIDwhLS08bGk+LS0+XFxuICAgICAgICAgICAgICAgICAgICAgPCEtLTxhIHN0eWxlPVxcXCIgICAgY29sb3I6IGJlaWdlOy0tPlxcbiAgICA8IS0tZm9udC1zaXplOiAxNnB4O1xcXCIgcm91dGVyTGluaz1cXFwiL2dvbGYtY291cnNlL3NlY3Rpb24tdGhyZWVcXFwiPlNFQ1RJT04gVEhSRUU8L2E+LS0+XFxuICAgICAgICAgICAgICAgICA8IS0tPC9saT4tLT5cXG4gICAgICAgICAgICAgICAgIDwhLS08bGk+LS0+XFxuICAgICAgICAgICAgICAgICAgICAgPCEtLTxhIHN0eWxlPVxcXCIgICAgY29sb3I6IGJlaWdlOy0tPlxcbiAgICA8IS0tZm9udC1zaXplOiAxNnB4O1xcXCIgcm91dGVyTGluaz1cXFwiL2dvbGYtY291cnNlL3NlY3Rpb24tZm91clxcXCI+U0VDVElPTiBGT1VSPC9hPi0tPlxcbiAgICAgICAgICAgICAgICAgPCEtLTwvbGk+LS0+XFxuICAgICAgICAgICAgIDwhLS08L3VsPi0tPlxcbiAgICAgICAgIDwhLS08L2Rpdj4tLT5cXG4gICAgICAgICA8IS0tPGRpdiBzdHlsZT1cXFwiICAgIG1hcmdpbi10b3A6IDEwJTstLT5cXG4gICAgPCEtLW1hcmdpbi1sZWZ0OiAxMCU7LS0+XFxuICAgIDwhLS1jb2xvcjogd2hpdGU7LS0+XFxuICAgIDwhLS13aWR0aDogMjAlO2Zsb2F0OmxlZnQ7XFxcIj4tLT5cXG4gICAgICAgICAgICAgPCEtLTx1bD4tLT5cXG4gICAgICAgICAgICAgICAgIDwhLS08bGk+LS0+XFxuICAgICAgICAgICAgICAgICAgICAgPCEtLTxhIHN0eWxlPVxcXCIgICAgY29sb3I6IGJlaWdlOy0tPlxcbiAgICA8IS0tZm9udC1zaXplOiAxNnB4O1xcXCIgcm91dGVyTGluaz1cXFwiL2dvbGYtY291cnNlL2Nsb3NlZC1kYXlzXFxcIj5DTE9TRUQgREFZUzwvYT4tLT5cXG4gICAgICAgICAgICAgICAgIDwhLS08L2xpPi0tPlxcbiAgICAgICAgICAgICAgICAgPCEtLTxsaT4tLT5cXG4gICAgICAgICAgICAgICAgICAgICA8IS0tPGEgc3R5bGU9XFxcIiAgICBjb2xvcjogYmVpZ2U7LS0+XFxuICAgIDwhLS1mb250LXNpemU6IDE2cHg7XFxcIiByb3V0ZXJMaW5rPVxcXCIvZ29sZi1jb3Vyc2UvcHVibGljLWhvbGlkYXlcXFwiPkhPTElEQVlTPC9hPi0tPlxcbiAgICAgICAgICAgICAgICAgPCEtLTwvbGk+LS0+XFxuICAgICAgICAgICAgICAgICA8IS0tPGxpPi0tPlxcbiAgICAgICAgICAgICAgICAgICAgIDwhLS08YSBzdHlsZT1cXFwiICAgIGNvbG9yOiBiZWlnZTstLT5cXG4gICAgPCEtLWZvbnQtc2l6ZTogMTZweDtcXFwiIHJvdXRlckxpbms9XFxcIi9nb2xmLWNvdXJzZS9zZWN0aW9uLWFkZC1vblxcXCI+QUREIE9OL1JFTlRBTFM8L2E+LS0+XFxuICAgICAgICAgICAgICAgICA8IS0tPC9saT4tLT5cXG4gICAgICAgICAgICAgICAgIDwhLS08bGk+LS0+XFxuICAgICAgICAgICAgICAgICAgICAgPCEtLTxhIHN0eWxlPVxcXCJkaXNwbGF5OmJsb2NrO2NvbG9yOiBiZWlnZTstLT5cXG4gICAgPCEtLWZvbnQtc2l6ZTogMjZweDtcXFwiIChjbGljayk9XFxcImxvZ291dCgpXFxcIj5MT0dPVVQ8L2E+LS0+XFxuICAgICAgICAgICAgICAgICA8IS0tPC9saT4tLT5cXG5cXG4gICAgICAgICAgICAgPCEtLTwvdWw+LS0+XFxuICAgICAgICAgPCEtLTwvZGl2Pi0tPlxcbiAgICAgICAgIDwhLS08ZGl2IHN0eWxlPVxcXCIgICAgbWFyZ2luLXRvcDogMTAlOy0tPlxcbiAgICA8IS0tbWFyZ2luLWxlZnQ6IDEwJTstLT5cXG4gICAgPCEtLWNvbG9yOiB3aGl0ZTstLT5cXG4gICAgPCEtLXdpZHRoOiAyMCU7ZmxvYXQ6bGVmdDtcXFwiPi0tPlxcbiAgICAgICAgICAgICA8IS0tPHVsPi0tPlxcbiAgICAgICAgICAgICAgICAgPCEtLTxsaT4tLT5cXG4gICAgICAgICAgICAgICAgICAgICA8IS0tPGEgc3R5bGU9XFxcIiAgICBjb2xvcjogYmVpZ2U7LS0+XFxuICAgIDwhLS1mb250LXNpemU6IDE2cHg7XFxcIiByb3V0ZXJMaW5rPVxcXCIvZ29sZi1jb3Vyc2UvZGFzaGJvYXJkXFxcIj5EQVNIQk9BUkQ8L2E+LS0+XFxuICAgICAgICAgICAgICAgICA8IS0tPC9saT4tLT5cXG4gICAgICAgICAgICAgICAgIDwhLS08bGk+LS0+XFxuICAgICAgICAgICAgICAgICAgICAgPCEtLTxhIHN0eWxlPVxcXCIgICAgY29sb3I6IGJlaWdlOy0tPlxcbiAgICA8IS0tZm9udC1zaXplOiAxNnB4O1xcXCIgcm91dGVyTGluaz1cXFwiL2dvbGYtY291cnNlL3VwZGF0ZS1wcm9maWxlXFxcIj5VUERBVEUgUFJPRklMRTwvYT4tLT5cXG4gICAgICAgICAgICAgICAgIDwhLS08L2xpPi0tPlxcbiAgICAgICAgICAgICAgICAgPCEtLTxsaT4tLT5cXG4gICAgICAgICAgICAgICAgICAgICA8IS0tPGEgc3R5bGU9XFxcIiAgICBjb2xvcjogYmVpZ2U7LS0+XFxuICAgIDwhLS1mb250LXNpemU6IDE2cHg7XFxcIiByb3V0ZXJMaW5rPVxcXCIvZ29sZi1jb3Vyc2UvbWFuYWdlLXNsb3RcXFwiPk1BTkFHRSBTTE9UUzwvYT4tLT5cXG4gICAgICAgICAgICAgICAgIDwhLS08L2xpPi0tPlxcbiAgICAgICAgICAgICAgICAgPCEtLTxsaT4tLT5cXG4gICAgICAgICAgICAgICAgICAgICA8IS0tPGEgc3R5bGU9XFxcIiAgICBjb2xvcjogYmVpZ2U7LS0+XFxuICAgIDwhLS1mb250LXNpemU6IDE2cHg7XFxcIiByb3V0ZXJMaW5rPVxcXCIvZ29sZi1jb3Vyc2UvbWFuYWdlLXZlbmRvcnNcXFwiPk1BTkFHRSBWRU5ET1JTPC9hPi0tPlxcbiAgICAgICAgICAgICAgICAgPCEtLTwvbGk+LS0+XFxuICAgICAgICAgICAgIDwhLS08L3VsPi0tPlxcbiAgICAgICAgIDwhLS08L2Rpdj4tLT5cXG4gICAgIDwhLS08L2Rpdj4tLT5cXG5cXG4gICAgPCEtLTwvbmctY29udGFpbmVyPi0tPlxcblxcbjwhLS08L2Rpdj4tLT5cXG48ZGl2IChuZ0luaXQpPVxcXCJ2ZGFoYm9hcmQoKVxcXCIgKm5nSWY9XFxcImVudmlyb25tZW50LnJhbmRvbS5zb3VyY2UgPT0gJ3ZlbmRvcicmJmVudmlyb25tZW50LnJhbmRvbS51c2VySW5mb1xcXCI+PC9kaXY+XFxuPGRpdiAobmdJbml0KT1cXFwiZGFzaGJvYXJkKClcXFwiICpuZ0lmPVxcXCJlbnZpcm9ubWVudC5yYW5kb20uc291cmNlID09ICdnb2xmX2NvdXJzZScmJmVudmlyb25tZW50LnJhbmRvbS51c2VySW5mb1xcXCI+PC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvdHlwZXNjcmlwdHMvaGVhZGVyL2hlYWRlci5odG1sXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXFxuPCEtLTxkaXYgY2xhc3M9XFxcInRlZV9tZW51XFxcIj48L2Rpdj4tLT5cXG48IS0tPGRpdiBzdHlsZT1cXFwiICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTstLT5cXG4gICAgPCEtLXdpZHRoOiA0NSU7LS0+XFxuICAgIDwhLS1oZWlnaHQ6IDcwMHB4Oy0tPlxcbiAgICA8IS0tYm9yZGVyOiAxcHggc29saWQgd2hpdGU7LS0+XFxuXFxuICAgIDwhLS1tYXJnaW4tdG9wOiAtNjAlOy0tPlxcbiAgICA8IS0tbWFyZ2luLWxlZnQ6IDUlOy0tPlxcbiAgICA8IS0tY29sb3I6IGJlaWdlOy0tPlxcbiAgICA8IS0tZmxvYXQ6IGxlZnQ7LS0+XFxuPCEtLVxcXCI+LS0+XFxuXFxuPCEtLTwvZGl2Pi0tPlxcbjwhLS08ZGl2IHN0eWxlPVxcXCJwb3NpdGlvbjogYWJzb2x1dGU7LS0+XFxuICAgIDwhLS13aWR0aDogNDAlOy0tPlxcbiAgICA8IS0taGVpZ2h0OiAzMDBweDstLT5cXG4gICAgPCEtLWJvcmRlcjogMXB4IHNvbGlkIHdoaXRlOy0tPlxcbiAgICA8IS0tLyogYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICovLS0+XFxuXFxuICAgIDwhLS1tYXJnaW4tdG9wOiAtNjAlOy0tPlxcbiAgICA8IS0tbWFyZ2luLWxlZnQ6IDU1JTstLT5cXG4gICAgPCEtLWZsb2F0OiByaWdodDstLT5cXG4gICAgPCEtLWNvbG9yOiBiZWlnZTtcXFwiPi0tPlxcbiAgICA8IS0tPGgyIGNsYXNzPVxcXCJ0eHRfY2VudHJlXFxcIiBzdHlsZT1cXFwicGFkZGluZy10b3A6IDEwMHB4O1xcXCI+R09MRiBDT1VSU0U8L2gyPi0tPlxcbiAgICA8IS0tPGRpdiA+LS0+XFxuICAgICAgICA8IS0tPGEgIHJvdXRlckxpbms9XFxcImxvZ2luL2dvbGZfY291cnNlXFxcIj48ZGl2IGNsYXNzPVxcXCIgdHh0X2NlbnRyZVxcXCI+TE9HSU48L2Rpdj48L2E+LS0+XFxuICAgIDwhLS08L2Rpdj4tLT5cXG4gICAgPCEtLTxkaXYgPi0tPlxcbiAgICAgICAgPCEtLTxhIHJvdXRlckxpbms9XFxcInJlZ2lzdGVyL2dvbGZfY291cnNlXFxcIj4gIDxkaXYgY2xhc3M9XFxcIiAgdHh0X2NlbnRyZVxcXCI+UkVHSVNURVI8L2Rpdj48L2E+LS0+XFxuICAgIDwhLS08L2Rpdj4tLT5cXG48IS0tPC9kaXY+LS0+XFxuPCEtLTxkaXYgc3R5bGU9XFxcInBvc2l0aW9uOiBhYnNvbHV0ZTstLT5cXG4gICAgPCEtLXdpZHRoOiA0MCU7LS0+XFxuICAgIDwhLS1oZWlnaHQ6IDMwMHB4Oy0tPlxcbiAgICA8IS0tYm9yZGVyOiAxcHggc29saWQgd2hpdGU7LS0+XFxuICAgIDwhLS0vKiBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgKi8tLT5cXG5cXG4gICAgPCEtLW1hcmdpbi10b3A6IC0yOSU7LS0+XFxuICAgIDwhLS1tYXJnaW4tbGVmdDogNTUlOy0tPlxcbiAgICA8IS0tZmxvYXQ6IHJpZ2h0Oy0tPlxcbiAgICA8IS0tY29sb3I6IGJlaWdlO1xcXCI+LS0+XFxuICAgIDwhLS08aDIgY2xhc3M9XFxcInR4dF9jZW50cmVcXFwiIHN0eWxlPVxcXCJwYWRkaW5nLXRvcDogMTAwcHg7XFxcIj5WRU5ET1I8L2gyPi0tPlxcbiAgICA8IS0tPGRpdiA+LS0+XFxuICAgICAgICA8IS0tPGEgIHJvdXRlckxpbms9XFxcImxvZ2luL3ZlbmRvclxcXCI+PGRpdiBjbGFzcz1cXFwiIHR4dF9jZW50cmVcXFwiPkxPR0lOPC9kaXY+PC9hPi0tPlxcbiAgICA8IS0tPC9kaXY+LS0+XFxuICAgIDwhLS08ZGl2ID4tLT5cXG4gICAgICAgIDwhLS08YSByb3V0ZXJMaW5rPVxcXCJyZWdpc3Rlci92ZW5kb3JcXFwiPiA8ZGl2IGNsYXNzPVxcXCIgdHh0X2NlbnRyZVxcXCI+UkVHSVNURVI8L2Rpdj48L2E+LS0+XFxuICAgIDwhLS08L2Rpdj4tLT5cXG48IS0tPC9kaXY+LS0+XFxuXFxuXFxuPGRpdiBjbGFzcz1cXFwiaGVyb1xcXCIgZGF0YS1tb2R1bGU9XFxcImhlcm9cXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWltYWdlOnVybCgnLy9sb2dtZWluY2RuLmF6dXJlZWRnZS5uZXQvc2MtbG9nbWVpbm1lZGlhLy0vbWVkaWEvMTU3NTViYjQwZWI2NDQzNzlmOTUxMmI0ODQwZjdhZjIuanBnJyk7XFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYmVsdCBiaS1jb250ZW50XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhhbGZcXFwiPlxcbiAgICAgICAgICAgICAgICA8aDQ+R29sZiBDb3Vyc2U8L2g0PlxcbiAgICAgICAgICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImxvZy1yZWctYnRuXFxcIiByb3V0ZXJMaW5rPVxcXCJsb2dpbi9nb2xmX2NvdXJzZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT1cXFwibWluLXdpZHRoOiAxNTBweDtcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tYmxvY2sgYnRuLWxnIGJ0bi1pbmZvXFxcIj5Mb2dpbjwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJsb2ctcmVnLWJ0blxcXCIgcm91dGVyTGluaz1cXFwicmVnaXN0ZXIvZ29sZl9jb3Vyc2VcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gIHN0eWxlPVxcXCJtaW4td2lkdGg6IDIwMHB4O1xcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1ibG9jayBidG4tbGcgYnRuLXN1Y2Nlc3NcXFwiPlJlZ2lzdGVyPC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhhbGZcXFwiPlxcbiAgICAgICAgICAgICAgICA8aDQ+VGVlIFRpbWUgU2VsbGVyczwvaDQ+XFxuICAgICAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwibG9nLXJlZy1idG5cXFwiIHJvdXRlckxpbms9XFxcImxvZ2luL3ZlbmRvclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAgc3R5bGU9XFxcIm1pbi13aWR0aDogMTUwcHg7XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWJsb2NrIGJ0bi1sZyBidG4taW5mb1xcXCI+TG9naW48L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwibG9nLXJlZy1idG5cXFwiIHJvdXRlckxpbms9XFxcInJlZ2lzdGVyL3ZlbmRvclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAgc3R5bGU9XFxcIm1pbi13aWR0aDogMjAwcHg7XFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWJsb2NrIGJ0bi1sZyBidG4tc3VjY2Vzc1xcXCI+UmVnaXN0ZXI8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuXFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvdHlwZXNjcmlwdHMvaG9tZS9ob21lLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvbXBpbGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29tcGlsZXJcIlxuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvZm9ybXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi1leHByZXNzLWVuZ2luZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLWV4cHJlc3MtZW5naW5lXCJcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXBsYXRmb3JtLW5vZGUvX19wcml2YXRlX2ltcG9ydHNfX1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXBsYXRmb3JtLW5vZGUvX19wcml2YXRlX2ltcG9ydHNfX1wiXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb21wcmVzc2lvblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvbXByZXNzaW9uXCJcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L2FycmF5XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvYXJyYXlcIlxuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvZGF0ZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L2RhdGVcIlxuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvZnVuY3Rpb25cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9mdW5jdGlvblwiXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9tYXBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9tYXBcIlxuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvbWF0aFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L21hdGhcIlxuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvbnVtYmVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvbnVtYmVyXCJcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L29iamVjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L29iamVjdFwiXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9wYXJzZS1mbG9hdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L3BhcnNlLWZsb2F0XCJcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L3BhcnNlLWludFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L3BhcnNlLWludFwiXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9yZWZsZWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvcmVmbGVjdFwiXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9yZWdleHBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9yZWdleHBcIlxuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvc2V0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvc2V0XCJcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L3N0cmluZ1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L3N0cmluZ1wiXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9zeW1ib2xcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9zeW1ib2xcIlxuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczcvcmVmbGVjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM3L3JlZmxlY3RcIlxuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4cHJlc3NcIlxuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBhdGhcIlxuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==