import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent { 

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
