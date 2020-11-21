(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<script src=\"app.component.spec.ts\"></script>\n<script src=\"app-routing.module.ts\"></script>\n<script src=\"../model/musicfile.ts\"></script>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"card my-5\">\n        <div class=\"card-body\">\n          <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">\n            <h1 class=\"card-title\">{{ title }}</h1>\n          </button>\n          <mat-menu #menu=\"matMenu\">\n            <button mat-menu-item  routerLink=\"/musiclists\">\n              <mat-icon>my_library_music</mat-icon>\n              <span>Manage Music List</span>\n            </button>\n\n            <button mat-menu-item routerLink=\"/musicstreaming\">\n              <mat-icon>playlist_play</mat-icon>\n              <span>Streaming Music</span>\n            </button>\n\n            <button mat-menu-item routerLink=\"/musicremote\">\n              <mat-icon>settings_remote</mat-icon>\n              <span>Remote Control</span>\n            </button>\n          </mat-menu>\n\n\n        </div>\n      </div>\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/dialog/delete-musiclist-dialog.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/dialog/delete-musiclist-dialog.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Delete Music List</h1>\n<div mat-dialog-content>\n  <p>Confirm to delete Music List: <span style=\"color:red;font-weight:bold\">{{data.label}}</span></p>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">Cancel</button>\n  <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial>Ok</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/dialog/error-dialog.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/dialog/error-dialog.html ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title> <span style=\"color:red;font-weight:bold\">Error</span></h1>\n<div mat-dialog-content>\n  <p>{{data}}</p>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">Close</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/dialog/loading-dialog.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/dialog/loading-dialog.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Working in Progress</h1>\n<div mat-dialog-content>\n  <mat-spinner></mat-spinner>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/dialog/musicfile-info-dialog.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/dialog/musicfile-info-dialog.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Music File Info</h1>\n<div mat-dialog-content>\n    <h4>{{data.label}}</h4>\n    <p>{{data.path}}</p>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">Close</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/dialog/musicmixer-info-dialog.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/dialog/musicmixer-info-dialog.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Music Mixer Info</h1>\n<div mat-dialog-content>\n  <h4 mat-line>{{data.name}}</h4>\n  <p mat-line> {{data.vendor}} </p>\n  <p mat-line> {{data.description}} </p>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">Close</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/dialog/new-musiclist-dialog.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/dialog/new-musiclist-dialog.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>New Music List</h1>\n<div mat-dialog-content>\n  <p>Music List Label</p>\n  <mat-form-field class=\"musicutiltiy-mat-full-width\">\n    <input matInput [(ngModel)]=\"data.label\">\n  </mat-form-field>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">Cancel</button>\n  <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial>Ok</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/musiclist/musiclist.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/musiclist/musiclist.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<script src=\"../app/app-routing.module.ts\"></script>\n<div class=\"card my-5\">\n  <br>\n  <h2>Music List Management</h2>\n  <br>\n\n  <mat-form-field class=\"musicutiltiy-mat-full-width\">\n    <mat-label>Current Music List</mat-label>\n    <mat-select [(ngModel)] = \"currentMusicList\">\n      <mat-option [value]=\"musiclist\" *ngFor=\"let musiclist of musiclists\" (onSelectionChange)=\"changeMusicList()\">\n        {{musiclist.label}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <button mat-raised-button (click)=\"openNewMusicListDialog()\">\n    <mat-icon>playlist_add</mat-icon>\n    <span> Create New Music List</span>\n  </button>\n\n  <br>\n\n  <mat-form-field *ngIf=\"currentMusicList.label\" class=\"musicutiltiy-mat-full-width\">\n    <input matInput placeholder=\"Current Music List Label\" *ngIf=\"currentMusicList\" [(ngModel)]=\"currentMusicList.label\">\n  </mat-form-field>\n\n  <button *ngIf=\"currentMusicList.label\" mat-raised-button (click)=\"updateMusicList(currentMusicList)\">\n    <mat-icon>update</mat-icon>\n    <span> Update Music List</span>\n  </button>\n\n\n  <button *ngIf=\"currentMusicList.label\" mat-raised-button (click)=\"openDeleteMusicListDialog(currentMusicList)\">\n    <mat-icon>delete</mat-icon>\n    <span> Delete Music List</span>\n  </button>\n\n\n  <mat-list *ngIf=\"currentMusicList.label\" class=\"musicutiltiy-mat-full-width\">\n    <h3 mat-subheader>Current Music Files in List</h3>\n    <mat-list-item *ngFor=\"let musicfile of currentMusicList.musicFiles\">\n      <mat-icon mat-list-icon>music_video</mat-icon>\n      <h4 mat-line>{{musicfile.label}}</h4>\n      <p mat-line> {{musicfile.path}} </p>\n      <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">\n        <mat-icon>more_vert</mat-icon>\n      </button>\n      <mat-menu #menu=\"matMenu\">\n        <button mat-menu-item (click)=\"openMusicFileInfoDialog(musicfile)\">\n          <mat-icon>info</mat-icon>\n          <span>Info</span>\n        </button>\n        <button mat-menu-item (click)=\"deleteMusicFile(musicfile)\">\n          <mat-icon>delete</mat-icon>\n          <span>Delete</span>\n        </button>\n      </mat-menu>\n    </mat-list-item>\n    <mat-divider></mat-divider>\n    <h3 mat-subheader>Selectable Music Files</h3>\n    <mat-list-item *ngFor=\"let  musicfile of musicfiles\">\n      <mat-icon mat-list-icon>music_video</mat-icon>\n      <h4 mat-line>{{musicfile.label}}</h4>\n      <p mat-line> {{musicfile.path}} </p>\n      <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">\n        <mat-icon>more_vert</mat-icon>\n      </button>\n      <mat-menu #menu=\"matMenu\">\n        <button mat-menu-item (click)=\"openMusicFileInfoDialog(musicfile)\">\n          <mat-icon>info</mat-icon>\n          <span>Info</span>\n        </button>\n        <button mat-menu-item (click)=\"addMusicFile(musicfile)\">\n          <mat-icon>add</mat-icon>\n          <span>Add</span>\n        </button>\n      </mat-menu>\n    </mat-list-item>\n  </mat-list>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/musicremote/musicremote.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/musicremote/musicremote.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<script src=\"../app/app-routing.module.ts\"></script>\n<div class=\"card my-5\">\n  <br>\n  <h2>Music Remote Control</h2>\n  <br>\n\n  <div *ngIf=\"currentMusicPlayerState && currentMusicPlayerState.musicPlayerSetting && currentMusicPlayerState.musicPlayerSetting.currentMusicList && currentMusicPlayerState.musicPlayerSetting.currentMusicMixer\">\n    <mat-slider\n      class=\"musicutiltiy-mat-full-width\"\n      [max]=100\n      [min]=0\n      [step]=1\n      [thumbLabel]=true\n      [(ngModel)]=\"currentMusicPlayerState.elapsedPercentage\"\n      (input)=\"updateMusicPlayerSetting(currentMusicPlayerState.musicPlayerSetting.currentMusicList, currentMusicPlayerState.musicPlayerSetting.currentMusicFile, currentMusicPlayerState.musicPlayerSetting.currentMusicMixer, true, $event.value)\">\n    </mat-slider>\n\n    <div>{{currentMusicPlayerState.elaspsedTime}} ({{currentMusicPlayerState.elapsedPercentage}}.00%)</div>\n\n    <button mat-icon-button aria-label=\"Play\" *ngIf=\"currentMusicPlayerState.playing == false\" (click)=\"updateMusicPlayerSetting(currentMusicPlayerState.musicPlayerSetting.currentMusicList, currentMusicPlayerState.musicPlayerSetting.currentMusicFile, currentMusicPlayerState.musicPlayerSetting.currentMusicMixer, true, currentMusicPlayerState.elapsedPercentage)\">\n      <mat-icon>play_arrow</mat-icon>\n    </button>\n    <button mat-icon-button aria-label=\"Pause\" *ngIf=\"currentMusicPlayerState.playing == true\" (click)=\"updateMusicPlayerSetting(currentMusicPlayerState.musicPlayerSetting.currentMusicList, currentMusicPlayerState.musicPlayerSetting.currentMusicFile, currentMusicPlayerState.musicPlayerSetting.currentMusicMixer, false, currentMusicPlayerState.elapsedPercentage)\">\n      <mat-icon>pause</mat-icon>\n    </button>\n    <button mat-icon-button aria-label=\"Stop\" *ngIf=\"currentMusicPlayerState.playing == true\" (click)=\"updateMusicPlayerSettingwithStop(currentMusicPlayerState.musicPlayerSetting.currentMusicList, currentMusicPlayerState.musicPlayerSetting.currentMusicFile, currentMusicPlayerState.musicPlayerSetting.currentMusicMixer, false, currentMusicPlayerState.elapsedPercentage)\">\n      <mat-icon>stop</mat-icon>\n    </button>\n\n    <h4>Current Playing: {{currentMusicPlayerState.musicPlayerSetting.currentMusicFile.label}}</h4>\n    <div>Music List: {{currentMusicPlayerState.musicPlayerSetting.currentMusicList.label}}</div>\n    <div>Mixer: {{currentMusicPlayerState.musicPlayerSetting.currentMusicMixer.name}}</div>\n    <div>Current Play State: {{currentMusicPlayerState.playing}}</div>\n    <div *ngIf=\"currentMusicPlayerState.errorMessage\" >Error Message: {{currentMusicPlayerState.errorMessage}}</div>\n  </div>\n\n  <br>\n\n  <mat-form-field class=\"musicutiltiy-mat-full-width\">\n    <mat-label>Current Music List</mat-label>\n    <mat-select [(ngModel)] = \"currentMusicList\">\n      <mat-option [value]=\"musiclist\" *ngFor=\"let musiclist of musiclists\" (onSelectionChange)=\"changeMusicList\">\n        {{musiclist.label}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <br>\n\n\n  <mat-list  *ngIf=\"currentMusicList.label\" class=\"musicutiltiy-mat-full-width\">\n    <h3 mat-subheader>Current Music Files in List</h3>\n    <mat-list-item *ngFor=\"let musicfile of currentMusicList.musicFiles\">\n      <mat-icon mat-list-icon *ngIf=\"currentMusicFile != null && currentMusicFile.id == musicfile.id && currentMusicPlayerState.musicPlayerSetting.currentMusicList != null && currentMusicPlayerState.musicPlayerSetting.currentMusicList.id == currentMusicList.id\">play_arrow</mat-icon>\n      <mat-icon mat-list-icon *ngIf=\"currentMusicFile == null || currentMusicFile.id != musicfile.id || currentMusicPlayerState.musicPlayerSetting.currentMusicList == null || currentMusicPlayerState.musicPlayerSetting.currentMusicList.id != currentMusicList.id\">music_video</mat-icon>\n      <h4 mat-line>{{musicfile.label}}</h4>\n      <p mat-line> {{musicfile.path}} </p>\n      <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">\n        <mat-icon>more_vert</mat-icon>\n      </button>\n      <mat-menu #menu=\"matMenu\">\n        <button mat-menu-item (click)=\"openMusicFileInfoDialog(musicfile)\">\n          <mat-icon>info</mat-icon>\n          <span>Info</span>\n        </button>\n        <button mat-menu-item (click)=\"updateMusicPlayerSetting(currentMusicList, musicfile, currentMusicMixer, true, 0)\"  *ngIf=\"currentMusicFile == null || currentMusicFile.id != musicfile.id || currentMusicPlayerState.musicPlayerSetting.currentMusicList == null || currentMusicPlayerState.musicPlayerSetting.currentMusicList.id != currentMusicList.id\">\n          <mat-icon>play_arrow</mat-icon>\n          <span>Play</span>\n        </button>\n      </mat-menu>\n    </mat-list-item>\n  </mat-list>\n\n  <mat-list  *ngIf=\"currentMusicList.label\" class=\"musicutiltiy-mat-full-width\">\n    <h3 mat-subheader>Current Music Mixers</h3>\n    <mat-list-item *ngFor=\"let musicmixer of musicmixers\">\n      <mat-icon mat-list-icon *ngIf=\"currentMusicMixer == null || currentMusicMixer.name == musicmixer.name\">play_arrow</mat-icon>\n      <mat-icon mat-list-icon *ngIf=\"currentMusicMixer != null && currentMusicMixer.name != musicmixer.name\">speaker</mat-icon>\n      <h4 mat-line>{{musicmixer.name}}</h4>\n      <p mat-line> {{musicmixer.vendor}} </p>\n      <p mat-line> {{musicmixer.description}} </p>\n      <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">\n        <mat-icon>more_vert</mat-icon>\n      </button>\n      <mat-menu #menu=\"matMenu\">\n        <button mat-menu-item (click)=\"openMusicMixerInfoDialog(musicmixer)\">\n          <mat-icon>info</mat-icon>\n          <span>Info</span>\n        </button>\n        <button mat-menu-item (click)=\"updateMusicPlayerSetting(currentMusicPlayerState.musicPlayerSetting.currentMusicList, currentMusicPlayerState.musicPlayerSetting.currentMusicFile, musicmixer, true, 0)\" *ngIf=\"currentMusicMixer.name != musicmixer.name\">\n          <mat-icon>play_arrow</mat-icon>\n          <span>Play</span>\n        </button>\n      </mat-menu>\n    </mat-list-item>\n  </mat-list>\n\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/musicstreaming/musicstreaming.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/musicstreaming/musicstreaming.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<script src=\"../app/app-routing.module.ts\"></script>\n<div class=\"card my-5\">\n  <br>\n  <h2>Music Streaming</h2>\n  <br>\n\n  <div >\n    <audio controls id=\"audioPlayer\" #audioPlayer class=\"musicutiltiy-mat-full-width\" (ended)=\"setNextMusicFile()\">\n    </audio>\n\n    <h4 *ngIf=\"currentMusicFile.label\">Current Playing {{currentMusicFile.label}}</h4>\n  </div>\n\n  <br>\n\n  <mat-form-field class=\"musicutiltiy-mat-full-width\">\n    <mat-label>Current Music List</mat-label>\n    <mat-select [(ngModel)] = \"currentMusicList\">\n      <mat-option [value]=\"musiclist\" *ngFor=\"let musiclist of musiclists\" (onSelectionChange)=\"changeMusicList\">\n        {{musiclist.label}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <br>\n\n  <mat-list  *ngIf=\"currentMusicList.label\" class=\"musicutiltiy-mat-full-width\">\n    <h3 mat-subheader>Current Music Files in List</h3>\n    <mat-list-item *ngFor=\"let musicfile of currentMusicList.musicFiles\">\n      <mat-icon mat-list-icon *ngIf=\"currentMusicFile.id == musicfile.id\">play_arrow</mat-icon>\n      <mat-icon mat-list-icon *ngIf=\"currentMusicFile.id != musicfile.id\">music_video</mat-icon>\n      <h4 mat-line>{{musicfile.label}}</h4>\n      <p mat-line> {{musicfile.path}} </p>\n      <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">\n        <mat-icon>more_vert</mat-icon>\n      </button>\n      <mat-menu #menu=\"matMenu\">\n        <button mat-menu-item (click)=\"openMusicFileInfoDialog(musicfile)\">\n          <mat-icon>info</mat-icon>\n          <span>Info</span>\n        </button>\n        <button mat-menu-item (click)=\"setCurrentMusicFile(musicfile)\" *ngIf=\"currentMusicFile.id != musicfile.id\">\n          <mat-icon>play_arrow</mat-icon>\n          <span>Play</span>\n        </button>\n      </mat-menu>\n    </mat-list-item>\n  </mat-list>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _musiclist_musiclist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../musiclist/musiclist.component */ "./src/musiclist/musiclist.component.ts");
/* harmony import */ var _musicstreaming_musicstreaming_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../musicstreaming/musicstreaming.component */ "./src/musicstreaming/musicstreaming.component.ts");
/* harmony import */ var _musicremote_musicremote_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../musicremote/musicremote.component */ "./src/musicremote/musicremote.component.ts");






