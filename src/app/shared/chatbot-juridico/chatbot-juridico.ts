import { CommonModule } from '@angular/common';
import { AfterViewChecked, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Mensaje {
  tipo: 'usuario' | 'asistente';
  contenido: string;
  hora: Date;
}

@Component({
  selector: 'app-chatbot-juridico',
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot-juridico.html',
  styleUrl: './chatbot-juridico.scss',
})
export class ChatbotJuridicoComponent implements AfterViewChecked, OnDestroy {
  abierto = false;

  pregunta = '';

  escribiendo = false;

  mensajes: Mensaje[] = [
    {
      tipo: 'asistente',
      contenido:
        '¡Hola! Soy tu Asistente Jurídico Virtual. Puedo ayudarte a estudiar y comprender diferentes temas del Derecho. ¿Qué te gustaría consultar?',
      hora: new Date(),
    },
  ];

  @ViewChild('listaMensajes') private listaMensajes?: ElementRef<HTMLElement>;
  @ViewChild('inputPregunta') private inputPregunta?: ElementRef<HTMLInputElement>;

  private temporizador?: ReturnType<typeof setTimeout>;
  private debeDesplazar = false;
  private debeEnfocar = false;

  abrirChat(): void {
    this.abierto = !this.abierto;

    if (this.abierto) {
      this.debeEnfocar = true;
      this.debeDesplazar = true;
    }
  }

  enviarMensaje(): void {
    const texto = this.pregunta.trim();

    if (!texto || this.escribiendo) {
      return;
    }

    this.mensajes.push({
      tipo: 'usuario',
      contenido: texto,
      hora: new Date(),
    });

    this.pregunta = '';
    this.escribiendo = true;
    this.debeDesplazar = true;

    // Respuesta temporal para probar la interfaz.
    this.temporizador = setTimeout(() => {
      this.mensajes.push({
        tipo: 'asistente',
        contenido:
          'Gracias por tu consulta. En este momento estoy preparando mi conexión con la biblioteca de documentos jurídicos para proporcionarte respuestas fundamentadas.',
        hora: new Date(),
      });

      this.escribiendo = false;
      this.debeDesplazar = true;
      this.temporizador = undefined;
    }, 1000);
  }

  ngAfterViewChecked(): void {
    if (this.debeEnfocar && this.inputPregunta) {
      this.inputPregunta.nativeElement.focus();
      this.debeEnfocar = false;
    }

    if (this.debeDesplazar && this.listaMensajes) {
      const lista = this.listaMensajes.nativeElement;
      lista.scrollTop = lista.scrollHeight;
      this.debeDesplazar = false;
    }
  }

  ngOnDestroy(): void {
    if (this.temporizador) {
      clearTimeout(this.temporizador);
    }
  }
}
