import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-nurse-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nurse-details.component.html',
  styleUrls: ['./nurse-details.component.css']
})
export class NurseDetailsComponent implements OnInit {
  nurse: any = null;

  constructor(
    private route: ActivatedRoute,
    private bookingService: BookingService
  ) {}

  ngOnInit() {
    const bookingId = this.route.snapshot.paramMap.get('bookingId');
    if (bookingId) {
      this.bookingService.getNurseDetails(bookingId).subscribe({
        next: (nurse: any) => {
          this.nurse = nurse;
        },
        error: (err: any) => console.error('Error fetching nurse details', err)
      });
    }
  }
}