import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  authError = false;
  errorMessage = 'Something went wrong. Please try again later';

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.isEmailValid = emailRegex.test(this.email);
  }

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

  onSubmit() {
    this.isSubmitted = true;
    if (this.loginFormGroup.invalid) return;

    const loginData = {
      email: this.loginForm['email'].value,
    };

    // this.authService.login(loginData).subscribe(data => {
    //   this.authError = false
    //   this.localStorageService.setToken(data.token)
    //   this.router.navigate(['/dashboard'])
    // }, (error: HttpErrorResponse) => {
    //   this.authError = true
    //   if(error.status !== 400) {
    //     this.errorMessage = 'Error in the server. Please try again later'
    //   }
    // })
    // this.loginFormGroup.reset();
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
}
