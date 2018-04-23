import { InjectionToken } from "@angular/core";
export declare const APPLICATION_CONFIG_TOKEN: InjectionToken<ApplicationConfig>;
export interface ApplicationConfig {
    name: string;
    label: string;
}
