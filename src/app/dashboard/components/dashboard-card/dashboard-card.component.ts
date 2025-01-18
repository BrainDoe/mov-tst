import { Component, Input } from '@angular/core';
import { CardData } from '../dashboard-main-area/dashboard-main-area.component';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrl: './dashboard-card.component.scss',
})
export class DashboardCardComponent {
  @Input({ required: true }) cardData!: CardData;

  // Method to dynamically determine the background color
  getProgressColor(progressValue: number): string {
    return progressValue < 50 ? '#F3CE45' : '#489F73';
  }
}
