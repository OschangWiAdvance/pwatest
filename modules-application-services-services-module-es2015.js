(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-application-services-services-module"],{

/***/ "./src/app/modules/application/services/safe.pipe.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/application/services/safe.pipe.ts ***!
  \***********************************************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");



class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
SafePipe.ɵfac = function SafePipe_Factory(t) { return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
SafePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safe", type: SafePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'safe' }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/application/services/services-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/application/services/services-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ServicesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesRoutingModule", function() { return ServicesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services.component */ "./src/app/modules/application/services/services.component.ts");





const routes = [
    { path: '', component: _services_component__WEBPACK_IMPORTED_MODULE_2__["ServicesComponent"] },
];
class ServicesRoutingModule {
}
ServicesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ServicesRoutingModule });
ServicesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ServicesRoutingModule_Factory(t) { return new (t || ServicesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ServicesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/application/services/services.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/application/services/services.component.ts ***!
  \********************************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _song_song_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./song/song.service */ "./src/app/modules/application/services/song/song.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./safe.pipe */ "./src/app/modules/application/services/safe.pipe.ts");






function ServicesComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.songSelected.artist);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.songSelected.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.songSelected.top);
} }
function ServicesComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Select a song on the list to see the clip");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ServicesComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "iframe", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "https://www.youtube.com/embed/" + ctx_r9.songSelected.link), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
} }
function ServicesComponent_tr_34_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServicesComponent_tr_34_Template_tr_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const song_r11 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.select(song_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const song_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("table-", song_r11.class, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](song_r11.top);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](song_r11.artist);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](song_r11.title);
} }
class ServicesComponent {
    constructor(songService) {
        this.songService = songService;
        this.toto = 'JGwWNGJdvx8';
        this.yearSelected = 1;
    }
    ngOnInit() {
        this.getSongs(this.yearSelected);
    }
    getSongs(year) {
        this.songs = this.songService.getSongs(year);
    }
    select(song) {
        this.songSelected = song;
    }
    onChange($event) {
        this.yearSelected = $event.target.value;
        this.songs = this.songService.getSongs(this.yearSelected);
        this.songSelected = null;
    }
}
ServicesComponent.ɵfac = function ServicesComponent_Factory(t) { return new (t || ServicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_song_song_service__WEBPACK_IMPORTED_MODULE_1__["SongService"])); };
ServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicesComponent, selectors: [["app-services"]], decls: 35, vars: 4, consts: [[1, "row", "pb-4"], [1, "col-12", "col-sm-12", "col-md-5", "col-lg-5", "col-xl-5"], [1, "text-center", "col"], [1, "h4"], [1, "card", "bg-light", "mb-3", "text-center"], ["class", "card-body", 4, "ngIf"], ["class", "embed-responsive embed-responsive-16by9", 4, "ngIf"], [1, "col-12", "col-sm-12", "col-md-7", "col-lg-7", "col-xl-7"], [1, "form-group"], ["for", "exampleFormControlSelect1", 1, "text-primary", "font-weight-bold"], ["id", "exampleFormControlSelect1", 1, "form-control", "text-primary", "font-weight-bold", 3, "change"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], [1, "table", "table-hover", "table-striped", "table-bordered", "table-responsive-md", "table-sm"], [1, "text-secondary", 2, "text-align", "center"], [1, "text-primary", 2, "text-align", "center"], [1, "text-info", 2, "cursor", "pointer", "text-align", "center"], [3, "class", "click", 4, "ngFor", "ngForOf"], [1, "card-body"], [1, "card-title", "text-primary"], [1, "card-title", "text-info"], [1, "card-title", "text-secondary"], ["role", "alert", 1, "alert", "alert-danger"], [1, "fab", "fa-youtube", "fa-2x", "text-danger"], [1, "embed-responsive", "embed-responsive-16by9"], ["allowfullscreen", "", 1, "embed-responsive-item", 3, "src"], [3, "click"], [1, "text-secondary", 2, "cursor", "pointer", "text-align", "center"], [1, "fab", "fa-youtube", "text-danger"], [1, "text-primary", 2, "cursor", "pointer", "text-align", "center"]], template: function ServicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Feature : Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ServicesComponent_div_6_Template, 7, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ServicesComponent_div_7_Template, 5, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ServicesComponent_div_8_Template, 3, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Classement M\u00E9gafusion (T\u00E9l\u00E9chargements + Streaming)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ServicesComponent_Template_select_change_13_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "2016");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "2015");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "table", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Clip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Artist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ServicesComponent_tr_34_Template, 9, 6, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.songSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.songSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.songSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.songs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_safe_pipe__WEBPACK_IMPORTED_MODULE_4__["SafePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXBwbGljYXRpb24vc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-services',
                templateUrl: './services.component.html',
                styleUrls: ['./services.component.css']
            }]
    }], function () { return [{ type: _song_song_service__WEBPACK_IMPORTED_MODULE_1__["SongService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/application/services/services.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/application/services/services.module.ts ***!
  \*****************************************************************/
/*! exports provided: ServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesModule", function() { return ServicesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _services_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services.component */ "./src/app/modules/application/services/services.component.ts");
/* harmony import */ var _services_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services-routing.module */ "./src/app/modules/application/services/services-routing.module.ts");
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./safe.pipe */ "./src/app/modules/application/services/safe.pipe.ts");







class ServicesModule {
}
ServicesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ServicesModule });
ServicesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ServicesModule_Factory(t) { return new (t || ServicesModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _services_routing_module__WEBPACK_IMPORTED_MODULE_4__["ServicesRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ServicesModule, { declarations: [_services_component__WEBPACK_IMPORTED_MODULE_3__["ServicesComponent"],
        _safe_pipe__WEBPACK_IMPORTED_MODULE_5__["SafePipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _services_routing_module__WEBPACK_IMPORTED_MODULE_4__["ServicesRoutingModule"]], exports: [_services_component__WEBPACK_IMPORTED_MODULE_3__["ServicesComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                    _services_routing_module__WEBPACK_IMPORTED_MODULE_4__["ServicesRoutingModule"]
                ],
                exports: [
                    _services_component__WEBPACK_IMPORTED_MODULE_3__["ServicesComponent"]
                ],
                declarations: [
                    _services_component__WEBPACK_IMPORTED_MODULE_3__["ServicesComponent"],
                    _safe_pipe__WEBPACK_IMPORTED_MODULE_5__["SafePipe"],
                ],
                providers: [],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/application/services/song/mock-songs.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/application/services/song/mock-songs.ts ***!
  \*****************************************************************/
/*! exports provided: SONGS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SONGS", function() { return SONGS; });
const SONGS = [
    {
        year: '2018',
        items: [
            { link: 'S6baf8BqKDI', top: '1', artist: 'Lartiste featuring Caroliina', title: 'Mafiosa' },
            { link: 'kutk2XHEZNU', top: '2', artist: 'Vald', title: 'Désaccordé' },
            { link: 'iPGgnzc34tY', top: '3', artist: 'Aya Nakamura', title: 'Djadja' },
            { link: 'fC6YV65JJ6g', top: '4', artist: 'Maître Gims & Vianney', title: 'La Même' },
            { link: 'hQU_pgyCL6k', top: '5', artist: 'Dadju', title: 'Bob Marley' },
            { link: 'xpVfcZ0ZcFM', top: '6', artist: 'Drake	God\'s', title: 'Plan' },
            { link: 'RHb5LKnnxLg', top: '7', artist: 'Vegedream', title: 'Ramenez la coupe à la maison' },
            { link: 'BQ0mxQXmLsk', top: '8', artist: 'Camila Cabello featuring Young Thug', title: 'Havana' },
            { link: 'DkeiKbqa02g', top: '9', artist: 'Calvin Harris & Dua Lipa', title: 'One Kiss' },
            { link: '_I_D_8Z4sJE', top: '10', artist: 'Nicky Jam & J Balvin', title: 'X' },
        ]
    },
    {
        year: '2017',
        items: [
            { link: 'JGwWNGJdvx8', top: '1', artist: 'Ed Sheeran', title: 'Shape of You' },
            { link: 'kJQP7kiw5Fk', top: '2', artist: 'Luis Fonsi featuring Daddy Yankee', title: 'Despacito' },
            { link: 'tul6zYBp9tA', top: '3', artist: 'Niska', title: 'reseaû' },
            { link: 'GGhKPm18E48', top: '4', artist: 'Damso', title: 'Macarena' },
            { link: 'NuXaPB_KWg8', top: '5', artist: 'Lartiste featuring Awa Imani', title: 'Chocolat' },
            { link: 'UPnMFUsKm8w', top: '6', artist: 'Kalash featuring Damso', title: 'Mwaka Moon' },
            { link: 'L3wKzyIN1yk', top: '7', artist: 'Rag\'n\'Bone Man', title: 'Human' },
            { link: 'xvZqHgFz51I', top: '8', artist: 'Future', title: 'Mask Off' },
            { link: 'wuCK-oiE3rM', top: '9', artist: 'Petit Biscuit', title: 'Sunset Lover' },
            { link: 'CTFtOOh47oo', top: '10', artist: 'French Montana featuring Swae Lee', title: 'Unforgettable' },
        ]
    },
    {
        year: '2016',
        items: [
            { link: '2Y6Nne8RvaA', top: '1', artist: 'Kungs vs Cookin`\' on 3 Burners featuring Kylie Auldist', title: 'This Girl' },
            { link: 'b1_B-IKEufg', top: '2', artist: 'Imany', title: 'Don\'t Be So Shy (Filatov & Karas remix)' },
            { link: 'nYh-n7EOtMA', top: '3', artist: 'Sia featuring Sean Paul', title: 'Cheap Thrills' },
            { link: 'ru0K8uYEZWw', top: '4', artist: 'Justin Timberlake', title: 'Can\'t Stop the Feeling!' },
            { link: 'SxyahDOtqZw', top: '5', artist: 'Céline Dion', title: 'Encore un soir' },
            { link: 'pXRviuL6vMY', top: '6', artist: 'Twenty One Pilots', title: 'Stressed Out' },
            { link: '1LXsm9y-z3I', top: '7', artist: 'Matt Simons', title: 'Catch & Release (Deepend remix)' },
            { link: 'YxCTYUG0sow', top: '8', artist: 'Alan Walker featuring Iselin Solheim', title: 'Faded' },
            { link: 'KDXOzr0GoA4', top: '9', artist: 'Jain', title: 'Come' },
            { link: 'iAbnEUA0wpA', top: '10', artist: 'Drake featuring Wizkid & Kyla', title: 'One Dance' },
        ]
    },
    {
        year: '2015',
        items: [
            { link: 'jGflUbPQfW8', top: '1', artist: 'OMI', title: 'Cheerleader (Felix Jaehn remix)' },
            { link: 'OPf0YbXqDm0', top: '2', artist: 'Mark Ronson featuring Bruno Mars', title: 'Uptown Funk' },
            { link: 'YqeW9_5kURI', top: '3', artist: 'Major Lazer & DJ Snake featuring MØ', title: 'Lean On' },
            { link: 'pwKkjLOHd7s', top: '4', artist: 'Marina Kaye', title: 'Homeless' },
            { link: 'YQHsXMglC9A', top: '5', artist: 'Adele', title: 'Hello' },
            { link: 'Mptdcx36qZU', top: '6', artist: 'Feder featuring Lyse', title: 'Goodbye' },
            { link: 'PVjiKRfKpPI', top: '7', artist: 'Hozier', title: 'Take Me to Church' },
            { link: 'rs40yxHjTxQ', top: '8', artist: 'Christine and the Queens', title: 'Christine' },
            { link: 'W6cp9FakTlo', top: '9', artist: 'Louane', title: 'Avenir' },
            { link: 'hXI8RQYC36Q', top: '10', artist: 'Nicky Jam & Enrique Iglesias', title: 'El Perdón' },
        ]
    },
];


/***/ }),

/***/ "./src/app/modules/application/services/song/song.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/application/services/song/song.service.ts ***!
  \*******************************************************************/
/*! exports provided: SongService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongService", function() { return SongService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _mock_songs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock-songs */ "./src/app/modules/application/services/song/mock-songs.ts");



class SongService {
    constructor() {
    }
    getSongs(year) {
        this.song = _mock_songs__WEBPACK_IMPORTED_MODULE_1__["SONGS"][year - 1].items;
        return this.song;
    }
}
SongService.ɵfac = function SongService_Factory(t) { return new (t || SongService)(); };
SongService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SongService, factory: SongService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SongService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-application-services-services-module-es2015.js.map