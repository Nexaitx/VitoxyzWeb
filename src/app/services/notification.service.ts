import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  notifyClient(message: string): Observable<void> {
    // Mock: Replace with real notification (e.g., in-app, email)
    console.log('Client Notification:', message);
    return of(undefined);
  }

  notifyNurse(message: string): Observable<void> {
    // Mock: Replace with nurse app notification
    console.log('Nurse Notification:', message);
    return of(undefined);
  }
}