import { Component, OnInit, EventEmitter, Output, Inject } from '@angular/core';

import * as screenfull from 'screenfull/dist/screenfull.js';
import { ApplicationConfig, APPLICATION_CONFIG_TOKEN, NavigationConfig, NAVIGATION_CONFIG_TOKEN } from '../../application';

@Component({
  selector: 'tilt-header',
  template: `
    <mat-toolbar class="main-header bg primary" style="z-index: 5;">
      <button (click)="toggleSidenav.emit()" mat-icon-button>
        <mat-icon>menu</mat-icon>
      </button>
      <div class="branding">
        <!--<div class="logo"></div>-->
        <img src="/assets/img/cppib_logo@2x.png" style="height: 60px">
      </div>

      <!-- <div fxShow=”true” fxHide.lt-md=”true”> -->
      <button fxHide.lt-md=”true” mat-button class="tilt-nav-dropdown" [matMenuTriggerFor]="navDropdown">Strategic Tilting
        <mat-icon class="menu-caret">arrow_drop_down</mat-icon>
      </button>

      <nav mat-tab-nav-bar fxHide.lt-md=”true”>
        <a mat-tab-link
          [routerLink]="1"
          [active]="activeLinkIndex === 1"
          (click)="activeLinkIndex = 1"
          class="tilt-nav-menu-item">
          Portfolio Management
        </a>
        <a mat-tab-link
          [routerLink]="2"
          [active]="activeLinkIndex === 2"
          (click)="activeLinkIndex = 2"
          class="tilt-nav-menu-item">
          Portfolio Monitor
        </a>
        <a mat-tab-link
          [routerLink]="3"
          [active]="activeLinkIndex === 3"
          (click)="activeLinkIndex = 3"
          class="tilt-nav-menu-item">
          Asset Management
        </a>
        <a mat-tab-link
          [routerLink]="4"
          [active]="activeLinkIndex === 4"
          (click)="activeLinkIndex = 4"
          class="tilt-nav-menu-item">
          Asset Mornitor
        </a>
      </nav>
    <!-- </div> -->
      <div fxFlex></div>
      <button (click)="fullScreenToggle()" mat-icon-button>
        <mat-icon>fullscreen</mat-icon>
      </button>
      <button (click)="toggleNotificationSidenav.emit()" mat-icon-button class="ml-xs overflow-visible">
        <mat-icon>notifications</mat-icon>
        <span class="notification-label">5</span>
      </button>
      <button [matMenuTriggerFor]="user" mat-icon-button class="ml-xs">
        <mat-icon>person</mat-icon>
      </button>
      <mat-menu #user="matMenu" x-position="before">
        <button mat-menu-item>
          <mat-icon>settings</mat-icon>
          Settings
        </button>
        <button mat-menu-item>
          <mat-icon>account_box</mat-icon>
          Profile
        </button>
        <button mat-menu-item>
          <mat-icon>notifications_off</mat-icon>
          Disable notifications
        </button>
        <button mat-menu-item>
          <mat-icon>exit_to_app</mat-icon>
          Sign Out
        </button>
      </mat-menu>
    </mat-toolbar>

    <mat-menu #navDropdown="matMenu" yPosition="above" xPosition="after">
      <button mat-menu-item>{{appConfig.label}}</button>
      <hr>
      <button mat-menu-item>Home</button>
      <button mat-menu-item *ngFor="let app of navConfig.children">{{app.label}}</button>
    </mat-menu>
  `,
  styles: [`
    .c1{display:block;align-items:center;border:1px;border-style:solid;border-color:#0c4c54;height:65px;position:relative}.c2{display:block;border:1px;border-style:solid;border-color:red;height:100%;width:100%}.mat-ink-bar{background-color:#e8ac3b}
  `]
})
export class HeaderComponent implements OnInit {
  activeLinkIndex = 1;
  ngOnInit(): void { }

  @Output() toggleSidenav = new EventEmitter<void>();
  @Output() toggleNotificationSidenav = new EventEmitter<void>();

  constructor(
    @Inject(NAVIGATION_CONFIG_TOKEN) private navConfig: NavigationConfig,
    @Inject(APPLICATION_CONFIG_TOKEN) private appConfig: ApplicationConfig) {}

  fullScreenToggle(): void {
    if (screenfull.enabled) {
      screenfull.toggle();
    }
  }
}
