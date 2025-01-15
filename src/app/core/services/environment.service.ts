import { inject, Injectable, InjectionToken } from '@angular/core';

export const ENVIRONMENT = new InjectionToken<Record<string, unknown>>('ENVIRONMENT');

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  private readonly _environment =
    inject(ENVIRONMENT, {
      optional: true
    }) || {};

  getValue(key: string, defaultValue?: unknown): unknown {
    return this._environment[key] || defaultValue;
  }
}
