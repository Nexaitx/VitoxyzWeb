import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NurseService } from '../../services/nurse.service';
import { BookingService } from '../../services/booking.service';
import { FilterFormComponent } from '../../shared/components/filter-form/filter-form.component';

@Component({
  selector: 'app-nurse-selection',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FilterFormComponent],
  templateUrl: './nurse-selection.component.html',
  styleUrls: ['./nurse-selection.component.css']
})
export class NurseSelectionComponent {
  filterForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private nurseService: NurseService,
    private bookingService: BookingService,
    private router: Router
  ) {
    this.filterForm = this.fb.group({
      gender: [''],
      experience: [''],
      specialization: [''],
      language: [''],
      location: ['', Validators.required],
      timeSlot: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.filterForm.valid) {
      this.nurseService.findMatchingNurses(this.filterForm.value).subscribe({
        next: (nurses) => {
          if (nurses.length > 0) {
            this.bookingService.createBooking(this.filterForm.value).subscribe({
              next: (bookingId) => {
                this.router.navigate(['/booking-confirmation', { bookingId }]);
              },
              error: (err) => console.error('Booking failed', err)
            });
          } else {
            alert('No nurses available for the selected criteria.');
          }
        },
        error: (err) => console.error('Error finding nurses', err)
      });
    }
  }
}