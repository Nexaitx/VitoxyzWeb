import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseDetailsComponent } from './nurse-details.component';

describe('NurseDetailsComponent', () => {
  let component: NurseDetailsComponent;
  let fixture: ComponentFixture<NurseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NurseDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NurseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