const routes = [
    { path: 'musiclists', component: _musiclist_musiclist_component__WEBPACK_IMPORTED_MODULE_3__["MusicListComponent"] },
    { path: 'musicstreaming', component: _musicstreaming_musicstreaming_component__WEBPACK_IMPORTED_MODULE_4__["MusicStreamingComponent"] },
    { path: 'musicremote', component: _musicremote_musicremote_component__WEBPACK_IMPORTED_MODULE_5__["MusicRemoteComponent"] },
    { path: '**', component: _musiclist_musiclist_component__WEBPACK_IMPORTED_MODULE_3__["MusicListComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Music Utility';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _musiclist_musiclist_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../musiclist/musiclist.component */ "./src/musiclist/musiclist.component.ts");
/* harmony import */ var _musicstreaming_musicstreaming_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../musicstreaming/musicstreaming.component */ "./src/musicstreaming/musicstreaming.component.ts");
/* harmony import */ var _musicremote_musicremote_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../musicremote/musicremote.component */ "./src/musicremote/musicremote.component.ts");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../dialog/dialog-component */ "./src/dialog/dialog-component.ts");
/* harmony import */ var _service_musiclist_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../service/musiclist.service */ "./src/service/musiclist.service.ts");
/* harmony import */ var _service_musicfile_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../service/musicfile.service */ "./src/service/musicfile.service.ts");
/* harmony import */ var _service_musicplayer_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../service/musicplayer.service */ "./src/service/musicplayer.service.ts");







