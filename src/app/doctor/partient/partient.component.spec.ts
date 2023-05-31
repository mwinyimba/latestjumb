import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartientComponent } from './partient.component';

describe('PartientComponent', () => {
  let component: PartientComponent;
  let fixture: ComponentFixture<PartientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
