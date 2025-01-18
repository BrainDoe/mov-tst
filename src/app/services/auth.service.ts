import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  delay,
  filter,
  map,
  Observable,
  throwError,
} from 'rxjs';

export interface User {
  id: 1;
  email: 'george.bluth@reqres.in';
  first_name: 'George';
  last_name: 'Bluth';
  avatar: 'https://reqres.in/img/faces/1-image.jpg';
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'https://reqres.in/api/users';
  private emailSubject = new BehaviorSubject<string | null>(null);
  email$ = this.emailSubject.asObservable();

  constructor(private http: HttpClient) {}

  setEmail(email: string): void {
    // Update the BehaviorSubject value
    this.emailSubject.next(email);
  }

  getEmail(): string | null {
    // Get the current value of BehaviorSubject
    return this.emailSubject.getValue();
  }

  validateUser(email: string): Observable<User | boolean> {
    return this.http.get<any>(`${this.url}`).pipe(
      map((response) => {
        const matchedUser = response?.data?.find(
          (user: any) => user.email === email
        );
        return matchedUser || false; // Return the matched user or false
      }),
      catchError((error) => {
        console.error('Error fetching users:', error);
        return throwError(() => new Error('Failed to validate user email.'));
      }),
      delay(3000)
    );
  }

  // Get all users
  getUsers(): Observable<User[]> {
    return this.http.get<any>(`${this.url}`).pipe(map((user) => user['data']));
  }

  // Get all users
  getUser(id: string): Observable<User> {
    return this.http
      .get<any>(`${this.url}/${id}`)
      .pipe(map((user) => user['data']));
  }
}