// Angular Materials


















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_21__["NewMusicListDialog"],
            _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_21__["DeleteMusicListDialog"],
            _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_21__["MusicFileInfoDialog"],
            _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_21__["MusicMixerInfoDialog"],
            _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_21__["LoadingDialog"],
            _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_21__["ErrorDialog"],
            _musiclist_musiclist_component__WEBPACK_IMPORTED_MODULE_18__["MusicListComponent"],
            _musicstreaming_musicstreaming_component__WEBPACK_IMPORTED_MODULE_19__["MusicStreamingComponent"],
            _musicremote_musicremote_component__WEBPACK_IMPORTED_MODULE_20__["MusicRemoteComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_16__["MatSliderModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"]
        ],
        providers: [_service_musiclist_service__WEBPACK_IMPORTED_MODULE_22__["MusicListService"], _service_musicfile_service__WEBPACK_IMPORTED_MODULE_23__["MusicFileService"], _service_musicplayer_service__WEBPACK_IMPORTED_MODULE_24__["MusicPlayerService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        entryComponents: [
            _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_21__["NewMusicListDialog"],
            _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_21__["DeleteMusicListDialog"],
            _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_21__["MusicFileInfoDialog"],
            _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_21__["MusicMixerInfoDialog"],
            _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_21__["LoadingDialog"],
            _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_21__["ErrorDialog"]
        ]
    })
], AppModule);



