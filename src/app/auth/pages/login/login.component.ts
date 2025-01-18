import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email = '';
  isEmailValid = false;
  activeTab: 'signin' | 'signup' = 'signin';

  loginFormGroup!: FormGroup;
  isSubmitted = false;
  isLoading = false;
  authError = false;
  errorMessage = 'Something went wrong. Please try again later';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  switchTab(tab: 'signin' | 'signup') {
    this.activeTab = tab;
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.loginFormGroup = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
    });
  }

  get loginForm() {
    return this.loginFormGroup.controls;
  }

  checkInputValue(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.value) {
      input.classList.add('has-value');
    } else {
      input.classList.remove('has-value');
    }
  }

  onSubmit() {
    this.isSubmitted = true;
    this.isLoading = true;
    if (this.loginFormGroup.invalid) return;

    const email = this.loginForm['email'].value;

    this.authService.validateUser(email).subscribe({
      next: (res) => {
        if (res !== false) {
          console.log({ login: res });
          this.isSubmitted = true;
          this.isLoading = false;

          // Update the BehaviorSubject with the email
          this.authService.setEmail(email);

          // Navigate to the dashboard
          this.router.navigate(['/dashboard/main']);
        } else {
          this.authError = true;
          this.isLoading = false;
          this.errorMessage =
            'Invalid user credential. Please provide your official email address.';
        }
      },
      error: (error) => {
        this.isLoading = false;
        console.log(error);
      },
    });
  }
}
