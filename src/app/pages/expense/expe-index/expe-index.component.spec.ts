import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpeIndexComponent } from './expe-index.component';

describe('ExpeIndexComponent', () => {
  let component: ExpeIndexComponent;
  let fixture: ComponentFixture<ExpeIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpeIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpeIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
