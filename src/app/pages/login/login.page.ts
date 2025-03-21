import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  credentials = { email: '', password: '' };

  constructor(private apiService: ApiService, private router: Router) {}

  login() {
    this.apiService.login(this.credentials).subscribe(
      (response) => {
        console.log('Login exitoso', response);
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Error en el login', error);
      }
    );
  }
}