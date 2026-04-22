import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * Sección de contacto.
 * Contiene un formulario conectado a Formspree para recibir mensajes directos.
 */
@Component({
  selector: 'app-contactame',
  imports: [],
  templateUrl: './contactame.component.html',
  styleUrl: './contactame.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactameComponent {}

