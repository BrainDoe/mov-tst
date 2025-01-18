import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  email: string = '';
  private subscription: Subscription | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Subscribe to the email observable
    this.subscription = this.authService.email$.subscribe((email) => {
      this.email = email as string;
    });

    // Users
    this._getUsers();
  }

  private _getUsers() {
    this.authService.getUsers().subscribe((users) => {
      console.log(users);
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
