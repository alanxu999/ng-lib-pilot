import { Component, OnInit, EventEmitter, Output, Inject } from '@angular/core';

import * as screenfull from 'screenfull/dist/screenfull.js';
import { ApplicationConfig, APPLICATION_CONFIG_TOKEN, NavigationConfig, NAVIGATION_CONFIG_TOKEN } from '../../application';

@Component({
  selector: 'tilt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
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
