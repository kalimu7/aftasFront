import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboradComponent } from './admin-dashborad.component';

describe('AdminDashboradComponent', () => {
  let component: AdminDashboradComponent;
  let fixture: ComponentFixture<AdminDashboradComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDashboradComponent]
    });
    fixture = TestBed.createComponent(AdminDashboradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
