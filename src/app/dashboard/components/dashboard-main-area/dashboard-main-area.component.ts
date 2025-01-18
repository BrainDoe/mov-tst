import { Component, OnInit } from '@angular/core';

export interface CardData {
  amount: string;
  role: string;
  totalAmount: string;
  startDate: Date | string;
  endDate: Date | string;
  skillSet: string[];
  progressValue: number;
}

@Component({
  selector: 'app-dashboard-main-area',
  templateUrl: './dashboard-main-area.component.html',
  styleUrl: './dashboard-main-area.component.scss',
})
export class DashboardMainAreaComponent implements OnInit {
  cardData: CardData[] = [
    {
      amount: '520,000',
      role: 'Product Designer',
      totalAmount: '208,000',
      startDate: 'May, 2024',
      endDate: 'December, 2024',
      skillSet: [
        'UI/UX Designer',
        'Visual Designer',
        'Design Lead',
        '7+ years experience',
      ],
      progressValue: 60,
    },
    {
      amount: '120,000',
      role: 'Human Resources',
      totalAmount: '34,500',
      startDate: 'May, 2024',
      endDate: 'December, 2024',
      skillSet: ['Office Manager', 'Human Resources'],
      progressValue: 30,
    },
  ];

  ngOnInit(): void {}
}
