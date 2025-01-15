import { filter } from 'rxjs';

import { isPlatformBrowser } from '@angular/common';
import { afterNextRender, Component, inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { PageLoadingBarComponent } from '@core/components/page-loading-bar/page-loading-bar.component';
import { ScreenLoaderComponent } from '@core/components/screen-loader/screen-loader.component';
import { InactivityTrackerService } from '@core/services/inactivity-tracker.service';
import { ScreenLoaderService } from '@core/services/screen-loader.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ScreenLoaderComponent, PageLoadingBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  pageLoaded = signal(false);
  loadingText = signal('Application Loading');

  private readonly _platformId = inject(PLATFORM_ID);
  private readonly _inactivityTracker = inject(InactivityTrackerService);
  private readonly _router = inject(Router);
  private readonly _screenLoader = inject(ScreenLoaderService);

  constructor() {
    afterNextRender(() => {
      // Scroll a page to top if url changed
      this._router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
        window.scrollTo({
          top: 0,
          left: 0
        });
        setTimeout(() => {
          this._screenLoader.hide();
          this.pageLoaded.set(true);
        }, 3000);
      });

      this._inactivityTracker.setupInactivityTimer().subscribe(() => {
        console.log('Inactive mode has been activated!');
        this._inactivityTracker.reset();
      });
    });
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this._platformId)) {
      setTimeout(() => {
        this.loadingText.set('Initializing Modules');
      }, 1500);
    }
  }
}