/***/ }),

/***/ "./src/dialog/dialog-component.ts":
/*!****************************************!*\
  !*** ./src/dialog/dialog-component.ts ***!
  \****************************************/
/*! exports provided: NewMusicListDialog, DeleteMusicListDialog, MusicFileInfoDialog, MusicMixerInfoDialog, LoadingDialog, ErrorDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewMusicListDialog", function() { return NewMusicListDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteMusicListDialog", function() { return DeleteMusicListDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicFileInfoDialog", function() { return MusicFileInfoDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicMixerInfoDialog", function() { return MusicMixerInfoDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingDialog", function() { return LoadingDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorDialog", function() { return ErrorDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _model_musiclist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/musiclist */ "./src/model/musiclist.ts");
/* harmony import */ var _model_musicfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/musicfile */ "./src/model/musicfile.ts");
/* harmony import */ var _model_musicmixer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/musicmixer */ "./src/model/musicmixer.ts");






let NewMusicListDialog = class NewMusicListDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
NewMusicListDialog.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _model_musiclist__WEBPACK_IMPORTED_MODULE_3__["MusicList"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
NewMusicListDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'new-musiclist-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!../dialog/new-musiclist-dialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/dialog/new-musiclist-dialog.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], NewMusicListDialog);

let DeleteMusicListDialog = class DeleteMusicListDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
DeleteMusicListDialog.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _model_musiclist__WEBPACK_IMPORTED_MODULE_3__["MusicList"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
DeleteMusicListDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'delete-musiclist-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!../dialog/delete-musiclist-dialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/dialog/delete-musiclist-dialog.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], DeleteMusicListDialog);

let MusicFileInfoDialog = class MusicFileInfoDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
MusicFileInfoDialog.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _model_musicfile__WEBPACK_IMPORTED_MODULE_4__["MusicFile"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
MusicFileInfoDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'musicfile-info-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!../dialog/musicfile-info-dialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/dialog/musicfile-info-dialog.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], MusicFileInfoDialog);

let MusicMixerInfoDialog = class MusicMixerInfoDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
MusicMixerInfoDialog.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _model_musicmixer__WEBPACK_IMPORTED_MODULE_5__["MusicMixer"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
MusicMixerInfoDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'musicmixer-info-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!../dialog/musicmixer-info-dialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/dialog/musicmixer-info-dialog.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], MusicMixerInfoDialog);

let LoadingDialog = class LoadingDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        dialogRef.disableClose = true;
    }
};
LoadingDialog.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
LoadingDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'loading-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!../dialog/loading-dialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/dialog/loading-dialog.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], LoadingDialog);

let ErrorDialog = class ErrorDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
ErrorDialog.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
ErrorDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'error-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!../dialog/error-dialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/dialog/error-dialog.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ErrorDialog);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__);






if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/model/musicfile.ts":
/*!********************************!*\
  !*** ./src/model/musicfile.ts ***!
  \********************************/
/*! exports provided: MusicFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicFile", function() { return MusicFile; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class MusicFile {
}


/***/ }),

