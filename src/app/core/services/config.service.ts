import { inject, Injectable } from '@angular/core';
import { GlobalStore } from '@core/global.state';

import { EnvironmentService } from './environment.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private readonly _envService = inject(EnvironmentService);
  private readonly _globalStore = inject(GlobalStore);

  initializeApp(): Promise<unknown> {
    return new Promise((resolve) => {
      this._globalStore.setPageTitle(this._envService.getValue('pageTitle') as string);
      resolve(true);
    });
  }
}
