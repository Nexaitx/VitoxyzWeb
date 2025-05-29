import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PaymentService {
  processPayment(bookingId: string): Observable<void> {
    // Mock: Replace with payment gateway integration
    return of(undefined);
  }
}