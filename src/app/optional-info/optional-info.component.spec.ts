import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionalInfoComponent } from './optional-info.component';

describe('OptionalInfoComponent', () => {
  let component: OptionalInfoComponent;
  let fixture: ComponentFixture<OptionalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionalInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
