import { OnInit, EventEmitter } from '@angular/core';
import { ApplicationConfig, NavigationConfig } from '../../application';
export declare class HeaderComponent implements OnInit {
    private navConfig;
    private appConfig;
    activeLinkIndex: number;
    ngOnInit(): void;
    toggleSidenav: EventEmitter<void>;
    toggleNotificationSidenav: EventEmitter<void>;
    constructor(navConfig: NavigationConfig, appConfig: ApplicationConfig);
    fullScreenToggle(): void;
}
