import { InjectionToken } from "@angular/core";
import { NavigationConfig } from "./navigation.config";

export interface NavigationConfig {
    url: string;
    label: string;
    type: string;
    icon?: string;
    children?: NavigationConfig[];
}

export const NAVIGATION_CONFIG_TOKEN: InjectionToken<NavigationConfig> = new InjectionToken<NavigationConfig>('NAVIGATION_CONFIG_TOKEN');