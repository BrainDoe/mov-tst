import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrl: './dashboard-sidebar.component.scss',
})
export class DashboardSidebarComponent {
  menuItems = [
    { label: 'General', icon: 'home' },
    { label: 'Members', icon: 'group' },
    { label: 'Hired Experts', icon: 'person' },
    { label: 'Budget', icon: 'attach_money' },
    { label: 'Analytics', icon: 'analytics' },
  ];

  activeIndex = 0; // Default the first menu item to active

  setActiveMenu(index: number): void {
    this.activeIndex = index;
  }
}
