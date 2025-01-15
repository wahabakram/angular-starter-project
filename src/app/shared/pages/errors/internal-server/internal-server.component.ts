import { Component } from '@angular/core';
import { MatAnchor, MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-internal-server',
  standalone: true,
  imports: [MatAnchor, RouterLink, MatButton],
  templateUrl: './internal-server.component.html',
  styleUrl: './internal-server.component.scss'
})
export class InternalServerComponent {}
