import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SosSettingsComponent } from './sos-settings.component';

describe('SosSettingsComponent', () => {
  let component: SosSettingsComponent;
  let fixture: ComponentFixture<SosSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SosSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SosSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
