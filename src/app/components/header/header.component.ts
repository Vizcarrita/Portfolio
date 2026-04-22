import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * Componente de navegación fija en la parte superior de la página.
 *
 * Maneja el scroll suave hacia las distintas secciones del portafolio.
 * Usa ChangeDetectionStrategy.OnPush para optimizar el rendimiento.
 */
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {

  /**
   * Realiza un scroll suave hacia la sección indicada por su ID.
   *
   * En móvil (< 768px) se desplaza al inicio del elemento,
   * en desktop se centra en pantalla para una mejor experiencia visual.
   *
   * @param sectionId - El `id` del elemento HTML de destino
   */
  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);

    if (section) {
      const block: ScrollLogicalPosition = window.innerWidth < 768 ? 'start' : 'center';
      section.scrollIntoView({ behavior: 'smooth', block });
    }
  }
}

