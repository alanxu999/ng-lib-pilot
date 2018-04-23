import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { BrowserModule } from "@angular/platform-browser";
import { AngularMaterialModule } from "./material.module";
import { LayoutModule, HeaderComponent } from './layout'
import { ApplicationConfig, NavigationConfig, APPLICATION_CONFIG_TOKEN, NAVIGATION_CONFIG_TOKEN }from './application';

/* import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarHttpModule } from '@ngx-loading-bar/http';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarModule } from '@ngx-loading-bar/core'; */

import { RouterModule } from "@angular/router";

export const  APPLICATION_CONFIG: ApplicationConfig = {
    name: 'DVA',
    label: 'Dollar Value Add'
}
  
export const NAVIGATION_CONFIG: NavigationConfig = {
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
  }

@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        AngularMaterialModule,
        BrowserModule,
        CommonModule,
        RouterModule
        /* LoadingBarHttpClientModule,
        LoadingBarHttpModule,
        LoadingBarRouterModule,
        LoadingBarModule */
    ],
    exports: [
        AngularMaterialModule,
        BrowserModule,
        CommonModule,
        /* LoadingBarHttpClientModule,
        LoadingBarHttpModule,
        LoadingBarRouterModule,
        LoadingBarModule, */
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
})
export class TiltCommonModule {}