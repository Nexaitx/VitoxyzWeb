import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../../services/booking.service';
import { PaymentService } from '../../services/payment.service';
import { NotificationService } from '../../services/notification.service';
import { interval, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-booking-confirmation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-confirmation.component.html',
  styleUrls: ['./booking-confirmation.component.css']
})
export class BookingConfirmationComponent implements OnInit, OnDestroy {
  bookingId: string | null = null;
  nurseAccepted = false;
  paymentTimer = 600; // 10 minutes in seconds
  private destroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookingService: BookingService,
    private paymentService: PaymentService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.bookingId = this.route.snapshot.paramMap.get('bookingId');
    if (this.bookingId) {
      this.bookingService.checkNurseAcceptance(this.bookingId).subscribe({
        next: (accepted) => {
          this.nurseAccepted = accepted;
          if (accepted) {
            this.startPaymentTimer();
            this.notificationService.notifyClient('Nurse has accepted the duty.');
          } else {
            this.notificationService.notifyClient('Waiting for nurse acceptance...');
          }
        }
      });
    }
  }

  startPaymentTimer() {
    interval(1000).pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        this.paymentTimer--;
        if (this.paymentTimer <= 0) {
          this.bookingService.cancelBooking(this.bookingId!).subscribe(() => {
            this.notificationService.notifyNurse('Booking cancelled: Payment not completed.');
            this.router.navigate(['/home']);
          });
        }
      }
    });
  }

  makePayment() {
    this.paymentService.processPayment(this.bookingId!).subscribe({
      next: () => {
        this.bookingService.confirmBooking(this.bookingId!).subscribe(() => {
          this.notificationService.notifyNurse('Booking confirmed.');
          this.router.navigate(['/nurse-details', { bookingId: this.bookingId }]);
        });
      },
      error: () => {
        this.notificationService.notifyClient('Payment failed.');
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}