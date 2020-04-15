import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MazarsRegistrationComponent } from './mazars-registration.component';

describe('MazarsRegistrationComponent', () => {
  let component: MazarsRegistrationComponent;
  let fixture: ComponentFixture<MazarsRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MazarsRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MazarsRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
