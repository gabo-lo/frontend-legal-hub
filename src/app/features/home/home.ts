import { Component } from '@angular/core';
import { HOME_CARDS } from '@core/legal';
import { LegalAreaCard } from '@shared';

@Component({
  selector: 'app-home',
  imports: [LegalAreaCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly cards = HOME_CARDS;
}
