import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ CommonModule,
    FormsModule,
      MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
     MatIconModule,
    MatButtonModule, ReactiveFormsModule
  ],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  accountForm: any;
   generatedCaptcha: string = '';

   ngOnInit(): void {
    this.generatedCaptcha = this.generateCaptcha();
  }

  generateCaptcha(): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  refreshCaptcha(): void {
    this.generatedCaptcha = this.generateCaptcha();
  }


  constructor(private fb: FormBuilder, private router: Router) {
    this.accountForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      country: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      countryCode: ['+91'],
      phone: ['', Validators.required],
      city: ['', Validators.required],
      zip: [''],
      address: [''],
      skypeId: [''],
      ibReferralCode: [''],
      isIB: [false],
      companyName: [''],
      experience: [''],
      volume: [''],
      clients: [''],
      captcha: ['', Validators.required]
    });
  }

    onIBToggle() {
    const isIB = this.accountForm.get('isIB')?.value;
    const fields = ['companyName', 'experience', 'volume', 'clients'];
    fields.forEach(field => {
      const control = this.accountForm.get(field);
      if (isIB) {
        control?.setValidators([Validators.required]);
      } else {
        control?.clearValidators();
      }
      control?.updateValueAndValidity();
    });
  }

 

  onSubmit(): void {
  const enteredCaptcha = this.accountForm.get('captcha')?.value;

  if (!enteredCaptcha || enteredCaptcha !== this.generatedCaptcha) {
    alert('Invalid captcha. Please try again.');
    this.refreshCaptcha();
    this.accountForm.get('captcha')?.reset();
    return;
  }

  if (this.accountForm.valid) {

    this.router.navigate(['/home']);
  }
}

}

 

