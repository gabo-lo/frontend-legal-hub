import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLink, MatButtonModule, MatIconModule, MatTooltipModule],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {}
