import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatTooltipModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  descargarArchivo(){
    const link = document.createElement('a');
    link.href = "/assets/cv.pdf";
    link.download = "CV_Alejandro_Jorba.pdf";
    link.click();
  }
}
