import { Component, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
// import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule,
    FormsModule, MatDialogModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm:any

   mobileNumber: string = '';
  isHealthcareProfessional: boolean = false;
  currentSlide: number = 0;


  slides = [
    {
      // image: 'assets/images/Know-Your-Medicines.png',
      title: 'Know Your Medicines',
      description: 'View medicine information like usage, side effects, and cheaper substitutes.',
    },
    {
      // image: 'assets/slide2.png',
      title: 'Book Lab Tests',
      description: 'Sample collection from home. Save up to 80%.',
    },
    {
      // image: 'assets/slide3.png',
      title: 'Consult Doctors',
      description: 'Chat or video call with doctors anytime.',
    },
  ];




    onSubmit() {
    if (!this.mobileNumber) {
      alert('Please enter a valid mobile number.');
      return;
    }

    // You can add more validation or API calls here
    console.log('Mobile Number:', this.mobileNumber);
    console.log('Is Healthcare Professional:', this.isHealthcareProfessional);

    // Proceed to OTP logic
    alert('OTP has been sent to ' + this.mobileNumber);
  }

  
goToSignup(): void {
  this.dialogRef.close('signup'); // send result
}

closeDialog(): void {
  // if (this.dialogRef !== null) {
    this.dialogRef.close();
  // }
}





      nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

    constructor(@Optional() private dialogRef: MatDialogRef<LoginComponent>,private router: Router,private fb: FormBuilder) {
      this.loginForm = this.fb.group({
      mobileNumber: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
      isHealthcareProfessional: [false]
    });
  }
    }


