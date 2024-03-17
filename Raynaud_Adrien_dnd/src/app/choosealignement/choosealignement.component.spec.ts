import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosealignementComponent } from './choosealignement.component';

describe('ChoosealignementComponent', () => {
  let component: ChoosealignementComponent;
  let fixture: ComponentFixture<ChoosealignementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoosealignementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChoosealignementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
