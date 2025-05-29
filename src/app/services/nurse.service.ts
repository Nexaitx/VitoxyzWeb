import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NurseService {
  findMatchingNurses(filters: any): Observable<any[]> {
    // Mock: Replace with API call to match nurses within 3km
    const mockNurses = [
      { id: 1, name: 'Nurse 1', specialization: 'Elderly Care', ratings: 4.5 }
    ];
    return of(mockNurses);
  }
}