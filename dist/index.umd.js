/**
 * ngx-tilt-common - Strategic Tilting web app common Angular library
 * @version v0.0.0
 * @author 
 * @link https://
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/router"), require("rxjs/Rx"), require("@angular/common"), require("@angular/platform-browser"), require("@angular/material"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/router", "rxjs/Rx", "@angular/common", "@angular/platform-browser", "@angular/material"], factory);
	else if(typeof exports === 'object')
		exports["ngx-tilt-common"] = factory(require("@angular/core"), require("@angular/router"), require("rxjs/Rx"), require("@angular/common"), require("@angular/platform-browser"), require("@angular/material"));
	else
		root["ngx-tilt-common"] = factory(root["ng"]["core"], root["ng"]["router"], root["Rx"], root["ng"]["common"], root["ng"]["platformBrowser"], root["ng"]["material"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_22__, __WEBPACK_EXTERNAL_MODULE_23__, __WEBPACK_EXTERNAL_MODULE_25__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(10));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(29));
__export(__webpack_require__(30));


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(13));


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(26));
__export(__webpack_require__(27));


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//import './style/cppib.theme.scss';
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var services_1 = __webpack_require__(2);
exports.TickTockService = services_1.TickTockService;
var components_1 = __webpack_require__(4);
exports.TickTockComponent = components_1.TickTockComponent;
var tick_tock_module_1 = __webpack_require__(18);
exports.TickTockModule = tick_tock_module_1.TickTockModule;
var test_module_1 = __webpack_require__(19);
exports.TestModule = test_module_1.TestModule;
__export(__webpack_require__(20));


/***/ }),
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(11));


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var Rx_1 = __webpack_require__(12);
/**
 * TickTockService class.
 */
var TickTockService = /** @class */ (function () {
    function TickTockService() {
        /**
         * Set up timer frequency.
         * @type {number}
         */
        this.TIMEOUT = 1000;
    }
    TickTockService_1 = TickTockService;
    /**
     * Extend time value with zero if required.
     * @param value
     * @returns {string}
     */
    TickTockService.formatTimeNumber = function (value) {
        var stringValue = value.toString();
        return ('0' + stringValue).slice(-2);
    };
    /**
     * Get current time string.
     * @returns {string}
     */
    TickTockService.getNowString = function () {
        var date = new Date();
        var hours = TickTockService_1.formatTimeNumber(date.getHours());
        var minutes = TickTockService_1.formatTimeNumber(date.getMinutes());
        var seconds = TickTockService_1.formatTimeNumber(date.getSeconds());
        return hours + ":" + minutes + ":" + seconds;
    };
    /**
     * Get current time observable.
     * @returns Observable<string>
     */
    TickTockService.prototype.getTick = function () {
        return Rx_1.Observable
            .timer(0, this.TIMEOUT)
            .map(function (tick) { return TickTockService_1.getNowString(); });
    };
    TickTockService = TickTockService_1 = __decorate([
        core_1.Injectable()
    ], TickTockService);
    return TickTockService;
    var TickTockService_1;
}());
exports.TickTockService = TickTockService;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(14));


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var services_1 = __webpack_require__(2);
var TickTockComponent = /** @class */ (function () {
    /**
     * Component constructor with injected dependencies.
     * @param tickTockService
     */
    function TickTockComponent(tickTockService) {
        this.tickTockService = tickTockService;
    }
    /**
     * Implements onInit event handler.
     */
    TickTockComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tickTockService.getTick().subscribe(function (timeString) { return _this.currentTime = timeString; });
    };
    TickTockComponent = __decorate([
        core_1.Component({
            selector: 'tick-tock',
            styles: [__webpack_require__(15)],
            template: __webpack_require__(17),
        }),
        __metadata("design:paramtypes", [services_1.TickTockService])
    ], TickTockComponent);
    return TickTockComponent;
}());
exports.TickTockComponent = TickTockComponent;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(16);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:100);", ""]);

// module
exports.push([module.i, ".tick-tock-time {\n  font-size: 2em;\n  font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif; }\n", ""]);

