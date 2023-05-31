import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PIdComponent } from './p-id.component';

describe('PIdComponent', () => {
  let component: PIdComponent;
  let fixture: ComponentFixture<PIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
