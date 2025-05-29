import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sos-settings',
    standalone: true,
  imports: [CommonModule],
  templateUrl: './sos-settings.component.html',
  styleUrls: ['./sos-settings.component.css']
})
export class SosSettingsComponent {
    constructor(private router: Router) {}

}
