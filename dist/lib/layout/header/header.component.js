import { Component, EventEmitter, Output, Inject } from '@angular/core';
import * as screenfull from 'screenfull/dist/screenfull.js';
import { APPLICATION_CONFIG_TOKEN, NAVIGATION_CONFIG_TOKEN } from '../../application';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(navConfig, appConfig) {
        this.navConfig = navConfig;
        this.appConfig = appConfig;
        this.activeLinkIndex = 1;
        this.toggleSidenav = new EventEmitter();
        this.toggleNotificationSidenav = new EventEmitter();
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.fullScreenToggle = function () {
        if (screenfull.enabled) {
            screenfull.toggle();
        }
    };
    HeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tilt-header',
                    template: "\n    <mat-toolbar class=\"main-header bg primary\" style=\"z-index: 5;\">\n      <button (click)=\"toggleSidenav.emit()\" mat-icon-button>\n        <mat-icon>menu</mat-icon>\n      </button>\n      <div class=\"branding\">\n        <!--<div class=\"logo\"></div>-->\n        <img src=\"/assets/img/cppib_logo@2x.png\" style=\"height: 60px\">\n      </div>\n\n      <!-- <div fxShow=\u201Dtrue\u201D fxHide.lt-md=\u201Dtrue\u201D> -->\n      <button fxHide.lt-md=\u201Dtrue\u201D mat-button class=\"tilt-nav-dropdown\" [matMenuTriggerFor]=\"navDropdown\">Strategic Tilting\n        <mat-icon class=\"menu-caret\">arrow_drop_down</mat-icon>\n      </button>\n\n      <nav mat-tab-nav-bar fxHide.lt-md=\u201Dtrue\u201D>\n        <a mat-tab-link\n          [routerLink]=\"1\"\n          [active]=\"activeLinkIndex === 1\"\n          (click)=\"activeLinkIndex = 1\"\n          class=\"tilt-nav-menu-item\">\n          Portfolio Management\n        </a>\n        <a mat-tab-link\n          [routerLink]=\"2\"\n          [active]=\"activeLinkIndex === 2\"\n          (click)=\"activeLinkIndex = 2\"\n          class=\"tilt-nav-menu-item\">\n          Portfolio Monitor\n        </a>\n        <a mat-tab-link\n          [routerLink]=\"3\"\n          [active]=\"activeLinkIndex === 3\"\n          (click)=\"activeLinkIndex = 3\"\n          class=\"tilt-nav-menu-item\">\n          Asset Management\n        </a>\n        <a mat-tab-link\n          [routerLink]=\"4\"\n          [active]=\"activeLinkIndex === 4\"\n          (click)=\"activeLinkIndex = 4\"\n          class=\"tilt-nav-menu-item\">\n          Asset Mornitor\n        </a>\n      </nav>\n    <!-- </div> -->\n      <div fxFlex></div>\n      <button (click)=\"fullScreenToggle()\" mat-icon-button>\n        <mat-icon>fullscreen</mat-icon>\n      </button>\n      <button (click)=\"toggleNotificationSidenav.emit()\" mat-icon-button class=\"ml-xs overflow-visible\">\n        <mat-icon>notifications</mat-icon>\n        <span class=\"notification-label\">5</span>\n      </button>\n      <button [matMenuTriggerFor]=\"user\" mat-icon-button class=\"ml-xs\">\n        <mat-icon>person</mat-icon>\n      </button>\n      <mat-menu #user=\"matMenu\" x-position=\"before\">\n        <button mat-menu-item>\n          <mat-icon>settings</mat-icon>\n          Settings\n        </button>\n        <button mat-menu-item>\n          <mat-icon>account_box</mat-icon>\n          Profile\n        </button>\n        <button mat-menu-item>\n          <mat-icon>notifications_off</mat-icon>\n          Disable notifications\n        </button>\n        <button mat-menu-item>\n          <mat-icon>exit_to_app</mat-icon>\n          Sign Out\n        </button>\n      </mat-menu>\n    </mat-toolbar>\n\n    <mat-menu #navDropdown=\"matMenu\" yPosition=\"above\" xPosition=\"after\">\n      <button mat-menu-item>{{appConfig.label}}</button>\n      <hr>\n      <button mat-menu-item>Home</button>\n      <button mat-menu-item *ngFor=\"let app of navConfig.children\">{{app.label}}</button>\n    </mat-menu>\n  ",
                    styles: ["\n    .c1{display:block;align-items:center;border:1px;border-style:solid;border-color:#0c4c54;height:65px;position:relative}.c2{display:block;border:1px;border-style:solid;border-color:red;height:100%;width:100%}.mat-ink-bar{background-color:#e8ac3b}\n  "]
                },] },
    ];
    /** @nocollapse */
    HeaderComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [NAVIGATION_CONFIG_TOKEN,] },] },
        { type: undefined, decorators: [{ type: Inject, args: [APPLICATION_CONFIG_TOKEN,] },] },
    ]; };
    HeaderComponent.propDecorators = {
        "toggleSidenav": [{ type: Output },],
        "toggleNotificationSidenav": [{ type: Output },],
    };
    return HeaderComponent;
}());
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map