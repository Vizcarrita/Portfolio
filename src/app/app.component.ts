import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToSection(sectionId: string) {

    const section = document.getElementById(sectionId); 
  
    if(section) {
  
      const block = window.innerWidth < 768 ? 'start' : 'center';
  
      section.scrollIntoView({
        behavior: 'smooth',
        block 
      });
    }
  }
}