/***/ "./src/model/musiclist.ts":
/*!********************************!*\
  !*** ./src/model/musiclist.ts ***!
  \********************************/
/*! exports provided: MusicList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicList", function() { return MusicList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class MusicList {
    constructor() {
        this.musicFiles = new Array();
    }
}


/***/ }),

/***/ "./src/model/musicmixer.ts":
/*!*********************************!*\
  !*** ./src/model/musicmixer.ts ***!
  \*********************************/
/*! exports provided: MusicMixer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicMixer", function() { return MusicMixer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class MusicMixer {
}


/***/ }),

/***/ "./src/model/musicplayersetting.ts":
/*!*****************************************!*\
  !*** ./src/model/musicplayersetting.ts ***!
  \*****************************************/
/*! exports provided: MusicPlayerSetting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicPlayerSetting", function() { return MusicPlayerSetting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class MusicPlayerSetting {
}


/***/ }),

/***/ "./src/musiclist/musiclist.component.css":
/*!***********************************************!*\
  !*** ./src/musiclist/musiclist.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbXVzaWNsaXN0L211c2ljbGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/musiclist/musiclist.component.ts":
/*!**********************************************!*\
  !*** ./src/musiclist/musiclist.component.ts ***!
  \**********************************************/
/*! exports provided: MusicListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicListComponent", function() { return MusicListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _model_musiclist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/musiclist */ "./src/model/musiclist.ts");
/* harmony import */ var _service_musiclist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/musiclist.service */ "./src/service/musiclist.service.ts");
/* harmony import */ var _service_musicfile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/musicfile.service */ "./src/service/musicfile.service.ts");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dialog/dialog-component */ "./src/dialog/dialog-component.ts");







let MusicListComponent = class MusicListComponent {
    constructor(musiclistService, musicfileService, dialog) {
        this.musiclistService = musiclistService;
        this.musicfileService = musicfileService;
        this.dialog = dialog;
        this.currentMusicList = new _model_musiclist__WEBPACK_IMPORTED_MODULE_3__["MusicList"]();
    }
    openNewMusicListDialog() {
        const dialogRef = this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["NewMusicListDialog"], {
            width: "80%",
            data: new _model_musiclist__WEBPACK_IMPORTED_MODULE_3__["MusicList"]()
        });
        dialogRef.afterClosed().subscribe(newMusicList => {
            if (newMusicList != null && newMusicList.label != null && newMusicList.label != "") {
                const loadingDialogRef = this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["LoadingDialog"], {
                    width: "80%",
                    data: ""
                });
                this.musiclistService.createMusicList(newMusicList).subscribe(musiclist => {
                    this.musiclistService.getMusicLists().subscribe(musiclists => {
                        this.musiclists = musiclists;
                        this.currentMusicList = new _model_musiclist__WEBPACK_IMPORTED_MODULE_3__["MusicList"]();
                        loadingDialogRef.close();
                    });
                });
            }
            else {
                const dialogRef = this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ErrorDialog"], {
                    width: "80%",
                    data: "Invalid music list Label: "
                });
                return;
            }
        });
    }
    openDeleteMusicListDialog(deleteMusicList) {
        const dialogRef = this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DeleteMusicListDialog"], {
            width: "80%",
            data: deleteMusicList
        });
        dialogRef.afterClosed().subscribe(deleteMusicList => {
            if (deleteMusicList != null) {
                const loadingDialogRef = this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["LoadingDialog"], {
                    width: "80%",
                    data: ""
                });
                this.musiclistService.deleteMusicList(deleteMusicList).subscribe(result => {
                    this.musiclistService.getMusicLists().subscribe(musiclists => {
                        this.musiclists = musiclists;
                        this.currentMusicList = new _model_musiclist__WEBPACK_IMPORTED_MODULE_3__["MusicList"]();
                        loadingDialogRef.close();
                    });
                });
            }
        });
    }
    openMusicFileInfoDialog(musicFile) {
        const dialogRef = this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["MusicFileInfoDialog"], {
            width: "80%",
            data: musicFile
        });
    }
    deleteMusicFile(musicFile) {
        let removalIndex = -1;
        for (let index = 0; index < this.currentMusicList.musicFiles.length; index++) {
            let currentMusicFile = this.currentMusicList.musicFiles[index];
            if (currentMusicFile.id == musicFile.id) {
                removalIndex = index;
                break;
            }
        }
        if (removalIndex != -1) {
            this.currentMusicList.musicFiles.splice(removalIndex, 1);
        }
    }
    addMusicFile(musicFile) {
        let foundIndex = -1;
        for (let index = 0; index < this.currentMusicList.musicFiles.length; index++) {
            let currentMusicFile = this.currentMusicList.musicFiles[index];
            if (currentMusicFile.id == musicFile.id) {
                foundIndex = index;
                break;
            }
        }
        if (foundIndex == -1) {
            this.currentMusicList.musicFiles.push(musicFile);
        }
    }
    changeMusicList() {
        // Made a different copy of the object (to not impact original object)
        this.currentMusicList = JSON.parse(JSON.stringify(this.currentMusicList));
    }
    updateMusicList(musiclist) {
        if (musiclist == null || musiclist.label == null || musiclist.label == "") {
            const dialogRef = this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ErrorDialog"], {
                width: "80%",
                data: "Invalid music list Label: "
            });
            return;
        }
        const loadingDialogRef = this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["LoadingDialog"], {
            width: "80%",
            data: ""
        });
        this.musiclistService.updateMusicList(musiclist).subscribe(result => {
            this.musiclistService.getMusicLists().subscribe(musiclists => {
                this.musiclists = musiclists;
                this.currentMusicList = new _model_musiclist__WEBPACK_IMPORTED_MODULE_3__["MusicList"]();
                loadingDialogRef.close();
            });
        });
    }
    ngOnInit() {
        this.musiclistService.getMusicLists().subscribe(data => {
            this.musiclists = data;
        });
        this.musicfileService.getMusicFiles().subscribe(data => {
            this.musicfiles = data;
        });
    }
};
MusicListComponent.ctorParameters = () => [
    { type: _service_musiclist_service__WEBPACK_IMPORTED_MODULE_4__["MusicListService"] },
    { type: _service_musicfile_service__WEBPACK_IMPORTED_MODULE_5__["MusicFileService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
MusicListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-musiclist',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./musiclist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/musiclist/musiclist.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./musiclist.component.css */ "./src/musiclist/musiclist.component.css")).default]
    })
], MusicListComponent);



