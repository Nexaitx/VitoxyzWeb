import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultDoctorsComponent } from './consult-doctors.component';

describe('ConsultDoctorsComponent', () => {
  let component: ConsultDoctorsComponent;
  let fixture: ComponentFixture<ConsultDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultDoctorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
