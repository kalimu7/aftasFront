import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoduimMemberComponent } from './poduim-member.component';

describe('PoduimMemberComponent', () => {
  let component: PoduimMemberComponent;
  let fixture: ComponentFixture<PoduimMemberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoduimMemberComponent]
    });
    fixture = TestBed.createComponent(PoduimMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
