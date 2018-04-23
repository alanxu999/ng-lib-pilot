import { InjectionToken } from "@angular/core";

export const APPLICATION_CONFIG_TOKEN = new InjectionToken<ApplicationConfig>('APPLICATION_CONFIG_TOKEN');

export interface ApplicationConfig {
    name: string;
    label: string;
}