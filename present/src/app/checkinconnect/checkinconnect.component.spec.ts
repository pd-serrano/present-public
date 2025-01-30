import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinconnectComponent } from './checkinconnect.component';

describe('CheckinconnectComponent', () => {
  let component: CheckinconnectComponent;
  let fixture: ComponentFixture<CheckinconnectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckinconnectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckinconnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