// exports


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "<div class=\"tick-tock-time\">\n  {{ currentTime }}\n</div>\n"

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var components_1 = __webpack_require__(4);
var services_1 = __webpack_require__(2);
var TickTockModule = /** @class */ (function () {
    function TickTockModule() {
    }
    TickTockModule = __decorate([
        core_1.NgModule({
            providers: [
                services_1.TickTockService,
            ],
            declarations: [
                components_1.TickTockComponent,
            ],
            exports: [
                components_1.TickTockComponent,
            ]
        })
    ], TickTockModule);
    return TickTockModule;
}());
exports.TickTockModule = TickTockModule;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(5);
var TestModule = /** @class */ (function () {
    function TestModule() {
    }
    TestModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], TestModule);
    return TestModule;
}());
exports.TestModule = TestModule;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(21));
__export(__webpack_require__(3));
__export(__webpack_require__(6));
__export(__webpack_require__(34));


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(22);
var platform_browser_1 = __webpack_require__(23);
var material_module_1 = __webpack_require__(24);
var layout_1 = __webpack_require__(6);
var application_1 = __webpack_require__(3);
/* import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarHttpModule } from '@ngx-loading-bar/http';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarModule } from '@ngx-loading-bar/core'; */
var router_1 = __webpack_require__(5);
exports.APPLICATION_CONFIG = {
    name: 'DVA',
    label: 'Dollar Value Add'
};
exports.NAVIGATION_CONFIG = {
    url: '/',
    label: 'Stragegic Tilting',
    type: 'link',
    icon: null,
    children: [
        {
            label: 'Dollar Value Add',
            url: '/',
            type: 'sub',
            icon: 'equalizer',
            children: [
                {
                    label: 'Portfolio Performance',
                    url: '/',
                    type: 'link'
                },
                {
                    label: 'Portfolio Monitor',
                    url: '/',
                    type: 'link'
                },
            ]
        },
        {
            label: 'Intrinsic Valuation Model',
            url: '/',
            type: 'sub',
            icon: 'explore',
            children: []
        },
        {
            label: 'Risk Report',
            url: '/',
            type: 'sub',
            icon: 'apps',
            children: []
        },
        {
            label: 'Trade Tool',
            url: '/',
            type: 'sub',
            icon: 'photo',
            children: []
        },
        {
            label: 'Backtest',
            url: '/',
            type: 'sub',
            icon: 'looks_3',
            children: []
        },
        {
            label: 'Performance Monitor',
            url: '/',
            type: 'sub',
            icon: 'format_line_spacing',
            children: []
        },
        {
            label: 'Rebalance Report',
            url: '/',
            type: 'sub',
            icon: 'looks_3',
            children: []
        },
        {
            label: 'ST Hub',
            url: '/',
            type: 'extLink',
            icon: 'view_column',
            children: []
        }
    ]
};
var TiltCommonModule = /** @class */ (function () {
    function TiltCommonModule() {
    }
    TiltCommonModule = __decorate([
        core_1.NgModule({
            declarations: [
                layout_1.HeaderComponent
            ],
            imports: [
                material_module_1.AngularMaterialModule,
                platform_browser_1.BrowserModule,
                common_1.CommonModule,
                router_1.RouterModule
                /* LoadingBarHttpClientModule,
                LoadingBarHttpModule,
                LoadingBarRouterModule,
                LoadingBarModule */
            ],
            exports: [
                material_module_1.AngularMaterialModule,
                platform_browser_1.BrowserModule,
                common_1.CommonModule,
                /* LoadingBarHttpClientModule,
                LoadingBarHttpModule,
                LoadingBarRouterModule,
                LoadingBarModule, */
                router_1.RouterModule,
                layout_1.LayoutModule,
                layout_1.HeaderComponent
            ],
            providers: [
                {
                    provide: application_1.NAVIGATION_CONFIG_TOKEN,
                    useValue: exports.NAVIGATION_CONFIG
                },
                {
                    provide: application_1.APPLICATION_CONFIG_TOKEN,
                    useValue: exports.APPLICATION_CONFIG
                },
            ]
        })
    ], TiltCommonModule);
    return TiltCommonModule;
}());
exports.TiltCommonModule = TiltCommonModule;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_22__;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_23__;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var material_1 = __webpack_require__(25);
var AngularMaterialModule = /** @class */ (function () {
    function AngularMaterialModule() {
    }
    AngularMaterialModule = __decorate([
        core_1.NgModule({
            imports: [
                material_1.MatAutocompleteModule,
                material_1.MatCheckboxModule,
                material_1.MatDatepickerModule,
                material_1.MatFormFieldModule,
                material_1.MatInputModule,
                material_1.MatRadioModule,
                material_1.MatSelectModule,
                material_1.MatSliderModule,
                material_1.MatSlideToggleModule,
                material_1.MatMenuModule,
                material_1.MatSidenavModule,
                material_1.MatToolbarModule,
                material_1.MatListModule,
                material_1.MatCardModule,
                material_1.MatStepperModule,
                material_1.MatTabsModule,
                material_1.MatExpansionModule,
                material_1.MatButtonModule,
                material_1.MatChipsModule,
                material_1.MatIconModule,
                material_1.MatProgressSpinnerModule,
                material_1.MatProgressBarModule,
                material_1.MatDialogModule,
                material_1.MatTooltipModule,
                material_1.MatSnackBarModule,
                material_1.MatSortModule,
            ],
            exports: [
                material_1.MatAutocompleteModule,
                material_1.MatCheckboxModule,
                material_1.MatDatepickerModule,
                material_1.MatFormFieldModule,
                material_1.MatInputModule,
                material_1.MatRadioModule,
                material_1.MatSelectModule,
                material_1.MatSliderModule,
                material_1.MatSlideToggleModule,
                material_1.MatMenuModule,
                material_1.MatSidenavModule,
                material_1.MatToolbarModule,
                material_1.MatListModule,
                material_1.MatCardModule,
                material_1.MatStepperModule,
                material_1.MatTabsModule,
                material_1.MatExpansionModule,
                material_1.MatButtonModule,
                material_1.MatChipsModule,
                material_1.MatIconModule,
                material_1.MatProgressSpinnerModule,
                material_1.MatProgressBarModule,
                material_1.MatDialogModule,
                material_1.MatTooltipModule,
                material_1.MatSnackBarModule,
                material_1.MatSortModule,
                material_1.MatNativeDateModule
            ]
        })
    ], AngularMaterialModule);
    return AngularMaterialModule;
}());
exports.AngularMaterialModule = AngularMaterialModule;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_25__;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        core_1.NgModule({
            declarations: [],
        })
    ], LayoutModule);
    return LayoutModule;
}());
exports.LayoutModule = LayoutModule;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var screenfull = __webpack_require__(28);
var application_1 = __webpack_require__(3);
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(navConfig, appConfig) {
        this.navConfig = navConfig;
        this.appConfig = appConfig;
        this.activeLinkIndex = 1;
        this.toggleSidenav = new core_1.EventEmitter();
        this.toggleNotificationSidenav = new core_1.EventEmitter();
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.fullScreenToggle = function () {
        if (screenfull.enabled) {
            screenfull.toggle();
        }
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "toggleSidenav", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "toggleNotificationSidenav", void 0);
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'tilt-header',
            template: __webpack_require__(31),
            styles: [__webpack_require__(32)]
        }),
        __param(0, core_1.Inject(application_1.NAVIGATION_CONFIG_TOKEN)),
        __param(1, core_1.Inject(application_1.APPLICATION_CONFIG_TOKEN)),
        __metadata("design:paramtypes", [Object, Object])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;


