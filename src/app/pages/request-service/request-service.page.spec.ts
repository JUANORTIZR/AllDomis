import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RequestServicePage } from './request-service.page';

describe('RequestServicePage', () => {
  let component: RequestServicePage;
  let fixture: ComponentFixture<RequestServicePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
