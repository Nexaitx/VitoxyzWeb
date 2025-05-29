import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseSelectionComponent } from './nurse-selection.component';

describe('NurseSelectionComponent', () => {
  let component: NurseSelectionComponent;
  let fixture: ComponentFixture<NurseSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NurseSelectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NurseSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
