import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComIndexComponent } from './com-index.component';

describe('ComIndexComponent', () => {
  let component: ComIndexComponent;
  let fixture: ComponentFixture<ComIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
