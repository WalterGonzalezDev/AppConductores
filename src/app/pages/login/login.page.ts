import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {
  credentials = {
    email: '', password: ''
  };

  constructor( private apiService: ApiService, private router: Router) {}

  login(){
    this.apiService.login(this.credentials).subscribe((response) => {
      console.log(response);
      this.router.navigate(['/home']);
    });
  }

  ngOnInit() {
  }

}
