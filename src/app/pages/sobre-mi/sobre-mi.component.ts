import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * Sección "Sobre mí": presentación personal del desarrollador,
 * incluyendo experiencia relevante y objetivos profesionales.
 */
@Component({
  selector: 'app-sobre-mi',
  imports: [],
  templateUrl: './sobre-mi.component.html',
  styleUrl: './sobre-mi.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SobreMiComponent {}

