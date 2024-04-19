import { Component } from '@angular/core';

export const Proyectos = [
  {
    title:'Proyecto 1',
    description:'Descripcion del proyecto 1',
    link:'#',
    github:'#',
    image:'https://via.placeholder.com/300x200',
    tags:['HTML','CSS','JS']
  }
]

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {

}
