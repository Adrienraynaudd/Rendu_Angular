import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseclasseComponent } from './chooseclasse.component';

describe('ChooseclasseComponent', () => {
  let component: ChooseclasseComponent;
  let fixture: ComponentFixture<ChooseclasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseclasseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChooseclasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
