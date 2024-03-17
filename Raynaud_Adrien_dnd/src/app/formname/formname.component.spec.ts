import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormnameComponent } from './formname.component';

describe('FormnameComponent', () => {
  let component: FormnameComponent;
  let fixture: ComponentFixture<FormnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormnameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
