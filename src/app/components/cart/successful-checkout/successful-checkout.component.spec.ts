import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulCheckoutComponent } from './successful-checkout.component';

describe('SuccessfulCheckoutComponent', () => {
  let component: SuccessfulCheckoutComponent;
  let fixture: ComponentFixture<SuccessfulCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessfulCheckoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessfulCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
