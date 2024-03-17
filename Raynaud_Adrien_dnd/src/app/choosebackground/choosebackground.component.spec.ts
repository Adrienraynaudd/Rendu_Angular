import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosebackgroundComponent } from './choosebackground.component';

describe('ChoosebackgroundComponent', () => {
  let component: ChoosebackgroundComponent;
  let fixture: ComponentFixture<ChoosebackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoosebackgroundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChoosebackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
