import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  readonly sidenav = new EventEmitter<{ hidden: boolean }>();

  toggleSidenav(isHidden: boolean): void {
    this.sidenav.emit({
      hidden: !isHidden
    });
  }
}
