import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-dashboard-topheader',
  templateUrl: './dashboard-topheader.component.html',
  styleUrl: './dashboard-topheader.component.scss',
})
export class DashboardTopheaderComponent {
  @Input() email!: string;
}
