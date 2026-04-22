/**
 * Modelo de datos que representa un proyecto del portafolio.
 *
 * Usar esta interfaz garantiza tipado fuerte y consistencia
 * en todos los lugares donde se consuman los datos de proyectos.
 */
export interface Proyecto {
  /** Título del proyecto (debe ser único para el tracking de @for) */
  titulo: string;

  /** Empresa o cliente para el que fue desarrollado (opcional) */
  empresa?: string;

  /** Descripción breve del propósito y características del proyecto */
  descripcion: string;

  /** Ruta a la imagen de captura de pantalla del proyecto */
  imagen: string;

  /** Texto alternativo descriptivo para la imagen (accesibilidad y SEO) */
  alt: string;

  /** Lista de tecnologías o frameworks utilizados */
  tags: string[];

  /** URL del proyecto en producción (opcional) */
  link?: string;

  /** URL del repositorio en GitHub (opcional) */
  github?: string;
}