/***/ }),

/***/ "./src/musicremote/musicremote.component.css":
/*!***************************************************!*\
  !*** ./src/musicremote/musicremote.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbXVzaWNyZW1vdGUvbXVzaWNyZW1vdGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/musicremote/musicremote.component.ts":
/*!**************************************************!*\
  !*** ./src/musicremote/musicremote.component.ts ***!
  \**************************************************/
/*! exports provided: MusicRemoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicRemoteComponent", function() { return MusicRemoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _model_musiclist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/musiclist */ "./src/model/musiclist.ts");
/* harmony import */ var _model_musicfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/musicfile */ "./src/model/musicfile.ts");
/* harmony import */ var _model_musicmixer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/musicmixer */ "./src/model/musicmixer.ts");
/* harmony import */ var _service_musiclist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/musiclist.service */ "./src/service/musiclist.service.ts");
/* harmony import */ var _service_musicmixer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/musicmixer.service */ "./src/service/musicmixer.service.ts");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dialog/dialog-component */ "./src/dialog/dialog-component.ts");
/* harmony import */ var _service_musicplayer_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../service/musicplayer.service */ "./src/service/musicplayer.service.ts");
/* harmony import */ var _model_musicplayersetting__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../model/musicplayersetting */ "./src/model/musicplayersetting.ts");











