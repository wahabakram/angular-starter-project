import { inject, Injectable } from '@angular/core';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { GlobalStore } from '../global.state';

@Injectable({
  providedIn: 'root'
})
export class PageTitleStrategyService extends TitleStrategy {
  private readonly _title = inject(Title);
  private readonly _globalStore = inject(GlobalStore);

  override updateTitle(routerState: RouterStateSnapshot): void {
    const title = this.buildTitle(routerState);

    if (title !== undefined) {
      this._title.setTitle(`${title} | ${this._globalStore.pageTitle()}`);
    } else {
      this._title.setTitle(this._globalStore.pageTitle());
    }
  }
}
