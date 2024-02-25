import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionAdherentComponent } from './competition-adherent.component';

describe('CompetitionAdherentComponent', () => {
  let component: CompetitionAdherentComponent;
  let fixture: ComponentFixture<CompetitionAdherentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompetitionAdherentComponent]
    });
    fixture = TestBed.createComponent(CompetitionAdherentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
