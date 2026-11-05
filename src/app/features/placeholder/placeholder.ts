import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-placeholder',
  imports: [RouterLink, MatIconModule],
  templateUrl: './placeholder.html',
  styleUrl: './placeholder.scss',
})
export class Placeholder {
  readonly title = input<string>('Próximamente');
  readonly icon = input<string>('construction');
}
