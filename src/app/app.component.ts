import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './pages/hero/hero.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { HabilidadesComponent } from './pages/habilidades/habilidades.component';
import { ContactameComponent } from './pages/contactame/contactame.component';
import { SobreMiComponent } from './pages/sobre-mi/sobre-mi.component';

/**
 * Componente raíz de la aplicación (shell principal).
 *
 * Actúa como contenedor que orquesta las secciones del portafolio.
 * La lógica de navegación (scroll suave) reside en HeaderComponent,
 * siguiendo el principio de responsabilidad única.
 */
@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HeroComponent,
    ProyectosComponent,
    HabilidadesComponent,
    ContactameComponent,
    SobreMiComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // OnPush reduce re-renders innecesarios (recomendado en modo zoneless)
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}

