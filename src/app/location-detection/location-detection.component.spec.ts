import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationDetectionComponent } from './location-detection.component';

describe('LocationDetectionComponent', () => {
  let component: LocationDetectionComponent;
  let fixture: ComponentFixture<LocationDetectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationDetectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
