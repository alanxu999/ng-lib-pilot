import { InjectionToken } from "@angular/core";
import { NavigationConfig } from "./navigation.config";
export interface NavigationConfig {
    url: string;
    label: string;
    type: string;
    icon?: string;
    children?: NavigationConfig[];
}
export declare const NAVIGATION_CONFIG_TOKEN: InjectionToken<NavigationConfig>;