let MusicRemoteComponent = class MusicRemoteComponent {
    constructor(musiclistService, musicmixerService, musicplayerService, dialog) {
        this.musiclistService = musiclistService;
        this.musicmixerService = musicmixerService;
        this.musicplayerService = musicplayerService;
        this.dialog = dialog;
        this.currentMusicList = new _model_musiclist__WEBPACK_IMPORTED_MODULE_3__["MusicList"]();
        this.currentMusicFile = new _model_musicfile__WEBPACK_IMPORTED_MODULE_4__["MusicFile"]();
        this.currentMusicMixer = new _model_musicmixer__WEBPACK_IMPORTED_MODULE_5__["MusicMixer"]();
        this.currentPlaySetting = false;
        this.previousStop = false;
    }
    openMusicFileInfoDialog(musicFile) {
        const dialogRef = this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__["MusicFileInfoDialog"], {
            width: "80%",
            data: musicFile
        });
    }
    openMusicMixerInfoDialog(musicMixer) {
        const dialogRef = this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__["MusicMixerInfoDialog"], {
            width: "80%",
            data: musicMixer
        });
    }
    changeMusicList() {
        this.currentMusicFile = new _model_musicfile__WEBPACK_IMPORTED_MODULE_4__["MusicFile"]();
    }
    updateMusicPlayerSettingwithStop(musiclist, musicfile, musicmixer, play, elapsedTargetPercentage) {
        this.previousStop = true;
        this.updateMusicPlayerSetting(musiclist, musicfile, musicmixer, play, elapsedTargetPercentage);
    }
    updateMusicPlayerSetting(musiclist, musicfile, musicmixer, play, elapsedTargetPercentage) {
        let updateMusicPlayerSetting = new _model_musicplayersetting__WEBPACK_IMPORTED_MODULE_10__["MusicPlayerSetting"]();
        if (musiclist == null) {
            const dialogRef = this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ErrorDialog"], {
                width: "80%",
                data: "Music Mixer cannot be modified unless first play a music file in a music list"
            });
            return;
        }
        updateMusicPlayerSetting.currentMusicList = musiclist;
        if (musicfile == null) {
            updateMusicPlayerSetting.currentMusicFile = updateMusicPlayerSetting.currentMusicList[0];
        }
        else {
            updateMusicPlayerSetting.currentMusicFile = musicfile;
        }
        if (musicmixer == null) {
            updateMusicPlayerSetting.currentMusicMixer = this.currentMusicPlayerState.musicPlayerSetting.currentMusicMixer;
        }
        else {
            updateMusicPlayerSetting.currentMusicMixer = musicmixer;
        }
        updateMusicPlayerSetting.play = play;
        const loadingDialogRef = this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__["LoadingDialog"], {
            width: "80%",
            data: ""
        });
        // For the stop function to ensure click stop will route to begin
        if (play == true && this.previousStop == true) {
            this.previousStop = false;
            elapsedTargetPercentage = 0;
        }
        this.musicplayerService.updateMusicPlayerSetting(updateMusicPlayerSetting, elapsedTargetPercentage).subscribe(data => {
            this.getMusicPlayerState();
            this.delay(5000).then(any => {
                this.getMusicPlayerState();
                loadingDialogRef.close();
            });
        });
    }
    delay(ms) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log("fired"));
        });
    }
    getMusicPlayerState() {
        this.musicplayerService.getMusicPlayerState().subscribe(data => {
            this.currentMusicPlayerState = data;
            this.currentMusicList = this.currentMusicPlayerState.musicPlayerSetting.currentMusicList;
            this.currentMusicFile = this.currentMusicPlayerState.musicPlayerSetting.currentMusicFile;
            this.currentMusicMixer = this.currentMusicPlayerState.musicPlayerSetting.currentMusicMixer;
            this.currentPlaySetting = this.currentMusicPlayerState.musicPlayerSetting.play;
            if (this.currentMusicList == null) {
                this.currentMusicList = new _model_musiclist__WEBPACK_IMPORTED_MODULE_3__["MusicList"]();
            }
            if (this.currentMusicFile == null) {
                this.currentMusicFile = new _model_musicfile__WEBPACK_IMPORTED_MODULE_4__["MusicFile"]();
            }
            if (this.currentMusicMixer == null) {
                for (let index = 0; index < this.musicmixers.length; index++) {
                    if (this.musicmixers[index].name == "default [default]") {
                        this.currentMusicMixer = this.musicmixers[index];
                        break;
                    }
                }
                // set default
                if (this.currentMusicMixer == null) {
                    this.currentMusicMixer = this.musicmixers[0];
                }
            }
        });
    }
    ngOnInit() {
        this.musiclistService.getMusicLists().subscribe(data => {
            this.musiclists = data;
        });
        this.musicmixerService.getMusicMixers().subscribe(data => {
            this.musicmixers = data;
            this.getMusicPlayerState();
        });
        this.intervalHolder = setInterval(() => {
            this.musicplayerService.getMusicPlayerState().subscribe(data => {
                this.currentMusicPlayerState = data;
                this.currentMusicFile = this.currentMusicPlayerState.musicPlayerSetting.currentMusicFile;
            });
        }, 1000 * 2); // 2 seconds
    }
    ngOnDestroy() {
        clearInterval(this.intervalHolder);
    }
};
MusicRemoteComponent.ctorParameters = () => [
    { type: _service_musiclist_service__WEBPACK_IMPORTED_MODULE_6__["MusicListService"] },
    { type: _service_musicmixer_service__WEBPACK_IMPORTED_MODULE_7__["MusicMixerService"] },
    { type: _service_musicplayer_service__WEBPACK_IMPORTED_MODULE_9__["MusicPlayerService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
MusicRemoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-musicremote',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./musicremote.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/musicremote/musicremote.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./musicremote.component.css */ "./src/musicremote/musicremote.component.css")).default]
    })
], MusicRemoteComponent);



/***/ }),

/***/ "./src/musicstreaming/musicstreaming.component.css":
/*!*********************************************************!*\
  !*** ./src/musicstreaming/musicstreaming.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbXVzaWNzdHJlYW1pbmcvbXVzaWNzdHJlYW1pbmcuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/musicstreaming/musicstreaming.component.ts":
/*!********************************************************!*\
  !*** ./src/musicstreaming/musicstreaming.component.ts ***!
  \********************************************************/
/*! exports provided: MusicStreamingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicStreamingComponent", function() { return MusicStreamingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _model_musiclist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/musiclist */ "./src/model/musiclist.ts");
/* harmony import */ var _model_musicfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/musicfile */ "./src/model/musicfile.ts");
/* harmony import */ var _service_musiclist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/musiclist.service */ "./src/service/musiclist.service.ts");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dialog/dialog-component */ "./src/dialog/dialog-component.ts");







