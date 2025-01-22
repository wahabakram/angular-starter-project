import { Component, DestroyRef, inject, OnInit, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavContainer, MatSidenavModule } from '@angular/material/sidenav';
import { MatNavList } from '@angular/material/list';
import { LayoutService } from '@core/services/layout.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatSidenav, MatSidenavContainer, MatNavList, MatSidenavModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent implements OnInit {
  private readonly _destroyRef = inject(DestroyRef);
  private readonly _layoutService = inject(LayoutService);

  @ViewChild('snav') sideNav!: MatSidenav;

  ngOnInit(): void {
    this._layoutService.sidenav.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => {
      this.sideNav.toggle();
    });
  }
}
