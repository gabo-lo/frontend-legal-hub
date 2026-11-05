import { Component, input } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-legal-area-card',
  imports: [RouterLink, MatRippleModule, MatIconModule],
  templateUrl: './legal-area-card.html',
  styleUrl: './legal-area-card.scss',
})
export class LegalAreaCard {
  readonly title = input.required<string>();
  readonly icon = input.required<string>();
  readonly subtitle = input.required<string>();
  readonly route = input.required<string>();
  readonly featured = input<boolean>(false);
  readonly badge = input<string>();
}
