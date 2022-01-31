import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsampleComponent } from './formsample.component';

describe('FormsampleComponent', () => {
  let component: FormsampleComponent;
  let fixture: ComponentFixture<FormsampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