/***/ }),
/* 28 */
/***/ (function(module, exports) {

/*!
* screenfull
* v3.3.2 - 2017-10-27
* (c) Sindre Sorhus; MIT License
*/
(function () {
	'use strict';

	var document = typeof window !== 'undefined' && typeof window.document !== 'undefined' ? window.document : {};
	var isCommonjs = typeof module !== 'undefined' && module.exports;
	var keyboardAllowed = typeof Element !== 'undefined' && 'ALLOW_KEYBOARD_INPUT' in Element;

	var fn = (function () {
		var val;

		var fnMap = [
			[
				'requestFullscreen',
				'exitFullscreen',
				'fullscreenElement',
				'fullscreenEnabled',
				'fullscreenchange',
				'fullscreenerror'
			],
			// New WebKit
			[
				'webkitRequestFullscreen',
				'webkitExitFullscreen',
				'webkitFullscreenElement',
				'webkitFullscreenEnabled',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			// Old WebKit (Safari 5.1)
			[
				'webkitRequestFullScreen',
				'webkitCancelFullScreen',
				'webkitCurrentFullScreenElement',
				'webkitCancelFullScreen',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			[
				'mozRequestFullScreen',
				'mozCancelFullScreen',
				'mozFullScreenElement',
				'mozFullScreenEnabled',
				'mozfullscreenchange',
				'mozfullscreenerror'
			],
			[
				'msRequestFullscreen',
				'msExitFullscreen',
				'msFullscreenElement',
				'msFullscreenEnabled',
				'MSFullscreenChange',
				'MSFullscreenError'
			]
		];

		var i = 0;
		var l = fnMap.length;
		var ret = {};

		for (; i < l; i++) {
			val = fnMap[i];
			if (val && val[1] in document) {
				for (i = 0; i < val.length; i++) {
					ret[fnMap[0][i]] = val[i];
				}
				return ret;
			}
		}

		return false;
	})();

	var eventNameMap = {
		change: fn.fullscreenchange,
		error: fn.fullscreenerror
	};

	var screenfull = {
		request: function (elem) {
			var request = fn.requestFullscreen;

			elem = elem || document.documentElement;

			// Work around Safari 5.1 bug: reports support for
			// keyboard in fullscreen even though it doesn't.
			// Browser sniffing, since the alternative with
			// setTimeout is even worse.
			if (/ Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent)) {
				elem[request]();
			} else {
				elem[request](keyboardAllowed && Element.ALLOW_KEYBOARD_INPUT);
			}
		},
		exit: function () {
			document[fn.exitFullscreen]();
		},
		toggle: function (elem) {
			if (this.isFullscreen) {
				this.exit();
			} else {
				this.request(elem);
			}
		},
		onchange: function (callback) {
			this.on('change', callback);
		},
		onerror: function (callback) {
			this.on('error', callback);
		},
		on: function (event, callback) {
			var eventName = eventNameMap[event];
			if (eventName) {
				document.addEventListener(eventName, callback, false);
			}
		},
		off: function (event, callback) {
			var eventName = eventNameMap[event];
			if (eventName) {
				document.removeEventListener(eventName, callback, false);
			}
		},
		raw: fn
	};

	if (!fn) {
		if (isCommonjs) {
			module.exports = false;
		} else {
			window.screenfull = false;
		}

		return;
	}

	Object.defineProperties(screenfull, {
		isFullscreen: {
			get: function () {
				return Boolean(document[fn.fullscreenElement]);
			}
		},
		element: {
			enumerable: true,
			get: function () {
				return document[fn.fullscreenElement];
			}
		},
		enabled: {
			enumerable: true,
			get: function () {
				// Coerce to boolean in case of old WebKit
				return Boolean(document[fn.fullscreenEnabled]);
			}
		}
	});

	if (isCommonjs) {
		module.exports = screenfull;
	} else {
		window.screenfull = screenfull;
	}
})();


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
exports.APPLICATION_CONFIG_TOKEN = new core_1.InjectionToken('APPLICATION_CONFIG_TOKEN');


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
exports.NAVIGATION_CONFIG_TOKEN = new core_1.InjectionToken('NAVIGATION_CONFIG_TOKEN');


/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"main-header bg primary\" style=\"z-index: 5;\">\n  <button (click)=\"toggleSidenav.emit()\" mat-icon-button>\n    <mat-icon>menu</mat-icon>\n  </button>\n  <div class=\"branding\">\n    <!--<div class=\"logo\"></div>-->\n    <img src=\"/assets/img/cppib_logo@2x.png\" style=\"height: 60px\">\n  </div>\n\n  <!-- <div fxShow=”true” fxHide.lt-md=”true”> -->\n  <button fxHide.lt-md=”true” mat-button class=\"tilt-nav-dropdown\" [matMenuTriggerFor]=\"navDropdown\">Strategic Tilting\n    <mat-icon class=\"menu-caret\">arrow_drop_down</mat-icon>\n  </button>\n\n  <nav mat-tab-nav-bar fxHide.lt-md=”true”>\n    <a mat-tab-link\n      [routerLink]=\"1\"\n      [active]=\"activeLinkIndex === 1\"\n      (click)=\"activeLinkIndex = 1\"\n      class=\"tilt-nav-menu-item\">\n      Portfolio Management\n    </a>\n    <a mat-tab-link\n      [routerLink]=\"2\"\n      [active]=\"activeLinkIndex === 2\"\n      (click)=\"activeLinkIndex = 2\"\n      class=\"tilt-nav-menu-item\">\n      Portfolio Monitor\n    </a>\n    <a mat-tab-link\n      [routerLink]=\"3\"\n      [active]=\"activeLinkIndex === 3\"\n      (click)=\"activeLinkIndex = 3\"\n      class=\"tilt-nav-menu-item\">\n      Asset Management\n    </a>\n    <a mat-tab-link\n      [routerLink]=\"4\"\n      [active]=\"activeLinkIndex === 4\"\n      (click)=\"activeLinkIndex = 4\"\n      class=\"tilt-nav-menu-item\">\n      Asset Mornitor\n    </a>\n  </nav>\n<!-- </div> -->\n  <div fxFlex></div>\n  <button (click)=\"fullScreenToggle()\" mat-icon-button>\n    <mat-icon>fullscreen</mat-icon>\n  </button>\n  <button (click)=\"toggleNotificationSidenav.emit()\" mat-icon-button class=\"ml-xs overflow-visible\">\n    <mat-icon>notifications</mat-icon>\n    <span class=\"notification-label\">5</span>\n  </button>\n  <button [matMenuTriggerFor]=\"user\" mat-icon-button class=\"ml-xs\">\n    <mat-icon>person</mat-icon>\n  </button>\n  <mat-menu #user=\"matMenu\" x-position=\"before\">\n    <button mat-menu-item>\n      <mat-icon>settings</mat-icon>\n      Settings\n    </button>\n    <button mat-menu-item>\n      <mat-icon>account_box</mat-icon>\n      Profile\n    </button>\n    <button mat-menu-item>\n      <mat-icon>notifications_off</mat-icon>\n      Disable notifications\n    </button>\n    <button mat-menu-item>\n      <mat-icon>exit_to_app</mat-icon>\n      Sign Out\n    </button>\n  </mat-menu>\n</mat-toolbar>\n\n<mat-menu #navDropdown=\"matMenu\" yPosition=\"above\" xPosition=\"after\">\n  <button mat-menu-item>{{appConfig.label}}</button>\n  <hr>\n  <button mat-menu-item>Home</button>\n  <button mat-menu-item *ngFor=\"let app of navConfig.children\">{{app.label}}</button>\n</mat-menu>\n"

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(33);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".c1 {\n  display: block;\n  align-items: center;\n  border: 1px;\n  border-style: solid;\n  border-color: #0c4c54;\n  height: 65px;\n  position: relative;\n}\n\n.c2 {\n  display: block;\n  border: 1px;\n  border-style: solid;\n  border-color: red;\n  height: 100%;\n  width: 100%;\n}\n\n\n.c3 {\n\n}\n\n\n.mat-ink-bar {\n  background-color: #e8ac3b;\n}\n", ""]);

// exports


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* import { StylesPageComponent } from "./styles-page/styles-page.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeEditComponent } from "./recipes/edit-recipe/edit-recipe.component";
import { RecipeViewComponent } from "./recipes/view-recipe/view-recipe.component";
import { StockQuotesComponent } from "./stock-quotes/stock-quotes.component";
import { LoginComponent } from './login/login.component';
import { PilotComponent } from './pilot/pilot.component';
import {DashboardComponent} from "./pilot/dashboard/dashboard.component";
 */
exports.appRoutes = [
/* { path: '', pathMatch: 'full', component: LoginComponent },
{ path: 'styles-page', component: StylesPageComponent },
{ path: 'recipes', component: RecipesComponent },
{ path: 'recipes/new', component: RecipeEditComponent },
{ path: 'recipes/:name', component: RecipeViewComponent },
{ path: 'recipes/:name/edit', component: RecipeEditComponent },
// { path: 'login', component: LoginComponent },
{ path: 'shopping-list', component: ShoppingListComponent },
{ path: 'dashboard', component: DashboardComponent } */
];


/***/ })
/******/ ]);
});
//# sourceMappingURL=index.umd.js.map