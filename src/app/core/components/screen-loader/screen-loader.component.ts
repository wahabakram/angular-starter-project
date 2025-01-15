import { Component, effect, ElementRef, inject, Input, viewChild } from '@angular/core';
import { GlobalState, GlobalStore } from '@core/global.state';
import { getState } from '@ngrx/signals';

@Component({
  selector: 'app-screen-loader',
  standalone: true,
  imports: [],
  templateUrl: './screen-loader.component.html',
  styleUrl: './screen-loader.component.scss'
})
export class ScreenLoaderComponent {
  @Input() loadingText?: string;

  readonly _loaderElement = viewChild.required<ElementRef>('loader');
  private readonly _globalStore = inject(GlobalStore);

  constructor() {
    const initialState = getState<GlobalState>(this._globalStore);
    effect(() => {
      const currentState = getState<GlobalState>(this._globalStore);

      if (initialState.screenLoading === currentState.screenLoading) {
        return;
      }

      if (currentState.screenLoading) {
        this._show();
      } else {
        this._hide();
      }
    });
  }

  private _show(): void {
    const loaderEl = this._loaderElement().nativeElement as HTMLElement;
    loaderEl.style['visibility'] = 'visible';
    loaderEl.style['zIndex'] = '9999999';
  }

  private _hide(): void {
    const loaderEl = this._loaderElement().nativeElement as HTMLElement;
    loaderEl.style['visibility'] = 'hidden';
    loaderEl.style['zIndex'] = '-9999999';
  }
}
