import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComCreateComponent } from './com-create.component';

describe('ComCreateComponent', () => {
  let component: ComCreateComponent;
  let fixture: ComponentFixture<ComCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
