import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsreactiveComponent } from './formsreactive.component';

describe('FormsreactiveComponent', () => {
  let component: FormsreactiveComponent;
  let fixture: ComponentFixture<FormsreactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsreactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsreactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
