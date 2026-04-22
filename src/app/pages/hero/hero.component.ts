import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * Sección hero: presentación principal con foto, título y enlaces a redes sociales.
 * Es la primera sección visible del portafolio.
 */
@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {}
