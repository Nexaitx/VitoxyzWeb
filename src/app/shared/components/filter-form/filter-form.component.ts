import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-filter-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatSelectModule, MatInputModule],
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.css']
})
export class FilterFormComponent {
  @Input() form!: FormGroup;

  genders = ['Male', 'Female', 'Other'];
  experienceLevels = ['1-3 years', '3-5 years', '5+ years'];
  specializations = ['Elderly Care', 'Post-Surgical', 'Pediatric'];
  languages = ['English', 'Spanish', 'Hindi'];
}