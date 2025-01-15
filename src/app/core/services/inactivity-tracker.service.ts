import { debounceTime, fromEvent, merge, Observable } from 'rxjs';

import { DestroyRef, EventEmitter, inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class InactivityTrackerService {
  private readonly _destroyRef = inject(DestroyRef);
  private readonly _document = inject(DOCUMENT);
  private _interval = 10000 * 60; // 5 minutes
  private _timeout?: ReturnType<typeof setTimeout>;
  private readonly _interactionEvents$ = merge(
    fromEvent(this._document, 'click'),
    fromEvent(this._document, 'keydown'),
    fromEvent(this._document, 'mousemove'),
    fromEvent(this._document, 'scroll')
  ).pipe(debounceTime(250));
  private readonly _noInteraction = new EventEmitter<void>();

  setupInactivityTimer(interval?: number): Observable<void> {
    if (interval) {
      this._interval = interval;
    }

    this._setupTimer();
    this._interactionEvents$.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => {
      this._setupTimer();
    });

    return this._noInteraction.pipe(takeUntilDestroyed(this._destroyRef));
  }

  reset(): void {
    this._setupTimer();
  }

  private _setupTimer(): void {
    clearTimeout(this._timeout);
    this._timeout = setTimeout(() => {
      this._noInteraction.emit();
    }, this._interval);
  }
}
