import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDetatialComponent } from './patient-detatial.component';

describe('PatientDetatialComponent', () => {
  let component: PatientDetatialComponent;
  let fixture: ComponentFixture<PatientDetatialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientDetatialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientDetatialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
