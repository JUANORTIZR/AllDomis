import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActiveAccountPage } from './active-account.page';

describe('ActiveAccountPage', () => {
  let component: ActiveAccountPage;
  let fixture: ComponentFixture<ActiveAccountPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
