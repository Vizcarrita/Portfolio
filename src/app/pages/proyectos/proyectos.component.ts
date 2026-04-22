import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Proyecto } from '../../models/proyecto.model';

/**
 * Sección de proyectos destacados del portafolio.
 *
 * Los datos están centralizados en la clase como propiedad tipada,
 * lo que facilita su mantenimiento y extensión futura (p. ej., desde una API).
 */
@Component({
  selector: 'app-proyectos',
  imports: [],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProyectosComponent {

  /**
   * Lista de proyectos a renderizar en el portafolio.
   * Marcado como `readonly` porque los datos no cambian en tiempo de ejecución.
   */
  readonly proyectos: Proyecto[] = [
    {
      titulo: 'Dashboard ENAEX',
      empresa: 'ENAEX',
      descripcion: 'Proyecto realizado para la empresa ENAEX, con el fin de implementar un sistema de gestión de pesos para cajas de producción.',
      imagen: '/assets/img/enaex.webp',
      alt: 'Captura de pantalla del dashboard de gestión de pesos para ENAEX',
      tags: ['Angular', 'Tailwind', 'NodeJS', 'MongoDB'],
    },
    {
      titulo: 'Dashboard Ecopetro',
      empresa: 'Ecopetro',
      descripcion: 'Proyecto realizado para la empresa Ecopetro: implementación de sistema para la gestión de combustible y rutas de viajes para los conductores.',
      imagen: '/assets/img/ecopetro.webp',
      alt: 'Captura de pantalla del sistema de gestión de combustible para Ecopetro',
      tags: ['Angular', 'PrimeNg'],
    },
    {
      titulo: 'E-Commerce',
      descripcion: 'Proyecto personal aplicando todo lo aprendido con Angular y NodeJS, responsivo y con sistema de autenticación mediante el uso de JWT.',
      imagen: '/assets/img/e-commerce.webp',
      alt: 'Captura de pantalla de la tienda e-commerce con autenticación JWT',
      tags: ['Angular', 'Tailwind', 'NodeJS', 'MongoDB'],
    },
  ];
}

