import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancerCareComponent } from './cancer-care.component';

describe('CancerCareComponent', () => {
  let component: CancerCareComponent;
  let fixture: ComponentFixture<CancerCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CancerCareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancerCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
