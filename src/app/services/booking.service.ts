import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BookingService {
  createBooking(filters: any): Observable<string> {
    // Mock: Replace with API call to create booking
    return of('booking123');
  }

  checkNurseAcceptance(bookingId: string): Observable<boolean> {
    // Mock: Simulate nurse acceptance within 5 minutes
    return of(true);
  }

  confirmBooking(bookingId: string): Observable<void> {
    // Mock: Confirm booking
    return of(undefined);
  }

  cancelBooking(bookingId: string): Observable<void> {
    // Mock: Cancel booking
    return of(undefined);
  }

  getNurseDetails(bookingId: string): Observable<any> {
    // Mock: Replace with API call
    return of({ name: 'Nurse 1', specialization: 'Elderly Care', ratings: 4.5 });
  }
}