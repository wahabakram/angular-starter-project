import { Subscription, timer } from 'rxjs';
import { map, take } from 'rxjs/operators';

import {
  booleanAttribute,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  HostBinding,
  inject,
  input,
  OnInit
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatProgressBar } from '@angular/material/progress-bar';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-page-loading-bar',
  standalone: true,
  imports: [MatProgressBar],
  templateUrl: './page-loading-bar.component.html',
  styleUrl: './page-loading-bar.component.scss',
  host: {
    class: 'page-loading-bar'
  }
})
export class PageLoadingBarComponent implements OnInit {
  @HostBinding('class.is-fixed') fixed = input(false, {
    transform: booleanAttribute
  });
  @HostBinding('class.is-visible') protected visible = false;
  protected value = 0;

  private readonly _router = inject(Router);
  private readonly _destroyRef = inject(DestroyRef);
  private readonly _cdr = inject(ChangeDetectorRef);

  private _subscription?: Subscription;

  ngOnInit(): void {
    this._router.events.pipe(takeUntilDestroyed(this._destroyRef)).subscribe((event) => {
      if (event instanceof NavigationStart) {
        this._start();
      }

      if (event instanceof NavigationError || event instanceof NavigationEnd || event instanceof NavigationCancel) {
        this._finish();
      }
    });
  }

  private _start(): void {
    this._subscription?.unsubscribe();
    this.visible = false;
    this._subscription = timer(0, 250)
      .pipe(
        takeUntilDestroyed(this._destroyRef),
        take(6),
        map((_result) => {
          const min = (_result + 1) * 25 - 25;
          const max = (_result + 1) * 25;
          const loading = this._getRandom(min, max);

          return loading < 100 ? loading : 100;
        })
      )
      .subscribe(
        (_result) => {
          this.value = _result;
          this._cdr.markForCheck();
        },
        (_) => {
          console.log('_', _);
        },
        () => {
          this.visible = false;
          this._cdr.markForCheck();
        }
      );
    this.visible = true;
    this.value = 0;
  }

  private _finish(): void {
    if (this.value === 100) {
      this.visible = false;
      this._subscription?.unsubscribe();
    }
  }

  private _getRandom(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
