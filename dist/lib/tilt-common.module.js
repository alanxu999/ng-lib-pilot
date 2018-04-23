import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { BrowserModule } from "@angular/platform-browser";
import { AngularMaterialModule } from "./material.module";
import { LayoutModule, HeaderComponent } from './layout';
import { APPLICATION_CONFIG_TOKEN, NAVIGATION_CONFIG_TOKEN } from './application';
import { RouterModule } from "@angular/router";
export var APPLICATION_CONFIG = {
    name: 'DVA',
    label: 'Dollar Value Add'
};
export var NAVIGATION_CONFIG = {
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
    TiltCommonModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        HeaderComponent
                    ],
                    imports: [
                        AngularMaterialModule,
                        BrowserModule,
                        CommonModule,
                        RouterModule
                    ],
                    exports: [
                        AngularMaterialModule,
                        BrowserModule,
                        CommonModule,
                        RouterModule,
                        LayoutModule,
                        HeaderComponent
                    ],
                    providers: [
                        {
                            provide: NAVIGATION_CONFIG_TOKEN,
                            useValue: NAVIGATION_CONFIG
                        },
                        {
                            provide: APPLICATION_CONFIG_TOKEN,
                            useValue: APPLICATION_CONFIG
                        },
                    ]
                },] },
    ];
    return TiltCommonModule;
}());
export { TiltCommonModule };
//# sourceMappingURL=tilt-common.module.js.map