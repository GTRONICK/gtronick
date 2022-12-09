import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchStepsComponent } from './arch-steps.component';

describe('ArchStepsComponent', () => {
  let component: ArchStepsComponent;
  let fixture: ComponentFixture<ArchStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchStepsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
