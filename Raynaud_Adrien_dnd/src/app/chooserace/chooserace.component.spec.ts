import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseraceComponent } from './chooserace.component';

describe('ChooseraceComponent', () => {
  let component: ChooseraceComponent;
  let fixture: ComponentFixture<ChooseraceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseraceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChooseraceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
