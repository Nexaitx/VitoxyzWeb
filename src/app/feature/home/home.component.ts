import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialog } from '@angular/material/dialog';

import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { LoginComponent } from '../../authorization/login/login.component';



@Component({
  selector: 'app-home',
    standalone: true,
   imports: [ CommonModule,
    FormsModule,
      MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatBadgeModule,
    MatMenuModule,
    MatTabsModule,
    MatButtonModule, ReactiveFormsModule
  ],


  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'VitoxyzWeb';


  constructor(private router: Router,private dialog: MatDialog) {}

onTabChange(index: number): void {
  switch (index) {
    case 0:
      this.goToMedicines();
      break;
    case 1:
      this.goToLabTests();
      break;
    case 2:
      this.goToConsultDoctors();
      break;
    case 3:
      this.goToCancerCare();
      break;
    case 4:
      this.goToAyurveda();
      break;
    case 5:
      this.goToPartnerships();
      break;
    case 6:
      this.goToCarePlan();
      break;
  }
}



    goToSignup(): void {
    this.router.navigate(['/signup']);
    }
     goToLogin(): void {
    // this.router.navigate(['/login']);
    this.dialog.open(LoginComponent, {
    width: '800px',  // You can adjust
    height: 'auto',
    panelClass: 'custom-login-dialog' // Optional: for styling
  });
    }
     
  goToMedicines(): void {
    this.router.navigate(['/medicines']);
  }
  goToLabTests(): void {
  this.router.navigate(['/lab-tests']);
}
goToConsultDoctors(): void {
  this.router.navigate(['/consult-doctors']);
}
goToCancerCare(): void {
  this.router.navigate(['/cancer-care']);
}
goToAyurveda(): void {
  this.router.navigate(['/ayurveda']);
}
goToPartnerships(): void {
  this.router.navigate(['/partnerships']);
}
goToCarePlan(): void {
  this.router.navigate(['/care-plan']);
}




}

