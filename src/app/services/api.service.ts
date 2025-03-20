import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://localhost:3000/api/users/';

  constructor(private http: HttpClient) {}

  // Método para login
  login(credentials: any) {
    return this.http.post(`${this.baseUrl}/login`, credentials).pipe(
      catchError((error) => {
        return throwError(() => new Error('Error en el login'));
      })
    );
  }
}