import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, IonicModule], 
  template: `
    <ion-app>
      <router-outlet></router-outlet>
    </ion-app>
  `,
})
export class AppComponent {}