let MusicStreamingComponent = class MusicStreamingComponent {
    constructor(musiclistService, dialog) {
        this.musiclistService = musiclistService;
        this.dialog = dialog;
        this.currentMusicList = new _model_musiclist__WEBPACK_IMPORTED_MODULE_3__["MusicList"]();
        this.currentMusicFile = new _model_musicfile__WEBPACK_IMPORTED_MODULE_4__["MusicFile"]();
        this.currentMusicFileUrl = "";
    }
    openMusicFileInfoDialog(musicFile) {
        const dialogRef = this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["MusicFileInfoDialog"], {
            width: "80%",
            data: musicFile
        });
    }
    changeMusicList() {
        this.currentMusicFile = new _model_musicfile__WEBPACK_IMPORTED_MODULE_4__["MusicFile"]();
    }
    setCurrentMusicFile(musicfile) {
        this.currentMusicFile = musicfile;
        this.currentMusicFileUrl = "api/musicstreaming/musiclists/" + this.currentMusicList.id + "/musicfiles/" + this.currentMusicFile.id;
        this.audio = document.getElementById('audioPlayer');
        this.audio.src = this.currentMusicFileUrl;
        this.audio.load();
        this.audio.play();
        this.audio.onEnded = this.setNextMusicFile();
    }
    setNextMusicFile() {
        let nextIndex = -1;
        for (let index = 0; index < this.currentMusicList.musicFiles.length; index++) {
            let currentMusicFile = this.currentMusicList.musicFiles[index];
            if (currentMusicFile.id == this.currentMusicFile.id) {
                nextIndex = index;
                break;
            }
        }
        nextIndex = nextIndex + 1;
        if (nextIndex >= this.currentMusicList.musicFiles.length) {
            nextIndex = 0;
        }
        this.currentMusicFile = this.currentMusicList.musicFiles[nextIndex];
        this.currentMusicFileUrl = "api/musicstreaming/musiclists/" + this.currentMusicList.id + "/musicfiles/" + this.currentMusicFile.id;
        this.audio = document.getElementById('audioPlayer');
        this.audio.src = this.currentMusicFileUrl;
        this.audio.load();
        this.audio.play();
    }
    ngOnInit() {
        this.musiclistService.getMusicLists().subscribe(data => {
            this.musiclists = data;
        });
    }
};
MusicStreamingComponent.ctorParameters = () => [
    { type: _service_musiclist_service__WEBPACK_IMPORTED_MODULE_5__["MusicListService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('audioPlayer', { static: false })
], MusicStreamingComponent.prototype, "audioPlayer", void 0);
MusicStreamingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-musicstreaming',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./musicstreaming.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/musicstreaming/musicstreaming.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./musicstreaming.component.css */ "./src/musicstreaming/musicstreaming.component.css")).default]
    })
], MusicStreamingComponent);



/***/ }),

/***/ "./src/service/musicfile.service.ts":
/*!******************************************!*\
  !*** ./src/service/musicfile.service.ts ***!
  \******************************************/
/*! exports provided: MusicFileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicFileService", function() { return MusicFileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let MusicFileService = class MusicFileService {
    constructor(http) {
        this.http = http;
        this.serviceUrl = '/api/musicfiles';
    }
    getMusicFiles() {
        return this.http.get(this.serviceUrl);
    }
};
MusicFileService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MusicFileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MusicFileService);



/***/ }),

/***/ "./src/service/musiclist.service.ts":
/*!******************************************!*\
  !*** ./src/service/musiclist.service.ts ***!
  \******************************************/
/*! exports provided: MusicListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicListService", function() { return MusicListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let MusicListService = class MusicListService {
    constructor(http) {
        this.http = http;
        this.serviceUrl = '/api/musiclists';
    }
    getMusicLists() {
        return this.http.get(this.serviceUrl);
    }
    createMusicList(musiclist) {
        return this.http.post(this.serviceUrl, musiclist);
    }
    updateMusicList(musiclist) {
        return this.http.put(this.serviceUrl + "/" + musiclist.id, musiclist);
    }
    deleteMusicList(musiclist) {
        return this.http.delete(this.serviceUrl + "/" + musiclist.id);
    }
};
MusicListService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MusicListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MusicListService);



/***/ }),

/***/ "./src/service/musicmixer.service.ts":
/*!*******************************************!*\
  !*** ./src/service/musicmixer.service.ts ***!
  \*******************************************/
/*! exports provided: MusicMixerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicMixerService", function() { return MusicMixerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let MusicMixerService = class MusicMixerService {
    constructor(http) {
        this.http = http;
        this.serviceUrl = '/api/musicmixers';
    }
    getMusicMixers() {
        return this.http.get(this.serviceUrl);
    }
};
MusicMixerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MusicMixerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MusicMixerService);



/***/ }),

/***/ "./src/service/musicplayer.service.ts":
/*!********************************************!*\
  !*** ./src/service/musicplayer.service.ts ***!
  \********************************************/
/*! exports provided: MusicPlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicPlayerService", function() { return MusicPlayerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let MusicPlayerService = class MusicPlayerService {
    constructor(http) {
        this.http = http;
        this.serviceUrl = '/api/musicplayer';
    }
    updateMusicPlayerSetting(musicPlayerSetting, elapsedTargetPercentage) {
        return this.http.put(this.serviceUrl + "/setting?elapsedpercentage=" + elapsedTargetPercentage, musicPlayerSetting);
    }
    getMusicPlayerState() {
        return this.http.get(this.serviceUrl + "/state");
    }
};
MusicPlayerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MusicPlayerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MusicPlayerService);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/danilko/IdeaProjects/musicutility/controller-web/src/main/web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map