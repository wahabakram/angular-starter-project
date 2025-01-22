import { Component, inject } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { EnvironmentService } from '@core/services/environment.service';
import { LayoutService } from '@core/services/layout.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbar, MatIcon],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private readonly _environmentService = inject(EnvironmentService);

  public layoutService = inject(LayoutService);

  pageTitle = this._environmentService.getValue('pageTitle');
  isSidenavHidden = true;
}
