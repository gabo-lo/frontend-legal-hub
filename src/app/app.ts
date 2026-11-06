import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatbotJuridicoComponent } from './shared/chatbot-juridico/chatbot-juridico';
@Component({
  imports: [RouterOutlet, ChatbotJuridicoComponent],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {}
