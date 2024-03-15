import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [MatExpansionModule, CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  expandedCFO = true;
  expandedTrasus = false;
  expandedKiltex = false;

  toggleExpansionCFO() {
    this.expandedCFO = !this.expandedCFO;
  }

  toggleExpansionTrasus() {
    this.expandedTrasus = !this.expandedTrasus;
  }

  toggleExpansionKiltex() {
    this.expandedKiltex = !this.expandedKiltex;
  }

}
